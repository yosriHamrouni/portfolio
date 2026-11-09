import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import type { Project } from '../data/types';
import { useLanguage } from '../i18n/useLanguage';
import { stagger } from '../lib/motion';
import { ArrowUpRight } from './Icons';
import Section from './Section';
import { UxCover } from './UxCaseStudy';

// Real screenshot when one exists; otherwise a plain gradient panel with the
// project's category — clearly not pretending to be a screenshot.
export const ProjectCover = ({ project }: { project: Project }) => {
  // UX case studies: phone screens, not a cropped 16:9 screenshot.
  if (project.kind === 'ux') return <UxCover project={project} compact />;
  const shot = project.screenshots[0];
  if (shot) {
    return (
      <img
        src={shot.src}
        alt={`${project.title} — ${shot.caption}`}
        width={1600}
        height={900}
        loading="lazy"
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }
  return (
    <div className="w-full h-full relative bg-gradient-to-br from-accent-soft/40 via-muted to-paper">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,var(--glow-strong),transparent_60%)] opacity-40 transition-opacity duration-500 group-hover:opacity-70" />
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <span className="meta text-accent">{project.category}</span>
        <span className="font-display text-2xl sm:text-3xl font-semibold text-ink/80">{project.title}</span>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, total }: { project: Project; index: number; total: number }) => {
  const { ui } = useLanguage();
  // Bento rhythm: 7/5 then 5/7.
  const wide = index % 4 === 0 || index % 4 === 3;
  // An unpaired last card fills the whole row.
  const fullRow = index === total - 1 && index % 2 === 0;
  return (
    <article
      className={`reveal group relative card card-hover overflow-hidden flex flex-col ${fullRow ? 'md:col-span-12 md:flex-row' : wide ? 'md:col-span-7' : 'md:col-span-5'}`}
      style={stagger(index % 2)}
    >
      <div className={`relative aspect-[16/9] bg-muted overflow-hidden border-b border-line ${fullRow ? 'md:w-7/12 md:shrink-0 md:aspect-auto md:min-h-80 md:border-b-0 md:border-e' : ''}`}>
        <ProjectCover project={project} />
        {project.video && (
          <span className="absolute start-4 bottom-4 inline-flex items-center gap-2 h-8 ps-2 pe-3 rounded-full bg-paper/80 backdrop-blur-md border border-line text-small font-medium text-ink">
            <span className="w-5 h-5 rounded-full bg-accent text-on-accent flex items-center justify-center" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z" /></svg>
            </span>
            {ui.projects.videoDemo(project.video.duration)}
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2 meta">
          <span className="px-2.5 py-1 rounded-full bg-accent/10 text-accent">{project.category}</span>
          {project.period && <span className="text-ink-subtle normal-case tracking-normal">{project.period}</span>}
        </div>

        <div>
          <h3 className="text-h3 font-semibold text-ink group-hover:text-accent transition-colors">
            {/* Stretched link: the whole card opens the case study */}
            <Link to={`/project/${project.slug}`} className="after:absolute after:inset-0">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 text-small text-ink-muted">{project.tagline}</p>
        </div>

        <div className="mt-auto pt-4 border-t border-line flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 5).map((tech) => (
              <span key={tech} className="font-code text-[10px] text-ink-muted px-2 py-0.5 rounded border border-line">
                {tech}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span dir="ltr" className="font-code text-[10px] text-ink-subtle px-1 py-0.5">+{project.stack.length - 5}</span>
            )}
          </div>
          <span className="w-9 h-9 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:rotate-45 rtl:group-hover:-rotate-45" aria-hidden="true">
            <ArrowUpRight />
          </span>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const { ui, content } = useLanguage();
  return (
  <Section
    id="projects"
    eyebrow={ui.projects.eyebrow}
    title={ui.projects.title}
    intro={ui.projects.intro}
    action={
      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-small font-semibold text-accent shrink-0"
      >
        <span className="link-underline">{ui.projects.githubProfile}</span>
        <ArrowUpRight size={14} />
      </a>
    }
  >
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
      {content.projects.map((project, i) => (
        <ProjectCard key={project.slug} project={project} index={i} total={content.projects.length} />
      ))}
    </div>
  </Section>
  );
};

export default Projects;
