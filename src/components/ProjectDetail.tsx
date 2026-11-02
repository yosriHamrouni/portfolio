import { useEffect, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects, type Project } from '../data/projects';
import { profile } from '../data/profile';
import { ArrowLeft, ArrowRight, ArrowUpRight } from './Icons';

// One numbered block of the case study: label column + content column.
const Block = ({ index, title, children }: { index: string; title: string; children: ReactNode }) => (
  <section className="reveal grid grid-cols-12 gap-x-6 gap-y-4 py-12 border-t border-line">
    <h2 className="col-span-12 lg:col-span-3 meta text-ink-subtle flex gap-3 lg:flex-col lg:gap-1">
      <span className="text-accent" aria-hidden="true">{index}</span>
      <span>{title}</span>
    </h2>
    <div className="col-span-12 lg:col-span-9">{children}</div>
  </section>
);

const Gallery = ({ project }: { project: Project }) => {
  const [current, setCurrent] = useState(0);
  const shot = project.screenshots[current] ?? project.screenshots[0];

  return (
    <div className="reveal">
      <figure>
        <div className="overflow-hidden rounded-sm border border-line bg-muted">
          <img src={shot.src} alt={`${project.title} — ${shot.caption}`} width={1600} height={900} className="w-full aspect-[16/9] object-cover object-top" />
        </div>
        <figcaption className="mt-3 flex justify-between gap-4 text-small text-ink-muted">
          <span>{shot.caption}</span>
          <span className="meta text-ink-subtle shrink-0">
            {String(current + 1).padStart(2, '0')} / {String(project.screenshots.length).padStart(2, '0')}
          </span>
        </figcaption>
      </figure>
      <div className="mt-4 grid grid-cols-4 sm:grid-cols-7 gap-2" role="group" aria-label="Choose a screenshot">
        {project.screenshots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Show screenshot ${i + 1}: ${s.caption}`}
            aria-pressed={i === current}
            className={`overflow-hidden rounded-sm border transition-opacity ${i === current ? 'border-accent' : 'border-line opacity-60 hover:opacity-100'}`}
          >
            <img src={s.src} alt="" loading="lazy" width={1600} height={900} className="w-full aspect-[16/9] object-cover object-top" />
          </button>
        ))}
      </div>
      {project.screenshotNote && <p className="mt-3 meta text-ink-subtle normal-case tracking-normal">{project.screenshotNote}</p>}
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    document.title = project ? `${project.title} — ${profile.name}` : `Project not found — ${profile.name}`;
  }, [project]);

  if (!project) {
    return (
      <section className="container-page pt-36 pb-24 min-h-[70vh]">
        <p className="meta text-ink-subtle">404</p>
        <h1 className="mt-3 text-h1 font-semibold text-ink">Project not found.</h1>
        <Link to="/#projects" className="mt-8 inline-flex items-center gap-2 text-accent font-medium link-underline">
          <ArrowLeft size={14} /> Back to projects
        </Link>
      </section>
    );
  }

  const next = projects[(index + 1) % projects.length];
  const facts = [
    { label: 'Role', value: project.role },
    { label: 'Context', value: project.context },
    project.period && { label: 'Period', value: project.period },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="pt-28 lg:pt-32">
      <div className="container-page">
        <Link to="/#projects" className="inline-flex items-center gap-2 meta text-ink-muted hover:text-accent transition-colors">
          <ArrowLeft size={14} /> All projects
        </Link>

        <header className="grid grid-cols-12 gap-x-6 gap-y-10 mt-10 pb-14">
          <div className="col-span-12 lg:col-span-8">
            <p className="reveal meta text-accent">{project.category}</p>
            <h1 className="reveal mt-4 text-h1 font-semibold text-ink text-balance">{project.title}</h1>
            <p className="reveal mt-5 text-lead text-ink-muted max-w-[38rem]">{project.tagline}</p>
          </div>
          <div className="reveal col-span-12 lg:col-span-4 self-end">
            <dl className="border-t border-line-strong text-small">
              {facts.map((fact) => (
                <div key={fact.label} className="grid grid-cols-3 gap-4 py-3 border-b border-line">
                  <dt className="meta text-ink-subtle pt-0.5">{fact.label}</dt>
                  <dd className="col-span-2 text-ink">{fact.value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-4 py-3 border-b border-line">
                <dt className="meta text-ink-subtle pt-0.5">Source</dt>
                <dd className="col-span-2">
                  {project.repo ? (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent link-underline">
                      GitHub repository <ArrowUpRight size={12} />
                    </a>
                  ) : (
                    <span className="text-ink-muted">Not publicly available</span>
                  )}
                </dd>
              </div>
              {project.demo && (
                <div className="grid grid-cols-3 gap-4 py-3 border-b border-line">
                  <dt className="meta text-ink-subtle pt-0.5">Demo</dt>
                  <dd className="col-span-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent link-underline">
                      Live demo <ArrowUpRight size={12} />
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </header>

        {project.screenshots.length > 0 && (
          <div className="pb-12">
            <Gallery project={project} />
          </div>
        )}

        <Block index="01" title="Problem">
          <p className="text-lead text-ink max-w-[44rem]">{project.problem}</p>
        </Block>

        <Block index="02" title="Solution">
          <p className="text-lead text-ink max-w-[44rem]">{project.solution}</p>
        </Block>

        <Block index="03" title="My contribution">
          <ul className="space-y-3 max-w-[44rem]">
            {project.contribution.map((item) => (
              <li key={item} className="grid grid-cols-[1.25rem_1fr] text-ink">
                <span className="text-accent" aria-hidden="true">–</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block index="04" title="Architecture">
          <div className="grid sm:grid-cols-2 border-t border-line-strong">
            {project.architecture.map((layer, i) => (
              <div key={layer.title} className={`py-5 border-b border-line ${i % 2 === 1 ? 'sm:pl-6 sm:border-l' : 'sm:pr-6'}`}>
                <h3 className="font-semibold text-ink">{layer.title}</h3>
                <p className="mt-2 text-small text-ink-muted">{layer.text}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block index="05" title="Technology choices">
          <p className="meta text-ink normal-case tracking-normal">{project.stack.join(' / ')}</p>
          <ul className="mt-6 space-y-3 max-w-[44rem]">
            {project.choices.map((choice) => (
              <li key={choice} className="grid grid-cols-[1.25rem_1fr] text-ink-muted">
                <span className="text-accent" aria-hidden="true">–</span>
                <span>{choice}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block index="06" title="Challenges">
          <dl className="space-y-6 max-w-[44rem]">
            {project.challenges.map((c) => (
              <div key={c.title}>
                <dt className="font-semibold text-ink">{c.title}</dt>
                <dd className="mt-1 text-ink-muted">{c.text}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block index="07" title="Features">
          <ul className="grid sm:grid-cols-2 gap-x-6 border-t border-line">
            {project.features.map((f) => (
              <li key={f} className="py-3 border-b border-line text-small text-ink">
                {f}
              </li>
            ))}
          </ul>
        </Block>

        <Block index="08" title="Outcome">
          <p className="text-lead text-ink max-w-[44rem]">{project.outcome}</p>
        </Block>

        <Link to={`/project/${next.slug}`} className="group block border-t border-line-strong py-12 lg:py-16 mb-8">
          <span className="meta text-ink-subtle">Next project</span>
          <span className="mt-3 flex items-center justify-between gap-6">
            <span className="text-h1 font-semibold text-ink group-hover:text-accent transition-colors">{next.title}</span>
            <ArrowRight size={32} className="shrink-0 text-ink group-hover:text-accent transition-all duration-300 group-hover:translate-x-1.5" />
          </span>
        </Link>
      </div>
    </article>
  );
};

export default ProjectDetail;
