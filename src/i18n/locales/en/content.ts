import awsBadge from '../../../assets/badge-aws-cloud-foundations.png';
import uxBootcampCert from '../../../assets/certificate-space-academy-ux-bootcamp.jpg';
import type { Content } from '../../../data/types';
import { projects } from './projects';

// English content. Every statement must be traceable to the CV, the master brief
// or a project's public README — no invented metrics, links or screenshots.

export const content: Content = {
  role: 'Full-Stack Software Engineer',
  intro:
    'Software engineer, ESPRIT 2026, with an exchange semester at CESI in France. For my final-year project I built a multi-tenant school management SaaS on my own (Laravel, React, PostgreSQL), with an explainable student-risk score and an assistant that only answers from data the user is allowed to see. It is now deployed and piloted with a school.',
  location: 'Nabeul, Tunisia',
  heroFacts: ['Engineering degree, ESPRIT 2026', 'Exchange semester, CESI Caen (France)', 'Based in Nabeul, Tunisia'],

  // The three things the site wants a visitor to remember.
  pillars: [
    {
      title: 'Complete features, not halves',
      text: 'I take a feature from database schema to API to interface, so it ships without hand-offs. Laravel, Spring Boot, ASP.NET Core, Node.js · React, Angular.',
    },
    {
      title: 'Access control done right',
      text: 'Multi-tenant data isolation, roles and permissions, JWT authentication: the parts of business software that are expensive to get wrong.',
    },
    {
      title: 'AI that users can trust',
      text: 'Assistants grounded in the user’s own data and permissions, scores that explain their reasons, and a fallback when the model or the data is not there.',
    },
  ],

  lookingFor: [
    { label: 'Role', value: 'Full-Stack Software Engineer (junior)' },
    { label: 'Strongest on', value: 'Backend (Laravel, Spring Boot, ASP.NET Core) · React / TypeScript · LLM & RAG integration' },
    { label: 'Where', value: 'Tunisia · France · Remote' },
    { label: 'Start', value: 'Immediately' },
  ],

  about: [
    'What I enjoy most is the whole path: understanding how people actually work, designing the data model and APIs, building the interface, then adding intelligence where it genuinely helps — like a risk score teachers can read, or an assistant that only sees what the user is allowed to see.',
    'I’ve done that in four internships, on four different stacks. At **Maison du Web** I spent six months building, on my own, a multi-tenant school management SaaS (Laravel, React, Inertia.js, PostgreSQL) that is now deployed, piloted with a school and handed over to the company. At **L-Mobile** I owned modules of a field-service app in ASP.NET Core and React, in a team of three. At **Krenova** I built a campaign platform in Node.js and React.',
    'I studied computer engineering at **ESPRIT** in Tunisia and spent an exchange semester at **CESI École d’Ingénieurs** in Caen, France, where I co-authored a machine-learning research project on genetic variants. Working in French engineering teams made me comfortable switching languages and ways of working.',
    'Outside code I teach guitar, which has taught me more about explaining things clearly than any course.',
    'I’m looking for my first full-time role as a full-stack engineer, in Tunisia, in France or remotely.',
  ],

  // Reverse-chronological.
  experiences: [
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
      company: 'Krenova Consulting',
      role: 'Software Developer Intern',
      period: 'Jul 2025 – Sep 2025',
      summary: 'Two-month engineering internship, built on my own: a web platform in the style of Gleam.io where brands run giveaway campaigns that participants enter by completing social-media actions.',
      contributions: [
        'Built the Express REST API on MongoDB: campaigns with embedded point-valued actions, shareable links and atomic participation counters.',
        'Implemented registration and login with bcrypt-hashed passwords, JWTs and a token middleware.',
        'Built the React interface with Tailwind CSS: creator dashboard, campaign builder and the participant entry page.',
      ],
      stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
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
  ],

  education: [
    {
      school: 'ESPRIT — École Supérieure Privée d’Ingénierie et de Technologies',
      degree: 'Engineering degree in Computer Science (Génie Informatique)',
      period: '2021 – 2026',
      location: 'Tunisia',
      text: 'Software engineering, object-oriented programming, algorithms and data structures, web development, databases, application architecture, artificial intelligence and software project management.',
    },
    {
      school: 'CESI École d’Ingénieurs',
      degree: 'Exchange semester in software engineering (ESPRIT exchange program)',
      period: 'Feb 2025 – Jun 2025',
      location: 'Caen, France',
      text: 'Studied in a French engineering school and worked in French in multicultural project teams. Co-authored a machine-learning research project predicting pathogenic genetic variants from ClinVar, delivered as a research report and a scientific poster.',
      project: 'ai-genetic-variants',
    },
  ],

  // Verified against the certificate files on Yosri's PC (2026-11-02). Coursera and
  // Credly links resolve to public verification pages. The TOEIC report is not linked
  // because it shows date of birth and ID number.
  certifications: [
    {
      title: 'AWS Academy Graduate — Cloud Foundations',
      issuer: 'Amazon Web Services · AWS Academy',
      date: 'Nov 2025',
      note: 'Training badge · 20 hours',
      href: 'https://www.credly.com/badges/3160f154-785a-42e5-a350-139aeadf0768/public_url',
      hrefLabel: 'Verify on Credly',
      image: awsBadge,
    },
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco Networking Academy',
      href: 'https://www.credly.com/badges/176c0081-546f-4e46-b806-835f49f9ec06/public_url',
      hrefLabel: 'Verify on Credly',
    },
    {
      title: 'TOEIC Listening & Reading — 795 / 990',
      issuer: 'ETS Global',
      date: 'May 2025',
      note: 'Listening 420 (B2) · Reading 375 (B1) · valid until May 2027',
    },
    {
      title: 'Introduction to Front-End Development',
      issuer: 'Meta · Coursera',
      date: 'Apr 2023',
      note: 'Meta Front-End Developer program',
      href: 'https://coursera.org/verify/RJL97PPCEVTX',
      hrefLabel: 'Verify on Coursera',
    },
    {
      title: 'Programming with JavaScript',
      issuer: 'Meta · Coursera',
      date: 'Sep 2023',
      note: 'Meta Front-End Developer program',
      href: 'https://coursera.org/verify/2GP7EKLCX9HR',
      hrefLabel: 'Verify on Coursera',
    },
    {
      title: 'Version Control',
      issuer: 'Meta · Coursera',
      date: 'Sep 2023',
      note: 'Meta Front-End Developer program',
      href: 'https://coursera.org/verify/T2EVZYB2UBBQ',
      hrefLabel: 'Verify on Coursera',
    },
    {
      title: 'Foundations of User Experience (UX) Design',
      issuer: 'Google · Coursera',
      date: 'Feb 2023',
      note: 'Google UX Design program',
      href: 'https://coursera.org/verify/TQ6GP9LMRRV8',
      hrefLabel: 'Verify on Coursera',
    },
    {
      title: 'UX/UI Bootcamp',
      issuer: 'Space Academy',
      date: 'Sep 2023',
      note: '12-week online bootcamp',
      href: uxBootcampCert,
      hrefLabel: 'View certificate',
    },
  ],

  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Professional' },
    { name: 'English', level: 'Professional (TOEIC 795, B2)' },
  ],

  activities: [
    {
      title: 'Guitar teacher',
      org: 'Dimouzika Club, Nabeul',
      since: 'Since Sep 2023',
      text: 'Teaching guitar: explaining ideas clearly, staying patient, organizing lessons and working with very different people.',
    },
    {
      title: 'Volunteer',
      org: 'Tunisian Red Crescent',
      since: 'Since 2019',
    },
  ],

  skillGroups: [
    {
      name: 'Languages',
      core: ['Java', 'TypeScript', 'JavaScript', 'PHP', 'C#', 'Python', 'SQL'],
    },
    {
      name: 'Frontend',
      core: ['React', 'Angular', 'Inertia.js', 'React Query', 'Tailwind CSS', 'HTML5', 'CSS3'],
      also: ['Bootstrap', 'Angular Material'],
    },
    {
      name: 'Backend',
      core: ['Laravel', 'Spring Boot', 'Spring Security', 'ASP.NET Core', 'Entity Framework Core', 'Node.js', 'Express.js', 'REST API design', 'JWT & role-based access', 'Explainable scoring / rule engines'],
      also: ['Symfony', 'Spring Cloud Gateway', 'Eureka'],
    },
    {
      name: 'Databases',
      core: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
    },
    {
      name: 'AI & Generative AI',
      core: [
        'LLM integration (Ollama, OpenAI API)',
        'Retrieval-Augmented Generation (RAG)',
        'Prompt design',
        'Machine learning with scikit-learn',
        'Model evaluation (precision, recall, ROC)',
      ],
      exploring: ['Agentic AI', 'AI agents & tool calling'],
    },
    {
      name: 'Tools & DevOps',
      core: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'GitHub Actions', 'Swagger / OpenAPI', 'Postman'],
      also: ['Linux', 'Shell scripting'],
    },
    {
      name: 'Design & collaboration',
      core: ['Figma', 'UI/UX design', 'Agile / Scrum', 'PlantUML / UML', 'Technical documentation'],
    },
  ],

  projects,
};
