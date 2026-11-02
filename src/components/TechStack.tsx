import SectionHeader from './SectionHeader';
import { stagger } from '../lib/motion';

const techCategories = [
  {
    name: 'Frontend',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Inertia.js', 'Angular'],
    span: 'lg:col-span-4',
  },
  {
    name: 'Backend',
    technologies: ['Java / Spring Boot', 'PHP / Laravel', 'Node.js / Express', 'C# / ASP.NET Core', 'Python'],
    span: 'lg:col-span-4',
  },
  {
    name: 'AI / ML',
    technologies: ['RAG pipelines', 'LLMs (Ollama, OpenAI)', 'Spring AI', 'Prompt Engineering'],
    span: 'lg:col-span-4',
  },
  {
    name: 'Databases',
    technologies: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis'],
    span: 'lg:col-span-6',
  },
  {
    name: 'DevOps & Tools',
    technologies: ['Docker', 'GitHub Actions', 'Keycloak', 'Git', 'Linux', 'Jira'],
    span: 'lg:col-span-6',
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="w-full border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          eyebrow="Core Capabilities"
          title="Engineered for production"
          description="The stack I've shipped with across frontend, backend, AI and infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
          {techCategories.map((category, index) => (
            <div key={category.name} className={`reveal card card-hover p-6 ${category.span}`} style={stagger(index)}>
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{category.name}</h3>
                <span className="font-label-code text-xs text-on-surface-variant">
                  {String(category.technologies.length).padStart(2, '0')}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant text-sm text-on-surface-variant hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
