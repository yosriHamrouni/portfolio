import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/useLanguage';
import { stagger } from '../lib/motion';
import { ArrowRight } from './Icons';
import Section from './Section';

const Experience = () => {
  const { ui, content } = useLanguage();
  return (
    <Section id="experience" eyebrow={ui.experience.eyebrow} title={ui.experience.title} intro={ui.experience.intro}>
      {/* Timeline rail sits on the inline-start side, so it moves to the right in Arabic. */}
      <ol className="relative space-y-6 before:absolute before:start-[7px] before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-accent before:via-line-strong before:to-transparent">
        {content.experiences.map((exp, index) => (
          <li key={exp.company} className="reveal relative ps-10" style={stagger(index)}>
            <span
              aria-hidden="true"
              className={`absolute start-0 top-8 w-[15px] h-[15px] rounded-full border-2 border-accent ${exp.featured ? 'bg-accent pulse-dot' : 'bg-paper'}`}
            />
            <article className={`card card-hover p-6 lg:p-8 ${exp.featured ? 'border-accent/40' : ''}`}>
              <div className="grid lg:grid-cols-12 gap-6">
                <div className="lg:col-span-4 space-y-2">
                  <p className="meta text-accent">{exp.period}</p>
                  <h3 className={`font-semibold text-ink ${exp.featured ? 'text-h2' : 'text-h3'}`}>{exp.company}</h3>
                  <p className="text-small text-ink">{exp.role}</p>
                  {exp.location && <p className="meta text-ink-subtle normal-case tracking-normal">{exp.location}</p>}
                  {exp.featured && (
                    <span className="inline-block mt-2 px-2.5 py-1 rounded-full bg-accent/10 text-accent meta">{ui.experience.mainProject}</span>
                  )}
                </div>
                <div className="lg:col-span-8">
                  <p className={exp.featured ? 'text-lead text-ink' : 'text-ink'}>{exp.summary}</p>
                  {exp.contributions.length > 0 && <ul className={`mt-4 grid gap-x-6 gap-y-2 ${exp.contributions.length > 2 ? 'sm:grid-cols-2' : ''}`}>
                    {exp.contributions.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-small text-ink-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-1 shrink-0" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-full bg-muted border border-line font-code text-[11px] text-ink-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {exp.project && (
                    <Link to={`/project/${exp.project}`} className="group mt-6 inline-flex items-center gap-2 text-small font-semibold text-accent">
                      <span className="link-underline">{ui.experience.readCaseStudy}</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
