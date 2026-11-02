// Case studies. Every statement here must be traceable to the master brief, the CV
// or the project's public README — no invented metrics, links or screenshots.

export type Project = {
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

const frame = (n: string, caption: string) => ({ src: `/project-imgs/project_demo_${n}.webp`, caption });

export const projects: Project[] = [
  {
    slug: 'school-management-saas',
    title: 'School Management SaaS',
    tagline: 'A multi-tenant platform for academic and administrative management, with AI-assisted student risk detection.',
    category: 'Full-Stack SaaS · Applied AI',
    context: 'Final-year engineering project (PFE) at Maison du Web',
    period: 'Feb 2026 – Aug 2026',
    role: 'Full-Stack Software Engineering Intern',
    stack: ['Laravel', 'PHP', 'React', 'TypeScript', 'Inertia.js', 'PostgreSQL', 'Tailwind CSS', 'Python'],
    repo: 'https://github.com/yosriHamrouni/School-Management-SaaS',
    screenshots: [
      frame('01', 'Public landing page'),
      frame('05', 'Role-based portals for teachers, students and parents'),
      frame('10', 'Parent portal sign-in'),
      frame('20', 'Institution admin — academic dashboard'),
      frame('40', 'Finance — invoice and payment recording'),
      frame('60', 'Student — academic assistant'),
      frame('70', 'Student — internal messaging'),
    ],
    screenshotNote: 'Frames captured from the project demo recording.',
    video: {
      sources: [
        { src: '/project-media/school-saas-demo-720.mp4', media: '(max-width: 900px)' },
        { src: '/project-media/school-saas-demo-1080.mp4' },
      ],
      poster: '/project-media/school-saas-demo-poster.webp',
      duration: '2:24',
      chapters: [
        { label: 'Landing page', time: 0 },
        { label: 'Institution admin', time: 29.2 },
        { label: 'Teacher', time: 88.8 },
        { label: 'Student', time: 111.1 },
        { label: 'Teacher reply', time: 131.3 },
        { label: 'Parent', time: 135.5 },
      ],
      note: 'Full walkthrough recording. Edited for the web: intro trimmed and static pauses played at 2× speed. No audio.',
    },
    problem:
      'Schools often manage students, classes, schedules, grades, attendance and payments across separate tools. Information is hard to consolidate, administrative work is repetitive, and students who start to struggle are noticed late.',
    solution:
      'A single web platform that several institutions share while keeping their data isolated. Each actor — platform admin, institution admin, teacher, student and parent — gets an interface and permissions matched to their role. Academic data is reused to flag students who may need support, with an explanation of why.',
    contribution: [
      'Designed and developed business modules: academic structure, students, teachers, classes, schedules, grades, attendance, payments and dashboards.',
      'Implemented REST APIs and Laravel services with tenant-aware authorization and data isolation per institution.',
      'Designed the explainable student risk detection engine, including fallback behaviour when data is incomplete.',
      'Integrated a RAG-based assistant restricted to the data the authenticated user can access, and worked on prompt design to improve answer relevance.',
      'Documented the design with PlantUML and worked in an Agile process with Git and Taiga.',
    ],
    architecture: [
      {
        title: 'Frontend',
        text: 'React and TypeScript pages served through Inertia.js, so the app behaves like an SPA while routing and validation stay in Laravel.',
      },
      {
        title: 'Backend',
        text: 'Laravel with controllers, middleware, form requests, business services and Eloquent models. Middleware and policies enforce role and tenant boundaries.',
      },
      {
        title: 'Data',
        text: 'PostgreSQL. Users, academic structure, grades, attendance, assignments, messages and finance records are all scoped to an institution.',
      },
      {
        title: 'Intelligence',
        text: 'A rule-based engine computes an interpretable risk score with reasons. An experimental Python ML service can refine it; if it is unavailable, the system falls back to the rules.',
      },
    ],
    choices: [
      'Laravel + Inertia.js keeps a single backend codebase while still delivering a typed React interface.',
      'PostgreSQL for relational academic data with many cross-entity constraints.',
      'Rules before machine learning: risk results have to be explainable to teachers, and historical data was limited.',
    ],
    challenges: [
      {
        title: 'Tenant isolation',
        text: 'Every query, policy and report had to be scoped to the current institution so that one school can never see another’s data.',
      },
      {
        title: 'Explainability',
        text: 'A risk score is only useful if staff understand it, so the engine returns the reasons (average, absences, late arrivals, weak subjects, trend) alongside the level.',
      },
      {
        title: 'Incomplete data',
        text: 'New students and partially filled records are common; the engine degrades gracefully instead of producing misleading scores.',
      },
      {
        title: 'Scoped AI answers',
        text: 'The assistant must respect the same permissions as the rest of the app, so its context is limited to what the signed-in user can access.',
      },
    ],
    features: [
      'Authentication and role-based access control',
      'Institution management with activation and data isolation',
      'Academic years, levels, classes, subjects, teachers, students and parents',
      'Interactive schedules with conflict detection',
      'Evaluations, grade entry and academic follow-up',
      'Attendance with present / absent / late statuses',
      'Assignments and submissions',
      'Dashboards with PDF and Excel exports',
      'Internal messaging and notifications',
      'Finance foundation: fee types, invoices and payments',
      'Explainable student risk detection',
      'Context-restricted academic assistant',
    ],
    outcome:
      'Delivered as my final-year engineering project. The rule-based engine is the functional reference; the ML component remains experimental because its value depends on the amount of historical data available.',
  },
  {
    slug: 'builderz',
    title: 'Builderz',
    tagline: 'A Spring Boot backend for an AI-assisted automation platform.',
    category: 'Java Backend Engineering',
    context: 'Selected project',
    role: 'Backend developer',
    stack: ['Java', 'Spring Boot 3', 'Spring Security 6', 'Spring Data JPA', 'PostgreSQL', 'JWT', 'Keycloak', 'Swagger / OpenAPI', 'Docker', 'GitHub Actions'],
    screenshots: [],
    problem:
      'Teams lose time on repetitive operational tasks, and backends that automate them need solid authentication, clear API contracts and a reproducible delivery pipeline.',
    solution:
      'A Spring Boot backend exposing documented REST APIs, secured with JWT and Keycloak, with AI-assisted automation mechanisms, packaged with Docker and built through GitHub Actions.',
    contribution: [
      'Designed the Spring Boot backend architecture with REST APIs and JPA persistence.',
      'Implemented authentication and authorization with Spring Security, JWT and Keycloak.',
      'Documented the API with Swagger / OpenAPI.',
      'Built AI-assisted automation mechanisms to reduce repetitive tasks.',
      'Containerized the application with Docker and set up CI/CD with GitHub Actions.',
    ],
    architecture: [
      { title: 'API layer', text: 'Spring Boot REST controllers documented with OpenAPI.' },
      { title: 'Security', text: 'Spring Security 6 with JWT tokens and Keycloak as identity provider.' },
      { title: 'Persistence', text: 'Spring Data JPA over PostgreSQL.' },
      { title: 'Delivery', text: 'Docker images built and checked by GitHub Actions pipelines.' },
    ],
    choices: [
      'Keycloak delegates identity management to a dedicated provider instead of custom user/password code.',
      'OpenAPI keeps the contract explicit for any client consuming the API.',
      'Docker and CI make builds reproducible from the first commit.',
    ],
    challenges: [
      { title: 'Security configuration', text: 'Combining Spring Security 6, JWT validation and Keycloak roles into one consistent authorization model.' },
      { title: 'Pipeline', text: 'Keeping the containerized build and CI workflow in sync with the application configuration.' },
    ],
    features: ['REST APIs with JPA persistence', 'JWT + Keycloak authentication', 'Swagger / OpenAPI documentation', 'AI-assisted automation', 'Docker packaging', 'GitHub Actions CI/CD'],
    outcome: 'Evidence of my Java and Spring Boot backend work: security, API design, containerization and CI/CD.',
  },
  {
    slug: 'gleam-inspired-platform',
    title: 'Gleam.io-inspired Platform',
    tagline: 'A web platform for interactive campaigns and user engagement.',
    category: 'Full-Stack Web Application',
    context: 'Internship at Krenova',
    period: 'Jul 2025 – Aug 2025',
    role: 'Software Developer Intern',
    stack: ['React', 'Tailwind CSS', 'React Query', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'OpenAI API'],
    screenshots: [],
    problem:
      'Brands run engagement campaigns that depend on users completing actions across several social platforms, which requires authentication, external API integrations and an interactive interface.',
    solution:
      'A React and Node.js platform, inspired by Gleam.io, where campaigns are created and users take part in them, with social media integrations and AI-assisted functionality.',
    contribution: [
      'Developed interactive frontend features with React, Tailwind CSS and React Query.',
      'Implemented backend APIs with Node.js, Express.js and MongoDB.',
      'Worked on JWT authentication and authorization.',
      'Integrated social media APIs and explored AI-assisted features with the OpenAI API.',
    ],
    architecture: [
      { title: 'Frontend', text: 'React with Tailwind CSS; server state handled by React Query.' },
      { title: 'Backend', text: 'Express.js REST API on Node.js with MongoDB storage.' },
      { title: 'Integrations', text: 'JWT-based auth, social media APIs and the OpenAI API.' },
    ],
    choices: [
      'React Query removes hand-written caching and loading state for API data.',
      'A JavaScript stack end to end keeps types of data and tooling consistent between client and server.',
    ],
    challenges: [
      { title: 'External APIs', text: 'Each social platform has its own authentication flow, limits and response format.' },
      { title: 'Access control', text: 'Protecting campaign management and participation endpoints with JWT.' },
    ],
    features: ['Campaign interfaces', 'JWT authentication', 'Social media API integrations', 'AI-assisted functionality (OpenAI API)'],
    outcome: 'Hands-on experience with the JavaScript ecosystem and third-party API integration in a product setting.',
  },
  {
    slug: 'field-service-application',
    title: 'Field Service Application',
    tagline: 'Modernizing a field-service management application with React and ASP.NET Core.',
    category: 'Full-Stack Application',
    context: 'Internship at L-Mobile, Nabeul',
    period: 'Jul 2024 – Sep 2024',
    role: 'Full-Stack Developer Intern',
    stack: ['React', 'ASP.NET Core', 'C#', 'REST APIs', 'GitHub', 'Agile / Scrum'],
    screenshots: [],
    problem: 'An existing field-service management application needed a modernized interface and backend while keeping its business workflows intact.',
    solution: 'New React interfaces connected to ASP.NET Core services through REST APIs, delivered incrementally in Scrum sprints.',
    contribution: [
      'Developed React components for the modernized interface.',
      'Implemented backend functionality in ASP.NET Core.',
      'Integrated frontend screens with REST APIs.',
      'Worked with Git workflows and code reviews in an Agile/Scrum team.',
    ],
    architecture: [
      { title: 'Frontend', text: 'React components consuming the REST API.' },
      { title: 'Backend', text: 'ASP.NET Core Web API exposing the business operations.' },
    ],
    choices: ['A clear REST contract let the frontend and backend evolve in parallel during the modernization.'],
    challenges: [
      { title: 'Integration', text: 'Keeping frontend screens and backend endpoints aligned while both were being reworked.' },
      { title: 'Team workflow', text: 'Working inside an existing codebase with reviews and sprint planning.' },
    ],
    features: ['Modernized React interfaces', 'ASP.NET Core backend functionality', 'REST API integration'],
    outcome: 'My first full-stack experience in a professional team, from frontend components to backend endpoints.',
  },
];
