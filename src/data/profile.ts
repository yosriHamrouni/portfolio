// Identity and contact details. Anything left `null` is hidden in the UI
// until Yosri provides it — never fill these with guesses.

export const profile = {
  name: 'Yosri Hamrouni',
  role: 'Software Engineer',
  headline: 'Software engineer building full-stack applications and AI-powered solutions.',
  intro:
    'Recent ESPRIT engineering graduate focused on full-stack development, backend engineering and generative AI. I like building practical software products that combine reliable engineering with intelligent capabilities.',
  location: 'Nabeul, Tunisia',
  availability: 'Open to full-time roles in Tunisia, France and remote',
  links: {
    github: 'https://github.com/yosriHamrouni',
    linkedin: 'https://www.linkedin.com/in/yosri-hamrouni-498a60238/',
  },
  /** Path under /public, e.g. '/Yosri_Hamrouni_CV.pdf'. */
  cvUrl: null as string | null,
  email: null as string | null,
};

// The three capabilities the whole site is organised around.
export const pillars = [
  {
    title: 'Build',
    text: 'Full-stack applications, REST APIs, backend services, frontend interfaces, databases and third-party integrations.',
  },
  {
    title: 'Engineer',
    text: 'Software architecture, authentication, multi-tenant data management and code that stays maintainable.',
  },
  {
    title: 'Integrate intelligence',
    text: 'LLM integrations, RAG-based assistants, explainable rule engines and AI-assisted workflows inside real products.',
  },
];
