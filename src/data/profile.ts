// Language-neutral identity and contact details. Everything written in a language
// lives in src/i18n/locales/<lang>/. Anything left `null` is hidden in the UI
// until Yosri provides it — never fill these with guesses.

export type CvLang = 'fr' | 'en';

export const profile = {
  name: 'Yosri Hamrouni',
  links: {
    github: 'https://github.com/yosriHamrouni',
    linkedin: 'https://www.linkedin.com/in/yosri-hamrouni-498a60238/',
  },
  /** CV files under /public, by the language they are written in. */
  cvs: {
    fr: '/Yosri_Hamrouni_CV.pdf',
    en: '/Yosri_Hamrouni_CV_EN.pdf',
  } as Record<CvLang, string>,
  email: 'yosrihamrouni@gmail.com' as string | null,
  /** Slug of the case study with the product demo video. */
  demoProject: 'school-management-saas',
};
