import rss from '@astrojs/rss';
import { SITE } from '../../config';
import { categories, postPath, t } from '../../i18n';
import { getNews } from '../../lib/posts';

// Flux RSS (en). Sert aussi de source aux republications automatiques
// (réseaux sociaux, Discord, infolettre).
export async function GET(context) {
  const lang = 'en';
  const posts = await getNews(lang);
  return rss({
    title: `${SITE.name} | ${t(lang).news.heading}`,
    description: t(lang).news.description,
    site: context.site,
    items: posts
      .filter((p) => !p.entry.data.draft)
      .map(({ slug, entry }) => ({
        title: entry.data.title,
        description: entry.data.resume ?? entry.data.title,
        pubDate: entry.data.date,
        link: postPath(lang, slug),
        categories: [categories[entry.data.categorie][lang], entry.data.univers].filter(Boolean),
        ...(entry.data.image && {
          enclosure: {
            url: new URL(entry.data.image, SITE.url).href,
            length: 0,
            type: /\.png$/i.test(entry.data.image) ? 'image/png' : /\.webp$/i.test(entry.data.image) ? 'image/webp' : 'image/jpeg',
          },
        }),
      })),
    customData: `<language>${lang === 'fr' ? 'fr-CA' : 'en-CA'}</language>`,
  });
}
