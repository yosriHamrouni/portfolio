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

// Reverse-chronological.
export const experiences: Experience[] = [
  {
    company: 'Maison du Web',
    role: 'Full-Stack Software Engineering Intern · Final-year project (PFE)',
    period: 'Feb 2026 – Aug 2026',
    summary:
      'Six-month final-year project, built on my own: a multi-tenant SaaS that lets several schools run students, classes, schedules, grades, attendance and payments in one place, with an explainable student-risk score and a permission-aware assistant. Deployed, piloted with a school and handed over to Maison du Web.',
    contributions: [
      'Designed and built business features for students, teachers, classes, schedules, grades, payments and administrative dashboards.',
      'Developed REST APIs and application services with data isolation between tenants and role-based access control.',
      'Designed an explainable risk score from grades, absences, late arrivals and progression. Each result lists its reasons, and incomplete records are handled instead of producing misleading scores.',
      'Integrated a RAG assistant on a local LLM (Ollama) that only retrieves the data the signed-in user may access, and falls back to rule-based answers when the model is unavailable.',
      'Worked in an Agile setup with Git, Taiga and PlantUML for design, tracking and technical documentation.',
    ],
    stack: ['Laravel', 'React', 'Inertia.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 'RAG'],
    project: 'school-management-saas',
    featured: true,
  },
  {
    company: 'Krenova',
    role: 'Software Developer Intern',
    period: 'Jul 2025 – Aug 2025',
    summary: 'Built a web platform, in the style of Gleam.io, where brands run giveaway and engagement campaigns that users join through social-media actions — front end and back end.',
    contributions: [
      'Built the React interface with Tailwind CSS, using React Query for server state.',
      'Built the Node.js / Express.js REST API on MongoDB.',
      'Implemented JWT authentication and authorization for campaign management and participation.',
      'Integrated social media APIs and the OpenAI API for AI-assisted features.',
    ],
    stack: ['React', 'Tailwind CSS', 'React Query', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OpenAI API'],
    project: 'gleam-inspired-platform',
  },
  {
    company: 'L-Mobile',
    role: 'Full-Stack Developer Intern',
    period: 'Jul 2024 – Sep 2024',
    location: 'Nabeul, Tunisia',
    summary: 'Team of three interns rebuilding a field-service management application with ASP.NET Core (.NET 8) and React.',
    contributions: [
      'Built the Articles / Items module end to end: EF Core models and migrations, DTOs, REST controllers and the React screens.',
      'Created the shared application shell (navigation bar, sidebar, home page) and the Users feature with sign-in and sign-up.',
      'Integrated my module with the team’s Service case work and resolved conflicting database migrations.',
      'Collaborated through Git feature branches and code reviews in an Agile/Scrum team.',
    ],
    stack: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'React', 'REST APIs'],
    project: 'field-service-application',
  },
  {
    company: 'VioreDigital',
    role: 'Laravel Developer Intern',
    period: 'Jul 2022 – Aug 2022',
    location: 'Nabeul, Tunisia',
    summary: 'First internship: features for a hotel management web app in Laravel and MySQL.',
    contributions: [],
    stack: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
];
