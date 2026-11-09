import awsBadge from '../../../assets/badge-aws-cloud-foundations.png';
import uxBootcampCert from '../../../assets/certificate-space-academy-ux-bootcamp.jpg';
import type { Content } from '../../../data/types';
import { projects } from './projects';

// Contenu en français. Mêmes faits que la version anglaise — rien d'ajouté.

export const content: Content = {
  role: 'Ingénieur logiciel full-stack',
  intro:
    'Ingénieur logiciel, diplômé de l’ESPRIT en 2026, avec un semestre d’échange au CESI en France. Pour mon projet de fin d’études, j’ai développé seul un SaaS multi-tenant de gestion scolaire (Laravel, React, PostgreSQL), avec un score de risque élève explicable et un assistant qui ne répond qu’à partir des données auxquelles l’utilisateur a accès. Il est aujourd’hui déployé et en phase pilote dans un établissement.',
  location: 'Nabeul, Tunisie',
  heroFacts: ['Diplôme d’ingénieur, ESPRIT 2026', 'Semestre d’échange, CESI Caen (France)', 'Basé à Nabeul, Tunisie'],

  pillars: [
    {
      title: 'Des fonctionnalités complètes, pas des moitiés',
      text: 'Je mène une fonctionnalité du schéma de base de données à l’API puis à l’interface, pour qu’elle soit livrée sans passage de relais. Laravel, Spring Boot, ASP.NET Core, Node.js · React, Angular.',
    },
    {
      title: 'Un contrôle d’accès bien fait',
      text: 'Isolation des données multi-tenant, rôles et permissions, authentification JWT : les parties d’un logiciel métier qui coûtent cher quand elles sont mal faites.',
    },
    {
      title: 'Une IA digne de confiance',
      text: 'Des assistants ancrés dans les données et les droits de l’utilisateur, des scores qui expliquent leurs raisons, et une solution de repli quand le modèle ou les données font défaut.',
    },
  ],

  lookingFor: [
    { label: 'Poste', value: 'Ingénieur logiciel full-stack (junior)' },
    { label: 'Points forts', value: 'Backend (Laravel, Spring Boot, ASP.NET Core) · React / TypeScript · intégration de LLM et RAG' },
    { label: 'Où', value: 'Tunisie · France · Télétravail' },
    { label: 'Disponibilité', value: 'Immédiate' },
  ],

  about: [
    'Ce que je préfère, c’est le parcours complet : comprendre comment les gens travaillent réellement, concevoir le modèle de données et les API, construire l’interface, puis ajouter de l’intelligence là où elle aide vraiment — comme un score de risque que les enseignants peuvent lire, ou un assistant qui ne voit que ce que l’utilisateur a le droit de voir.',
    'Je l’ai fait au cours de quatre stages, sur quatre stacks différentes. Chez **Maison du Web**, j’ai passé six mois à développer seul un SaaS multi-tenant de gestion scolaire (Laravel, React, Inertia.js, PostgreSQL), aujourd’hui déployé, en phase pilote dans un établissement et remis à l’entreprise. Chez **L-Mobile**, j’étais responsable de modules d’une application de gestion d’interventions en ASP.NET Core et React, dans une équipe de trois. Chez **Krenova**, j’ai développé une plateforme de campagnes en Node.js et React.',
    'J’ai suivi un cursus d’ingénieur en informatique à l’**ESPRIT** en Tunisie et passé un semestre d’échange au **CESI École d’Ingénieurs** à Caen, où j’ai co-écrit un projet de recherche en machine learning sur les variants génétiques. Travailler dans des équipes d’ingénieurs françaises m’a appris à passer facilement d’une langue et d’une façon de travailler à l’autre.',
    'En dehors du code, j’enseigne la guitare — ce qui m’a appris à expliquer clairement plus que n’importe quel cours.',
    'Je recherche mon premier poste en CDI d’ingénieur full-stack, en Tunisie, en France ou en télétravail.',
  ],

  experiences: [
    {
      company: 'Maison du Web',
      role: 'Stagiaire ingénieur logiciel full-stack · Projet de fin d’études (PFE)',
      period: 'févr. 2026 – août 2026',
      summary:
        'Projet de fin d’études de six mois, réalisé seul : un SaaS multi-tenant qui permet à plusieurs établissements de gérer élèves, classes, emplois du temps, notes, absences et paiements au même endroit, avec un score de risque élève explicable et un assistant qui respecte les droits d’accès. Déployé, en phase pilote dans un établissement et remis à Maison du Web.',
      contributions: [
        'Conception et développement des fonctionnalités métier : élèves, enseignants, classes, emplois du temps, notes, paiements et tableaux de bord administratifs.',
        'Développement d’API REST et de services applicatifs avec isolation des données entre tenants et contrôle d’accès basé sur les rôles.',
        'Conception d’un score de risque explicable à partir des notes, absences, retards et de la progression. Chaque résultat indique ses raisons, et les dossiers incomplets sont traités au lieu de produire des scores trompeurs.',
        'Intégration d’un assistant RAG sur un LLM local (Ollama) qui ne récupère que les données accessibles à l’utilisateur connecté, avec des réponses à base de règles en repli quand le modèle est indisponible.',
        'Travail en mode Agile avec Git, Taiga et PlantUML pour la conception, le suivi et la documentation technique.',
      ],
      stack: ['Laravel', 'React', 'Inertia.js', 'TypeScript', 'PostgreSQL', 'REST APIs', 'RAG'],
      project: 'school-management-saas',
      featured: true,
    },
    {
      company: 'Krenova Consulting',
      role: 'Stagiaire développeur logiciel',
      period: 'juil. 2025 – sept. 2025',
      summary: 'Stage ingénieur de deux mois, réalisé seul : une plateforme web dans l’esprit de Gleam.io, où des marques organisent des jeux-concours auxquels les participants s’inscrivent en accomplissant des actions sur les réseaux sociaux.',
      contributions: [
        'Développement de l’API REST Express sur MongoDB : campagnes avec actions intégrées valant des points, liens de partage et compteurs de participation atomiques.',
        'Mise en place de l’inscription et de la connexion avec mots de passe hachés par bcrypt, JWT et middleware de vérification du jeton.',
        'Développement de l’interface React avec Tailwind CSS : tableau de bord du créateur, éditeur de campagne et page de participation.',
      ],
      stack: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      project: 'gleam-inspired-platform',
    },
    {
      company: 'L-Mobile',
      role: 'Stagiaire développeur full-stack',
      period: 'juil. 2024 – sept. 2024',
      location: 'Nabeul, Tunisie',
      summary: 'Équipe de trois stagiaires chargée de refondre une application de gestion des interventions terrain (field service) avec ASP.NET Core (.NET 8) et React.',
      contributions: [
        'Développement de bout en bout du module Articles : modèles et migrations EF Core, DTO, contrôleurs REST et écrans React.',
        'Création de la structure commune de l’application (barre de navigation, menu latéral, page d’accueil) et de la gestion des utilisateurs avec connexion et inscription.',
        'Intégration de mon module avec le travail de l’équipe sur les dossiers d’intervention, et résolution des conflits de migrations de base de données.',
        'Collaboration via des branches de fonctionnalité Git et des revues de code, au sein d’une équipe Agile/Scrum.',
      ],
      stack: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'React', 'REST APIs'],
      project: 'field-service-application',
    },
    {
      company: 'VioreDigital',
      role: 'Stagiaire développeur Laravel',
      period: 'juil. 2022 – août 2022',
      location: 'Nabeul, Tunisie',
      summary: 'Premier stage : développement de fonctionnalités pour une application web de gestion hôtelière en Laravel et MySQL.',
      contributions: [],
      stack: ['PHP', 'Laravel', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    },
  ],

  education: [
    {
      school: 'ESPRIT — École Supérieure Privée d’Ingénierie et de Technologies',
      degree: 'Diplôme national d’ingénieur en Génie Informatique',
      period: '2021 – 2026',
      location: 'Tunisie',
      text: 'Génie logiciel, programmation orientée objet, algorithmique et structures de données, développement web, bases de données, architecture des applications, intelligence artificielle et gestion de projets logiciels.',
    },
    {
      school: 'CESI École d’Ingénieurs',
      degree: 'Semestre d’échange en génie logiciel (programme d’échange de l’ESPRIT)',
      period: 'févr. 2025 – juin 2025',
      location: 'Caen, France',
      text: 'Études dans une école d’ingénieurs française et travail en français au sein d’équipes projet multiculturelles. Co-auteur d’un projet de recherche en machine learning visant à prédire les variants génétiques pathogènes à partir de ClinVar, présenté sous forme de rapport de recherche et de poster scientifique.',
      project: 'ai-genetic-variants',
    },
  ],

  certifications: [
    {
      title: 'AWS Academy Graduate — Cloud Foundations',
      issuer: 'Amazon Web Services · AWS Academy',
      date: 'nov. 2025',
      note: 'Badge de formation · 20 heures',
      href: 'https://www.credly.com/badges/3160f154-785a-42e5-a350-139aeadf0768/public_url',
      hrefLabel: 'Vérifier sur Credly',
      image: awsBadge,
    },
    {
      title: 'CCNA: Switching, Routing, and Wireless Essentials',
      issuer: 'Cisco Networking Academy',
      href: 'https://www.credly.com/badges/176c0081-546f-4e46-b806-835f49f9ec06/public_url',
      hrefLabel: 'Vérifier sur Credly',
    },
    {
      title: 'TOEIC Listening & Reading — 795 / 990',
      issuer: 'ETS Global',
      date: 'mai 2025',
      note: 'Compréhension orale 420 (B2) · écrite 375 (B1) · valable jusqu’en mai 2027',
    },
    {
      title: 'Introduction to Front-End Development',
      issuer: 'Meta · Coursera',
      date: 'avr. 2023',
      note: 'Programme Meta Front-End Developer',
      href: 'https://coursera.org/verify/RJL97PPCEVTX',
      hrefLabel: 'Vérifier sur Coursera',
    },
    {
      title: 'Programming with JavaScript',
      issuer: 'Meta · Coursera',
      date: 'sept. 2023',
      note: 'Programme Meta Front-End Developer',
      href: 'https://coursera.org/verify/2GP7EKLCX9HR',
      hrefLabel: 'Vérifier sur Coursera',
    },
    {
      title: 'Version Control',
      issuer: 'Meta · Coursera',
      date: 'sept. 2023',
      note: 'Programme Meta Front-End Developer',
      href: 'https://coursera.org/verify/T2EVZYB2UBBQ',
      hrefLabel: 'Vérifier sur Coursera',
    },
    {
      title: 'Foundations of User Experience (UX) Design',
      issuer: 'Google · Coursera',
      date: 'févr. 2023',
      note: 'Programme Google UX Design',
      href: 'https://coursera.org/verify/TQ6GP9LMRRV8',
      hrefLabel: 'Vérifier sur Coursera',
    },
    {
      title: 'UX/UI Bootcamp',
      issuer: 'Space Academy',
      date: 'sept. 2023',
      note: 'Bootcamp en ligne de 12 semaines',
      href: uxBootcampCert,
      hrefLabel: 'Voir le certificat',
    },
  ],

  languages: [
    { name: 'Arabe', level: 'Langue maternelle' },
    { name: 'Français', level: 'Professionnel' },
    { name: 'Anglais', level: 'Professionnel (TOEIC 795, B2)' },
  ],

  activities: [
    {
      title: 'Professeur de guitare',
      org: 'Dimouzika Club, Nabeul',
      since: 'Depuis sept. 2023',
      text: 'Enseigner la guitare : expliquer clairement, rester patient, organiser les cours et travailler avec des personnes très différentes.',
    },
    {
      title: 'Bénévole',
      org: 'Croissant-Rouge tunisien',
      since: 'Depuis 2019',
    },
  ],

  skillGroups: [
    {
      name: 'Langages',
      core: ['Java', 'TypeScript', 'JavaScript', 'PHP', 'C#', 'Python', 'SQL'],
    },
    {
      name: 'Frontend',
      core: ['React', 'Angular', 'Inertia.js', 'React Query', 'Tailwind CSS', 'HTML5', 'CSS3'],
      also: ['Bootstrap', 'Angular Material'],
    },
    {
      name: 'Backend',
      core: ['Laravel', 'Spring Boot', 'Spring Security', 'ASP.NET Core', 'Entity Framework Core', 'Node.js', 'Express.js', 'Conception d’API REST', 'JWT et contrôle d’accès par rôles', 'Scoring explicable / moteurs de règles'],
      also: ['Symfony', 'Spring Cloud Gateway', 'Eureka'],
    },
    {
      name: 'Bases de données',
      core: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
    },
    {
      name: 'IA et IA générative',
      core: [
        'Intégration de LLM (Ollama, OpenAI API)',
        'Retrieval-Augmented Generation (RAG)',
        'Conception de prompts',
        'Machine learning avec scikit-learn',
        'Évaluation de modèles (précision, rappel, ROC)',
      ],
      exploring: ['IA agentique', 'Agents IA et appels d’outils (tool calling)'],
    },
    {
      name: 'Outils et DevOps',
      core: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'GitHub Actions', 'Swagger / OpenAPI', 'Postman'],
      also: ['Linux', 'Scripts shell'],
    },
    {
      name: 'Design et collaboration',
      core: ['Figma', 'Design UI/UX', 'Agile / Scrum', 'PlantUML / UML', 'Documentation technique'],
    },
  ],

  projects,
};
