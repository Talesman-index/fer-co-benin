export const projectCategories = [
  { id: 'all', name: 'Tous les projets' },
  { id: 'hangars', name: 'Structures & Hangars' },
  { id: 'modulaire', name: 'Bâtiments Modulaires' },
  { id: 'industriel', name: 'Génie Civil & Industriel' }
];

export const projects = [
  {
    id: 'hangar-logistique-cotonou',
    title: 'Hangar Logistique Portuaire & Entrepôt',
    category: 'hangars',
    categoryName: 'Structures & Hangars',
    location: 'Zone Portuaire, Cotonou',
    year: '2024',
    client: 'Opérateur Logistique International (B2B)',
    image: '/images/metal-frames-being-constructed-on-a-building-site-2026-03-27-01-30-54-utc.JPG',
    specs: {
      'Surface couverte': '2 400 m²',
      'Portée libre': '32 mètres sans poteau intermédiaire',
      'Charpente': 'Poutrelles IPE 400 & HEA 300',
      'Couverture': 'Bac Aluzinc AZ150 + Panneaux translucides',
      'Délai de réalisation': '10 semaines'
    },
    description: 'Conception, fabrication en usine et montage d’un vaste complexe de stockage de marchandises avec 4 quais niveleurs et structure pour pont roulant 10 tonnes.'
  },
  {
    id: 'base-vie-chantier-cotonou',
    title: 'Base-Vie & Complexe Modulaire de Chantier',
    category: 'modulaire',
    categoryName: 'Bâtiments Modulaires',
    location: 'Grand Cotonou',
    year: '2024',
    client: 'Entreprise Générale BTP',
    image: '/images/building-under-construction-2026-03-10-02-08-51-utc.jpg',
    specs: {
      'Capacité d’accueil': '120 ouvriers & 15 ingénieurs',
      'Modules déployés': '18 unités (Bureaux, Sanitaires, Dortoirs)',
      'Isolation': 'Panneaux sandwichs PUR 50 mm',
      'Délai d’installation': '5 jours ouvrés'
    },
    description: 'Déploiement express d’un campement de chantier autonome avec bloc sanitaire grand confort, salles de réunion climatisées et sécurité d’accès.'
  },
  {
    id: 'complexe-residentiel-modulaire',
    title: 'Résidence & Bureaux Modernes à Ossature Acier',
    category: 'modulaire',
    categoryName: 'Bâtiments Modulaires',
    location: 'Haie Vive, Cotonou',
    year: '2023',
    client: 'Investisseur Privé & Société Tertiaire',
    image: '/images/modern-constructed-apartment-building-block-house-2026-03-19-05-39-57-utc.jpg',
    specs: {
      'Niveaux': 'R+2 Modulaire',
      'Surface utile': '650 m²',
      'Structure': 'Ossature profilés creux acier galvanisé',
      'Bardage': 'Panneaux composites & baies aluminium'
    },
    description: 'Bâtiment tertiaire et résidentiel contemporain alliant l’esthétique des lignes épurées à la rapidité de montage de l’acier sans contrainte d’étaiement.'
  },
  {
    id: 'charpente-industrielle-levage',
    title: 'Usine de Transformation & Atelier Lourd',
    category: 'industriel',
    categoryName: 'Génie Civil & Industriel',
    location: 'Zone Industrielle de Sèmè-Podji',
    year: '2023',
    client: 'Groupe Agro-industriel',
    image: '/images/workers-building-metal-structure-on-construction-s-2026-07-15-21-33-46-jpg.jpg',
    specs: {
      'Tonnage acier': '180 Tonnes d’acier certifié S355',
      'Hauteur sous crochet': '9.50 mètres',
      'Perçages / Pliages': 'Réalisés 100% dans nos ateliers FER CO',
      'Garantie': 'Contrôle ultrasons des soudures'
    },
    description: 'Structure mécano-soudée de très haute rigidité pour supporter de lourdes presses industrielles et des silos de stockage en élévation.'
  },
  {
    id: 'villa-eco-modulaire',
    title: 'Villa Éco-Architecturale à Structure Acier',
    category: 'modulaire',
    categoryName: 'Bâtiments Modulaires',
    location: 'Ouidah / Littoral',
    year: '2023',
    client: 'Particulier',
    image: '/images/the-house-in-the-mountain-2026-03-23-23-03-52-utc.jpeg',
    specs: {
      'Concept': 'Architecture bioclimatique & modularité',
      'Empreinte eau': '-80% par rapport au béton coulé',
      'Durabilité': 'Structure traitée C4 marine anti-corrosion'
    },
    description: 'Une maison contemporaine spacieuse avec toitures végétalisables et grandes ouvertures, montée en seulement 6 semaines sur terrain sableux.'
  },
  {
    id: 'supervision-grutage-port',
    title: 'Supervision & Levage de Structures Spéciales',
    category: 'industriel',
    categoryName: 'Génie Civil & Industriel',
    location: 'Cotonou',
    year: '2024',
    client: 'Consortium d’Infrastructures Publiques',
    image: '/images/construction-worker-overseeing-a-crane-operation-o-2026-03-25-00-00-49-utc.jpg',
    specs: {
      'Type de prestation': 'Ingénierie de levage & coordination de chantier',
      'Équipes mobilisées': '12 techniciens & monteurs habilités',
      'Zéro accident': 'Protocole HSE rigoureux'
    },
    description: 'Opération complexe d’assemblage en hauteur de passerelles métalliques et de poutres caissons à l’aide de grues mobiles télescopiques.'
  }
];
