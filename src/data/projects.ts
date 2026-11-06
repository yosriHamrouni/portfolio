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
    tagline: 'One platform for many schools, with data kept separate, an explainable student-risk score and an assistant that respects each user’s permissions.',
    category: 'Full-Stack SaaS · Applied AI',
    context: 'Final-year engineering project (PFE) at Maison du Web',
    period: 'Feb 2026 – Aug 2026',
    role: 'Full-Stack Software Engineering Intern · sole developer',
    stack: ['Laravel', 'PHP', 'React', 'TypeScript', 'Inertia.js', 'PostgreSQL', 'Tailwind CSS', 'Ollama', 'Python', 'Docker', 'GitHub Actions'],
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
      'Built the whole platform on my own, from database schema to interface: academic structure, students, teachers, classes, schedules, grades, attendance, payments and dashboards.',
      'Implemented REST APIs and Laravel services with tenant-aware authorization and data isolation per institution.',
      'Designed the explainable student risk detection engine, including fallback behaviour when data is incomplete.',
      'Integrated a RAG assistant running on a local LLM (Ollama): it retrieves only the records the signed-in user may access, and I wrote the prompt rules that keep answers grounded in that context.',
      'Set up Docker packaging and GitHub Actions workflows for linting and tests.',
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
        text: 'A rule-based engine computes an interpretable risk score with reasons; an experimental Python ML service can refine it. The assistant retrieves the grade, attendance and risk data in the user’s scope and sends it to a local Ollama model. If the model or the ML service is unavailable, the system falls back to the rules.',
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
        text: 'The assistant must respect the same permissions as the rest of the app. Retrieval is filtered by institution and role — a teacher only gets their own classes and subjects, a parent only their children — and the model is instructed to answer from that context only, and to say so when the answer is not there.',
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
      'Deployed, piloted with a school and handed over to Maison du Web at the end of my final-year project. The rule-based score is what the product relies on; the ML layer stays experimental until there is enough historical data to beat the rules — a trade-off I would make again.',
  },
  {
    slug: 'ai-genetic-variants',
    title: 'AI for Pathogenic Genetic Variants',
    tagline: 'Machine learning on 64,000 ClinVar variants to flag mutations that may cause disease.',
    category: 'Applied AI · Machine Learning',
    context: 'Research project (ADS) — CESI École d’Ingénieurs, Caen · team of two',
    period: 'Spring 2025',
    role: 'Co-author with Zakaria Rabih',
    stack: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Random Forest', 'ExtraTrees', 'Logistic Regression', 'cyvcf2', 'Matplotlib', 'Jupyter', 'ClinVar'],
    screenshots: [
      { src: '/project-imgs/ads-genetique/01-poster.webp', caption: 'Research poster presented at CESI' },
      { src: '/project-imgs/ads-genetique/02-roc-curves.webp', caption: 'ROC curves — Random Forest (AUC 0.74) vs logistic regression (AUC 0.58)' },
      { src: '/project-imgs/ads-genetique/03-confusion-logistic.webp', caption: 'Logistic regression collapses onto one class — the class-imbalance problem' },
    ],
    screenshotNote: 'Charts generated in the project notebooks; poster from the final presentation.',
    problem:
      'Deciding whether a genetic mutation is benign or pathogenic is central to precision medicine, but it is still largely manual: geneticists compare each variant against databases such as ClinVar. It is slow, costly and hard to scale to the volume of modern sequencing data.',
    solution:
      'We built and compared supervised models that classify ClinVar variants as benign or pathogenic, then documented what limits them and how to improve them, in a research report and a scientific poster.',
    contribution: [
      'Converted the ClinVar VCF file into a 64,533-row dataset with cyvcf2 (chromosome, position, ref/alt alleles, clinical significance, gene).',
      'Cleaned the clinical labels into benign and pathogenic, dropped uncertain variants, and derived variant type and length-difference features.',
      'Trained and compared Random Forest, logistic regression and ExtraTrees with scikit-learn on an 80/20 train/test split.',
      'Evaluated with precision, recall, F1, confusion matrices and ROC curves, and identified class imbalance as the main limitation.',
      'Wrote the research report and presented the results on a scientific poster.',
    ],
    architecture: [
      { title: 'Data extraction', text: 'ClinVar VCF parsed with cyvcf2 into a CSV of 64,533 variants.' },
      { title: 'Label cleaning', text: 'Clinical significance simplified to benign or pathogenic (likely-* included); uncertain variants removed, leaving about 30,000 labelled variants, roughly 80% benign.' },
      { title: 'Features', text: 'Genomic position and the length difference between reference and alternate alleles; variant type (SNP, insertion, deletion) derived for analysis.' },
      { title: 'Models & evaluation', text: 'Random Forest, logistic regression and class-balanced ExtraTrees, compared on 6,013 test variants with precision, recall, F1, confusion matrices and ROC/AUC.' },
    ],
    choices: [
      'Tree ensembles first: they handle unscaled, heterogeneous features and give a strong baseline quickly.',
      'Recall on the pathogenic class matters more than accuracy: missing a harmful variant is worse than a false alarm.',
      'Class weighting (ExtraTrees, class_weight = balanced) as the first answer to the 80/20 imbalance, before resampling such as SMOTE.',
    ],
    challenges: [
      { title: 'Class imbalance', text: 'Benign variants outnumber pathogenic ones about 4 to 1, so accuracy alone is misleading — logistic regression put every variant in a single class.' },
      { title: 'Thin features', text: 'Position and allele length say little about biology; conservation scores and functional annotations would be needed for clinical-grade predictions.' },
      { title: 'Noisy labels', text: 'ClinVar mixes conflicting and incomplete annotations, which had to be simplified before training.' },
    ],
    features: [
      'ClinVar VCF → CSV extraction pipeline',
      'Label cleaning and feature engineering',
      'Random Forest: 0.79 accuracy, AUC 0.74 — benign F1 0.87, pathogenic F1 0.45',
      'Class-balanced ExtraTrees: pathogenic recall raised from 0.44 to 0.67',
      'Model comparison with confusion matrices and ROC curves',
      'Research report and scientific poster',
    ],
    outcome:
      'Random Forest was the best overall model (accuracy 0.79, AUC 0.74) but detected under half of pathogenic variants; class-balanced ExtraTrees caught two thirds of them at the cost of overall accuracy. The next steps we identified are richer biological features (conservation scores, CADD, SIFT, PolyPhen), resampling such as SMOTE, cross-validation, and sequence models such as CNNs.',
  },
  {
    slug: 'field-service-application',
    title: 'Field Service Application',
    tagline: 'I owned the inventory and user modules, and the shared app shell, of a field-service app built by three interns in ASP.NET Core and React.',
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
      'Worked in Scrum with Git feature branches and code review.',
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
      'My first full-stack project in a professional team. What I would do differently: put authentication on the server from day one. I have since applied that in my own fork — hashed passwords, JWT authentication and server-side role checks.',
  },
  {
    slug: 'builderz',
    title: 'Builderz',
    tagline: 'A construction management platform I built on my own: an Angular front office and back office on a Spring Boot backend behind an API gateway.',
    category: 'Full-Stack · Java & Angular',
    context: 'Academic engineering project — ESPRIT',
    period: 'Feb 2025 – May 2025',
    role: 'Sole developer',
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
      'Built the whole platform: the Spring Boot backend (REST controllers, services, Spring Data JPA repositories) and the Angular front office and back office.',
      'Implemented JWT authentication and role-based authorization with Spring Security, behind a Spring Cloud Gateway with Eureka discovery and Resilience4j.',
      'Built the OpenAI-based analysis of project requests and the rule-based recommendation score.',
      'Integrated Stripe payment intents for bills, and wrote the Dockerfiles and Docker Compose setup that start the whole stack.',
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
      { title: 'Many modules, one platform', text: 'Eleven modules — requests, validation, tasks, stages, meetings, leave, advances, bills, offers, insurance, stock — designed to share one data model, one security layer and one interface.' },
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
      'Delivered as a working platform for my ESPRIT engineering project: an Angular app on a Spring Boot backend behind a gateway, with Stripe payments and OpenAI-assisted request analysis.',
  },
  {
    slug: 'gleam-inspired-platform',
    title: 'Social Campaign Platform',
    tagline: 'A Gleam.io-style giveaway platform: brands build a campaign from social actions worth points, share one link, and participants earn entries by completing them.',
    category: 'Full-Stack JavaScript (MERN)',
    context: 'Engineering internship at Krenova Consulting',
    period: 'Jul 2025 – Sep 2025',
    role: 'Software Developer Intern · sole developer',
    stack: ['React 18', 'Vite', 'React Router', 'Tailwind CSS', 'lucide-react', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt'],
    screenshots: [
      { src: '/project-imgs/gleam/01-dashboard.webp', caption: 'Creator dashboard — active campaigns, participants, recent and upcoming campaigns' },
      { src: '/project-imgs/gleam/02-competitions.webp', caption: 'Campaign list with actions, participants and time remaining' },
      { src: '/project-imgs/gleam/04-add-action.webp', caption: 'Adding an entry action: type, target and points' },
      { src: '/project-imgs/gleam/03-create-actions.webp', caption: 'Campaign builder with its list of required actions' },
      { src: '/project-imgs/gleam/05-participant-entry.webp', caption: 'Participant page — action checklist, entries and days left' },
      { src: '/project-imgs/gleam/06-login.webp', caption: 'Sign-in (JWT)' },
    ],
    screenshotNote: 'Captured from a local run of the original code with fictional campaigns.',
    video: {
      sources: [
        { src: '/project-media/gleam-demo-720.mp4', media: '(max-width: 900px)' },
        { src: '/project-media/gleam-demo-900.mp4' },
      ],
      poster: '/project-media/gleam-demo-poster.webp',
      duration: '0:37',
      chapters: [
        { label: 'Sign in', time: 0 },
        { label: 'Dashboard & campaigns', time: 3.5 },
        { label: 'Build a campaign', time: 8.7 },
        { label: 'Share link', time: 26.2 },
        { label: 'Participant entry', time: 28.5 },
        { label: 'Updated dashboard', time: 34.1 },
      ],
      note: 'Unedited screen recording of a local run with fictional data. No audio.',
    },
    problem:
      'Online giveaways are a cheap way for a brand to grow its audience: people follow an account, visit a site or subscribe to a channel in exchange for a chance to win. The tools that run them are often paid or complex, so Krenova asked for its own campaign platform in the spirit of Gleam.io.',
    solution:
      'A creator signs in, describes the campaign (dates, type, optional entry fee) and adds the actions participants must complete — follow on Instagram or X, subscribe on YouTube, visit a website, share a post or a custom action — each worth a number of points. Saving returns a share link. Participants open it, work through the actions as a checklist, and confirm; every completed action earns an extra entry, and the creator’s dashboard updates its counts.',
    contribution: [
      'Built the whole application on my own over the two-month internship, with guidance from my company supervisor.',
      'Express REST API: campaign listing, detail, creation with a URL slug, short code and share link, and an atomic participation endpoint that increments participants and entries in MongoDB.',
      'Authentication: registration and login with bcrypt-hashed passwords, 7-day JWTs, a Bearer-token middleware and a /me endpoint; the React side keeps the session in a context and guards the campaign builder.',
      'React interface: creator dashboard computed from live campaign data, campaign list, campaign builder with an action modal, share-link panel and the participant entry page.',
      'Mongoose models for users and campaigns, with actions embedded in the campaign document.',
    ],
    architecture: [
      { title: 'Client', text: 'React 18 single-page app on Vite with React Router: a sidebar layout for creators, a protected campaign builder and a public participant page. Tailwind CSS and lucide-react icons.' },
      { title: 'API', text: 'Express server split into routes, controllers, middleware and models, with CORS and JSON parsing, a health-check route and a fallback port if the default one is taken.' },
      { title: 'Auth', text: 'bcrypt password hashes and signed JWTs carrying the user id and role; a middleware verifies the Bearer token on protected routes.' },
      { title: 'Data', text: 'MongoDB through Mongoose. A campaign document holds its dates, type, fee, embedded actions (type, target, points, label) and counters for participants, entries and impressions.' },
    ],
    choices: [
      'JavaScript from database to browser: one language and JSON end to end, which suited a two-month build by one developer.',
      'Actions embedded in the campaign document: a campaign and its actions are always read and written together, so one query returns everything the participant page needs.',
      'Counters updated with MongoDB $inc, so simultaneous participations cannot overwrite each other.',
      'Stateless JWT authentication, so the API needs no session store.',
    ],
    challenges: [
      { title: 'One model, many actions', text: 'Instagram follows, YouTube subscriptions, website visits and custom tasks all had to fit one action shape (type, target, points) that the builder, the API and the participant page share.' },
      { title: 'Counting entries', text: 'More completed actions means more entries; the participation endpoint applies that count atomically so totals stay correct under concurrent submissions.' },
      { title: 'Two audiences, one app', text: 'Creators need an authenticated dashboard and builder; participants need a public page reachable from a shared link with no account.' },
    ],
    features: [
      'Registration and login with hashed passwords and JWT',
      'Creator dashboard: active campaigns, participants, recent and upcoming campaigns',
      'Campaign builder: dates, type (standard, quick draw, tournament, challenge), optional entry fee',
      'Six action types, each with a target and a points value',
      'Shareable campaign link with slug and short code',
      'Participant checklist with entries, total entries and days left',
    ],
    outcome:
      'A working full-stack prototype delivered on my own in two months. Two things were left for the next iteration: checking actions through the social networks’ official APIs instead of trusting the participant’s click, and the winner draw. If I rebuilt it, I would also make participation require a signed-in participant and record entries per person, so the same person cannot enter twice.',
  },
  warda,
];
