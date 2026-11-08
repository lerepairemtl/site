# lerepairemtl.com — site public du Repaire du Collectionneur

Astro 5 statique, bilingue FR/EN (`src/i18n.ts`, routes dans `routes`), contenu via **Decap CMS** (`/admin`, `public/admin/config.yml`), déployé sur **Cloudflare Pages** (projet `lerepairemtl`, branche **`v2`**). Une GitHub Action annonce les nouvelles sur Discord (`scripts/annonce-discord.mjs`).

## Règles non négociables
- **Logos et marque : toujours les fichiers officiels** dans `public/`. Ne jamais redessiner ni retaper le logo / wordmark.
- Jamais de secret dans le code ni la conversation (webhook Discord, jetons) : GitHub Secrets / Cloudflare uniquement.
- Palette : Onyx #1C1C1C, Champagne #D9B77C, Bone #F5F1EA, Pétrole #1F4A5C, Grenat #8F3130, Prune #5A3B7A, Cuivre #9A5524, Sapin #2C6A4E (`src/styles/global.css`).
- Pas de mentions légales supplémentaires visibles pour le moment ; la protection IA se fait via `public/robots.txt` (bots d'entraînement bloqués, bots de recherche/réponse admis), `public/llms.txt` et le JSON-LD (`copyrightHolder`, `copyrightNotice`).

## Contenu
- Collections dans `src/content.config.ts`. Les champs `date_sortie`, `image`, `univers`, `famille` acceptent `""` (préprocessés en `undefined`).
- **Nouvelles vs sorties** : une sortie « légère » (titre/date/famille/univers) n'apparaît que dans le calendrier (`/sorties/`), sauf si `dans_nouvelles: true`. `src/lib/posts.ts` (`isCalendarOnly`, `getNews`).
- **Données du QG** : `src/data/qg.json` est écrit par l'intranet (dépôt `lerepairemtl/qg`) via l'API GitHub — ne pas l'éditer à la main. `src/lib/qg.ts` l'expose : `heures()`, `exceptions(depuis)`, `horairePublie()`, `evenementsAVenir(depuis)`. Consommé par `src/views/Events.astro` (`/evenements/`, `/en/events/`) et `src/views/Visit.astro` (heures d'ouverture).
- Vues dans `src/views/*.astro`, pages FR à la racine de `src/pages/`, EN sous `src/pages/en/` (wrappers minces `<View lang="…" />`).

## Local
```
npm install && npx astro build
```
