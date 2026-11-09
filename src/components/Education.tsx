import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/useLanguage';
import { stagger } from '../lib/motion';
import { ArrowRight, ArrowUpRight } from './Icons';
import Section from './Section';

const Education = () => {
  const { ui, content } = useLanguage();
  return (
  <Section id="education" eyebrow={ui.education.eyebrow} title={ui.education.title}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
      {content.education.map((item, i) => (
        <article key={item.school} className="reveal card card-hover p-6 lg:p-8" style={stagger(i)}>
          <div className="flex flex-wrap items-center gap-2 meta">
            {item.period && <span className="text-accent">{item.period}</span>}
            <span className="text-ink-subtle normal-case tracking-normal">{item.location}</span>
          </div>
          {/* School names are official French names: keep them in Latin script. */}
          <h3 lang="fr" className="mt-3 text-h3 font-semibold text-ink">{item.school}</h3>
          <p className="mt-1 text-small text-ink">{item.degree}</p>
          <p className="mt-4 text-small text-ink-muted">{item.text}</p>
          {item.project && (
            <Link to={`/project/${item.project}`} className="group mt-5 inline-flex items-center gap-2 text-small font-semibold text-accent">
              <span className="link-underline">{ui.education.seeResearch}</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Link>
          )}
        </article>
      ))}
    </div>

    <h3 className="reveal mt-16 mb-6 meta text-accent">{ui.education.certifications}</h3>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {content.certifications.map((cert, i) => (
        <li key={cert.title} className="reveal card card-hover p-5 flex items-start gap-4" style={stagger(i % 3)}>
          {cert.image ? (
            <img src={cert.image} alt="" width={48} height={48} loading="lazy" className="w-12 h-12 object-contain shrink-0" />
          ) : (
            <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" />
                <path d="M8.2 13.4 7 22l5-3 5 3-1.2-8.6" />
              </svg>
            </span>
          )}
          <div className="min-w-0">
            {/* Certification titles are the issuers' official (English) names. */}
            <p lang="en" className="font-display font-semibold text-ink leading-snug">{cert.title}</p>
            <p className="mt-1 font-mono text-[11px] text-ink-subtle">
              {[cert.issuer, cert.date].filter(Boolean).join(' · ')}
            </p>
            {cert.note && <p className="mt-1 text-xs text-ink-muted">{cert.note}</p>}
            {cert.href && (
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent"
                aria-label={`${cert.hrefLabel ?? ui.education.viewCertificate}: ${cert.title}`}
              >
                <span className="link-underline">{cert.hrefLabel ?? ui.education.viewCertificate}</span> <ArrowUpRight size={12} />
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>

    <h3 className="reveal mt-16 mb-6 meta text-accent">{ui.education.beyondCode}</h3>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {content.activities.map((activity, i) => (
        <li key={activity.org} className="reveal card card-hover p-6" style={stagger(i)}>
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-display font-semibold text-ink">{activity.title}</p>
            <span className="meta text-ink-subtle shrink-0">{activity.since}</span>
          </div>
          <p className="text-small text-accent">{activity.org}</p>
          {activity.text && <p className="mt-3 text-small text-ink-muted">{activity.text}</p>}
        </li>
      ))}
    </ul>
  </Section>
  );
};

export default Education;
