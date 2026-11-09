// Shapes shared by every locale. Each locale under src/i18n/locales/ supplies a
// complete `Content` object of these types, so a missing field is a type error.

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  contributions: string[];
  stack: string[];
  /** Slug of the related case study, if one exists. */
  project?: string;
  featured?: boolean;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
  text: string;
  project?: string;
};

export type Certification = {
  title: string;
  issuer?: string;
  date?: string;
  /** Extra detail shown under the issuer (score, duration…). */
  note?: string;
  /** Only real, verified proof links. */
  href?: string;
  hrefLabel?: string;
  /** Official badge image, when the issuer provides one. */
  image?: string;
};

export type Activity = { title: string; org: string; since: string; text?: string };

// `core` = used in internships or projects; `also` = worked with, less central.
// No percentages or levels — they would be invented.
export type SkillGroup = {
  name: string;
  core: string[];
  also?: string[];
  /** Optional sub-group shown separately (used for "currently exploring"). */
  exploring?: string[];
};

// Fields every project card and page needs.
type BaseProject = {
  slug: string;
  title: string;
  /** One line under the title. */
  tagline: string;
  category: string;
  context: string;
  period?: string;
  role: string;
  stack: string[];
  repo?: string;
  /** Shown instead of the repo button when there is no public link yet. */
  repoNote?: string;
  demo?: string;
  /** Real screenshots only. */
  screenshots: { src: string; caption: string }[];
  screenshotNote?: string;
  /** Edited product demo (real recording). Smaller source first, picked by `media`. */
  video?: {
    sources: { src: string; media?: string }[];
    poster: string;
    duration: string;
    chapters: { label: string; time: number }[];
    note: string;
  };
};

// Software case study: rendered by the 8-section engineering layout.
export type EngineeringProject = BaseProject & {
  kind?: 'engineering';
  problem: string;
  solution: string;
  contribution: string[];
  architecture: { title: string; text: string }[];
  /** Why these technologies — kept factual. */
  choices: string[];
  challenges: { title: string; text: string }[];
  features: string[];
  outcome: string;
};

// UX/UI case study: rendered by `UxCaseStudy` as a Discover → Define → Ideate → Design story.
type Shot = { src: string; caption: string };
export type UxProject = BaseProject & {
  kind: 'ux';
  /** Optional dedicated cover image; otherwise the first screens are shown as phone mockups. */
  cover?: string;
  tools: { name: string; use: string }[];
  overview: string;
  /** Who did what — research is credited to the team. */
  roleSplit: { who: 'team' | 'me'; text: string }[];
  /** Exactly four stage names: Discover, Define, Ideate, Design. */
  stages: string[];
  problemIntro: string;
  problemPoints: string[];
  research: {
    methods: { title: string; detail: string; samples: string[] }[];
    segments: { name: string; items: string[] }[];
    competitors: { names: string[]; criteria: string[]; images: Shot[] };
  };
  personas: { name: string; role: string; profile: string; quote?: string; need: string }[];
  storyboards: { intro: string; stories: { persona: string; story: string }[]; image: Shot };
  journey: { persona: string; stages: { name: string; action: string; pain: string; opportunity: string }[] };
  ideation: {
    ideaCount: number;
    groupedCount: number;
    steps: { title: string; text: string }[];
    clusters: { name: string; count: number; examples: string[] }[];
    image: Shot;
  };
  /** Research insight → team idea → my design decision → the screen that shows it. */
  decisions: { theme: string; insight: string; idea: string; decision: string; screen: Shot }[];
  userFlows: { title: string; nodes: { label: string; kind: 'step' | 'decision' | 'end'; alt?: string }[] }[];
  work: { intro: string; flows: { title: string; steps: string[]; screens?: Shot[] }[] };
};

export type Project = EngineeringProject | UxProject;

/** Everything on the site that is written in a language. */
export type Content = {
  role: string;
  intro: string;
  location: string;
  /** Three short facts under the hero: degree, exchange, location. */
  heroFacts: [string, string, string];
  pillars: { title: string; text: string }[];
  lookingFor: { label: string; value: string }[];
  /** About paragraphs. `**text**` is rendered as emphasis (company and school names). */
  about: string[];
  experiences: Experience[];
  education: EducationItem[];
  certifications: Certification[];
  languages: { name: string; level: string }[];
  activities: Activity[];
  skillGroups: SkillGroup[];
  projects: Project[];
};
