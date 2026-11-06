// Réglages du site. Tout ce qui change rarement se modifie ici, à un seul endroit.
export const SITE = {
  name: 'Le Repaire du Collectionneur',
  short: 'Le Repaire',
  legal: 'Le Repaire du Collectionneur Inc.',
  url: 'https://lerepairemtl.com',
  email: 'info@lerepairemtl.com',
  instagram: 'https://www.instagram.com/lerepairemtl',
  instagramHandle: '@lerepairemtl',
  // Lien d'invitation Discord (membres fondateurs). Vide = bouton masqué.
  discord: '',
  address: {
    street: '319, rue De la Montagne',
    city: 'Montréal',
    region: 'QC',
    postal: 'H3C 0S6',
    country: 'CA',
  },
  geo: { lat: 45.49237, lng: -73.56398 },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=319+rue+De+la+Montagne%2C+Montr%C3%A9al%2C+QC+H3C+0S6',
  // Logos : exports officiels (60 - Marque/Infographie/Logo), utilisés tels quels,
  // seulement recadrés. Jamais recréés ni recolorés. À remplacer par les SVG maîtres.
  logoHeader: '/assets/logo/LeRepaire_H_Theo_Hat_OnyxBG_v1.png',
  theoGuette: '/assets/logo/LeRepaire_Theo_Watch_OnyxBG_v1.png',
  // Jeton Cloudflare Web Analytics (mesure sans cookies). Vide = aucune mesure.
  cfAnalyticsToken: '',
  // Identifiant de la boutique Lightspeed E-Series. Vide = page « bientôt ».
  ecwidStoreId: '',
} as const;
