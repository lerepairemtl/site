// Cloudflare Pages Function — retour de GitHub : échange le code contre un jeton
// et le remet à l'éditeur /admin (protocole de fenêtre de Decap CMS).

function page(status, payload) {
  const message = `authorization:github:${status}:${JSON.stringify(payload)}`;
  const html = `<!doctype html><meta charset="utf-8"><title>Connexion</title>
<script>
  (function () {
    var message = ${JSON.stringify(message)};
    function receive(e) {
      if (e.origin !== location.origin) return;
      window.opener.postMessage(message, e.origin);
      window.removeEventListener('message', receive, false);
    }
    window.addEventListener('message', receive, false);
    if (window.opener) window.opener.postMessage('authorizing:github', location.origin);
  })();
</script>
<p>Connexion en cours. Cette fenêtre se ferme toute seule.</p>`;
  return new Response(html, {
    status: status === 'success' ? 200 : 400,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Set-Cookie': 'lr_oauth_state=; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=0',
      'Cache-Control': 'no-store',
    },
  });
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const cookie = request.headers.get('Cookie') || '';
  const expected = (cookie.match(/(?:^|;\s*)lr_oauth_state=([^;]+)/) || [])[1];

  if (!code || !state || !expected || state !== expected) {
    return page('error', { message: 'Session de connexion invalide ou expirée.' });
  }

  const res = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'User-Agent': 'lerepairemtl-site' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
      redirect_uri: `${url.origin}/api/callback`,
    }),
  });
  const data = await res.json().catch(() => ({}));

  if (!data.access_token) {
    return page('error', { message: data.error_description || 'GitHub a refusé la connexion.' });
  }
  return page('success', { token: data.access_token, provider: 'github' });
}
