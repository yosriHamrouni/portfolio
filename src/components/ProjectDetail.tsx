import { useState, type ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ProjectPreview } from './Projects';

const Label = ({ children }: { children: ReactNode }) => (
  <span className="font-label-code text-label-code text-primary uppercase tracking-wider flex items-center gap-3 mb-5">
    <span className="w-6 h-px bg-primary" aria-hidden="true" />
    {children}
  </span>
);

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  const [shot, setShot] = useState(0);

  if (!project) {
    return (
      <section className="min-h-screen pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <h1 className="font-headline-xl text-headline-xl text-on-surface mb-4">Project not found</h1>
          <p className="text-on-surface-variant mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/#projects" className="inline-flex items-center gap-2 px-6 h-12 rounded-full bg-primary text-on-primary font-label-pill uppercase glow-btn">
            Back to projects
          </Link>
        </div>
      </section>
    );
  }

  const next = projects[(index + 1) % projects.length];
  const facts = [
    { label: 'Role', value: project.role },
    { label: 'Context', value: project.context },
    { label: 'Year', value: project.year },
    { label: 'Duration', value: project.duration },
  ];

  return (
    <article className="pt-28 lg:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-label-code text-label-code mb-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5" /><path d="M12 19l-7-7 7-7" />
          </svg>
          All projects
        </Link>

        {/* Hero */}
        <header className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-8">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-label-code text-[11px] uppercase tracking-wider mb-5">
              {project.category}
            </span>
            <h1 className="font-headline-xl text-[2.5rem] leading-[1.1] sm:text-headline-xl lg:text-[4rem] lg:leading-[1.05] text-on-surface mb-3">
              {project.title}
            </h1>
            <p className="font-body-lg text-body-lg text-primary mb-5">{project.subtitle}</p>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{project.description}</p>
          </div>
          <dl className="lg:col-span-4 self-end card divide-y divide-outline-variant">
            {facts.map((fact) => (
              <div key={fact.label} className="flex justify-between gap-4 px-5 py-3.5 text-sm">
                <dt className="font-label-code text-on-surface-variant">{fact.label}</dt>
                <dd className="text-on-surface text-right">{fact.value}</dd>
              </div>
            ))}
            {project.link && (
              <div className="p-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-on-primary font-label-pill uppercase glow-btn transition-shadow">
                  View source
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                </a>
              </div>
            )}
          </dl>
        </header>

        {/* Gallery: one large frame + thumbnail strip */}
        <div className="mb-20">
          <div className="group aspect-[16/9] rounded-2xl border border-outline-variant overflow-hidden bg-surface-container">
            {project.screenshots.length > 0 ? (
              <img src={project.screenshots[shot]} alt={`${project.title} screenshot ${shot + 1} of ${project.screenshots.length}`} className="w-full h-full object-cover object-top" />
            ) : (
              <ProjectPreview project={project} />
            )}
          </div>
          {project.screenshots.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Screenshots">
              {project.screenshots.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setShot(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  aria-pressed={i === shot}
                  className={`shrink-0 w-28 sm:w-36 aspect-[16/9] rounded-lg overflow-hidden border-2 transition-all ${i === shot ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={src} alt="" loading="lazy" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {[
            { label: 'The problem', text: project.problem },
            { label: 'The solution', text: project.solution },
          ].map((block) => (
            <div key={block.label} className="card p-6 lg:p-8">
              <Label>{block.label}</Label>
              <p className="font-body-md text-body-md text-on-surface-variant">{block.text}</p>
            </div>
          ))}
        </div>

        {/* What it does */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-4">
            <Label>What it does</Label>
            <h2 className="font-headline-lg text-[1.75rem] sm:text-headline-lg text-on-surface">Key capabilities</h2>
          </div>
          <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-3">
            {project.whatItDoes.map((item) => (
              <li key={item} className="flex items-start gap-3 p-4 rounded-lg border border-outline-variant">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-0.5 shrink-0" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                <span className="text-sm text-on-surface-variant">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture */}
        <div className="mb-20">
          <Label>Architecture</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architecture.map((item) => (
              <div key={item.number} className="card card-hover p-6">
                <span className="font-label-code text-3xl text-primary/40 block mb-3">{item.number}</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stack, constraints, lessons */}
        <div className="grid lg:grid-cols-3 gap-6 mb-20">
          <div className="card p-6">
            <Label>Technologies</Label>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-full bg-surface-container border border-outline-variant text-sm text-on-surface-variant">{tech}</span>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <Label>Constraints</Label>
            <ul className="space-y-3">
              {project.constraints.map((constraint) => (
                <li key={constraint} className="text-sm text-on-surface-variant leading-relaxed pl-4 border-l-2 border-outline-variant">{constraint}</li>
              ))}
            </ul>
          </div>
          <div className="card p-6">
            <Label>What I learned</Label>
            <ul className="space-y-3">
              {project.whatILearned.map((lesson) => (
                <li key={lesson} className="text-sm text-on-surface-variant leading-relaxed pl-4 border-l-2 border-primary">{lesson}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next project */}
        <Link to={`/project/${next.slug}`} className="group block card card-hover p-6 lg:p-10">
          <span className="font-label-code text-label-code text-on-surface-variant uppercase tracking-wider">Next project</span>
          <div className="mt-2 flex items-center justify-between gap-6">
            <span className="font-headline-lg text-[1.75rem] sm:text-headline-lg text-on-surface group-hover:text-primary transition-colors">{next.title}</span>
            <span className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </span>
          </div>
        </Link>
      </div>
    </article>
  );
};

export default ProjectDetail;
