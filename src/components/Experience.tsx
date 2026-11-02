import { Link } from 'react-router-dom';
import { experiences } from '../data/experience';
import { ArrowRight } from './Icons';
import Section from './Section';

const Experience = () => {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Four internships, each on a real product."
      intro="From a Laravel hotel application in 2022 to a six-month multi-tenant SaaS with AI features in 2026."
    >
      <ol className="border-t border-line-strong">
        {experiences.map((exp) => (
          <li key={exp.company} className="reveal grid grid-cols-9 gap-x-6 gap-y-3 py-10 border-b border-line">
            <div className="col-span-9 md:col-span-2">
              <p className="meta text-ink">{exp.period}</p>
              {exp.location && <p className="meta text-ink-subtle mt-1">{exp.location}</p>}
              {exp.featured && <p className="meta text-accent mt-3">Main project</p>}
            </div>

            <div className="col-span-9 md:col-span-7">
              <h3 className={`font-semibold text-ink ${exp.featured ? 'text-h2' : 'text-h3'}`}>{exp.company}</h3>
              <p className="mt-1 text-small text-ink-muted">{exp.role}</p>
              <p className={`mt-4 max-w-[40rem] ${exp.featured ? 'text-lead text-ink' : 'text-ink'}`}>{exp.summary}</p>

              <ul className="mt-5 space-y-2 max-w-[40rem]">
                {exp.contributions.map((item) => (
                  <li key={item} className="grid grid-cols-[1rem_1fr] text-small text-ink-muted">
                    <span className="text-accent" aria-hidden="true">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 meta text-ink-subtle normal-case tracking-normal">
                {exp.stack.join(' / ')}
              </p>

              {exp.project && (
                <Link
                  to={`/project/${exp.project}`}
                  className="group mt-6 inline-flex items-center gap-2 text-small font-medium text-accent"
                >
                  <span className="link-underline">Read the case study</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
