// Identity and contact details. Anything left `null` is hidden in the UI
// until Yosri provides it — never fill these with guesses.

export const profile = {
  name: 'Yosri Hamrouni',
  role: 'Full-Stack Software Engineer',
  headline: 'I build full-stack business applications — and add AI where it actually helps.',
  intro:
    'Software engineer, ESPRIT 2026, with an exchange semester at CESI in France. For my final-year project I built a multi-tenant school management SaaS on my own (Laravel, React, PostgreSQL), with an explainable student-risk score and an assistant that only answers from data the user is allowed to see. It is now deployed and piloted with a school.',
  location: 'Nabeul, Tunisia',
  availability: 'Open to full-time roles in Tunisia, France and remote · available immediately',
  links: {
    github: 'https://github.com/yosriHamrouni',
    linkedin: 'https://www.linkedin.com/in/yosri-hamrouni-498a60238/',
  },
  /** CV files under /public. The first one is the default download. */
  cvs: [
    { url: '/Yosri_Hamrouni_CV_EN.pdf', lang: 'EN', label: 'English' },
    { url: '/Yosri_Hamrouni_CV.pdf', lang: 'FR', label: 'Français' },
  ] as { url: string; lang: string; label: string }[],
  email: 'yosrihamrouni@gmail.com' as string | null,
  /** Slug of the case study with the product demo video. */
  demoProject: 'school-management-saas',
};

// The three things the site wants a visitor to remember.
export const pillars = [
  {
    title: 'Complete features, not halves',
    text: 'I take a feature from database schema to API to interface, so it ships without hand-offs. Laravel, Spring Boot, ASP.NET Core, Node.js · React, Angular.',
  },
  {
    title: 'Access control done right',
    text: 'Multi-tenant data isolation, roles and permissions, JWT authentication: the parts of business software that are expensive to get wrong.',
  },
  {
    title: 'AI that users can trust',
    text: 'Assistants grounded in the user’s own data and permissions, scores that explain their reasons, and a fallback when the model or the data is not there.',
  },
];
