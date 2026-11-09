// Case studies. Every statement here must be traceable to the master brief, the CV
// or the project's public README — no invented metrics, links or screenshots.

import type { Project } from '../../../data/types';
import { warda } from './warda';

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
    tagline: 'A Gleam.io-style giveaway platform: brands build a campaign from social actions worth entries, share one link, and draw winners in a lottery weighted by entries.',
    category: 'Full-Stack JavaScript (MERN)',
    context: 'Engineering internship at Krenova Consulting · revised in 2026',
    period: 'Jul 2025 – Sep 2025',
    role: 'Software Developer Intern · sole developer',
    stack: ['React 18', 'Vite', 'React Router', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'node:test'],
    repo: 'https://github.com/yosriHamrouni/gleam-campaign-platform',
    screenshots: [
      { src: '/project-imgs/gleam/01-dashboard.webp', caption: 'Creator dashboard — active campaigns, participants, entry rate and campaigns ready to draw' },
      { src: '/project-imgs/gleam/02-competitions.webp', caption: 'Campaign list with status tabs, views, participants, entries and entry rate' },
      { src: '/project-imgs/gleam/03-builder.webp', caption: 'Campaign builder — prize, winners, dates and the actions that earn entries' },
      { src: '/project-imgs/gleam/04-manage-draw.webp', caption: 'Manage page after a draw — share link, participants with their odds, winners' },
      { src: '/project-imgs/gleam/05-participant.webp', caption: 'Participant page after entering — completed actions and saved entries' },
      { src: '/project-imgs/gleam/06-public-winners.webp', caption: 'Public page once the winners are drawn' },
    ],
    screenshotNote: 'Captured from a local run of the public repository with fictional demo data.',
    video: {
      sources: [
        { src: '/project-media/gleam-demo-720.mp4', media: '(max-width: 900px)' },
        { src: '/project-media/gleam-demo-900.mp4' },
      ],
      poster: '/project-media/gleam-demo-poster.webp',
      duration: '0:46',
      chapters: [
        { label: 'Creator sign-in', time: 0 },
        { label: 'Dashboard', time: 5.1 },
        { label: 'Build a campaign', time: 10.6 },
        { label: 'Share link', time: 23.3 },
        { label: 'Draw winners', time: 25.8 },
        { label: 'Participant enters', time: 31.4 },
      ],
      note: 'Unedited screen recording of a local run with fictional data. No audio.',
    },
    problem:
      'Online giveaways are a cheap way for a brand to grow its audience: people follow an account, visit a site or subscribe to a channel in exchange for a chance to win. The tools that run them are often paid or complex, so Krenova asked for its own campaign platform in the spirit of Gleam.io.',
    solution:
      'A creator builds a campaign (prize, dates, number of winners) from actions such as following on Instagram or X, subscribing on YouTube, visiting a site or sharing a post, each worth a number of entries. The campaign gets a public link. Participants open it, complete the actions and enter; entering again updates their entry instead of adding a second one. When the campaign ends, the creator draws the winners at random, weighted by entries, and they appear on the public page.',
    contribution: [
      'Internship (2025): built the whole application on my own over two months, with guidance from my company supervisor: the Express REST API on MongoDB, JWT authentication with bcrypt, and the React creator dashboard, campaign builder and participant page.',
      '2026 revision: one entry per participant, enforced by a unique index on competition and user. The server computes entries from the actions it knows, so a client cannot inflate its count.',
      '2026 revision: the winner draw, weighted by entries and without replacement, using crypto.randomInt. It runs once and the result is stored.',
      '2026 revision: ownership checks on every management route, input validation, a central error handler, and a fix for a hole that let a sign-up request choose the admin role.',
      '2026 revision: rebuilt the React app around its two audiences (a public campaign page outside the creator area, and a manage page with participants and the draw) and fixed the bug that wiped the campaign title after entering.',
      '2026 revision: unit tests for validation, entry counting and the draw; a seed script; a README covering the API and the design decisions.',
    ],
    architecture: [
      { title: 'Client', text: 'React 18 on Vite with React Router: a protected creator area (dashboard, list, builder, manage page) and a public campaign page. One fetch wrapper talks to the API through the Vite proxy. Tailwind CSS.' },
      { title: 'API', text: 'Express split into routes, controllers, middleware and models, with required and optional JWT middleware and an error handler that always returns { message, errors }.' },
      { title: 'Business rules', text: 'Validation, entry counting and the weighted draw live in one module with no Express or MongoDB imports, so they are unit-tested directly with node:test.' },
      { title: 'Data', text: 'MongoDB through Mongoose: users, competitions with embedded actions and winners, and one Entry document per participant. Campaign totals are recomputed from the entries.' },
    ],
    choices: [
      'JavaScript from database to browser: one language and JSON end to end.',
      'Actions embedded in the campaign document, so the public page gets everything it needs in one query.',
      'Entries in their own collection with a unique index: entering twice becomes an update, and totals are recomputed from the entries instead of incremented.',
      'The client sends only the ids of the completed actions; the server adds up the points.',
      'Stateless JWT authentication, so the API needs no session store.',
    ],
    challenges: [
      { title: 'One model, many actions', text: 'Instagram follows, YouTube subscriptions, website visits and custom tasks all had to fit one action shape (type, target, entries) shared by the builder, the API and the public page.' },
      { title: 'Counting entries fairly', text: 'The first version incremented a counter each time someone confirmed, so the same person could enter again and again. Moving entries into their own collection, one per participant, fixed that and made a draw possible.' },
      { title: 'A draw people can trust', text: 'Each participant’s chance is proportional to their entries, nobody can win twice, and the result is stored once so it cannot be re-rolled.' },
      { title: 'Two audiences, one app', text: 'Creators need a signed-in dashboard; participants need a public page reachable from a shared link, and only sign in when they enter.' },
    ],
    features: [
      'Registration and login with hashed passwords and JWT',
      'Campaign builder: prize, type, dates, number of winners, cover image',
      'Six action types, each worth 1–100 entries',
      'Public campaign page and share link; ticked actions survive sign-in',
      'One entry per participant, updated when they complete more actions',
      'Weighted winner draw, shown on the public page',
      'Dashboard and list by status: active, scheduled, ready to draw, drawn',
      'Manage page: views, participants, odds of winning, delete',
    ],
    outcome:
      'The internship version was a working prototype, delivered on my own in two months. In 2026 I revisited it and published it: it now counts one entry per person, draws winners fairly, checks ownership on every management route and has tests. Still missing: checking actions through the social networks’ official APIs instead of trusting the participant’s click, and emailing the winners.',
  },
  {
    slug: 'haya-trip',
    title: 'Haya Trip',
    tagline: 'A Qt/C++ desktop back office for a travel agency — employees, clients, trips and reservations on Oracle, with charts, PDF and Excel exports, QR codes, email and an Arduino link.',
    category: 'Desktop Application · C++ & Qt',
    context: 'Second-year team project (class 2A28) — ESPRIT',
    period: 'Autumn 2022',
    role: 'Team member · Employees module, Arduino link and module integration',
    stack: ['C++', 'Qt 5.9', 'Qt Widgets', 'Qt SQL', 'Oracle Database XE', 'ODBC', 'Qt Charts', 'QCustomPlot', 'Qt SerialPort', 'Arduino', 'Qt Multimedia', 'Qt Network (SMTP)'],
    repo: 'https://github.com/yosriHamrouni/haya-trip',
    screenshots: [
      { src: '/project-imgs/haya-trip/01-employees.webp', caption: 'Employees — edit form, employee table, PDF / Excel export, search and sort (my module)' },
      { src: '/project-imgs/haya-trip/02-employee-form.webp', caption: 'Adding an employee, with a photo (my module)' },
      { src: '/project-imgs/haya-trip/03-salary-chart.webp', caption: 'Salary statistics — Qt Charts pie chart (my module)' },
      { src: '/project-imgs/haya-trip/04-arduino-access.webp', caption: 'Access tab — Accept and Refuse send 1 or 0 to the Arduino (my part)' },
      { src: '/project-imgs/haya-trip/05-trips.webp', caption: 'Trips — table, sorting, PDF, QR code and French / English toggle' },
      { src: '/project-imgs/haya-trip/06-destination-stats.webp', caption: 'Most visited destinations — bar chart' },
      { src: '/project-imgs/haya-trip/07-clients.webp', caption: 'Clients — table, search, update and PDF' },
      { src: '/project-imgs/haya-trip/08-client-chart.webp', caption: 'Clients with and without an appointment' },
      { src: '/project-imgs/haya-trip/09-reservations.webp', caption: 'Reservations — form, sorting, search, mailing, PDF export and history log' },
      { src: '/project-imgs/haya-trip/10-reservation-amounts.webp', caption: 'Reservation amounts by ID — QCustomPlot bar chart' },
      { src: '/project-imgs/haya-trip/11-before-after.webp', caption: 'Before and after the 2026 interface refresh' },
    ],
    screenshotNote: 'Captured from the app after the 2026 interface refresh, running on its SQLite demo database with fictional data. The last image compares it with the 2022 interface.',
    problem:
      'A travel agency keeps its staff, customers, trips and bookings in separate places. Day-to-day work — adding a booking, finding a customer, producing a list for a manager — is slow and error-prone without one tool on top of a shared database.',
    solution:
      'One Qt desktop application with a tab per business area — employees, clients, trips and reservations — all reading and writing the same Oracle database through ODBC. Each module offers create, update, delete, search and sort, plus statistics and exports, and the app talks to an Arduino board over a serial port.',
    contribution: [
      'Built the Employees module: Employe class with create, read, update and delete through Qt SQL, search, sort by ID, name or salary, employee photo selection, and a Qt Charts pie chart of salaries above and below 2,000 dinars.',
      'Added the employee exports: a PDF list generated with QPrinter and QTextDocument, and an Excel export of the table view.',
      'Wrote the Arduino link: detects an Arduino Uno by its USB vendor and product IDs, opens the serial port at 9600 baud, and an access tab whose Accept and Refuse buttons send 1 or 0 to the board while incoming data is shown in the window.',
      'Integrated the team’s four modules into a single Qt project, main window and database connection.',
      'In 2026, refreshed the interface for publication: one application stylesheet instead of 120+ inline styles, consistent charts, fixes to the QR code and Arduino displays, a SQLite demo database so it runs anywhere, and credentials and machine-specific paths removed from the code.',
    ],
    architecture: [
      { title: 'Interface', text: 'Qt Widgets main window built in Qt Designer: one top-level tab per module, each with its own sub-tabs (add, edit, statistics), plus dialogs for mailing and statistics.' },
      { title: 'Domain classes', text: 'One C++ class per entity — Employe, Client, voyage, reservation — each holding its fields and its own SQL operations, returning QSqlQueryModel objects that the table views display directly.' },
      { title: 'Data', text: 'Oracle Database XE reached through the Qt ODBC driver; one connection opened at start-up and shared by every module.' },
      { title: 'Hardware & services', text: 'Qt SerialPort for the Arduino, a small SMTP client over SSL for email, QR code generation for trips, and Qt Multimedia for the webcam viewfinder.' },
    ],
    choices: [
      'Qt Widgets + Qt Designer: native forms and table views without writing layout code by hand.',
      'QSqlQueryModel bound to QTableView: a query result is displayed, sorted or filtered by swapping the model.',
      'A class per entity kept each team member’s module and SQL in its own files, which made integration possible.',
    ],
    challenges: [
      { title: 'Merging four modules', text: 'Each member built a module separately; bringing them into one .pro file, one main window and one database connection meant reconciling Qt module dependencies and widget names.' },
      { title: 'Talking to hardware', text: 'Finding the right serial port automatically and keeping the interface responsive by reacting to the port’s readyRead signal instead of polling.' },
      { title: 'What I fixed, and what is left', text: 'The mail account’s credentials were written in the source; the 2026 refresh moved them, and the database login, to environment variables. Several queries still build SQL by string concatenation — the next fix is to bind every parameter.' },
    ],
    features: [
      'Employees, clients, trips and reservations: add, edit, delete, search and sort',
      'Salary pie chart (Qt Charts) and reservation amounts bar chart (QCustomPlot)',
      'PDF exports for employees, clients, trips and reservations',
      'Excel export of the employee table',
      'QR code generated for a selected trip',
      'Email to a client from the app (SMTP over SSL)',
      'French / English toggle on the trips screen',
      'Reservation history log written to a text file',
      'Arduino access control over a serial port',
    ],
    outcome:
      'Delivered and demonstrated as the team’s second-year integration project. It was my first large C++ codebase and my first time wiring software to hardware; it also taught me, the hard way, why parameterised queries and keeping secrets out of the code matter.',
  },
  {
    slug: 'collocstudy',
    title: 'CollocStudy — News Feed',
    tagline: 'The news feed of a JavaFX desktop app for student life: posts with images, likes, comments with a profanity filter, an engagement chart and webcam photo capture, on MySQL.',
    category: 'Desktop Application · Java & JavaFX',
    context: 'Academic project — ESPRIT',
    period: 'Apr 2024 – May 2024',
    role: 'Developer of the news feed module',
    stack: ['Java 17', 'JavaFX 21', 'FXML', 'CSS', 'JDBC', 'MySQL', 'Maven', 'webcam-capture'],
    repo: 'https://github.com/yosriHamrouni/CollocStudyJava',
    screenshots: [
      { src: '/project-imgs/collocstudy/01-feed.webp', caption: 'News feed: a post with its image, reactions and the like / comment / share bar' },
      { src: '/project-imgs/collocstudy/02-comments.webp', caption: 'Comment window for a post: list, add and delete' },
      { src: '/project-imgs/collocstudy/03-back-office.webp', caption: 'Back office: post moderation with a delete button on each post' },
      { src: '/project-imgs/collocstudy/04-engagement-stats.webp', caption: 'Engagement chart: posts grouped by like count' },
      { src: '/project-imgs/collocstudy/05-home.webp', caption: 'App home screen with the module menu' },
    ],
    screenshotNote: 'Captured from a local run with fictional posts and comments, after I redesigned the interface in November 2026.',
    problem:
      'CollocStudy is a desktop app for students: its menu groups housing, coworking spaces, restaurants, offers and activities. Students also needed one place to share news, photos and announcements with each other, and staff needed a way to moderate what gets posted.',
    solution:
      'A news feed module with two sides. In the front office, a student publishes a post with text and an image, likes it, comments on it and edits it. In the back office, staff see every post, delete posts and their comments, and read an engagement chart. Comments pass through a profanity filter before they are saved, and a webcam screen can take a photo for a post.',
    contribution: [
      'Built the news feed module: Posts and Comments entities, a generic IService<T> interface, and ServicePosts / ServiceComments over JDBC with a singleton MySQL connection.',
      'Front office in FXML: feed with one card per post, post creation with an image picked through a FileChooser, post editing, and a comment window to add and delete comments.',
      'Likes: clicking the reaction bar toggles a like, updates the counter in MySQL on a background JavaFX Task and refreshes the label on the UI thread.',
      'Profanity filter: normalises leetspeak (1 → i, 3 → e, @ → a…), strips non-letters, matches against a word list with false-positive exceptions, and replaces matches with asterisks.',
      'Back office: post list with delete (comments removed first, then the post), comment moderation, and a PieChart that groups posts into high, moderate and low engagement by like count.',
      'Webcam screen: lists the connected cameras, streams the selected one into an ImageView on a daemon thread, and saves a captured frame as a PNG.',
    ],
    architecture: [
      { title: 'Interface', text: 'JavaFX 21 views written in FXML and styled with CSS, split into front_office and back_office folders. A post card is its own FXML loaded once per post.' },
      { title: 'Controllers', text: 'One controller per view — feed, post card, comments, edit, back-office list, stats, webcam — that calls the services and opens secondary windows.' },
      { title: 'Services', text: 'A generic IService<T> interface (add, edit, delete, list, likes, comments) implemented by ServicePosts, plus ServiceComments for comment queries.' },
      { title: 'Data', text: 'MySQL through JDBC: a publication table (title, content, image file, likes) and a comment table linked to it by publication_id. One shared connection from a singleton.' },
    ],
    choices: [
      'FXML views: layouts live in their own files, out of the Java code.',
      'A generic IService<T> interface gives every entity the same set of operations.',
      'Database calls for likes run in a JavaFX Task, so the interface does not freeze while MySQL answers.',
    ],
    challenges: [
      { title: 'Filtering without false positives', text: 'A naive filter would censor innocent words that contain a bad one. Each word in the list carries the combinations to ignore, and leetspeak is normalised before matching.' },
      { title: 'Threads in JavaFX', text: 'The webcam stream and the like counter work off the UI thread; every update to the interface goes back through Platform.runLater.' },
      { title: 'What I would fix today', text: 'Adding a post builds SQL by string concatenation, the profanity list is downloaded again for every comment, the stats query closes the shared connection, and the photo folder is a hard-coded path. I would bind every parameter, load the word list once at start-up, manage connections properly and read paths from configuration.' },
    ],
    features: [
      'Create, edit and delete posts, with an optional image',
      'Like and unlike with a live counter',
      'Comments per post: add, list and delete',
      'Profanity filter with leetspeak handling',
      'Back office: post and comment moderation',
      'Engagement pie chart (high, moderate, low)',
      'Webcam preview and photo capture',
    ],
    outcome:
      'A working news feed module for CollocStudy and my first JavaFX application. It is where I learned to keep blocking work off the UI thread — and, looking back at the code, why queries must be parameterised and why a shared database connection should not be closed by one screen.',
  },
  warda,
];
