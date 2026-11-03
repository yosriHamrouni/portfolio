// Case studies. Every statement here must be traceable to the master brief, the CV
// or the project's public README — no invented metrics, links or screenshots.

import { warda } from './warda';

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
    tagline: 'A construction management platform with an Angular front office and back office, running on Spring Boot microservices.',
    category: 'Full-Stack · Microservices',
    context: 'Academic team project — ESPRIT',
    period: 'Feb 2025 – May 2025',
    role: 'Team member — engineering project',
    stack: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JWT', 'Spring Data JPA', 'MySQL', 'Spring Cloud Gateway', 'Eureka', 'Resilience4j', 'Docker Compose', 'Angular 17', 'Angular Material', 'Bootstrap', 'FullCalendar', 'Chart.js', 'Stripe', 'OpenAI API'],
    screenshots: [
      { src: '/project-imgs/builderz/01-home.webp', caption: 'Public website — home page' },
      { src: '/project-imgs/builderz/02-login.webp', caption: 'Sign-in' },
      { src: '/project-imgs/builderz/03-request-map.webp', caption: 'Request management — projects by status, located on a map' },
      { src: '/project-imgs/builderz/04-requests-list.webp', caption: 'Client project requests with budget, duration and location' },
      { src: '/project-imgs/builderz/05-tasks.webp', caption: 'Task list with status, priority, dates and assignee' },
      { src: '/project-imgs/builderz/06-tasks-kanban.webp', caption: 'Tasks as a kanban board — to do, in progress, done' },
      { src: '/project-imgs/builderz/07-meetings.webp', caption: 'Meetings calendar' },
      { src: '/project-imgs/builderz/08-advances.webp', caption: 'Employee advance requests' },
      { src: '/project-imgs/builderz/09-advance-stats.webp', caption: 'Advance request statistics' },
      { src: '/project-imgs/builderz/10-leave-requests.webp', caption: 'Leave requests with approval status' },
      { src: '/project-imgs/builderz/11-bills.webp', caption: 'Bill management with payment method and status' },
      { src: '/project-imgs/builderz/12-payment.webp', caption: 'Online bill payment form' },
      { src: '/project-imgs/builderz/13-offers.webp', caption: 'Offer management' },
      { src: '/project-imgs/builderz/14-insurance.webp', caption: 'Insurance management' },
    ],
    screenshotNote: 'Screenshots of the Builderz web app — public website and back office.',
    problem:
      'A construction project involves engineers, project managers, HR, employees and clients from site planning to delivery. Client requests, site tasks and stages, meetings, staff leave and salary advances, bills, offers, insurance and stock are usually tracked in separate tools, which makes collaboration and follow-up slow.',
    solution:
      'Builderz brings it into one platform. On the front office, clients submit project requests and employees manage their leave and advance requests. In the back office, staff review requests on a map by status, plan tasks and project stages, schedule meetings, approve HR requests and handle bills with online payment, offers, insurance and stock. An Angular app talks to Spring Boot services behind an API gateway.',
    contribution: [
      'Worked on the Spring Boot backend: REST controllers, services and Spring Data JPA repositories.',
      'Worked with JWT authentication and authorization built on Spring Security.',
      'Worked with the AI-assisted features that analyse project requests with the OpenAI API.',
      'Ran the stack with Docker and Docker Compose.',
    ],
    architecture: [
      { title: 'Angular front end', text: 'Angular 17 front office for clients and employees, and a back office for staff, with Angular Material, Bootstrap, FullCalendar and Chart.js.' },
      { title: 'API gateway & discovery', text: 'Spring Cloud Gateway as the single entry point, Eureka for service discovery, Resilience4j circuit breaker and retries.' },
      { title: 'Backend service', text: 'Spring Boot 3 REST API with controllers, services and repositories per module, JWT security and email notifications.' },
      { title: 'Data', text: 'Spring Data JPA over MySQL.' },
      { title: 'Integrations', text: 'Stripe payment intents for bills; OpenAI (GPT-3.5) to analyse project request descriptions, plus a rule-based recommendation score.' },
      { title: 'Delivery', text: 'Dockerfiles and Docker Compose running MySQL, Eureka, the backend and the gateway together.' },
    ],
    choices: [
      'An API gateway with Eureka gives the Angular app one entry point while services are found by name.',
      'Stateless JWT authentication fits a gateway in front of several services.',
      'Stripe payment intents keep card data out of the platform.',
      'Docker Compose starts the whole stack — database, registry, backend and gateway — with one command.',
    ],
    challenges: [
      { title: 'Many modules, one platform', text: 'Ten modules — requests, validation, tasks, stages, meetings, leave, advances, bills, offers, insurance, stock — built in parallel on feature branches and merged into one app.' },
      { title: 'Security across services', text: 'Combining Spring Security, JWT validation and role-based access behind an API gateway.' },
      { title: 'Payments', text: 'Creating Stripe payment intents for bills and handling the payment result in the front end.' },
    ],
    features: [
      'Sign-up with email verification and password reset',
      'Client project requests with AI analysis and a recommendation score',
      'Request management — pending, approved and rejected projects on a map',
      'Tasks as a list and a kanban board, and project stages',
      'Meetings calendar',
      'Leave and salary-advance requests with documents, approval and charts',
      'Bills with Stripe payment and payment history',
      'Offers, insurance and stock management',
    ],
    outcome:
      'An ESPRIT engineering team project delivered as a working platform: an Angular app on Spring Boot microservices behind a gateway, with Stripe payments and OpenAI-assisted request analysis.',
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
    tagline: 'A service-management web app built by a team of three interns with ASP.NET Core (.NET 8) and React.',
    category: 'Full-Stack Application',
    context: 'Team internship project at L-Mobile, Nabeul (3 interns)',
    period: 'Jul 2024 – Sep 2024',
    role: 'Full-Stack Developer Intern',
    stack: ['C#', 'ASP.NET Core (.NET 8)', 'Entity Framework Core', 'SQL Server', 'Swagger / OpenAPI', 'React 18', 'Vite', 'axios', 'Bootstrap', 'MUI'],
    repoNote: 'Team repository — public link coming soon',
    screenshots: [
      { src: '/project-imgs/field-service/03-articles.webp', caption: 'Articles inventory (my module)' },
      { src: '/project-imgs/field-service/04-article-form.webp', caption: 'New article form (my module)' },
      { src: '/project-imgs/field-service/02-home.webp', caption: 'Dashboard — orders by service type and invoicing type' },
      { src: '/project-imgs/field-service/05-orders.webp', caption: 'Service orders' },
      { src: '/project-imgs/field-service/06-order-detail.webp', caption: 'Service order details' },
      { src: '/project-imgs/field-service/07-case-detail.webp', caption: 'Service case details' },
      { src: '/project-imgs/field-service/08-installations.webp', caption: 'Customer installations' },
      { src: '/project-imgs/field-service/01-login.webp', caption: 'Sign-in' },
    ],
    screenshotNote: 'Captured from a local run of the original code with fictional sample data.',
    problem:
      'Field-service teams juggle service orders, service cases, customer installations, spare parts and invoicing. The internship goal was to rebuild a field-service management application on a modern stack, with each intern owning part of the domain.',
    solution:
      'A layered ASP.NET Core Web API (controllers, DTOs and mappers over Entity Framework Core models) on SQL Server, documented with Swagger, and a React + Vite client with role-based navigation for admins and technicians. The three of us split the work by module on feature branches and merged into a shared main.',
    contribution: [
      'Built the Articles / Items module end to end: Article, ItemType and BarcodeType models, EF Core migrations, DTOs and mappers, REST controllers, and React screens to list, create, view, edit and delete items.',
      'Created the application shell used by every module: navigation bar, sidebar and home page.',
      'Added the Users feature: user model and migrations, a users API with create, read, update, delete and login, and the sign-in / sign-up screens.',
      'Integrated my Articles module with the team’s Service case work and resolved the conflicting database migrations during the merge.',
      'Worked in an Agile/Scrum setup with Git feature branches — about 10 of the project’s 36 commits.',
    ],
    architecture: [
      { title: 'Client', text: 'React 18 + Vite with React Router and axios; Bootstrap and MUI components; separate navigation for admins and technicians.' },
      { title: 'API', text: 'ASP.NET Core Web API on .NET 8, one controller per module, Swagger UI in development.' },
      { title: 'Mapping layer', text: 'Request/response DTOs and mapper extension methods keep the database models out of the API contract.' },
      { title: 'Data', text: 'Entity Framework Core code-first models and migrations on SQL Server.' },
    ],
    choices: [
      'DTOs + mappers: each module exposes a stable API shape even when its entity changes.',
      'EF Core code-first migrations let each intern evolve their own tables in the same database.',
      'Swagger made it possible to test endpoints before the React screens existed.',
    ],
    challenges: [
      { title: 'Merging parallel work', text: 'Separate branches produced conflicting EF Core migrations; merging Articles with Service cases meant consolidating them into a consistent schema.' },
      { title: 'A shared shell', text: 'The navigation bar and sidebar had to work for every module the team was building at the same time.' },
      { title: 'New ecosystem', text: 'First real project in C# and .NET: dependency injection, EF Core and the ASP.NET Core request pipeline.' },
    ],
    features: [
      'Service orders and order management',
      'Service cases with categories, objects, elements, checklists and skills',
      'Companies and master data',
      'Installations',
      'Invoicing',
      'Articles / items with item and barcode types',
      'Users with roles (admin, technician)',
      'Dashboard charts by service type and invoicing type',
    ],
    outcome:
      'My first full-stack project in a professional team. Looking back, authentication was the weak spot of this prototype — passwords were not hashed and roles were trusted on the client — so I am hardening my fork with hashed passwords, JWT authentication and role-based authorization.',
  },
  warda,
];
