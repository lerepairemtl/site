import data from '../data/qg.json';
import type { Lang } from '../i18n';

/** Données publiées par le QG (qg.lerepairemtl.com) : événements confirmés et heures d'ouverture. */
export type QgEvenement = {
  slug: string; titre: string; categorie: string; categorie_nom: string; famille: string | null; univers: string | null;
  date: string; date_fin: string | null; debut: string | null; fin: string | null;
  lieu: 'boutique' | 'exterieur' | 'en_ligne'; lieu_nom: string | null; lieu_adresse: string | null;
  description: string | null; image: string | null; prix_entree: number | null; prix_membre: number | null; prix_inclus: string | null;
  places: number | null; places_restantes: number | null; inscription: string; inscription_lien: string | null;
  complet: boolean; annule: boolean; association: string | null; tiers: { nom: string; role: string }[];
};
export type QgHeures = { jour: number; ouvert: boolean; debut: string | null; fin: string | null };
export type QgException = { date: string; ouvert: boolean; debut: string | null; fin: string | null; raison: string | null };

const qg = data as unknown as { genere_le: string | null; heures: QgHeures[]; exceptions: QgException[]; evenements: QgEvenement[] };

export const heures = () => qg.heures;
export const exceptions = (depuis: string) => qg.exceptions.filter((x) => x.date >= depuis).sort((a, b) => a.date.localeCompare(b.date));
export const horairePublie = () => qg.heures.some((h) => h.ouvert);
export const evenementsAVenir = (depuis: string) =>
  qg.evenements.filter((e) => (e.date_fin ?? e.date) >= depuis && !e.annule).sort((a, b) => a.date.localeCompare(b.date) || (a.debut ?? '').localeCompare(b.debut ?? ''));

export const fmtHeure = (hm: string | null, lang: Lang) => {
  if (!hm) return '';
  const [h, m] = hm.split(':').map(Number);
  if (lang === 'fr') return m ? `${h} h ${String(m).padStart(2, '0')}` : `${h} h`;
  const ap = h >= 12 ? 'p.m.' : 'a.m.'; const h12 = h % 12 || 12;
  return m ? `${h12}:${String(m).padStart(2, '0')} ${ap}` : `${h12} ${ap}`;
};
export const fmtPrix = (n: number | null, lang: Lang) => n == null ? '' : new Intl.NumberFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', { style: 'currency', currency: 'CAD', maximumFractionDigits: 0 }).format(n);
