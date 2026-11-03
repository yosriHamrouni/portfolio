import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { Project, UxProject } from '../data/projects';
import { stagger } from '../lib/motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from './Icons';

type Who = 'team' | 'me';

// Credits who did a piece of work: team research vs. my design work.
const WhoBadge = ({ who }: { who: Who }) => (
  <span
    className={`shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full meta ${
      who === 'team' ? 'bg-tertiary/15 text-tertiary' : 'bg-accent/15 text-accent'
    }`}
  >
    {who === 'team' ? 'Team research' : 'My work'}
  </span>
);

const SubHeading = ({ children, who }: { children: ReactNode; who?: Who }) => (
  <div className="reveal flex flex-wrap items-center gap-3 mb-5">
    <h3 className="text-h3 font-semibold text-ink">{children}</h3>
    {who && <WhoBadge who={who} />}
  </div>
);

// One stage of the design process: Discover, Define, Ideate, Design.
const Stage = ({ index, name, title, children }: { index: number; name: string; title: string; children: ReactNode }) => (
  <section id={`stage-${name.toLowerCase()}`} className="scroll-mt-24 pt-16 lg:pt-24 border-t border-line">
    <div className="reveal mb-10">
      <p className="meta text-accent flex items-center gap-3">
        <span className="w-6 h-px bg-accent" aria-hidden="true" />
        <span className="text-ink-subtle" aria-hidden="true">{String(index).padStart(2, '0')}</span>
        {name}
      </p>
      <h2 className="mt-3 text-h2 font-semibold text-ink">{title}</h2>
    </div>
    <div className="space-y-16">{children}</div>
  </section>
);

// A real Figma screen inside a simple phone frame.
const Phone = ({ src, caption, className = '' }: { src: string; caption: string; className?: string }) => (
  <figure className={className}>
    <div className="rounded-[2rem] border-4 border-line-strong bg-muted overflow-hidden shadow-2xl shadow-black/30">
      <img src={src} alt={caption} width={428} height={926} loading="lazy" className="block w-full h-auto" />
    </div>
    {caption && <figcaption className="mt-3 text-center text-xs text-ink-subtle">{caption}</figcaption>}
  </figure>
);

