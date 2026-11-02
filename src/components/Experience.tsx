import SectionHeader from './SectionHeader';
import { stagger } from '../lib/motion';

const experiences = [
  {
    title: 'Software Engineer Intern / PFE',
    company: 'Maison du Web',
    period: 'Feb 2026 – Aug 2026',
    location: 'Tunisia',
    description: 'Developed a multi-tenant School Management SaaS platform with AI-powered features.',
    achievements: [
      'Built multi-tenant architecture with authentication and role-based access',
      'Implemented student risk detection using explainable rules',
      'Developed RAG chatbot for contextual information retrieval',
      'Created scheduling, grades, and payment management modules',
    ],
    tech: ['Laravel', 'React', 'Inertia.js', 'TypeScript', 'PostgreSQL', 'Ollama', 'RAG'],
  },
  {
    title: 'Software Development Intern',
    company: 'Krenova Consulting',
    period: 'Jul 2025 – Aug 2025',
    location: 'Tunisia',
    description: 'Developed a full-stack contest management platform inspired by Gleam.io.',
    achievements: [
      'Built interactive frontend interfaces with React and Tailwind CSS',
      'Developed backend services with Node.js and Express',
      'Implemented JWT authentication and social media API integrations',
      'Experimented with AI assistant functionality using OpenAI API',
    ],
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'JWT', 'OpenAI'],
  },
  {
    title: 'Software Development Intern',
    company: 'L-Mobile',
    period: 'Jul 2024 – Sep 2024',
    location: 'Nabeul, Tunisia',
    description: 'Participated in refactoring a field-service management application.',
    achievements: [
      'Developed and improved frontend interfaces using React',
      'Contributed to backend development using ASP.NET Core',
      'Integrated REST APIs between frontend and backend',
      'Collaborated using GitHub and Agile/Scrum practices',
    ],
    tech: ['React', 'ASP.NET Core', 'C#', 'REST APIs'],
  },
  {
    title: 'Web Development Intern',
    company: 'VioreDigital',
    period: 'Jul 2022 – Aug 2022',
    location: 'Nabeul, Tunisia',
    description: 'Developed a hotel management web application.',
    achievements: [
      'Implemented backend functionality using Laravel',
      'Worked with database management and application features',
    ],
    tech: ['PHP', 'Laravel', 'MySQL'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="w-full border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          eyebrow="Professional Experience"
          title="Career timeline"
          description="Four internships, each shipping a real product — from a Laravel hotel system to a multi-tenant AI SaaS."
        />

        <ol className="relative space-y-6 lg:space-y-8 before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-outline-variant before:to-transparent">
          {experiences.map((exp, index) => (
            <li key={exp.company} className="reveal relative pl-10" style={stagger(index)}>
              <span
                aria-hidden="true"
                className={`absolute left-0 top-7 w-[15px] h-[15px] rounded-full border-2 border-primary ${index === 0 ? 'bg-primary pulse-dot' : 'bg-background'}`}
              />
              <article className="card card-hover p-6 lg:p-8">
                <div className="grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4 space-y-2">
                    <span className="font-label-code text-label-code text-primary">{exp.period}</span>
                    <h3 className="font-headline-md text-headline-md text-on-surface">{exp.company}</h3>
                    <p className="text-sm text-on-surface">{exp.title}</p>
                    <p className="font-label-code text-xs text-on-surface-variant">{exp.location}</p>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="text-on-surface-variant mb-4">{exp.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1 shrink-0" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant font-label-code text-[11px] text-on-surface-variant">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
