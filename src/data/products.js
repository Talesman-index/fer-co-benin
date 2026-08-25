export const productCategories = [
  { id: 'all', name: 'Tous les produits', icon: 'layers' },
  { id: 'toles-aluzinc', name: 'Tôles & Bac Alu', icon: 'shield' },
  { id: 'sandwich-panels', name: 'Sandwich Panels', icon: 'maximize-2' },
  { id: 'tubes', name: 'Tubes Métalliques', icon: 'circle' },
  { id: 'fer-beton', name: 'Fers & Aciers', icon: 'grid' },
  { id: 'poutrelles', name: 'Poutres & Poutrelles', icon: 'columns' },
  { id: 'cornieres', name: 'Cornières & Profilés', icon: 'box' },
  { id: 'fer-forge', name: 'Fer Forgé & Déco', icon: 'sparkles' },
  { id: 'echafaudages', name: 'Échafaudages', icon: 'activity' },
  { id: 'grilles', name: 'Grilles & Caillebotis', icon: 'layout-grid' },
  { id: 'accessoires', name: 'Accessoires & Fixations', icon: 'tool' }
];

export const products = [
  // Tôles & Aluzinc
  {
    id: 'bac-aluzinc',
    name: 'Bac Aluzinc Haute Résistance',
    category: 'toles-aluzinc',
    categoryName: 'Tôles & Bac Alu',
    featured: true,
    tag: 'Produit Phare',
    shortDesc: 'Tôles Aluzinc anticorrosion haute longévité pour toitures et bardages.',
    description: 'Alliage aluminium-zinc offrant une résistance exceptionnelle à la corrosion maritime et tropicale. Idéal pour toitures industrielles, résidentielles et bardages de hangars.',
    specs: {
      'Épaisseurs': '0.35 mm à 0.80 mm',
      'Longueurs': 'Sur mesure jusqu’à 12 mètres',
      'Revêtement': 'Aluzinc AZ150',
      'Profils': 'Ondulé ou Trapézoïdal'
    },
    applications: ['Toitures industrielles', 'Bardages extérieurs', 'Bâtiments agricoles', 'Résidences'],
    image: '/images/urban-geometry-the-squares-and-rectangle-shapes-o-2026-07-15-21-36-29-utc.jpg'
  },
  {
    id: 'bac-alu-prelaque',
    name: 'Bac Aluminium Prélaqué',
    category: 'toles-aluzinc',
    categoryName: 'Tôles & Bac Alu',
    featured: false,
    tag: 'Finition Premium',
    shortDesc: 'Tôles prélaquées teintées pour une esthétique moderne et durable.',
    description: 'Tôles traitées avec un revêtement laqué multicouche résistant aux UV et aux intempéries extrêmes.',
    specs: {
      'Coloris': 'Bleu, Rouge Tuile, Vert Réséda, Gris Anthracite',
      'Épaisseurs': '0.40 mm à 0.70 mm',
      'Longueur': 'Découpe à la demande'
    },
    applications: ['Bâtiments commerciaux', 'Toitures architecturales'],
    image: '/images/stacked-steel-metal-bars-in-a-factory-2026-01-08-07-15-37-utc.jpg'
  },
  {
    id: 'toles-galvanisees',
    name: 'Tôles Galvanisées Standard & Nervurées',
    category: 'toles-aluzinc',
    categoryName: 'Tôles & Bac Alu',
    featured: false,
    shortDesc: 'Protection zinc par galvanisation à chaud pour tous chantiers.',
    description: 'Tôles en acier galvanisé de premier choix pour couvertures économiques et protections de parois.',
    specs: {
      'Galvanisation': 'Z100 à Z275 g/m²',
      'Épaisseurs': '0.30 mm à 2.0 mm',
      'Format': 'Plaques ou rouleaux découpés'
    },
    applications: ['Clôtures de chantier', 'Couvertures d’appoint', 'Ventilation'],
    image: '/images/stacked-steel-metal-bars-in-a-factory-2026-01-08-07-15-37-utc.jpg'
  },

  // Sandwich Panels
  {
    id: 'sandwich-polyurethane',
    name: 'Panneaux Sandwich Polyuréthane (PUR/PIR)',
    category: 'sandwich-panels',
    categoryName: 'Sandwich Panels',
    featured: true,
    tag: 'Isolation Thermique',
    shortDesc: 'Isolation thermique et acoustique haute performance pour toitures et façades.',
    description: 'Composés de deux parements en acier Aluzinc ou laqué enserrant une mousse polyuréthane rigide. Réduit considérablement la chaleur intérieure sous climat tropical.',
    specs: {
      'Épaisseur Mousse': '30 mm, 50 mm, 80 mm, 100 mm',
      'Densité': '40 kg/m³ ± 2',
      'Conductivité (λ)': '0.022 W/m.K',
      'Largeur utile': '1 000 mm'
    },
    applications: ['Chambres froides', 'Hangars climatisés', 'Bureaux modulaires', 'Entrepôts logistiques'],
    image: '/images/urban-geometry-the-squares-and-rectangle-shapes-o-2026-07-15-21-36-29-utc.jpg'
  },
  {
    id: 'sandwich-laine-roche',
    name: 'Panneaux Sandwich Laine de Roche',
    category: 'sandwich-panels',
    categoryName: 'Sandwich Panels',
    featured: false,
    tag: 'Anti-Feu A1',
    shortDesc: 'Sécurité incendie maximale et incombustibilité certifiée.',
    description: 'Âme en laine de roche minérale haute densité pour bâtiments industriels exigeant une résistance au feu stricte.',
    specs: {
      'Classement feu': 'Incombustible A1 / Euroclasse A2-s1,d0',
      'Épaisseurs': '50 mm à 150 mm',
      'Isolation phonique': 'Rw jusqu’à 35 dB'
    },
    applications: ['Salles machines', 'Bâtiments recevant du public', 'Usines chimiques'],
    image: '/images/urban-geometry-the-squares-and-rectangle-shapes-o-2026-07-15-21-36-29-utc.jpg'
  },

  // Tubes
  {
    id: 'tubes-carres-rect',
    name: 'Tubes Carrés & Rectangulaires Noirs / Galvanisés',
    category: 'tubes',
    categoryName: 'Tubes Métalliques',
    featured: true,
    tag: 'Structure & Serrurerie',
    shortDesc: 'Profilés creux haute rigidité pour ossatures, portails et charpentes.',
    description: 'Large stock de profilés tubulaires acier soudés haute fréquence. Disponibles en acier brut noir ou galvanisé anticorrosion.',
    specs: {
      'Sections carrées': '16x16 mm jusqu’à 200x200 mm',
      'Sections rectangulaires': '30x20 mm jusqu’à 250x150 mm',
      'Épaisseurs': '1.2 mm à 8.0 mm',
      'Longueur standard': '6.00 m ou coupe sur mesure'
    },
    applications: ['Poteaux et poutres', 'Menuiserie métallique', 'Châssis', 'Clôtures'],
    image: '/images/stacked-steel-metal-bars-in-a-factory-2026-01-08-07-15-37-utc.jpg'
  },
  {
    id: 'tubes-ronds',
    name: 'Tubes Ronds de Conduite & Structure',
    category: 'tubes',
    categoryName: 'Tubes Métalliques',
    featured: false,
    shortDesc: 'Tubes ronds soudés et sans soudure pour structures et canalisations.',
    description: 'Tubes ronds en acier doux certifié pour ouvrages porteurs, passerelles, garde-corps et réseaux fluides.',
    specs: {
      'Diamètres': 'Ø 1/2" (21.3 mm) à Ø 8" (219.1 mm)',
      'Épaisseurs': '1.5 mm à 6.3 mm',
      'Finition': 'Noir brut ou Galva'
    },
    applications: ['Garde-corps', 'Colonnes', 'Conduites industrielles'],
    image: '/images/stacked-steel-metal-bars-in-a-factory-2026-01-08-07-15-37-utc.jpg'
  },

  // Fers & Aciers
  {
    id: 'fer-a-beton-ha',
    name: 'Fer à Béton Haute Adhérence (FeE500)',
    category: 'fer-beton',
    categoryName: 'Fers & Aciers',
    featured: true,
    tag: 'Norme BTP',
    shortDesc: 'Barres d’armature nervurées FeE500 pour fondations et béton armé.',
    description: 'Aciers à béton certifiés haute ductilité pour ouvrages de génie civil, dalles, poteaux et fondations profondes.',
    specs: {
      'Diamètres disponibles': 'HA 6, 8, 10, 12, 14, 16, 20, 25, 32 mm',
      'Nuance': 'FeE 500 MPa',
      'Conditionnement': 'Barres de 12 m ou couronnes'
    },
    applications: ['Béton armé', 'Génie civil', 'Dalles & semelles', 'Ponts et pontets'],
    image: '/images/workers-building-metal-structure-on-construction-s-2026-07-15-21-33-46-jpg.jpg'
  },
  {
    id: 'fers-plats-ronds-carres',
    name: 'Fers Marchands (Plats, Ronds & Carrés pleins)',
    category: 'fer-beton',
    categoryName: 'Fers & Aciers',
    featured: false,
    shortDesc: 'Aciers pleins laminés à chaud pour forge, mécanique et serrurerie.',
    description: 'Barres pleines en acier de construction S235 / S275 à usinabilité et soudabilité parfaites.',
    specs: {
      'Plats': '15x3 mm à 150x15 mm',
      'Carrés pleins': '8x8 mm à 40x40 mm',
      'Ronds pleins': 'Ø 6 mm à Ø 60 mm'
    },
    applications: ['Serrurerie', 'Renforts mécaniques', 'Grilles et portails'],
    image: '/images/stacked-steel-metal-bars-in-a-factory-2026-01-08-07-15-37-utc.jpg'
  },

  // Poutres & Poutrelles
  {
    id: 'poutrelles-ipe-hea',
    name: 'Poutrelles IPE, HEA, HEB & UPN',
    category: 'poutrelles',
    categoryName: 'Poutres & Poutrelles',
    featured: true,
    tag: 'Grandes Portées',
    shortDesc: 'Profilés structurels lourds laminés à chaud pour charpentes de hangars.',
    description: 'Poutrelles métalliques normalisées pour charpentes industrielles de grande portée, planchers collaborants et ponts roulants.',
    specs: {
      'Profils': 'IPE 80 à 500, HEA/HEB 100 à 400, UPN/UPE 80 à 300',
      'Nuance Acier': 'S275JR / S355JR',
      'Services': 'Découpe à façon, perçage numérique et grugeage disponibles'
    },
    applications: ['Hangars industriels', 'Ponts roulants', 'Entrepôts grande hauteur', 'Mezzanines'],
    image: '/images/metal-frames-being-constructed-on-a-building-site-2026-03-27-01-30-54-utc.JPG'
  },

  // Cornières
  {
    id: 'cornieres-profils',
    name: 'Cornières à Ailes Égales et Inégales',
    category: 'cornieres',
    categoryName: 'Cornières & Profilés',
    featured: false,
    shortDesc: 'Éléments d’assemblage, goussets et renforts d’ossatures métalliques.',
    description: 'Cornières en acier laminé indispensables pour la triangulation des fermes, le contreventement et l’ancrage.',
    specs: {
      'Dimensions': '20x20x2 mm jusqu’à 150x150x15 mm',
      'Nuance': 'S235JR certifié',
      'Longueur': '6 mètres'
    },
    applications: ['Contreventements', 'Supports de chemins de câbles', 'Cornières d’arrêt de coulage'],
    image: '/images/stacked-steel-metal-bars-in-a-factory-2026-01-08-07-15-37-utc.jpg'
  },

  // Fer Forgé & Déco
  {
    id: 'fer-forge-ornements',
    name: 'Composants & Ornements en Fer Forgé',
    category: 'fer-forge',
    categoryName: 'Fer Forgé & Déco',
    featured: false,
    shortDesc: 'Barreaux forgés, volutes, rosaces, pointes de lance et mains courantes.',
    description: 'Large sélection de pièces ornementales prêtes à souder pour garde-corps de prestige, grilles de clôture et portails d’entrée.',
    specs: {
      'Motifs': 'Volutes en C/S, barreaux ventrus, fleurs, pointes forgées',
      'Matière': 'Acier doux facile à forger et souder'
    },
    applications: ['Clôtures résidentielles', 'Portails artisanaux', 'Balcons et rampes'],
    image: '/images/stacked-steel-metal-bars-in-a-factory-2026-01-08-07-15-37-utc.jpg'
  },

  // Échafaudages
  {
    id: 'echafaudages-tubes-raccords',
    name: 'Systèmes d’Échafaudage de Chantier & Sécurité',
    category: 'echafaudages',
    categoryName: 'Échafaudages',
    featured: true,
    tag: 'Sécurité Chantier',
    shortDesc: 'Montants, cadres, tubes, colliers et plateaux pour travaux en hauteur sécurisés.',
    description: 'Échafaudages modulaires robustes conformes aux normes de sécurité BTP. Montage rapide et grande stabilité de charge.',
    specs: {
      'Éléments': 'Cadres de passage, lisses de sécurité, diagonales, vérins de pied, plateaux acier antidérapants',
      'Capacité de charge': 'Jusqu’à 300 kg/m²',
      'Traitement': 'Galvanisation intégrale'
    },
    applications: ['Chantiers BTP', 'Travaux de façade', 'Maintenance industrielle'],
    image: '/images/construction-worker-on-ladder-at-building-framewor-2026-01-09-00-02-46-utc.jpg'
  },

  // Grilles & Caillebotis
  {
    id: 'grilles-caillebotis',
    name: 'Caillebotis Métalliques Galvanisés & Grillages',
    category: 'grilles',
    categoryName: 'Grilles & Caillebotis',
    featured: false,
    shortDesc: 'Planchers ajourés antidérapants et grillages de clôture renforcés.',
    description: 'Panneaux de caillebotis électroforgés pressés pour passerelles industrielles, caniveaux et marches d’escalier.',
    specs: {
      'Maillage': '30x30 mm, 30x19 mm',
      'Barreaux porteurs': '25x2 mm à 40x3 mm',
      'Protection': 'Galvanisation à chaud selon ISO 1461'
    },
    applications: ['Passerelles techniques', 'Couvertures de caniveau', 'Escaliers extérieurs'],
    image: '/images/stacked-steel-metal-bars-in-a-factory-2026-01-08-07-15-37-utc.jpg'
  },

  // Accessoires
  {
    id: 'quincaillerie-fixations',
    name: 'Visserie Haute Résistance, Paumelles & Accessoires',
    category: 'accessoires',
    categoryName: 'Accessoires & Fixations',
    featured: false,
    shortDesc: 'Vis auto-foreuses pour bac alu, paumelles renforcées, serrures et poulies.',
    description: 'Tous les consommables et accessoires indispensables au montage de charpentes, bardages et menuiseries métalliques.',
    specs: {
      'Fixations': 'Vis autoperceuses avec rondelles EPDM étanches',
      'Quincaillerie': 'Paumelles soudables 80 à 200 mm, verrous, serrures de rideaux',
      'Poulies & rails': 'Systèmes coulissants pour hangars'
    },
    applications: ['Fixation de toitures', 'Portes coulissantes de hangars', 'Serrurerie'],
    image: '/images/stacked-steel-metal-bars-in-a-factory-2026-01-08-07-15-37-utc.jpg'
  }
];
