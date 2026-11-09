import { profile } from '../data/profile';
import { useCvs, useLanguage } from '../i18n/useLanguage';
import { stagger } from '../lib/motion';
import { ArrowUpRight, Download } from './Icons';
import Section from './Section';

const Contact = () => {
  const { ui, content } = useLanguage();
  const cvs = useCvs();
  const channels = [
    profile.email && { label: ui.contact.email, value: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: 'LinkedIn', value: 'yosri-hamrouni', href: profile.links.linkedin, external: true },
    { label: 'GitHub', value: 'yosriHamrouni', href: profile.links.github, external: true },
  ].filter((c): c is { label: string; value: string; href: string; external: boolean } => Boolean(c));

  return (
    <Section id="contact" eyebrow={ui.contact.eyebrow} title={ui.contact.title}>
      <div className="reveal relative overflow-hidden rounded-2xl border border-line bg-surface/60 p-8 sm:p-10 lg:p-16">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,var(--glow-strong),transparent_60%)] opacity-40" />
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-paper border border-line mb-6">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              <span className="meta text-ink-muted normal-case tracking-normal">{ui.contact.available}</span>
            </div>
            <p className="text-lead text-ink-muted">{ui.contact.text}</p>
            <p className="mt-4 meta text-ink-subtle normal-case tracking-normal">{ui.contact.basedIn(content.location)}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {cvs.map((cv, i) => (
                <a
                  key={cv.url}
                  href={cv.url}
                  download
                  className={`h-12 px-6 inline-flex items-center gap-2 rounded-full font-semibold text-small transition-shadow ${
                    i === 0 ? 'bg-accent text-on-accent glow-btn' : 'border border-line-strong text-ink hover:border-accent hover:text-accent'
                  }`}
                >
                  <Download /> {i === 0 ? ui.common.downloadMyCv : ui.common.cvShort}{' '}
                  <span className="meta opacity-80 normal-case tracking-normal">{cv.label}</span>
                </a>
              ))}
            </div>
          </div>

          <ul className="lg:col-span-6 space-y-3">
            {channels.map((channel, i) => (
              <li key={channel.label} style={stagger(i)} className="reveal">
                <a
                  href={channel.href}
                  {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group card card-hover flex items-center justify-between gap-4 px-5 py-4"
                >
                  <span className="min-w-0">
                    <span className="block meta text-ink-subtle">{channel.label}</span>
                    {/* Addresses and handles are Latin and read left to right, even in Arabic. */}
                    <span dir="ltr" className="block mt-1 font-display text-h3 font-semibold text-ink group-hover:text-accent transition-colors break-all text-start rtl:text-end">
                      {channel.value}
                    </span>
                  </span>
                  <span className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 transition-transform group-hover:rotate-45 rtl:group-hover:-rotate-45" aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
