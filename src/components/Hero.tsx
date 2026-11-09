import { Link } from 'react-router-dom';
import devPhoto from '../assets/dev-photo.jpg';
import { profile } from '../data/profile';
import { useCvs, useLanguage } from '../i18n/useLanguage';
import { stagger } from '../lib/motion';
import { ArrowRight, ArrowUpRight, Download } from './Icons';

// Icons for the three hero facts (degree, exchange, location), in content order.
const factIcons = [
  <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
  <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" /></>,
  <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
];

const pillarIcons = [
  <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><path d="M10 6.5h4M17.5 10v4" /></>,
  <><path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1 2 7.5V17a4 4 0 0 1-6 3.46A4 4 0 0 1 6 17v-2.5A4 4 0 0 1 8 7V6a4 4 0 0 1 4-4Z" /><path d="M12 2v20" /></>,
];

const pillButton = 'h-12 px-6 inline-flex items-center gap-2 rounded-full font-semibold text-small transition-all duration-200';

const Hero = () => {
  const { ui, content } = useLanguage();
  const cvs = useCvs();
  return (
    <section aria-labelledby="hero-title" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              <span className="meta text-accent normal-case tracking-normal">{ui.hero.badge}</span>
            </div>

            <h1 id="hero-title" className="reveal text-display font-bold text-ink text-balance" style={stagger(1)}>
              {ui.hero.titleStart}
              {/* The gradient follows the reading direction. */}
              <span className="bg-gradient-to-r rtl:bg-gradient-to-l from-accent to-tertiary bg-clip-text text-transparent">{ui.hero.titleHighlight}</span>
              {ui.hero.titleEnd}
            </h1>

            <p className="reveal text-lead text-ink-muted max-w-xl" style={stagger(2)}>
              {content.intro}
            </p>

            <div className="reveal flex flex-wrap items-center gap-3" style={stagger(3)}>
              <Link to={`/project/${profile.demoProject}`} className={`group ${pillButton} bg-accent text-on-accent glow-btn`}>
                {ui.hero.demoCta}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
              </Link>
              <Link to="/#projects" className={`${pillButton} border border-line-strong text-ink hover:border-accent hover:text-accent`}>
                {ui.hero.allProjects}
              </Link>
              {cvs[0] && (
                <span className="inline-flex items-center gap-3">
                  <a href={cvs[0].url} download className="inline-flex items-center gap-2 text-small font-semibold text-ink hover:text-accent transition-colors">
                    <Download /> {ui.common.downloadCv} <span className="meta text-ink-subtle normal-case tracking-normal">{cvs[0].label}</span>
                  </a>
                  {cvs.slice(1).map((cv) => (
                    <a key={cv.url} href={cv.url} download lang="en" className="font-code text-meta text-ink-subtle hover:text-accent transition-colors" aria-label={ui.common.downloadCvIn(cv.label)}>
                      {cv.lang.toUpperCase()}
                    </a>
                  ))}
                </span>
              )}
            </div>

            <div className="reveal flex flex-wrap items-center gap-x-6 gap-y-3" style={stagger(4)}>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-small font-medium text-ink-muted hover:text-accent transition-colors">
                GitHub <ArrowUpRight size={14} />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-small font-medium text-ink-muted hover:text-accent transition-colors">
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <span className="hidden sm:block w-px h-4 bg-line-strong" aria-hidden="true" />
              <ul className="flex flex-wrap gap-x-6 gap-y-2 meta text-ink-subtle normal-case tracking-normal">
                {content.heroFacts.map((fact, i) => (
                  <li key={fact} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true">
                      {factIcons[i]}
                    </svg>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="reveal lg:col-span-5 relative max-w-sm mx-auto w-full" style={stagger(2)}>
            {/* Cyan glow cones behind the portrait */}
            <div aria-hidden="true" className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_70%_20%,var(--glow-strong),transparent_55%),radial-gradient(circle_at_20%_90%,var(--canvas-glow),transparent_60%)] blur-2xl opacity-70" />
            <div className="relative aspect-[4/5] rounded-2xl border border-line overflow-hidden bg-muted">
              <img src={devPhoto} alt={ui.hero.portraitAlt} width={400} height={400} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-paper/90 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-paper/70 backdrop-blur-md border border-line">
                <div>
                  <div dir="ltr" className="text-small font-semibold text-ink text-start rtl:text-end">{profile.name}</div>
                  <div className="font-mono text-[11px] text-ink-subtle">{content.role}</div>
                </div>
                <span className="font-mono text-[11px] text-accent shrink-0">{ui.hero.cardTag}</span>
              </div>
            </div>
          </div>
        </div>

        {/* The three capabilities the site is organised around */}
        <h2 className="sr-only">{ui.hero.pillarsHeading}</h2>
        <ul className="mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4">
          {content.pillars.map((pillar, i) => (
            <li key={pillar.title} className="reveal card card-hover p-6" style={stagger(i)}>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {pillarIcons[i]}
                  </svg>
                </span>
                <h3 className="text-h3 font-semibold text-ink">{pillar.title}</h3>
              </div>
              <p className="mt-4 text-small text-ink-muted">{pillar.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
