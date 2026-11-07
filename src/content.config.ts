import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Nouvelles, sorties, arrivages et événements.
// Un fichier par langue : src/content/nouvelles/fr/<slug>.md et .../en/<slug>.md
const nouvelles = defineCollection({
  loader: glob({ pattern: '{fr,en}/*.md', base: './src/content/nouvelles' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categorie: z.enum(['sortie', 'arrivage', 'evenement', 'nouvelle']).default('nouvelle'),
    // Facultatif pour une sortie légère (calendrier seulement).
    resume: z.preprocess((v) => (v === '' ? undefined : v), z.string().max(240).optional()),
    famille: z.preprocess((v) => (v === '' ? undefined : v), z.enum(['sport', 'jcc', 'briques', 'jeux', 'collection']).optional()),
    univers: z.preprocess((v) => (v === '' ? undefined : v), z.string().optional()),
    date_sortie: z.preprocess((v) => (v === '' || v == null ? undefined : v), z.coerce.date().optional()),
    image: z.preprocess((v) => (v === '' ? undefined : v), z.string().optional()),
    image_alt: z.string().optional(),
    /** Sortie seulement : coché, la sortie apparaît aussi dans Nouvelles (et à l'accueil, dans le flux RSS). */
    dans_nouvelles: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { nouvelles };
