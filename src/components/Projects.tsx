import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { stagger } from '../lib/motion';
import { ArrowRight, ArrowUpRight } from './Icons';
import Section from './Section';

const Projects = () => {
  const [featured, ...rest] = projects;
  const cover = featured.screenshots[0];

  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Selected work."
      intro="Each project has a case study covering the problem, my contribution, the architecture and the trade-offs."
    >
      {/* Featured project */}
      <article className="reveal group relative">
        <div className="overflow-hidden rounded-sm border border-line bg-muted">
          <img
            src={cover.src}
            alt={`${featured.title} — ${cover.caption}`}
            width={1600}
            height={900}
            loading="lazy"
            className="w-full aspect-[16/9] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>
        <div className="mt-6 grid grid-cols-9 gap-x-6 gap-y-4">
          <div className="col-span-9 md:col-span-6">
            <p className="meta text-accent">01 · {featured.category}</p>
            <h3 className="mt-2 text-h2 font-semibold text-ink">
              {/* Stretched link: the whole block opens the case study */}
              <Link to={`/project/${featured.slug}`} className="after:absolute after:inset-0">
                {featured.title}
              </Link>
            </h3>
            <p className="mt-3 text-ink-muted max-w-[36rem]">{featured.tagline}</p>
          </div>
          <div className="col-span-9 md:col-span-3 md:text-right flex md:flex-col md:items-end justify-between gap-4">
            <p className="meta text-ink-subtle">{featured.period}</p>
            <span className="inline-flex items-center gap-2 text-small font-medium text-accent">
              Read case study
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
        <p className="mt-4 meta text-ink-subtle normal-case tracking-normal">{featured.stack.join(' / ')}</p>
        {featured.repo && (
          <a
            href={featured.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 mt-4 inline-flex items-center gap-1.5 text-small text-ink link-underline"
          >
            Source on GitHub <ArrowUpRight size={14} />
          </a>
        )}
      </article>

      {/* Index of the other projects */}
      <ol className="mt-16 border-t border-line-strong">
        {rest.map((project, i) => (
          <li key={project.slug} className="reveal border-b border-line" style={stagger(i)}>
            <Link
              to={`/project/${project.slug}`}
              className="group grid grid-cols-9 gap-x-6 gap-y-2 py-7 items-baseline"
            >
              <span className="col-span-1 meta text-ink-subtle">0{i + 2}</span>
              <span className="col-span-8 md:col-span-4">
                <span className="block text-h3 font-semibold text-ink group-hover:text-accent transition-colors">
                  {project.title}
                </span>
                <span className="block mt-1 text-small text-ink-muted">{project.tagline}</span>
              </span>
              <span className="col-span-8 col-start-2 md:col-span-3 md:col-start-auto meta text-ink-subtle">
                {project.category}
              </span>
              <span className="hidden md:flex col-span-1 justify-end text-ink-subtle group-hover:text-accent transition-colors">
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Projects;
