import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export type Post = {
  slug: string;
  entry: CollectionEntry<'nouvelles'>;
  /** Vrai quand la version demandée n'existe pas et qu'on affiche l'autre langue. */
  fallback: boolean;
};

/** Publications visibles dans une langue. Sans traduction, la version française sert de repli. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const all = await getCollection('nouvelles', (e) => import.meta.env.DEV || !e.data.draft);
  const bySlug = new Map<string, Partial<Record<Lang, CollectionEntry<'nouvelles'>>>>();
  for (const entry of all) {
    const [loc, ...rest] = entry.id.split('/');
    const slug = rest.join('/');
    if (loc !== 'fr' && loc !== 'en') continue;
    bySlug.set(slug, { ...bySlug.get(slug), [loc]: entry });
  }
  const posts: Post[] = [];
  for (const [slug, versions] of bySlug) {
    const entry = versions[lang] ?? versions.fr ?? versions.en;
    if (!entry) continue;
    posts.push({ slug, entry, fallback: !versions[lang] });
  }
  return posts.sort((a, b) => b.entry.data.date.valueOf() - a.entry.data.date.valueOf());
}

/** Sortie « légère » : visible dans le calendrier seulement, pas dans Nouvelles. */
export function isCalendarOnly(post: Post) {
  const d = post.entry.data;
  return d.categorie === 'sortie' && !d.dans_nouvelles;
}

/** Publications du fil Nouvelles, de l'accueil et du flux RSS. */
export async function getNews(lang: Lang): Promise<Post[]> {
  return (await getPosts(lang)).filter((p) => !isCalendarOnly(p));
}

export function formatDate(date: Date, lang: Lang, style: 'long' | 'medium' = 'long') {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    dateStyle: style,
    timeZone: 'UTC',
  }).format(date);
}

export function monthLabel(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
