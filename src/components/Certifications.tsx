import type { ReactNode } from 'react';
import { certifications, type Certification } from '../data/certifications';
import SectionHeader from './SectionHeader';
import { stagger } from '../lib/motion';

const icons: Record<Certification['icon'], ReactNode> = {
  code: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  design: <><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></>,
  ai: <><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1 2 7.5V17a4 4 0 0 1-6 3.46A4 4 0 0 1 6 17v-2.5A4 4 0 0 1 8 7V6a4 4 0 0 1 4-4Z" /><path d="M12 2v20" /></>,
  terminal: <><polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" /></>,
  cloud: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  git: <><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 21V9a9 9 0 0 0 9 9" /></>,
  language: <><path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" /><path d="m22 22-5-10-5 10" /><path d="M14 18h6" /></>,
};

const Certifications = () => {
  return (
    <section id="certifications" className="w-full border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <SectionHeader
          eyebrow="Industry Validation"
          title="Certifications & credentials"
          description="Verified through Credly, Coursera and ETS."
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <li
              key={cert.href ?? cert.title}
              className="reveal card card-hover p-5 flex items-start gap-4"
              style={stagger(index % 3)}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {icons[cert.icon]}
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-headline-sm text-[0.95rem] text-on-surface leading-snug">{cert.title}</h3>
                <p className="font-label-code text-[11px] text-on-surface-variant mt-1">
                  {cert.issuer}
                  {cert.date && <> · {cert.date}</>}
                </p>
                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary hover:underline underline-offset-4"
                  >
                    {cert.hrefLabel}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
