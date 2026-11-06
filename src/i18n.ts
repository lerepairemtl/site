// Textes d'interface et correspondance des adresses FR / EN.
// Le contenu des nouvelles vit dans src/content/nouvelles, pas ici.

export type Lang = 'fr' | 'en';

export const routes = {
  home: { fr: '/', en: '/en/' },
  news: { fr: '/nouvelles/', en: '/en/news/' },
  releases: { fr: '/sorties/', en: '/en/releases/' },
  shop: { fr: '/boutique/', en: '/en/shop/' },
  visit: { fr: '/nous-trouver/', en: '/en/visit/' },
  privacy: { fr: '/confidentialite/', en: '/en/privacy/' },
} as const;

export type RouteKey = keyof typeof routes;

export const postPath = (lang: Lang, slug: string) => `${routes.news[lang]}${slug}/`;

export const categories = {
  sortie: { fr: 'Sortie', en: 'Release' },
  arrivage: { fr: 'Arrivage', en: 'New arrival' },
  evenement: { fr: 'Événement', en: 'Event' },
  nouvelle: { fr: 'Nouvelle', en: 'News' },
} as const;

export const familles = {
  sport: { fr: 'Cartes sportives', en: 'Sports cards' },
  jcc: { fr: 'JCC', en: 'TCG' },
  briques: { fr: 'Briques et maquettes', en: 'Bricks and model kits' },
  jeux: { fr: 'Jeux de société', en: 'Board games' },
  collection: { fr: 'Pièces de collection', en: 'Collectibles' },
} as const;

export type Famille = keyof typeof familles;

