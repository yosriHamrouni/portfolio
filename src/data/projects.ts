// Single source of truth for project cards and case-study pages.

const caseStudies = [
  {
    title: 'School Management SaaS',
    subtitle: 'EduNova AI ERP',
    category: 'Full-Stack / AI',
    description: 'A comprehensive multi-tenant School Management SaaS platform designed to centralize academic and administrative operations.',
    problem: 'Schools struggle with fragmented systems — student records in one place, grades in another, communication scattered across emails and messaging apps. Teachers spend hours on manual administrative tasks instead of focusing on students. Decision-makers lack real-time visibility into student performance and risk indicators.',
    solution: 'EduNova AI ERP unifies all academic and administrative operations into a single multi-tenant platform. It provides student and teacher management, automated scheduling, grade tracking, attendance, and AI-powered features including explainable student-risk detection and a RAG chatbot for instant support.',
    role: 'Full-Stack Developer',
    context: 'Graduation Project — 6 months',
    whatItDoes: [
      'Multi-tenant architecture isolating school data',
      'Student risk detection using ML models with explainability',
      'RAG-powered AI chatbot for student and parent support',
      'Automated scheduling and timetable generation',
      'Real-time analytics dashboard for administrators',
      'Parent-teacher communication portal',
      'Grade management with automated calculations'
    ],
    architecture: [
      {
        number: '01',
        title: 'Tenant Management',
        description: 'Each school operates in complete isolation with its own database schema, users, and data. The system handles tenant identification, routing, and data separation automatically.'
      },
      {
        number: '02',
        title: 'AI Risk Detection',
        description: 'Machine learning models analyze student performance patterns to predict at-risk students. The explainable AI component provides teachers with actionable insights, not just predictions.'
      },
      {
        number: '03',
        title: 'RAG Chatbot',
        description: 'A retrieval-augmented generation system that answers student and parent questions by referencing the school\'s knowledge base, policies, and documentation.'
      },
      {
        number: '04',
        title: 'Frontend & API',
        description: 'React frontend with TypeScript, Inertia.js for seamless page transitions, Laravel backend with PostgreSQL database, and RESTful APIs for all operations.'
      }
    ],
    technologies: ['Laravel', 'React', 'Inertia.js', 'TypeScript', 'PostgreSQL', 'Spring AI', 'RAG', 'Ollama', 'Docker'],
    constraints: [
      'Multi-tenancy requires strict data isolation — a breach would affect an entire school\'s data',
      'AI predictions must be explainable to teachers who need to act on them responsibly',
      'The platform must handle varying amounts of data depending on school size',
      'Real-time features require efficient database queries to avoid slowdowns'
    ],
    whatILearned: [
      'Multi-tenant architecture is fundamentally different from single-tenant — data isolation must be baked into the design, not added later',
      'AI features are only valuable when they are explainable and actionable for end users',
      'The best architecture is one that grows with the product — EduNova was built to scale from 1 school to 100+',
      'RAG pipelines require careful attention to data quality and relevance tuning'
    ],
    screenshots: [
      '/project-imgs/project_demo_01.png',
      '/project-imgs/project_demo_05.png',
      '/project-imgs/project_demo_10.png',
      '/project-imgs/project_demo_20.png',
      '/project-imgs/project_demo_40.png',
      '/project-imgs/project_demo_60.png',
      '/project-imgs/project_demo_70.png',
      '/project-imgs/project_demo_81.png'
    ],
    link: 'https://github.com/yosriHamrouni/School-Management-SaaS',
    year: '2026',
    duration: '6 months',
  },
  {
    title: 'Builderz',
    subtitle: 'Enterprise Backend Application',
    category: 'Backend / Java',
    description: 'Enterprise backend demonstrating secure API architecture and automated CI/CD.',
    problem: 'Enterprise applications often struggle with consistent security practices, documentation gaps, and manual deployment processes that introduce errors.',
    solution: 'Builderz implements production-grade authentication with Keycloak, comprehensive OpenAPI documentation, and fully automated CI/CD pipelines.',
    role: 'Backend Developer',
    context: 'Portfolio Project — 3 months',
    whatItDoes: [
      'JWT authentication with Keycloak integration',
      'Swagger/OpenAPI auto-generated documentation',
      'Automated CI/CD with GitHub Actions',
      'Docker containerization for consistent deployments',
      'Enterprise security best practices implemented'
    ],
    architecture: [
      {
        number: '01',
        title: 'Authentication',
        description: 'Keycloak-managed JWT tokens with role-based access control and OAuth2 integration.'
      },
      {
        number: '02',
        title: 'API Layer',
        description: 'Spring Boot REST controllers with comprehensive validation and error handling.'
      },
      {
        number: '03',
        title: 'CI/CD Pipeline',
        description: 'GitHub Actions automates testing, building, and deployment on every push.'
      }
    ],
    technologies: ['Java', 'Spring Boot 3', 'Spring Security 6', 'JWT', 'Keycloak', 'Docker', 'GitHub Actions'],
    constraints: [
      'Authentication must follow enterprise security standards',
      'API documentation must stay synchronized with code changes'
    ],
    whatILearned: [
      'Security is not a feature — it is the foundation of every enterprise application',
      'Documentation as code ensures nothing falls through the cracks'
    ],
    screenshots: [],
    link: 'https://github.com/yosriHamrouni/Builderz',
    year: '2024',
    duration: '3 months',
  },
  {
    title: 'Gleam.io Clone',
    subtitle: 'Contest Management Platform',
    category: 'Full-Stack',
    description: 'Full-stack platform for managing online giveaways and social media engagement campaigns.',
    problem: 'Marketing teams need a simple way to create and manage contests across multiple social media platforms without building custom integrations.',
    solution: 'A Gleam.io clone that allows users to create contests, track entries from multiple social platforms, and automate winner selection.',
    role: 'Full-Stack Developer',
    context: 'Side Project — 2 months',
    whatItDoes: [
      'Social media API integrations (Instagram, Twitter, Facebook)',
      'Interactive contest creation wizard',
      'Real-time entry tracking and analytics',
      'AI assistant for contest description and strategy',
      'Automated winner selection with verification'
    ],
    architecture: [
      {
        number: '01',
        title: 'Frontend',
        description: 'React with Tailwind CSS for a responsive, interactive UI.'
      },
      {
        number: '02',
        title: 'Backend',
        description: 'Node.js Express API handling contest logic and social media integrations.'
      },
      {
        number: '03',
        title: 'Database',
        description: 'MongoDB storing contests, entries, and user data.'
      }
    ],
    technologies: ['React', 'Tailwind CSS', 'React Query', 'Node.js', 'Express', 'MongoDB', 'JWT', 'OpenAI'],
    constraints: [
      'Social media APIs have rate limits and require careful error handling',
      'Winner selection must be transparent and verifiable'
    ],
    whatILearned: [
      'Third-party API integrations require robust error handling and retry logic',
      'Real-time features add significant complexity that is often underestimated'
    ],
    screenshots: [],
    link: 'https://github.com/yosriHamrouni/Gleam-Clone',
    year: '2025',
    duration: '2 months',
  },
  {
    title: 'Field Service Management',
    subtitle: 'Enterprise Refactoring',
    category: 'Full-Stack / ASP.NET',
    description: 'Modernization of an enterprise field-service management application.',
    problem: 'Legacy field-service systems are often monolithic, slow, and difficult to maintain. Users complain about poor UX and outdated interfaces.',
    solution: 'Complete refactoring of the frontend to React with modern state management, while maintaining and optimizing the ASP.NET Core backend APIs.',
    role: 'Full-Stack Developer',
    context: 'Professional Experience — 4 months',
    whatItDoes: [
      'High-velocity REST APIs for field operations',
      'Refactored frontend with improved UX',
      'Agile/Scrum delivery methodology',
      'Performance optimization reducing load times by 40%'
    ],
    architecture: [
      {
        number: '01',
        title: 'Backend Migration',
        description: 'Legacy code restructured into modular ASP.NET Core services.'
      },
      {
        number: '02',
        title: 'Frontend Rewrite',
        description: 'React SPA replacing legacy jQuery-based interface.'
      }
    ],
    technologies: ['React', 'ASP.NET Core', 'C#', 'SQL Server', 'REST APIs'],
    constraints: [
      'Must maintain backward compatibility with existing data',
      'Zero downtime migration required for production system'
    ],
    whatILearned: [
      'Refactoring is harder than building from scratch — you must understand legacy code deeply',
      'User feedback during migration prevents rejection of the new system'
    ],
    screenshots: [],
    link: null,
    year: '2024',
    duration: '3 months',
  },
  {
    title: 'Hotel Management System',
    subtitle: 'Web Application',
    category: 'Early Project',
    description: 'A robust web application for hotel operations management.',
    problem: 'Small hotels often lack affordable management systems, relying on paper-based processes or expensive commercial solutions.',
    solution: 'A lightweight, self-hosted hotel management system covering bookings, guest management, and basic reporting.',
    role: 'Full-Stack Developer',
    context: 'Academic Project — 2 months',
    whatItDoes: [
      'Booking management with calendar view',
      'Guest information management',
      'Invoice and billing generation',
      'Room availability tracking'
    ],
    architecture: [
      {
        number: '01',
        title: 'Database Design',
        description: 'Relational schema with proper normalization for bookings, guests, and rooms.'
      },
      {
        number: '02',
        title: 'Laravel Backend',
        description: 'MVC architecture with Eloquent ORM and Blade templates.'
      }
    ],
    technologies: ['PHP', 'Laravel', 'MySQL'],
    constraints: [
      'Simple enough for non-technical hotel staff to use',
      'Must handle concurrent bookings correctly'
    ],
    whatILearned: [
      'Simplicity is harder than complexity — every feature must earn its place',
      'Database design choices made early have lasting impacts on the entire system'
    ],
    screenshots: [],
    link: null,
    year: '2022',
    duration: '2 months',
  },
];

