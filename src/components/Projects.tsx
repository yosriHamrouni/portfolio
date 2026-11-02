import { Link } from 'react-router-dom';
import { projects, type Project } from '../data/projects';
import SectionHeader from './SectionHeader';
import { stagger } from '../lib/motion';

const ArrowIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17l9.2-9.2M17 17V7H7" />
  </svg>
);

// Projects without screenshots get a "blueprint" preview built from their own data,
// instead of an identical generic icon.
export const ProjectPreview = ({ project }: { project: Project }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }
  return (
    <div className="w-full h-full relative bg-[linear-gradient(var(--outline-variant)_1px,transparent_1px),linear-gradient(90deg,var(--outline-variant)_1px,transparent_1px)] bg-[size:28px_28px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,var(--glow-strong),transparent_60%)] opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <span className="font-label-code text-[11px] text-primary uppercase tracking-[0.2em]">{project.subtitle}</span>
        <div className="font-label-code text-xs sm:text-sm text-on-surface-variant space-y-1">
          <div><span className="text-primary">$</span> stack --list</div>
          <div className="text-on-surface">{project.technologies.slice(0, 4).join('  ·  ')}</div>
        </div>
      </div>
    </div>
  );
};

// Bento rows alternate 7/5 and 5/7; an unpaired last card spans the full row.
const ProjectCard = ({ project, index, wide }: { project: Project; index: number; wide: boolean }) => (
  <article
    className={`reveal group relative card card-hover overflow-hidden flex flex-col ${
      wide ? 'md:col-span-12 md:flex-row' : project.featured ? 'md:col-span-7' : 'md:col-span-5'
    }`}
    style={stagger(index % 2)}
  >
    <div className={`aspect-[16/9] bg-surface-container overflow-hidden border-outline-variant ${wide ? 'border-b md:border-b-0 md:border-r md:w-1/2 shrink-0' : 'border-b'}`}>
      <ProjectPreview project={project} />
    </div>

    <div className="p-6 flex flex-col gap-4 flex-1">
      <div className="flex items-center justify-between gap-3 font-label-code text-[11px] uppercase tracking-wider text-on-surface-variant">
        <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary">{project.category}</span>
        <span>{project.year} · {project.duration}</span>
      </div>

      <div>
        <h3 className="font-headline-md text-headline-md text-on-surface">
          {/* Stretched link: the whole card opens the case study */}
          <Link to={`/project/${project.slug}`} className="after:absolute after:inset-0 focus-visible:outline-none">
            {project.title}
          </Link>
        </h3>
        <p className="text-sm text-on-surface-variant mt-0.5">{project.subtitle}</p>
      </div>

      <p className="text-sm text-on-surface-variant leading-relaxed">{project.summary}</p>

      <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
        {project.features.map((feature) => (
          <li key={feature} className="flex items-center gap-1.5 text-xs text-on-surface">
            <span className="w-1 h-1 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-outline-variant flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="font-label-code text-[10px] text-on-surface-variant px-2 py-0.5 rounded border border-outline-variant">
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="font-label-code text-[10px] text-on-surface-variant px-1 py-0.5">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-9 h-9 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
              aria-label={`${project.title} source on GitHub`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
          <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center transition-transform duration-200 group-hover:rotate-45" aria-hidden="true">
            <ArrowIcon />
          </span>
        </div>
      </div>
    </div>
  </article>
);

const Projects = () => {
  return (
    <section id="projects" className="w-full border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          eyebrow="Selected Work"
          title="Featured projects"
          description="Complete products with a focus on scalability, AI integration and production-grade architecture. Open any card for the full case study."
          action={
            <a
              href="https://github.com/yosriHamrouni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4 font-label-pill uppercase shrink-0"
            >
              All repositories on GitHub
              <ArrowIcon />
            </a>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              wide={index === projects.length - 1 && index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
