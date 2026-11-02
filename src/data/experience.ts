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
      'Six-month engineering project: a multi-tenant school management SaaS that centralizes academic and administrative workflows, with AI-assisted student risk detection.',
    contributions: [
      'Designed and built business features for students, teachers, classes, schedules, grades, payments and administrative dashboards.',
      'Developed REST APIs and application services with data isolation between tenants and role-based access control.',
      'Built an explainable, rule-based student risk detection engine using grades, absences, late arrivals and progression, with fallback handling for incomplete data.',
      'Integrated a RAG-based assistant that answers questions within the data the signed-in user is allowed to access.',
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
    summary: 'Contributed to a Gleam.io-inspired web platform for interactive campaigns and user engagement.',
    contributions: [
      'Developed interactive frontend features with React, Tailwind CSS and React Query.',
      'Implemented backend APIs with Node.js, Express.js and MongoDB.',
      'Worked on JWT-based authentication and authorization.',
      'Integrated external services, including social media APIs and the OpenAI API for AI-assisted features.',
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
      'Built the Articles / Items module end to end: EF Core models and migrations, DTOs, REST controllers and the React CRUD screens.',
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
    summary:
      'Worked on a hotel management application with Laravel — an early experience that laid my foundations in backend development.',
    contributions: [
      'Worked on application features of a Laravel and MySQL hotel management web application.',
    ],
    stack: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
];