const cardMeta: Record<string, { summary: string; features: string[]; featured: boolean; image?: string }> = {
  'school-management-saas': {
    summary: 'A multi-tenant School Management SaaS that centralizes academic and administrative operations — students, teachers, scheduling, grades and payments — with strict tenant isolation.',
    features: ['Explainable student-risk detection', 'RAG-powered AI chatbot', 'Multi-tenant architecture'],
    featured: true,
    image: '/project-imgs/project_demo_01.png',
  },
  builderz: {
    summary: 'Enterprise backend demonstrating secure API architecture and automated CI/CD, built for maintainability and industrial standards.',
    features: ['JWT + Keycloak auth', 'Swagger/OpenAPI', 'GitHub Actions CI/CD'],
    featured: false,
  },
  'gleam.io-clone': {
    summary: 'Full-stack platform for running online giveaways and social media engagement campaigns.',
    features: ['Social media APIs', 'Interactive React UI', 'AI assistant'],
    featured: false,
  },
  'field-service-management': {
    summary: 'Modernization of an enterprise field-service management application, improving performance and UX through modular refactoring.',
    features: ['REST API integration', 'Refactored React interfaces', 'Agile/Scrum delivery'],
    featured: true,
  },
  'hotel-management-system': {
    summary: 'A web application for hotel operations: bookings, guest records and an administrative panel.',
    features: ['Booking management', 'Database design', 'Admin panel'],
    featured: false,
  },
};

export const slugify = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

export const projects = caseStudies.map((study) => {
  const slug = slugify(study.title);
  return { ...study, slug, ...cardMeta[slug] };
});

export type Project = (typeof projects)[number];
