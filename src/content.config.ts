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
    resume: z.string().max(240),
    univers: z.string().optional(),
    date_sortie: z.coerce.date().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { nouvelles };
