// `core` = used in internships or projects; `also` = worked with, less central.
// No percentages or levels — they would be invented.

export type SkillGroup = {
  name: string;
  core: string[];
  also?: string[];
  /** Optional sub-group shown separately (used for "currently exploring"). */
  exploring?: string[];
};

export const skillGroups: SkillGroup[] = [
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
];
