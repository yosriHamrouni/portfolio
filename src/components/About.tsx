import SectionHeader from './SectionHeader';
import { stagger } from '../lib/motion';

const facts = [
  { label: 'Location', value: 'Nabeul, Tunisia' },
  { label: 'Education', value: 'ESPRIT — Computer Engineering (2026) · CESI France exchange' },
  { label: 'Languages', value: 'Arabic (native), French (fluent), English (B2)' },
  { label: 'Availability', value: 'Open to full-time roles · Remote-friendly' },
];

const competencies = [
  {
    title: 'Full-Stack Engineering',
    description: 'Complete web applications, from frontend interfaces to backend services and databases.',
    icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  },
  {
    title: 'Artificial Intelligence',
    description: 'LLMs, Retrieval-Augmented Generation (RAG) and intelligent automation integrated into real products.',
    icon: <><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1 2 7.5V17a4 4 0 0 1-6 3.46A4 4 0 0 1 6 17v-2.5A4 4 0 0 1 8 7V6a4 4 0 0 1 4-4Z" /><path d="M12 2v20" /></>,
  },
  {
    title: 'Software Architecture',
    description: 'API design, database modelling, authentication and multi-tenancy — built to be maintained.',
    icon: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><path d="M10 6.5h4M17.5 10v4" /></>,
  },
];

const About = () => {
  return (
    <section id="about" className="w-full border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="About Me" title="Engineering ideas into intelligent products" />
            <div className="reveal space-y-5 font-body-md text-body-md text-on-surface-variant -mt-4">
              <p>
                I&apos;m Yosri, a Software Engineer and Full-Stack Developer who enjoys working across the
                entire lifecycle — designing architectures, building APIs and crafting interfaces people
                actually like to use.
              </p>
              <p>
                I&apos;m most interested in where software engineering meets AI: using LLMs, RAG and
                agents to turn traditional applications into smarter, more useful products.
              </p>
            </div>

            <dl className="reveal mt-10 rounded-[var(--radius-card)] border border-outline-variant divide-y divide-outline-variant">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 px-5 py-4">
                  <dt className="font-label-code text-label-code text-primary sm:w-32 shrink-0">{fact.label}</dt>
                  <dd className="text-on-surface-variant">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 space-y-4 lg:pt-12">
            <span className="reveal font-label-code text-label-code text-primary uppercase tracking-wider block mb-2">
              Core Competencies
            </span>
            {competencies.map((item, index) => (
              <div key={item.title} className="reveal card card-hover p-6 flex gap-4" style={stagger(index)}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{item.title}</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
