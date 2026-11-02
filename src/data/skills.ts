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
    core: ['Java', 'TypeScript', 'JavaScript', 'PHP', 'Python'],
    also: ['C', 'C++'],
  },
  {
    name: 'Frontend',
    core: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    also: ['Angular', 'Bootstrap'],
  },
  {
    name: 'Backend',
    core: ['Laravel', 'Spring Boot', 'ASP.NET Core', 'Node.js', 'Express.js', 'REST API design'],
    also: ['Symfony'],
  },
  {
    name: 'Databases',
    core: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    name: 'AI & Generative AI',
    core: [
      'LLM integration',
      'Retrieval-Augmented Generation (RAG)',
      'OpenAI API',
      'Explainable rule-based systems',
      'AI-assisted workflows',
    ],
    exploring: ['Agentic AI', 'AI agents & tool calling'],
  },
  {
    name: 'Tools & DevOps',
    core: ['Git', 'GitHub', 'Docker', 'GitHub Actions', 'Swagger / OpenAPI', 'Postman'],
    also: ['Linux', 'Shell scripting'],
  },
  {
    name: 'Design & collaboration',
    core: ['Figma', 'UI/UX design', 'Agile / Scrum', 'Technical documentation'],
  },
];
