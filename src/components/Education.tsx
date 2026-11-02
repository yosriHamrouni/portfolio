import { activities, certifications, education } from '../data/education';
import { ArrowUpRight } from './Icons';
import Section from './Section';

const Education = () => {
  return (
    <Section id="education" index="05" label="Education" title="Education, certifications and life beyond code.">
      <ol className="border-t border-ink">
        {education.map((item) => (
          <li key={item.school} className="reveal grid grid-cols-9 gap-x-6 gap-y-2 py-8 border-b border-line">
            <div className="col-span-9 md:col-span-2">
              {item.period && <p className="meta text-ink">{item.period}</p>}
              <p className="meta text-ink-subtle mt-1">{item.location}</p>
            </div>
            <div className="col-span-9 md:col-span-7">
              <h3 className="text-h3 font-semibold text-ink">{item.school}</h3>
              <p className="mt-1 text-small text-ink">{item.degree}</p>
              <p className="mt-3 text-small text-ink-muted max-w-[40rem]">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid grid-cols-9 gap-x-6 gap-y-12">
        <div className="col-span-9 md:col-span-5 reveal">
          <h3 className="meta text-ink-subtle mb-4">Certifications</h3>
          <ul className="border-t border-line">
            {certifications.map((cert) => (
              <li key={cert.title} className="flex items-baseline justify-between gap-4 py-3 border-b border-line text-small">
                <span>
                  <span className="text-ink">{cert.title}</span>
                  {cert.issuer && <span className="text-ink-muted"> — {cert.issuer}</span>}
                </span>
                <span className="shrink-0 flex items-baseline gap-3">
                  {cert.date && <span className="meta text-ink-subtle">{cert.date}</span>}
                  {cert.href && (
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent link-underline"
                      aria-label={`View ${cert.title} certificate`}
                    >
                      View <ArrowUpRight size={12} />
                    </a>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-9 md:col-span-4 reveal">
          <h3 className="meta text-ink-subtle mb-4">Beyond code</h3>
          <ul className="border-t border-line">
            {activities.map((activity) => (
              <li key={activity.org} className="py-4 border-b border-line">
                <p className="flex items-baseline justify-between gap-4">
                  <span className="text-small font-semibold text-ink">{activity.title}</span>
                  <span className="meta text-ink-subtle shrink-0">{activity.since}</span>
                </p>
                <p className="text-small text-ink">{activity.org}</p>
                <p className="mt-2 text-small text-ink-muted">{activity.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Education;