const fr = {
  nav: { news: 'Nouvelles', releases: 'Sorties', shop: 'Boutique', visit: 'Nous trouver' },
  navLabel: 'Navigation principale',
  langSwitch: 'English',
  langSwitchShort: 'EN',
  skip: 'Aller au contenu',
  opening: 'Ouverture au printemps 2027',
  district: 'Griffintown, Montréal',
  taglineA: ['Cartes', 'Jeux', 'Pièces de collection'],
  taglineB: ['Achat', 'Vente', 'Échange'],
  home: {
    title: 'Le Repaire du Collectionneur | Cartes, jeux et pièces de collection à Griffintown',
    description:
      'Boutique de cartes sportives, de jeux de cartes à collectionner, de jeux et de pièces de collection rue De la Montagne, à Griffintown. Ouverture au printemps 2027.',
    status: 'Ouverture au printemps 2027, à Griffintown',
    lead: 'Chaque objet raconte une histoire,',
    leadSub: ['de M', 'c', 'Cord à de\u00a0la\u00a0Montagne.'],
    body: 'Le Repaire, c’est là où on se retrouve. Entre nous, et un peu avec soi.',
    ctaFollow: 'Suivre sur Instagram',
    ctaVisit: 'Nous trouver',
    facadeLabel: 'Illustration de la devanture du Repaire, rue De la Montagne, le soir',
    bandTitle: 'Achat · Vente · Échange',
    bandText: 'On rachète aussi : cartes à l’unité, lots et collections.',
    comingTitle: 'Ce qui s’en vient',
    cards: [
      {
        title: 'La boutique',
        text: 'Au coin de William et De la Montagne, entre le canal de Lachine et le Centre Bell. Ouverture au printemps 2027.',
      },
      {
        title: 'Le cercle',
        text: 'Des tables pour jouer, des soirées pour se retrouver, et un premier cercle de membres avant même l’ouverture.',
      },
      {
        title: 'En ligne',
        text: 'Une boutique en ligne suivra, avec une sélection de ce qu’on trouve en magasin.',
      },
    ],
    newsTitle: 'Dernières nouvelles',
    newsAll: 'Toutes les nouvelles',
    followTitle: 'La suite se passe ici',
    followText: 'Les coulisses de l’aménagement, les premiers arrivages et la date d’ouverture.',
    instagram: 'Instagram',
    discord: 'Rejoindre le Discord',
  },
  news: {
    title: 'Nouvelles | Le Repaire du Collectionneur',
    description:
      'Sorties de cartes, arrivages en boutique et événements du Repaire du Collectionneur, à Griffintown.',
    heading: 'Nouvelles',
    intro: 'Sorties, arrivages et événements.',
    empty: 'Les premières nouvelles arrivent bientôt.',
    back: 'Toutes les nouvelles',
    fallback: 'Cette publication n’est pas encore traduite.',
    releaseOn: 'Date de sortie',
    draft: 'Brouillon',
    feed: 'Flux RSS',
  },
  releases: {
    title: 'Calendrier des sorties | Le Repaire du Collectionneur',
    description:
      'Calendrier des prochaines sorties de cartes sportives et de jeux de cartes à collectionner, tenu par Le Repaire du Collectionneur à Montréal.',
    heading: 'Calendrier des sorties',
    intro: 'Les prochaines sorties qu’on surveille, par date.',
    empty: 'Le calendrier se remplit bientôt.',
    upcoming: 'À venir',
    past: 'Déjà sorties',
  },
  shop: {
    title: 'Boutique en ligne | Le Repaire du Collectionneur',
    description:
      'La boutique en ligne du Repaire du Collectionneur est en préparation.',
    heading: 'Boutique en ligne',
    soon: 'La boutique en ligne s’en vient.',
    text: 'On y proposera une sélection de ce qu’on trouve en magasin. D’ici là, les nouvelles se passent ici.',
  },
  visit: {
    title: 'Nous trouver | Le Repaire du Collectionneur',
    description:
      'Le Repaire du Collectionneur : rue De la Montagne, Griffintown, Montréal. Entre le canal de Lachine et le Centre Bell.',
    heading: 'Nous trouver',
    intro: 'Entre le canal de Lachine et le Centre Bell, à deux pas de l’ÉTS.',
    addressLabel: 'Adresse',
    hoursLabel: 'Heures d’ouverture',
    hours: 'Annoncées à l’ouverture, au printemps 2027.',
    contactLabel: 'Nous écrire',
    directions: 'Voir l’itinéraire',
  },
  privacy: {
    title: 'Confidentialité | Le Repaire du Collectionneur',
    description: 'Ce que ce site recueille, et surtout ce qu’il ne recueille pas.',
    heading: 'Confidentialité',
    paragraphs: [
      'Ce site ne dépose aucun témoin (cookie), n’affiche aucune publicité et ne contient aucun formulaire. Nous n’y recueillons aucun renseignement personnel.',
      'Si une mesure d’achalandage est activée, elle est anonyme et sans témoin : elle compte des pages vues, pas des personnes.',
      'Les liens vers Instagram, Discord ou un service de cartographie mènent à des sites tiers, qui appliquent leurs propres politiques.',
      'Cette page sera mise à jour avant l’ouverture de la boutique en ligne et de l’infolettre.',
    ],
    contact: 'Responsable de la protection des renseignements personnels :',
  },
  notFound: {
    title: 'Page introuvable | Le Repaire du Collectionneur',
    heading: 'Cette page s’est égarée.',
    text: 'Elle a peut-être changé d’adresse.',
    home: 'Retour à l’accueil',
  },
  footer: { rights: 'Tous droits réservés.', privacy: 'Confidentialité' },
};

