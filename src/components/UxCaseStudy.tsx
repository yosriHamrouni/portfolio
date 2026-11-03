import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Project, UxProject } from '../data/projects';
import { stagger } from '../lib/motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from './Icons';

// Same numbered eyebrow as the engineering case studies.
const Label = ({ index, children }: { index: string; children: ReactNode }) => (
  <h2 className="meta text-accent flex items-center gap-3 mb-5">
    <span className="w-6 h-px bg-accent" aria-hidden="true" />
    <span aria-hidden="true" className="text-ink-subtle">{index}</span>
    {children}
  </h2>
);

// A real Figma screen inside a simple phone frame.
const Phone = ({ src, caption, className = '' }: { src: string; caption: string; className?: string }) => (
  <figure className={className}>
    <div className="rounded-[2rem] border-4 border-line-strong bg-muted overflow-hidden shadow-2xl shadow-black/30">
      <img src={src} alt={caption} width={428} height={926} loading="lazy" className="block w-full h-auto" />
    </div>
    <figcaption className="mt-3 text-center text-xs text-ink-subtle">{caption}</figcaption>
  </figure>
);

export const UxCover = ({ project, compact = false }: { project: UxProject; compact?: boolean }) => {
  if (project.cover) {
    return (
      <div className="rounded-2xl border border-line overflow-hidden bg-muted">
        <img src={project.cover} alt={`${project.title} cover`} className="w-full h-auto" />
      </div>
    );
  }
  const [first, second] = project.screenshots;
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-accent-soft/40 via-muted to-paper ${compact ? 'h-full px-6 pt-6' : 'rounded-2xl border border-line px-6 pt-10 pb-6 sm:px-10'}`}>
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,var(--glow-strong),transparent_60%)] opacity-40" />
      <div className="relative flex justify-center items-start gap-4 sm:gap-8">
        {first && <Phone src={first.src} caption={compact ? '' : first.caption} className={compact ? 'w-28 sm:w-36' : 'w-36 sm:w-56'} />}
        {second && <Phone src={second.src} caption={compact ? '' : second.caption} className={compact ? 'w-28 sm:w-36 mt-8' : 'w-36 sm:w-56 mt-10'} />}
      </div>
    </div>
  );
};

const UxCaseStudy = ({ project, next }: { project: UxProject; next: Project }) => {
  const facts = [
    { label: 'Role', value: project.role },
    { label: 'Context', value: project.context },
    project.period && { label: 'Year', value: project.period },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <article className="pt-28 lg:pt-32 pb-16">
      <div className="container-page">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-small text-ink-muted hover:text-accent transition-colors">
          <ArrowLeft size={14} /> All projects
        </Link>

        {/* 1 — Cover */}
        <header className="grid lg:grid-cols-12 gap-10 mt-10 mb-12">
          <div className="lg:col-span-7 self-center">
            <span className="reveal inline-block px-3 py-1 rounded-full bg-accent/10 text-accent meta">{project.category}</span>
            <h1 className="reveal mt-5 text-display font-bold text-ink">{project.title}</h1>
            <p className="reveal mt-5 text-lead text-ink-muted max-w-xl">{project.tagline}</p>
            <dl className="reveal mt-8 card divide-y divide-line text-small max-w-xl">
              {facts.map((fact) => (
                <div key={fact.label} className="flex justify-between gap-4 px-5 py-3.5">
                  <dt className="font-mono text-xs text-ink-subtle pt-0.5">{fact.label}</dt>
                  <dd className="text-ink text-right">{fact.value}</dd>
                </div>
              ))}
              <div className="flex justify-between gap-4 px-5 py-3.5">
                <dt className="font-mono text-xs text-ink-subtle pt-0.5">Tools</dt>
                <dd className="text-right space-y-1">
                  {project.tools.map((tool) => (
                    <p key={tool.name}>
                      <span className="text-ink">{tool.name}</span>
                      <span className="text-ink-muted"> — {tool.use}</span>
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
          <div className="reveal lg:col-span-5">
            <UxCover project={project} />
          </div>
        </header>

        {/* 2 — Overview */}
        <section className="reveal card p-6 lg:p-10 mb-20">
          <Label index="01">Overview</Label>
          <p className="text-lead text-ink max-w-3xl">{project.overview}</p>
        </section>

        {/* 3 — Problem */}
        <section className="mb-20">
          <div className="reveal">
            <Label index="02">The problem</Label>
            <p className="text-lead text-ink mb-6">{project.problemIntro}</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {project.problemPoints.map((point, i) => (
              <li key={point} className="reveal card p-5 flex items-start gap-4" style={stagger(i % 2)}>
                <span className="font-mono text-2xl text-accent/50 leading-none">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-ink">{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 4 — Users */}
        <section className="mb-20">
          <div className="reveal flex flex-wrap items-end justify-between gap-4 mb-6">
            <Label index="03">Users</Label>
            <p className="meta text-ink-subtle normal-case tracking-normal mb-5">Personas from team research</p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {project.personas.map((persona, i) => (
              <li key={persona.name} className="reveal card card-hover p-5" style={stagger(i)}>
                <span className="w-11 h-11 rounded-full bg-accent/10 border border-accent/30 text-accent font-display font-semibold text-lg flex items-center justify-center" aria-hidden="true">
                  {persona.name[0]}
                </span>
                <h3 className="mt-4 text-h3 font-semibold text-ink">{persona.name}</h3>
                <p className="meta text-accent normal-case tracking-normal">{persona.role}</p>
                <p className="mt-3 text-small text-ink-muted">{persona.need}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 5 — Process (team research) */}
        <section className="mb-20">
          <div className="reveal">
            <Label index="04">Process — research & design</Label>
            <p className="inline-flex items-start gap-3 rounded-xl border border-tertiary/30 bg-tertiary/5 px-4 py-3 text-small text-ink max-w-3xl">
              <span className="shrink-0 px-2 py-0.5 rounded-full bg-tertiary/15 text-tertiary meta">Team</span>
              {project.process.credit}
            </p>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {project.process.steps.map((step, i) => (
              <div key={step.title} className="reveal card p-6" style={stagger(i)}>
                <span className="font-mono text-3xl text-accent/40 block mb-3">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-h3 font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-small text-ink-muted">{step.text}</p>
                {step.tags && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <li key={tag} className="px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs text-ink">{tag}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6">
            {project.process.images.map((image) => (
              <figure key={image.src} className="reveal min-w-0">
                <div className={`rounded-2xl border border-line overflow-hidden bg-white ${image.wide ? 'overflow-x-auto' : ''}`}>
                  <img
                    src={image.src}
                    alt={image.caption}
                    loading="lazy"
                    className={image.wide ? 'block max-w-none w-[1600px] lg:w-full h-auto' : 'block w-full h-auto'}
                  />
                </div>
                <figcaption className="mt-3 flex flex-wrap justify-between gap-3 text-small text-ink-muted">
                  <span>{image.caption}</span>
                  <a href={image.src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent font-semibold text-xs">
                    <span className="link-underline">Open full size</span> <ArrowUpRight size={12} />
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* 6 — My work */}
        <section className="mb-16">
          <div className="reveal">
            <Label index="05">My work — user flows & screens</Label>
            <p className="text-lead text-ink max-w-3xl">{project.work.intro}</p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4">
            {project.work.flows.map((flow, i) => (
              <article key={flow.title} className="reveal card p-6 lg:p-8" style={stagger(i % 2)}>
                <div className={`grid gap-8 ${flow.screens?.length ? 'lg:grid-cols-12 items-center' : ''}`}>
                  <div className={flow.screens?.length ? 'lg:col-span-8' : ''}>
                    <h3 className="text-h3 font-semibold text-ink">{flow.title}</h3>
                    <ol className="mt-5 flex flex-wrap items-center gap-2">
                      {flow.steps.map((step, s) => (
                        <li key={step} className="flex items-center gap-2">
                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-muted text-small text-ink">
                            <span className="font-mono text-[11px] text-accent">{s + 1}</span>
                            {step}
                          </span>
                          {s < flow.steps.length - 1 && <ArrowRight size={14} className="text-ink-subtle" />}
                        </li>
                      ))}
                    </ol>
                  </div>
                  {flow.screens?.length ? (
                    <div className="lg:col-span-4 flex justify-center gap-4">
                      {flow.screens.map((screen) => (
                        <Phone key={screen.src} src={screen.src} caption={screen.caption} className="w-44" />
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
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

export default UxCaseStudy;
