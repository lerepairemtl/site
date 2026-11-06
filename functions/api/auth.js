// Cloudflare Pages Function — départ de la connexion GitHub pour l'éditeur /admin.
// Variables d'environnement requises (Cloudflare Pages > Settings > Variables) :
//   GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET (application OAuth GitHub)
// Optionnelle : GITHUB_SCOPE (par défaut « public_repo », suffisant tant que le dépôt est public;
// mettre « repo » si le dépôt devient privé).

export async function onRequestGet({ request, env }) {
  if (!env.GITHUB_CLIENT_ID) {
    return new Response('GITHUB_CLIENT_ID manquant.', { status: 500 });
  }
  const url = new URL(request.url);
  const state = crypto.randomUUID();
  const authorize = new URL('https://github.com/login/oauth/authorize');
  authorize.searchParams.set('client_id', env.GITHUB_CLIENT_ID);
  authorize.searchParams.set('redirect_uri', `${url.origin}/api/callback`);
  authorize.searchParams.set('scope', env.GITHUB_SCOPE || 'public_repo');
  authorize.searchParams.set('state', state);

  return new Response(null, {
    status: 302,
    headers: {
      Location: authorize.href,
      'Set-Cookie': `lr_oauth_state=${state}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=600`,
    },
  });
}
