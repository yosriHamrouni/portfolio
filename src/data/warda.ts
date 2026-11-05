// Warda UX/UI case study. Content comes from the team's FigJam board (research,
// personas, storyboards, journey map, brainstorm, affinity map, user flows), the
// Figma design file (screens) and Yosri's brief. Research is credited to the team.
import type { UxProject } from './projects';

const img = (name: string) => `/project-imgs/warda/${name}.webp`;

export const warda: UxProject = {
  kind: 'ux',
  slug: 'warda',
  title: 'Warda',
  tagline: 'A mobile app for ordering and sending flowers across Tunisia — from user research to high-fidelity screens.',
  category: 'Product design · UX bootcamp',
  context: 'UX/UI bootcamp project — Space Academy',
  period: '2023',
  role: 'UX/UI designer — user flows and all screens',
  stack: ['Figma', 'FigJam'],
  tools: [
    { name: 'Figma', use: 'Wireframes and high-fidelity screens' },
    { name: 'FigJam', use: 'Research, ideation and user flows' },
  ],
  screenshots: [
    { src: img('screen-product'), caption: 'Product details with add-to-cart' },
    { src: img('screen-catalogue'), caption: 'Catalogue — browse by type, occasion and colour' },
  ],
  overview:
    'Warda is an app for ordering flowers online. Users browse arrangements, customize bouquets, schedule delivery and send flowers for occasions.',
  roleSplit: [
    { who: 'team', text: 'Research, personas, storyboards, journey map, brainstorming and affinity mapping were done together by the bootcamp team.' },
    { who: 'me', text: 'I designed the user flows and every screen, from wireframes to high-fidelity designs.' },
  ],
  stages: ['Discover', 'Define', 'Ideate', 'Design'],

  problemIntro: 'Users in Tunisia who want flowers delivered face gaps:',
  problemPoints: [
    'Few florists offer personalized bouquets or bulk orders.',
    'Delivery times are hard to schedule.',
    'Sending flowers from abroad with local payment is difficult.',
    'Allergies and freshness are rarely considered.',
  ],

  research: {
    methods: [
      {
        title: 'Survey',
        detail: 'About 30 questions, in French, English and Tunisian Arabic',
        samples: [
          'Have you bought flowers online before?',
          'What matters most when buying flowers online — price, quality, selection or delivery?',
          'Is choosing a precise delivery date important to you?',
          'Would you like reminders to send flowers to your loved ones?',
          'Would you need a greeting card with your bouquet?',
        ],
      },
      {
        title: 'Interviews',
        detail: '11 open questions',
        samples: [
          'Can you describe your experience buying bouquets online or in a shop?',
          'What makes you buy flowers online rather than from a local florist?',
          'How would fast delivery and a precise delivery date influence your choice?',
          'Which features would you like to see in a flower-ordering app?',
        ],
      },
    ],
    segments: [
      { name: 'Individuals', items: ['Couples — just dating, engaged, newlyweds', 'Busy adults', 'Adult children on Mother’s Day', 'Long-distance friends and family', 'Wellness enthusiasts', 'Family and religious events'] },
      { name: 'Businesses', items: ['Business owners', 'Event planners'] },
    ],
    competitors: {
      names: ['Primarosa', 'Floward', 'Fleurs pour Tunisie'],
      criteria: ['User interface', 'Pricing', 'Filtering', 'Support', 'Ease of use', 'Updates'],
      images: [
        { src: img('competitor-primarosa'), caption: 'Primarosa — occasion-based catalogue (screen recording, Feb 2023)' },
        { src: img('competitor-fleurs-pour-tunisie'), caption: 'Fleurs pour Tunisie — currency set to euros for senders abroad (screen recording, Feb 2023)' },
      ],
    },
  },

  personas: [
    { name: 'Mahmoud & Mariem', role: 'Busy married couple', profile: '42 & 36 · engineer and teacher · Grand Tunis', quote: 'C’est le geste qui compte.', need: 'Forget occasions on busy days and need reliable same-day delivery.' },
    { name: 'Karim', role: 'Tunisian living abroad', profile: '32 · designer · Canada', quote: 'Details matter.', need: 'Sends flowers home for Eid and family occasions, with currency and payment problems.' },
    { name: 'Leila', role: 'Yoga instructor', profile: '45 · Hammamet', quote: 'Flowers are a therapy.', need: 'Needs meditation flowers and must consider her clients’ allergies.' },
    { name: 'Sami', role: 'Event planner', profile: '45 · Space Event · Sousse', need: 'Needs large, customized orders on tight deadlines.' },
    { name: 'Rym', role: 'Secretary preparing client meetings', profile: '28 · international trading company · Tunis', quote: 'For every minute spent organizing, an hour is earned.', need: 'Orders bouquets for client meetings and worries about freshness and presentation.' },
  ],

  storyboards: {
    intro: 'Each persona got a storyboard of a real-life situation, to find exactly where ordering flowers breaks down.',
    stories: [
      { persona: 'Mahmoud', story: 'Realises at work that it is his wife’s birthday. The florist he finds closes at 18:00 while he is stuck in a meeting — he only relaxes when the florist offers to deliver to him.' },
      { persona: 'Karim · Eid', story: 'After Eid at a friend’s home he misses his family. The flower site he finds will not accept payment in his currency, and he has no way to pay in dinars.' },
      { persona: 'Karim · Mother’s Day', story: 'Forgets Mother’s Day, tries to order at 16:00 Tunisian time and finds no express delivery. His sister brings a bouquet late and his mother realises he forgot.' },
      { persona: 'Leila', story: 'A client shows allergy symptoms during a yoga session: she could not find flowers suited to meditation and had used a similar type instead.' },
      { persona: 'Sami', story: 'A client needs a wedding in two days. His florist cannot prepare that many personalized bouquets in time, and online shops do not offer personalized bouquets.' },
      { persona: 'Rym', story: 'No florist can deliver to a client meeting in Djerba with a personal touch. She carries bouquets from Tunis and they arrive wilted in front of the clients.' },
    ],
    image: { src: img('storyboard-karim'), caption: 'Karim’s storyboard with the team’s “How might we” notes (FigJam)' },
  },

  journey: {
    persona: 'Leila',
    stages: [
      { name: 'Discovery', action: 'Hears about the app from a fellow yoga instructor and downloads it', pain: 'Many apps with similar names and logos', opportunity: 'Earn word-of-mouth with a great experience' },
      { name: 'Onboarding', action: 'Creates an account', pain: 'Complicated registration', opportunity: 'Quick sign-up with clear instructions' },
      { name: 'Exploring', action: 'Browses flower categories and uses filters', pain: 'Hard to find specific flower types', opportunity: 'Wide range of flowers and clear navigation' },
      { name: 'Selecting', action: 'Chooses a bouquet and personalizes it', pain: 'Limited or unclear customization', opportunity: 'Easy customization choices' },
      { name: 'Payment', action: 'Checks delivery details and pays', pain: 'Complicated checkout, worried about hidden fees', opportunity: 'Transparent pricing' },
      { name: 'Delivery', action: 'Gets a notification and tracks the delivery', pain: 'Delivery time not estimated', opportunity: 'Accurate estimates and clear communication' },
      { name: 'Receiving', action: 'Receives the bouquet', pain: 'Flowers damaged during delivery', opportunity: 'High-quality flowers, replacements or refunds' },
      { name: 'Loyalty', action: 'Keeps browsing and ordering', pain: 'Wants more personalization and variety', opportunity: 'Better recommendations, promotions and rewards' },
    ],
  },

  ideation: {
    ideaCount: 137,
    groupedCount: 68,
    steps: [
      { title: 'Brainstorm', text: '137 ideas from the whole team on sticky notes — some written as user stories (“As a busy event planner, I want…”).' },
      { title: 'Prioritize', text: 'A prioritization matrix split ideas into “do it now” and “do it when we have time or money”.' },
      { title: 'Affinity map', text: '68 ideas were grouped into 8 clusters that became the app’s feature areas.' },
    ],
    clusters: [
      { name: 'Notifications', count: 16, examples: ['Yearly calendar of important events', 'Delivery status updates'] },
      { name: 'Customization', count: 11, examples: ['Greeting card or photo', 'Flower arrangement customization'] },
      { name: 'Payment', count: 8, examples: ['Cash on delivery', 'Simpler checkout'] },
      { name: 'Delivery', count: 8, examples: ['Exact address on a map', 'Delivery timing option'] },
      { name: 'Search & filters', count: 3, examples: ['Keyword search', 'Navigation bar'] },
      { name: 'Reviews & feedback', count: 3, examples: ['Ratings', 'Photo reviews'] },
      { name: 'Sign-up', count: 3, examples: ['Save special dates at sign-up'] },
      { name: 'Others', count: 16, examples: ['Multiple languages', 'Flower descriptions and meaning'] },
    ],
    image: { src: img('affinity-map'), caption: 'Affinity map — 68 ideas in 8 clusters (FigJam)' },
  },

  decisions: [
    {
      theme: 'Delivery timing',
      insight: 'Mahmoud races a florist’s closing time; Karim finds no express delivery at 16:00.',
      idea: 'Add a delivery timing option and express delivery.',
      decision: 'A delivery step with Today, Tomorrow or Pick a date, then a time slot.',
      screen: { src: img('screen-delivery-time'), caption: 'Delivery date and time slot' },
    },
    {
      theme: 'Exact address',
      insight: 'Rym cannot get flowers delivered to a meeting in Djerba.',
      idea: 'Show the chosen address on a map that users can zoom to check.',
      decision: 'The recipient address is dropped on a map, or entered manually.',
      screen: { src: img('screen-recipient'), caption: 'Recipient address — map or manual entry' },
    },
    {
      theme: 'Payment',
      insight: 'Karim cannot pay in his currency; Leila fears a complicated checkout and hidden fees.',
      idea: 'Cash on delivery, several payment methods, and a phone code to confirm online payment.',
      decision: 'Cash on delivery or online payment confirmed by OTP, with subtotal and delivery charges shown before ordering.',
      screen: { src: img('screen-checkout'), caption: 'Checkout — payment, address and delivery time' },
    },
    {
      theme: 'Personal touch',
      insight: 'Sami cannot find personalized bouquets; Leila finds customization limited.',
      idea: 'Add a greeting card or photos to the order.',
      decision: 'A card message can be added straight from the cart.',
      screen: { src: img('screen-cart'), caption: 'Cart with card message' },
    },
    {
      theme: 'Occasions',
      insight: 'Mahmoud and Karim both forget an important date.',
      idea: 'Save special dates at sign-up and remind users with a yearly calendar.',
      decision: '“My Occasions” lives in the profile, next to orders and favourites.',
      screen: { src: img('screen-profile'), caption: 'Profile with My Occasions' },
    },
    {
      theme: 'Finding flowers',
      insight: 'In the journey map, Leila struggles to find specific flower types.',
      idea: 'Keyword search and filters.',
      decision: 'Browse by type and colour, filter results by category, occasion and colour.',
      screen: { src: img('screen-popular'), caption: 'Results with filters' },
    },
    {
      theme: 'Allergies & freshness',
      insight: 'Leila’s client reacts to flowers; Rym’s bouquets arrive wilted.',
      idea: 'Describe each flower in detail.',
      decision: 'Every product lists its exact composition and size.',
      screen: { src: img('screen-product'), caption: 'Product with “Bouquet includes”' },
    },
  ],

  userFlows: [
    {
      title: 'Find a bouquet',
      nodes: [
        { label: 'Home', kind: 'step' },
        { label: 'Search bar — type a keyword', kind: 'step' },
        { label: 'Filtered search', kind: 'step' },
        { label: 'Product found?', kind: 'decision', alt: 'No → refine the search' },
        { label: 'Product page', kind: 'step' },
        { label: 'Customize the order', kind: 'step' },
        { label: 'Add to cart', kind: 'end' },
      ],
    },
    {
      title: 'Checkout & payment',
      nodes: [
        { label: 'Cart', kind: 'step' },
        { label: 'Signed in?', kind: 'decision', alt: 'No → continue as guest' },
        { label: 'Shipping & billing — address, delivery time, phone', kind: 'step' },
        { label: 'Payment method?', kind: 'decision', alt: 'Cash on delivery → skip to confirmation' },
        { label: 'Card details', kind: 'step' },
        { label: 'OTP message', kind: 'step' },
        { label: 'Code correct?', kind: 'decision', alt: 'No → paste the code again' },
        { label: 'Confirmation', kind: 'end' },
      ],
    },
  ],

  work: {
    intro: 'Based on these flows, I designed every screen in Figma, from wireframes to high fidelity.',
    flows: [
      {
        title: 'Checkout',
        steps: ['Cart', 'Shipping & billing', 'Delivery time', 'Payment — cash on delivery or online with OTP', 'Confirmation'],
        screens: [
          { src: img('screen-cart'), caption: 'Cart with card message and order summary' },
          { src: img('screen-checkout'), caption: 'Checkout — payment, delivery address and time' },
        ],
      },
      {
        title: 'Catalogue & search',
        steps: ['Browse by occasion', 'Filter by product type and colour', 'Search results'],
        screens: [
          { src: img('screen-home'), caption: 'Home — gifts by occasion and categories' },
          { src: img('screen-popular'), caption: 'Results with category, occasion and colour filters' },
          { src: img('screen-search'), caption: 'Search by product type and flower colour' },
        ],
      },
      {
        title: 'Product',
        steps: ['Product details', 'Add to cart'],
        screens: [{ src: img('screen-product'), caption: 'Product details and add-to-cart' }],
      },
      {
        title: 'Recipient details',
        steps: ['Address on a map or entered manually', 'Delivery time selection'],
        screens: [
          { src: img('screen-recipient'), caption: 'Recipient address — map or manual entry' },
          { src: img('screen-delivery-time'), caption: 'Delivery date and time slot' },
        ],
      },
      {
        title: 'Account',
        steps: ['Profile', 'Saved addresses', 'Orders', 'Favourites', 'Settings'],
        screens: [
          { src: img('screen-profile'), caption: 'Profile — orders, addresses, occasions, favourites' },
          { src: img('screen-orders'), caption: 'My orders with order status' },
        ],
      },
    ],
  },
};
