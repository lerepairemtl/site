# Site du Repaire du Collectionneur

Site public de la boutique : https://lerepairemtl.com (branche `v2`, en préparation).

Site statique [Astro](https://astro.build), bilingue (français à la racine, anglais sous `/en/`),
pensé pour être hébergé sur Cloudflare Pages. Aucun témoin, aucune police ni script de tiers sur les pages publiques.

## Où modifier quoi

| Besoin | Endroit |
|---|---|
| Publier une nouvelle, une sortie, un arrivage, un événement | `/admin/` sur le site, ou un fichier dans `src/content/nouvelles/fr/` (et `en/`) |
| Coordonnées, Instagram, Discord, logo, analytique, boutique | `src/config.ts` |
| Textes des pages et du menu (FR et EN) | `src/i18n.ts` |
| Couleurs, typographies, mise en page | `src/styles/global.css` |
| Champs de l'éditeur `/admin/` | `public/admin/config.yml` |

## Publications

Chaque publication est un fichier Markdown. Le français est la référence; sans fichier anglais du même nom,
le site anglais affiche la version française avec une mention.

- `categorie` : `sortie`, `arrivage`, `evenement` ou `nouvelle`.
- `date_sortie` : pour une `sortie`, place la publication dans le calendrier (`/sorties/`).
- `draft: true` : visible en local seulement, jamais sur le site publié.

Les flux `/rss.xml` (FR) et `/en/rss.xml` (EN) servent de source aux republications automatiques
(réseaux sociaux, Discord, infolettre).

## Sorties et calendrier

Une sortie est une publication de catégorie « Sortie » avec une date de sortie. Par défaut elle est **légère** : titre = nom du produit, famille, univers, date — résumé et texte facultatifs — et elle n'apparaît que dans le calendrier (`/sorties/`), qui garde l'historique (mois passés repliés derrière un bouton). Cocher « Aussi dans Nouvelles » la publie en plus dans le fil, à l'accueil et dans le flux RSS. Toute sortie est relayée sur Discord.

## Couleurs d'univers

Ajout à la palette du Brand Guide v1.4, à inscrire à la v1.5. Une teinte par famille de produits,
dans le même registre que le Bleu pétrole (tons bijou désaturés, texte Bone lisible à 4,5:1 et plus).

| Famille | Couleur | HEX |
|---|---|---|
| Cartes sportives | Grenat | `#8F3130` |
| Jeux de cartes à collectionner | Prune | `#5A3B7A` |
| Briques et maquettes | Cuivre | `#9A5524` |
| Jeux de société | Sapin | `#2C6A4E` |
| Pièces de collection | Bleu pétrole | `#1F4A5C` |

Règles : elles codent une famille (étiquettes, fiches, calendrier, produits de l'illustration);
jamais sur le logo ni la mascotte, jamais comme fond dominant, texte en Bone seulement.

## Logo

Le logo s'utilise tel quel, à partir des fichiers maîtres : déposer le fichier dans `public/assets/`
et indiquer son chemin dans `logoWordmark` (`src/config.ts`). Ne jamais le recréer en CSS.

## Travailler en local

```
npm install
npm run dev      # http://localhost:4321, brouillons visibles
npm run build    # site publié dans dist/
```

## Mise en ligne (Cloudflare Pages)

1. Cloudflare > Workers & Pages > créer un projet Pages relié au dépôt `lerepairemtl/site`.
2. Commande de build : `npm run build`. Dossier de sortie : `dist`. Variable `NODE_VERSION` : `22`.
3. Ajouter le domaine `lerepairemtl.com` au projet.
4. Pour l'éditeur `/admin/` : créer une application OAuth GitHub
   (URL de retour : `https://lerepairemtl.com/api/callback`), puis ajouter les variables
   `GITHUB_CLIENT_ID` et `GITHUB_CLIENT_SECRET` au projet Pages. Chaque personne qui publie a besoin
   d'un compte GitHub avec accès en écriture au dépôt.

La boutique en ligne (Lightspeed E-Series) s'intégrera dans `src/views/Shop.astro` à l'ouverture.
