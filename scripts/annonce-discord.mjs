// Annonce sur Discord les publications ajoutées par le dernier commit.
// Lancé par .github/workflows/annonce-discord.yml. Ne publie jamais un brouillon.
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const webhook = process.env.DISCORD_WEBHOOK_URL;
const site = 'https://lerepairemtl.com';
const before = process.env.BEFORE_SHA;
const after = process.env.AFTER_SHA;
if (!webhook || !before || !after) {
  console.log('Webhook ou commits manquants, rien à annoncer.');
  process.exit(0);
}

const added = execSync(`git diff --name-only --diff-filter=A ${before} ${after} -- src/content/nouvelles/fr/`, {
  encoding: 'utf8',
})
  .split('\n')
  .filter((f) => f.endsWith('.md'));

const labels = { sortie: 'Sortie', arrivage: 'Arrivage', evenement: 'Événement', nouvelle: 'Nouvelle' };

for (const file of added) {
  const src = readFileSync(file, 'utf8');
  const fm = src.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) continue;
  const get = (k) => (fm[1].match(new RegExp(`^${k}:\\s*(.*)$`, 'm')) || [])[1]?.replace(/^["']|["']$/g, '').trim();
  if (get('draft') === 'true') continue;

  const slug = file.split('/').pop().replace(/\.md$/, '');
  const url = `${site}/nouvelles/${slug}/`;
  const image = get('image');
  const embed = {
    title: get('title'),
    description: get('resume'),
    url,
    color: 0xd9b77c,
    footer: { text: [labels[get('categorie')] ?? 'Nouvelle', get('univers')].filter(Boolean).join(' · ') },
    ...(image && { image: { url: image.startsWith('http') ? image : site + image } }),
  };
  const res = await fetch(webhook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'Le Repaire', embeds: [embed] }),
  });
  console.log(res.ok ? `Annoncé : ${url}` : `Échec (${res.status}) : ${url}`);
}
if (added.length === 0) console.log('Aucune nouvelle publication dans ce commit.');
