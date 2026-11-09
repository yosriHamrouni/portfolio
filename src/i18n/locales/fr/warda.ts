// Étude de cas UX/UI Warda, en français. La recherche est créditée à l'équipe.
import type { UxProject } from '../../../data/types';

const img = (name: string) => `/project-imgs/warda/${name}.webp`;

export const warda: UxProject = {
  kind: 'ux',
  slug: 'warda',
  title: 'Warda',
  tagline: 'Une application mobile pour commander et envoyer des fleurs partout en Tunisie — de la recherche utilisateur aux maquettes haute fidélité.',
  category: 'Design produit · Bootcamp UX',
  context: 'Projet de bootcamp UX/UI — Space Academy',
  period: '2023',
  role: 'Designer UX/UI — parcours utilisateurs et ensemble des écrans',
  stack: ['Figma', 'FigJam'],
  tools: [
    { name: 'Figma', use: 'Wireframes et maquettes haute fidélité' },
    { name: 'FigJam', use: 'Recherche, idéation et parcours utilisateurs' },
  ],
  screenshots: [
    { src: img('screen-product'), caption: 'Fiche produit avec ajout au panier' },
    { src: img('screen-catalogue'), caption: 'Catalogue — par type, occasion et couleur' },
  ],
  overview:
    'Warda est une application de commande de fleurs en ligne. Les utilisateurs parcourent les compositions, personnalisent leurs bouquets, programment la livraison et envoient des fleurs pour toutes les occasions.',
  roleSplit: [
    { who: 'team', text: 'La recherche, les personas, les storyboards, la carte du parcours, le brainstorming et le regroupement par affinités ont été réalisés ensemble par l’équipe du bootcamp.' },
    { who: 'me', text: 'J’ai conçu les parcours utilisateurs et tous les écrans, des wireframes aux maquettes haute fidélité.' },
  ],
  stages: ['Découvrir', 'Définir', 'Idéer', 'Concevoir'],

  problemIntro: 'En Tunisie, les personnes qui veulent se faire livrer des fleurs se heurtent à plusieurs manques :',
  problemPoints: [
    'Peu de fleuristes proposent des bouquets personnalisés ou des commandes en grande quantité.',
    'Les horaires de livraison sont difficiles à planifier.',
    'Envoyer des fleurs depuis l’étranger avec un paiement local est compliqué.',
    'Les allergies et la fraîcheur sont rarement prises en compte.',
  ],

  research: {
    methods: [
      {
        title: 'Questionnaire',
        detail: 'Une trentaine de questions, en français, en anglais et en dialecte tunisien',
        samples: [
          'Avez-vous déjà acheté des fleurs en ligne ?',
          'Qu’est-ce qui compte le plus pour vous quand vous achetez des fleurs en ligne — le prix, la qualité, le choix ou la livraison ?',
          'Pouvoir choisir une date de livraison précise est-il important pour vous ?',
          'Aimeriez-vous recevoir des rappels pour envoyer des fleurs à vos proches ?',
          'Auriez-vous besoin d’une carte de vœux avec votre bouquet ?',
        ],
      },
      {
        title: 'Entretiens',
        detail: '11 questions ouvertes',
        samples: [
          'Pouvez-vous décrire votre expérience d’achat de bouquets en ligne ou en boutique ?',
          'Qu’est-ce qui vous pousse à acheter des fleurs en ligne plutôt que chez un fleuriste de quartier ?',
          'En quoi une livraison rapide et une date de livraison précise influenceraient-elles votre choix ?',
          'Quelles fonctionnalités aimeriez-vous trouver dans une application de commande de fleurs ?',
        ],
      },
    ],
    segments: [
      { name: 'Particuliers', items: ['Couples — jeunes couples, fiancés, jeunes mariés', 'Adultes très occupés', 'Enfants adultes pour la fête des mères', 'Amis et famille éloignés', 'Adeptes du bien-être', 'Événements familiaux et religieux'] },
      { name: 'Professionnels', items: ['Chefs d’entreprise', 'Organisateurs d’événements'] },
    ],
    competitors: {
      names: ['Primarosa', 'Floward', 'Fleurs pour Tunisie'],
      criteria: ['Interface utilisateur', 'Prix', 'Filtres', 'Support', 'Facilité d’utilisation', 'Mises à jour'],
      images: [
        { src: img('competitor-primarosa'), caption: 'Primarosa — catalogue par occasion (enregistrement d’écran, février 2023)' },
        { src: img('competitor-fleurs-pour-tunisie'), caption: 'Fleurs pour Tunisie — devise réglée en euros pour les expéditeurs à l’étranger (enregistrement d’écran, février 2023)' },
      ],
    },
  },

  personas: [
    { name: 'Mahmoud et Mariem', role: 'Couple marié très occupé', profile: '42 et 36 ans · ingénieur et enseignante · Grand Tunis', quote: 'C’est le geste qui compte.', need: 'Oublient les occasions les jours chargés et ont besoin d’une livraison fiable le jour même.' },
    { name: 'Karim', role: 'Tunisien vivant à l’étranger', profile: '32 ans · designer · Canada', quote: 'Ce sont les détails qui comptent.', need: 'Envoie des fleurs à sa famille pour l’Aïd et les occasions familiales, mais se heurte à des problèmes de devise et de paiement.' },
    { name: 'Leila', role: 'Professeure de yoga', profile: '45 ans · Hammamet', quote: 'Les fleurs sont une thérapie.', need: 'A besoin de fleurs pour la méditation et doit tenir compte des allergies de ses clients.' },
    { name: 'Sami', role: 'Organisateur d’événements', profile: '45 ans · Space Event · Sousse', need: 'A besoin de commandes importantes et personnalisées dans des délais serrés.' },
    { name: 'Rym', role: 'Secrétaire qui prépare les rendez-vous clients', profile: '28 ans · société de commerce international · Tunis', quote: 'Chaque minute passée à organiser fait gagner une heure.', need: 'Commande des bouquets pour les rendez-vous clients et s’inquiète de leur fraîcheur et de leur présentation.' },
  ],

  storyboards: {
    intro: 'Chaque persona a reçu un storyboard tiré d’une situation réelle, pour repérer précisément où la commande de fleurs se grippe.',
    stories: [
      { persona: 'Mahmoud', story: 'Il réalise au travail que c’est l’anniversaire de sa femme. Le fleuriste qu’il trouve ferme à 18 h alors qu’il est bloqué en réunion — il ne se détend que lorsque le fleuriste propose de le livrer.' },
      { persona: 'Karim · Aïd', story: 'Après l’Aïd passé chez un ami, sa famille lui manque. Le site de fleurs qu’il trouve n’accepte pas le paiement dans sa devise, et il n’a aucun moyen de payer en dinars.' },
      { persona: 'Karim · Fête des mères', story: 'Il oublie la fête des mères, essaie de commander à 16 h heure tunisienne et ne trouve aucune livraison express. Sa sœur apporte un bouquet en retard et sa mère comprend qu’il avait oublié.' },
      { persona: 'Leila', story: 'Une cliente présente des symptômes d’allergie pendant une séance de yoga : Leila n’avait pas trouvé de fleurs adaptées à la méditation et avait utilisé une variété proche.' },
      { persona: 'Sami', story: 'Un client doit organiser un mariage dans deux jours. Son fleuriste ne peut pas préparer autant de bouquets personnalisés à temps, et les boutiques en ligne n’en proposent pas.' },
      { persona: 'Rym', story: 'Aucun fleuriste ne peut livrer avec une touche personnelle à un rendez-vous client à Djerba. Elle transporte les bouquets depuis Tunis, et ils arrivent fanés devant les clients.' },
    ],
    image: { src: img('storyboard-karim'), caption: 'Storyboard de Karim avec les notes « Comment pourrions-nous » de l’équipe (FigJam)' },
  },

  journey: {
    persona: 'Leila',
    stages: [
      { name: 'Découverte', action: 'Entend parler de l’application par une collègue professeure de yoga et la télécharge', pain: 'Beaucoup d’applications aux noms et logos similaires', opportunity: 'Gagner le bouche-à-oreille grâce à une excellente expérience' },
      { name: 'Inscription', action: 'Crée un compte', pain: 'Inscription compliquée', opportunity: 'Inscription rapide avec des instructions claires' },
      { name: 'Exploration', action: 'Parcourt les catégories de fleurs et utilise les filtres', pain: 'Difficile de trouver des variétés précises', opportunity: 'Large choix de fleurs et navigation claire' },
      { name: 'Sélection', action: 'Choisit un bouquet et le personnalise', pain: 'Personnalisation limitée ou peu claire', opportunity: 'Options de personnalisation simples' },
      { name: 'Paiement', action: 'Vérifie les détails de livraison et paie', pain: 'Paiement compliqué, peur des frais cachés', opportunity: 'Prix transparents' },
      { name: 'Livraison', action: 'Reçoit une notification et suit la livraison', pain: 'Délai de livraison non estimé', opportunity: 'Estimations précises et communication claire' },
      { name: 'Réception', action: 'Reçoit le bouquet', pain: 'Fleurs abîmées pendant la livraison', opportunity: 'Fleurs de qualité, remplacement ou remboursement' },
      { name: 'Fidélisation', action: 'Continue de parcourir et de commander', pain: 'Veut plus de personnalisation et de variété', opportunity: 'Meilleures recommandations, promotions et récompenses' },
    ],
  },

  ideation: {
    ideaCount: 137,
    groupedCount: 68,
    steps: [
      { title: 'Brainstorming', text: '137 idées de toute l’équipe sur des post-it — certaines rédigées sous forme de user stories (« En tant qu’organisateur d’événements débordé, je veux… »).' },
      { title: 'Priorisation', text: 'Une matrice de priorisation a réparti les idées entre « à faire maintenant » et « à faire quand nous aurons le temps ou le budget ».' },
      { title: 'Carte d’affinités', text: '68 idées ont été regroupées en 8 familles, devenues les grands domaines fonctionnels de l’application.' },
    ],
    clusters: [
      { name: 'Notifications', count: 16, examples: ['Calendrier annuel des dates importantes', 'Suivi de l’état de la livraison'] },
      { name: 'Personnalisation', count: 11, examples: ['Carte de vœux ou photo', 'Composition florale personnalisée'] },
      { name: 'Paiement', count: 8, examples: ['Paiement à la livraison', 'Paiement simplifié'] },
      { name: 'Livraison', count: 8, examples: ['Adresse exacte sur une carte', 'Choix du créneau de livraison'] },
      { name: 'Recherche et filtres', count: 3, examples: ['Recherche par mot-clé', 'Barre de navigation'] },
      { name: 'Avis et retours', count: 3, examples: ['Notes', 'Avis avec photos'] },
      { name: 'Inscription', count: 3, examples: ['Enregistrer les dates spéciales à l’inscription'] },
      { name: 'Autres', count: 16, examples: ['Plusieurs langues', 'Description et signification des fleurs'] },
    ],
    image: { src: img('affinity-map'), caption: 'Carte d’affinités — 68 idées en 8 familles (FigJam)' },
  },

  decisions: [
    {
      theme: 'Moment de livraison',
      insight: 'Mahmoud court contre l’heure de fermeture du fleuriste ; Karim ne trouve aucune livraison express à 16 h.',
      idea: 'Ajouter un choix du moment de livraison et une livraison express.',
      decision: 'Une étape de livraison avec Aujourd’hui, Demain ou Choisir une date, puis un créneau horaire.',
      screen: { src: img('screen-delivery-time'), caption: 'Date et créneau de livraison' },
    },
    {
      theme: 'Adresse exacte',
      insight: 'Rym n’arrive pas à se faire livrer des fleurs à un rendez-vous à Djerba.',
      idea: 'Afficher l’adresse choisie sur une carte que l’on peut agrandir pour vérifier.',
      decision: 'L’adresse du destinataire est placée sur une carte, ou saisie manuellement.',
      screen: { src: img('screen-recipient'), caption: 'Adresse du destinataire — carte ou saisie manuelle' },
    },
    {
      theme: 'Paiement',
      insight: 'Karim ne peut pas payer dans sa devise ; Leila redoute un paiement compliqué et des frais cachés.',
      idea: 'Paiement à la livraison, plusieurs moyens de paiement, et un code reçu par téléphone pour confirmer le paiement en ligne.',
      decision: 'Paiement à la livraison ou paiement en ligne confirmé par OTP, avec le sous-total et les frais de livraison affichés avant la commande.',
      screen: { src: img('screen-checkout'), caption: 'Validation — paiement, adresse et créneau de livraison' },
    },
    {
      theme: 'Touche personnelle',
      insight: 'Sami ne trouve pas de bouquets personnalisés ; Leila trouve la personnalisation limitée.',
      idea: 'Ajouter une carte de vœux ou des photos à la commande.',
      decision: 'Un message sur carte peut être ajouté directement depuis le panier.',
      screen: { src: img('screen-cart'), caption: 'Panier avec message sur carte' },
    },
    {
      theme: 'Occasions',
      insight: 'Mahmoud et Karim oublient tous deux une date importante.',
      idea: 'Enregistrer les dates spéciales à l’inscription et les rappeler grâce à un calendrier annuel.',
      decision: '« Mes occasions » se trouve dans le profil, à côté des commandes et des favoris.',
      screen: { src: img('screen-profile'), caption: 'Profil avec « Mes occasions »' },
    },
    {
      theme: 'Trouver des fleurs',
      insight: 'Dans la carte du parcours, Leila peine à trouver des variétés précises.',
      idea: 'Recherche par mot-clé et filtres.',
      decision: 'Parcourir par type et par couleur, filtrer les résultats par catégorie, occasion et couleur.',
      screen: { src: img('screen-popular'), caption: 'Résultats avec filtres' },
    },
    {
      theme: 'Allergies et fraîcheur',
      insight: 'La cliente de Leila réagit aux fleurs ; les bouquets de Rym arrivent fanés.',
      idea: 'Décrire chaque fleur en détail.',
      decision: 'Chaque produit indique sa composition exacte et sa taille.',
      screen: { src: img('screen-product'), caption: 'Produit avec la rubrique « Le bouquet contient »' },
    },
  ],

  userFlows: [
    {
      title: 'Trouver un bouquet',
      nodes: [
        { label: 'Accueil', kind: 'step' },
        { label: 'Barre de recherche — saisir un mot-clé', kind: 'step' },
        { label: 'Recherche filtrée', kind: 'step' },
        { label: 'Produit trouvé ?', kind: 'decision', alt: 'Non → affiner la recherche' },
        { label: 'Fiche produit', kind: 'step' },
        { label: 'Personnaliser la commande', kind: 'step' },
        { label: 'Ajouter au panier', kind: 'end' },
      ],
    },
    {
      title: 'Validation et paiement',
      nodes: [
        { label: 'Panier', kind: 'step' },
        { label: 'Connecté ?', kind: 'decision', alt: 'Non → continuer en tant qu’invité' },
        { label: 'Livraison et facturation — adresse, créneau, téléphone', kind: 'step' },
        { label: 'Moyen de paiement ?', kind: 'decision', alt: 'Paiement à la livraison → aller à la confirmation' },
        { label: 'Coordonnées bancaires', kind: 'step' },
        { label: 'Message OTP', kind: 'step' },
        { label: 'Code correct ?', kind: 'decision', alt: 'Non → saisir à nouveau le code' },
        { label: 'Confirmation', kind: 'end' },
      ],
    },
  ],

  work: {
    intro: 'À partir de ces parcours, j’ai conçu tous les écrans dans Figma, des wireframes à la haute fidélité.',
    flows: [
      {
        title: 'Validation de commande',
        steps: ['Panier', 'Livraison et facturation', 'Créneau de livraison', 'Paiement — à la livraison ou en ligne avec OTP', 'Confirmation'],
        screens: [
          { src: img('screen-cart'), caption: 'Panier avec message sur carte et récapitulatif de commande' },
          { src: img('screen-checkout'), caption: 'Validation — paiement, adresse et créneau de livraison' },
        ],
      },
      {
        title: 'Catalogue et recherche',
        steps: ['Parcourir par occasion', 'Filtrer par type de produit et par couleur', 'Résultats de recherche'],
        screens: [
          { src: img('screen-home'), caption: 'Accueil — cadeaux par occasion et catégories' },
          { src: img('screen-popular'), caption: 'Résultats avec filtres par catégorie, occasion et couleur' },
          { src: img('screen-search'), caption: 'Recherche par type de produit et couleur des fleurs' },
        ],
      },
      {
        title: 'Produit',
        steps: ['Fiche produit', 'Ajouter au panier'],
        screens: [{ src: img('screen-product'), caption: 'Fiche produit et ajout au panier' }],
      },
      {
        title: 'Coordonnées du destinataire',
        steps: ['Adresse sur une carte ou saisie manuelle', 'Choix du créneau de livraison'],
        screens: [
          { src: img('screen-recipient'), caption: 'Adresse du destinataire — carte ou saisie manuelle' },
          { src: img('screen-delivery-time'), caption: 'Date et créneau de livraison' },
        ],
      },
      {
        title: 'Compte',
        steps: ['Profil', 'Adresses enregistrées', 'Commandes', 'Favoris', 'Paramètres'],
        screens: [
          { src: img('screen-profile'), caption: 'Profil — commandes, adresses, occasions, favoris' },
          { src: img('screen-orders'), caption: 'Mes commandes avec leur statut' },
        ],
      },
    ],
  },
};