const Figure = ({ src, caption, wide = false }: { src: string; caption: string; wide?: boolean }) => (
  <figure className="reveal min-w-0">
    <div className={`rounded-2xl border border-line overflow-hidden bg-white ${wide ? 'overflow-x-auto' : ''}`}>
      <img src={src} alt={caption} loading="lazy" className={wide ? 'block max-w-none w-[1600px] lg:w-full h-auto' : 'block w-full h-auto'} />
    </div>
    <figcaption className="mt-3 flex flex-wrap justify-between gap-3 text-small text-ink-muted">
      <span>{caption}</span>
      <a href={src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent font-semibold text-xs">
        <span className="link-underline">Open full size</span> <ArrowUpRight size={12} />
      </a>
    </figcaption>
  </figure>
);

const Chip = ({ children, strong = false }: { children: ReactNode; strong?: boolean }) => (
  <li className={`px-3 py-1 rounded-full text-xs ${strong ? 'bg-accent/10 border border-accent/25 text-ink' : 'border border-line text-ink-muted'}`}>
    {children}
  </li>
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

// User flow drawn as connected nodes; decisions show their alternative branch.
const FlowDiagram = ({ flow }: { flow: UxProject['userFlows'][number] }) => (
  <div className="reveal card p-6">
    <h4 className="font-semibold text-ink mb-5">{flow.title}</h4>
    <ol className="flex flex-wrap gap-x-3 gap-y-5 items-start">
      <li className="shrink-0 self-center px-3 py-1.5 rounded-full bg-muted border border-line meta text-ink-subtle">Start</li>
      {flow.nodes.map((node) => (
        <li key={node.label} className="shrink-0 flex items-start gap-3">
          <ArrowRight size={14} className="mt-4 text-ink-subtle" />
          <div className="w-36">
            <div
              className={`px-3 py-3 text-xs text-center leading-snug ${
                node.kind === 'decision'
                  ? 'rounded-xl border-2 border-dashed border-tertiary/60 bg-tertiary/5 text-ink'
                  : node.kind === 'end'
                    ? 'rounded-full bg-accent text-on-accent font-semibold'
                    : 'rounded-lg border border-line bg-muted text-ink'
              }`}
            >
              {node.label}
            </div>
            {node.alt && <p className="mt-2 text-[11px] leading-snug text-ink-subtle">↳ {node.alt}</p>}
          </div>
        </li>
      ))}
    </ol>
  </div>
);

const UxCaseStudy = ({ project, next }: { project: UxProject; next: Project }) => {
  const facts = [
    { label: 'Role', value: project.role },
    { label: 'Context', value: project.context },
    project.period && { label: 'Year', value: project.period },
  ].filter(Boolean) as { label: string; value: string }[];
  const { research, storyboards, journey, ideation } = project;

  return (
    <article className="pt-28 lg:pt-32 pb-16">
      <div className="container-page">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-small text-ink-muted hover:text-accent transition-colors">
          <ArrowLeft size={14} /> All projects
        </Link>

        {/* Cover */}
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

        {/* Overview, who did what, and the process at a glance */}
        <section className="reveal card p-6 lg:p-10 mb-4">
          <p className="text-lead text-ink max-w-3xl">{project.overview}</p>
          <ul className="mt-6 grid md:grid-cols-2 gap-3">
            {project.roleSplit.map((r) => (
              <li key={r.who} className="flex items-start gap-3 rounded-xl border border-line p-4 text-small text-ink-muted">
                <WhoBadge who={r.who} />
                {r.text}
              </li>
            ))}
          </ul>
        </section>
        <nav aria-label="Design process" className="reveal mb-4">
          <ol className="flex flex-wrap items-center gap-2">
            {project.stages.map((stage, i) => (
              <li key={stage} className="flex items-center gap-2">
                <a href={`#stage-${stage.toLowerCase()}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-small text-ink hover:border-accent hover:text-accent transition-colors">
                  <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, '0')}</span>
                  {stage}
                </a>
                {i < project.stages.length - 1 && <ArrowRight size={14} className="text-ink-subtle" />}
              </li>
            ))}
          </ol>
        </nav>

        {/* 01 — Discover */}
        <Stage index={1} name="Discover" title="Understanding the problem">
          <div>
            <SubHeading who="team">The problem</SubHeading>
            <p className="reveal text-lead text-ink mb-6">{project.problemIntro}</p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {project.problemPoints.map((point, i) => (
                <li key={point} className="reveal card p-5 flex items-start gap-4" style={stagger(i % 2)}>
                  <span className="font-mono text-2xl text-accent/50 leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SubHeading who="team">Research plan</SubHeading>
            <div className="grid md:grid-cols-2 gap-4">
              {research.methods.map((m, i) => (
                <div key={m.title} className="reveal card p-6" style={stagger(i)}>
                  <p className="font-semibold text-ink">{m.title}</p>
                  <p className="meta text-ink-subtle normal-case tracking-normal mt-1">{m.detail}</p>
                  <ul className="mt-4 space-y-2">
                    {m.samples.map((q) => (
                      <li key={q} className="text-small text-ink-muted pl-4 border-l-2 border-accent/40">“{q}”</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SubHeading who="team">Who might use it</SubHeading>
            <div className="grid md:grid-cols-2 gap-4">
              {research.segments.map((seg, i) => (
                <div key={seg.name} className="reveal card p-6" style={stagger(i)}>
                  <p className="font-semibold text-ink mb-4">{seg.name}</p>
                  <ul className="flex flex-wrap gap-2">
                    {seg.items.map((it) => <Chip key={it}>{it}</Chip>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SubHeading who="team">Competitor analysis</SubHeading>
            <div className="reveal flex flex-wrap gap-x-8 gap-y-3 mb-6 text-small">
              <div>
                <p className="meta text-ink-subtle mb-2">Compared</p>
                <ul className="flex flex-wrap gap-2">{research.competitors.names.map((n) => <Chip key={n} strong>{n}</Chip>)}</ul>
              </div>
              <div>
                <p className="meta text-ink-subtle mb-2">Criteria</p>
                <ul className="flex flex-wrap gap-2">{research.competitors.criteria.map((c) => <Chip key={c}>{c}</Chip>)}</ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {research.competitors.images.map((im) => <Figure key={im.src} {...im} />)}
            </div>
          </div>
        </Stage>

        {/* 02 — Define */}
        <Stage index={2} name="Define" title="Who we design for">
          <div>
            <SubHeading who="team">Personas</SubHeading>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {project.personas.map((p, i) => (
                <li key={p.name} className="reveal card card-hover p-5 flex flex-col" style={stagger(i)}>
                  <span className="w-11 h-11 rounded-full bg-accent/10 border border-accent/30 text-accent font-display font-semibold text-lg flex items-center justify-center" aria-hidden="true">
                    {p.name[0]}
                  </span>
                  <h4 className="mt-4 font-display text-lg font-semibold text-ink">{p.name}</h4>
                  <p className="meta text-accent normal-case tracking-normal">{p.role}</p>
                  <p className="mt-1 text-xs text-ink-subtle">{p.profile}</p>
                  {p.quote && <p className="mt-3 text-small italic text-ink">“{p.quote}”</p>}
                  <p className="mt-3 text-small text-ink-muted">{p.need}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SubHeading who="team">Storyboards</SubHeading>
            <p className="reveal text-ink-muted max-w-3xl mb-6">{storyboards.intro}</p>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {storyboards.stories.map((s, i) => (
                <li key={s.persona} className="reveal card p-5" style={stagger(i % 3)}>
                  <p className="meta text-accent normal-case tracking-normal">{s.persona}</p>
                  <p className="mt-2 text-small text-ink-muted">{s.story}</p>
                </li>
              ))}
            </ul>
            <Figure {...storyboards.image} />
          </div>

          <div>
            <SubHeading who="team">Journey map — {journey.persona}</SubHeading>
            <div className="reveal card overflow-x-auto">
              <table className="w-full min-w-[960px] text-small border-collapse">
                <thead>
                  <tr>
                    <th scope="col" className="sr-only">Row</th>
                    {journey.stages.map((s, i) => (
                      <th key={s.name} scope="col" className="text-left align-bottom px-3 py-3 border-b border-line">
                        <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, '0')}</span>
                        <span className="block font-semibold text-ink">{s.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {([
                    ['Action', 'action', 'text-ink'],
                    ['Pain point', 'pain', 'text-ink-muted'],
                    ['Opportunity', 'opportunity', 'text-ink-muted'],
                  ] as const).map(([label, key, tone]) => (
                    <tr key={key} className="align-top">
                      <th scope="row" className="sr-only">{label}</th>
                      {journey.stages.map((s) => (
                        <td key={s.name} className={`px-3 py-3 border-b border-line last:border-r-0 ${tone}`}>
                          <span className={`block meta mb-1 ${key === 'pain' ? 'text-ink-subtle' : key === 'opportunity' ? 'text-accent' : 'text-ink-subtle'}`}>{label}</span>
                          {s[key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Stage>

        {/* 03 — Ideate */}
        <Stage index={3} name="Ideate" title="From ideas to features">
          <div>
            <SubHeading who="team">Brainstorm, prioritize, cluster</SubHeading>
            <ol className="grid md:grid-cols-3 gap-4 mb-6">
              {ideation.steps.map((step, i) => (
                <li key={step.title} className="reveal card p-6" style={stagger(i)}>
                  <span className="font-display text-4xl font-bold text-accent">
                    {i === 0 ? ideation.ideaCount : i === 1 ? '2×2' : ideation.groupedCount}
                  </span>
                  <p className="mt-2 font-semibold text-ink">{step.title}</p>
                  <p className="mt-2 text-small text-ink-muted">{step.text}</p>
                </li>
              ))}
            </ol>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              {ideation.clusters.map((c, i) => (
                <li key={c.name} className="reveal rounded-xl border border-line p-4" style={stagger(i % 4)}>
                  <p className="flex items-baseline justify-between gap-2">
                    <span className="font-semibold text-ink">{c.name}</span>
                    <span className="font-mono text-xs text-accent">{c.count} ideas</span>
                  </p>
                  <p className="mt-2 text-xs text-ink-muted">{c.examples.join(' · ')}</p>
                </li>
              ))}
            </ul>
            <Figure {...ideation.image} wide />
          </div>

          <div>
            <SubHeading who="me">From insight to interface</SubHeading>
            <p className="reveal text-ink-muted max-w-3xl mb-6">
              How each research finding became a design decision on a real screen.
            </p>
            <ol className="grid grid-cols-1 gap-4">
              {project.decisions.map((d, i) => (
                <li key={d.theme} className="reveal card p-6 grid md:grid-cols-12 gap-6 items-center" style={stagger(i % 2)}>
                  <div className="md:col-span-9">
                    <p className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
                      <span className="font-semibold text-ink">{d.theme}</span>
                    </p>
                    <dl className="mt-4 grid sm:grid-cols-3 gap-3 text-small">
                      {([['Insight', d.insight, 'team'], ['Team idea', d.idea, 'team'], ['My design decision', d.decision, 'me']] as const).map(([label, text, who], j) => (
                        <div key={label} className={`relative rounded-xl p-4 ${who === 'me' ? 'bg-accent/10 border border-accent/30' : 'border border-line'}`}>
                          <dt className={`meta mb-1 ${who === 'me' ? 'text-accent' : 'text-ink-subtle'}`}>{label}</dt>
                          <dd className={who === 'me' ? 'text-ink' : 'text-ink-muted'}>{text}</dd>
                          {j < 2 && <ArrowRight size={14} className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-ink-subtle" />}
                        </div>
                      ))}
                    </dl>
                  </div>
                  <div className="md:col-span-3 flex justify-center">
                    <Phone src={d.screen.src} caption={d.screen.caption} className="w-28 lg:w-32" />
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SubHeading who="me">User flows</SubHeading>
            <div className="grid grid-cols-1 gap-4">
              {project.userFlows.map((flow) => <FlowDiagram key={flow.title} flow={flow} />)}
            </div>
          </div>
        </Stage>

        {/* 04 — Design */}
        <Stage index={4} name="Design" title="High-fidelity screens">
          <div>
            <SubHeading who="me">Flows and screens</SubHeading>
            <p className="reveal text-lead text-ink max-w-3xl mb-8">{project.work.intro}</p>
            <div className="grid grid-cols-1 gap-4">
              {project.work.flows.map((flow, i) => (
                <article key={flow.title} className="reveal card p-6 lg:p-8" style={stagger(i % 2)}>
                  <h4 className="text-h3 font-semibold text-ink">{flow.title}</h4>
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
                  {flow.screens?.length ? (
                    // Screens follow the flow left to right; scrolls sideways on small screens.
                    <div className="mt-8 -mx-6 px-6 lg:mx-0 lg:px-0 flex gap-6 overflow-x-auto pb-2">
                      {flow.screens.map((screen) => (
                        <Phone key={screen.src} src={screen.src} caption={screen.caption} className="w-44 sm:w-52 shrink-0" />
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </Stage>

        <Link to={`/project/${next.slug}`} className="group mt-16 block card card-hover p-6 lg:p-10">
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