const en: typeof fr = {
  nav: { news: 'News', releases: 'Releases', shop: 'Shop', visit: 'Visit' },
  navLabel: 'Main navigation',
  langSwitch: 'Français',
  langSwitchShort: 'FR',
  skip: 'Skip to content',
  opening: 'Opening spring 2027',
  district: 'Griffintown, Montréal',
  taglineA: ['Cards', 'Games', 'Collectibles'],
  taglineB: ['Buy', 'Sell', 'Trade'],
  home: {
    title: 'Le Repaire du Collectionneur | Cards, games and collectibles in Griffintown',
    description:
      'Sports cards, trading card games, board games and collectibles on De la Montagne Street in Griffintown, Montréal. Opening spring 2027.',
    status: 'Opening spring 2027, in Griffintown',
    lead: 'Every object tells a story,',
    leadSub: ['from M', 'c', 'Cord to De\u00a0la\u00a0Montagne.'],
    body: 'Le Repaire is where we find each other. And a little of ourselves.',
    ctaFollow: 'Follow on Instagram',
    ctaVisit: 'Find us',
    facadeLabel: 'Illustration of the Le Repaire storefront on De la Montagne Street, at night',
    bandTitle: 'Buy · Sell · Trade',
    bandText: 'We buy too: singles, lots and collections.',
    comingTitle: 'What’s coming',
    cards: [
      {
        title: 'The shop',
        text: 'At the corner of William and De la Montagne, between the Lachine Canal and the Bell Centre. Opening spring 2027.',
      },
      {
        title: 'The circle',
        text: 'Tables to play at, evenings to gather, and a first circle of members before the doors even open.',
      },
      {
        title: 'Online',
        text: 'An online shop will follow, with a selection of what’s in store.',
      },
    ],
    newsTitle: 'Latest news',
    newsAll: 'All news',
    followTitle: 'The rest happens here',
    followText: 'Behind the scenes of the build-out, first arrivals and the opening date.',
    instagram: 'Instagram',
    discord: 'Join the Discord',
  },
  news: {
    title: 'News | Le Repaire du Collectionneur',
    description:
      'Card releases, new arrivals and events from Le Repaire du Collectionneur in Griffintown, Montréal.',
    heading: 'News',
    intro: 'Releases, arrivals and events.',
    empty: 'First news coming soon.',
    back: 'All news',
    fallback: 'This post has not been translated yet.',
    releaseOn: 'Release date',
    draft: 'Draft',
    feed: 'RSS feed',
  },
  releases: {
    title: 'Release calendar | Le Repaire du Collectionneur',
    description:
      'Upcoming sports card and trading card game releases, tracked by Le Repaire du Collectionneur in Montréal.',
    heading: 'Release calendar',
    intro: 'The upcoming releases we’re watching, by date.',
    empty: 'The calendar fills up soon.',
    upcoming: 'Upcoming',
    past: 'Already out',
  },
  shop: {
    title: 'Online shop | Le Repaire du Collectionneur',
    description: 'Le Repaire du Collectionneur’s online shop is in the works.',
    heading: 'Online shop',
    soon: 'The online shop is on its way.',
    text: 'It will carry a selection of what’s in store. Until then, the news lives here.',
  },
  visit: {
    title: 'Visit | Le Repaire du Collectionneur',
    description:
      'Le Repaire du Collectionneur: De la Montagne Street, Griffintown, Montréal. Between the Lachine Canal and the Bell Centre.',
    heading: 'Visit',
    intro: 'Between the Lachine Canal and the Bell Centre, steps from ÉTS.',
    addressLabel: 'Address',
    hoursLabel: 'Opening hours',
    hours: 'Announced at opening, in spring 2027.',
    contactLabel: 'Write to us',
    directions: 'Get directions',
  },
  privacy: {
    title: 'Privacy | Le Repaire du Collectionneur',
    description: 'What this site collects, and mostly what it does not.',
    heading: 'Privacy',
    paragraphs: [
      'This site sets no cookies, shows no ads and has no forms. We collect no personal information here.',
      'If traffic measurement is turned on, it is anonymous and cookieless: it counts page views, not people.',
      'Links to Instagram, Discord or a mapping service lead to third-party sites with their own policies.',
      'This page will be updated before the online shop and the newsletter open.',
    ],
    contact: 'Person responsible for the protection of personal information:',
  },
  notFound: {
    title: 'Page not found | Le Repaire du Collectionneur',
    heading: 'This page wandered off.',
    text: 'It may have moved.',
    home: 'Back to home',
  },
  footer: { rights: 'All rights reserved.', privacy: 'Privacy' },
};

export const ui = { fr, en };
export const t = (lang: Lang) => ui[lang];
