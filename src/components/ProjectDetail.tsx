import { useEffect, useState, type ReactNode } from 'react';
import { Link, useParams } from 'react-router-dom';
import { projects, type Project } from '../data/projects';
import { profile } from '../data/profile';
import { stagger } from '../lib/motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from './Icons';
import DemoVideo from './DemoVideo';
import { ProjectCover } from './Projects';
import UxCaseStudy from './UxCaseStudy';

const Label = ({ index, children }: { index: string; children: ReactNode }) => (
  <h2 className="meta text-accent flex items-center gap-3 mb-5">
    <span className="w-6 h-px bg-accent" aria-hidden="true" />
    <span aria-hidden="true" className="text-ink-subtle">{index}</span>
    {children}
  </h2>
);

const Bullet = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-0.5 shrink-0" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Gallery = ({ project }: { project: Project }) => {
  const [current, setCurrent] = useState(0);
  const shot = project.screenshots[current] ?? project.screenshots[0];

  return (
    <div className="reveal">
      <figure>
        <div className="aspect-[16/9] rounded-2xl border border-line overflow-hidden bg-muted">
          <img src={shot.src} alt={`${project.title} — ${shot.caption}`} width={1600} height={900} className="w-full h-full object-cover object-top" />
        </div>
        <figcaption className="mt-3 flex justify-between gap-4 text-small text-ink-muted">
          <span>{shot.caption}</span>
          <span className="font-mono text-xs text-ink-subtle shrink-0">
            {String(current + 1).padStart(2, '0')} / {String(project.screenshots.length).padStart(2, '0')}
          </span>
        </figcaption>
      </figure>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Choose a screenshot">
        {project.screenshots.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Show screenshot ${i + 1}: ${s.caption}`}
            aria-pressed={i === current}
            className={`shrink-0 w-28 sm:w-36 aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all ${i === current ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'}`}
          >
            <img src={s.src} alt="" loading="lazy" width={1600} height={900} className="w-full h-full object-cover object-top" />
          </button>
        ))}
      </div>
      {project.screenshotNote && <p className="mt-1 font-mono text-xs text-ink-subtle">{project.screenshotNote}</p>}
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
      <section className="container-page pt-36 pb-24 min-h-[70vh] text-center">
        <p className="meta text-accent">404</p>
        <h1 className="mt-3 text-h1 font-bold text-ink">Project not found</h1>
        <Link to="/#projects" className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-on-accent font-semibold glow-btn">
          <ArrowLeft size={14} /> Back to projects
        </Link>
      </section>
    );
  }

  const next = projects[(index + 1) % projects.length];

  // UX/UI case studies have their own section layout.
  if (project.kind === 'ux') return <UxCaseStudy project={project} next={next} />;

  const facts = [
    { label: 'Role', value: project.role },
    { label: 'Context', value: project.context },
    project.period && { label: 'Period', value: project.period },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="pt-28 lg:pt-32 pb-16">
      <div className="container-page">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-small text-ink-muted hover:text-accent transition-colors">
          <ArrowLeft size={14} /> All projects
        </Link>

        <header className="grid lg:grid-cols-12 gap-10 mt-10 mb-12">
          <div className="lg:col-span-8">
            <span className="reveal inline-block px-3 py-1 rounded-full bg-accent/10 text-accent meta">{project.category}</span>
            <h1 className="reveal mt-5 text-h1 font-bold text-ink text-balance">{project.title}</h1>
            <p className="reveal mt-5 text-lead text-ink-muted max-w-2xl">{project.tagline}</p>
          </div>
          <dl className="reveal lg:col-span-4 self-end card divide-y divide-line text-small">
            {facts.map((fact) => (
              <div key={fact.label} className="flex justify-between gap-4 px-5 py-3.5">
                <dt className="font-mono text-xs text-ink-subtle pt-0.5">{fact.label}</dt>
                <dd className="text-ink text-right">{fact.value}</dd>
              </div>
            ))}
            <div className="p-3">
              {project.repo ? (
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-on-accent font-semibold glow-btn transition-shadow">
                  View source on GitHub <ArrowUpRight size={14} />
                </a>
              ) : (
                <p className="h-11 flex items-center justify-center rounded-full border border-line text-ink-subtle">{project.repoNote ?? 'Source not publicly available'}</p>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="mt-2 w-full h-11 inline-flex items-center justify-center gap-2 rounded-full border border-line-strong text-ink hover:border-accent hover:text-accent transition-colors">
                  Live demo <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </dl>
        </header>

        {project.video && (
          <section aria-label="Demo video" className="mb-16">
            <p className="reveal meta text-accent flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-accent" aria-hidden="true" />
              Demo video
            </p>
            <DemoVideo video={project.video} title={project.title} />
          </section>
        )}

        <div className="mb-20">
          {project.screenshots.length > 0 ? (
            <>
              {project.video && (
                <p className="reveal meta text-accent flex items-center gap-3 mb-5">
                  <span className="w-6 h-px bg-accent" aria-hidden="true" />
                  Screenshots
                </p>
              )}
              <Gallery project={project} />
            </>
          ) : (
            <div className="reveal group aspect-[21/9] rounded-2xl border border-line overflow-hidden">
              <ProjectCover project={project} />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-20">
          <section className="reveal card p-6 lg:p-8">
            <Label index="01">The problem</Label>
            <p className="text-ink">{project.problem}</p>
          </section>
          <section className="reveal card p-6 lg:p-8" style={stagger(1)}>
            <Label index="02">The solution</Label>
            <p className="text-ink">{project.solution}</p>
          </section>
        </div>

        <section className="reveal grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-4">
            <Label index="03">My contribution</Label>
            <p className="text-h3 font-display font-semibold text-ink">{project.role}</p>
          </div>
          <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
            {project.contribution.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 rounded-xl border border-line">
                <Bullet />
                <span className="text-small text-ink-muted">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20">
          <div className="reveal"><Label index="04">Architecture</Label></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architecture.map((layer, i) => (
              <div key={layer.title} className="reveal card card-hover p-6" style={stagger(i % 2)}>
                <span className="font-mono text-3xl text-accent/40 block mb-3">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-h3 font-semibold text-ink mb-2">{layer.title}</h3>
                <p className="text-small text-ink-muted">{layer.text}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 mb-20">
          <section className="reveal card p-6">
            <Label index="05">Technology choices</Label>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.stack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-small text-ink">{tech}</span>
              ))}
            </div>
            <ul className="space-y-3">
              {project.choices.map((choice) => (
                <li key={choice} className="text-small text-ink-muted pl-4 border-l-2 border-accent">{choice}</li>
              ))}
            </ul>
          </section>
          <section className="reveal card p-6" style={stagger(1)}>
            <Label index="06">Challenges</Label>
            <dl className="space-y-4">
              {project.challenges.map((c) => (
                <div key={c.title}>
                  <dt className="font-semibold text-ink">{c.title}</dt>
                  <dd className="mt-1 text-small text-ink-muted">{c.text}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="reveal card p-6" style={stagger(2)}>
            <Label index="07">Features</Label>
            <ul className="space-y-2.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-small text-ink-muted">
                  <Bullet />
                  {f}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="reveal relative overflow-hidden rounded-2xl border border-accent/30 bg-accent/5 p-6 lg:p-10 mb-12">
          <Label index="08">Outcome</Label>
          <p className="text-lead text-ink max-w-3xl">{project.outcome}</p>
        </section>

        <Link to={`/project/${next.slug}`} className="group block card card-hover p-6 lg:p-10">
          <span className="meta text-ink-subtle">Next project</span>
          <span className="mt-2 flex items-center justify-between gap-6">
            <span className="text-h2 font-display font-semibold text-ink group-hover:text-accent transition-colors">{next.title}</span>
            <span className="w-12 h-12 rounded-full bg-accent text-on-accent flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true">
              <ArrowRight size={20} />
            </span>
          </span>
        </Link>
      </div>
    </article>
  );
};

export default ProjectDetail;
