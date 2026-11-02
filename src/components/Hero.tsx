import devPhoto from '../assets/dev-photo.jpg';
import { stagger } from '../lib/motion';

const microStats = [
  {
    label: 'ESPRIT Engineering · 2026',
    icon: <><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
  },
  {
    label: 'Nabeul, Tunisia · Remote-friendly',
    icon: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  },
  {
    label: 'CESI France exchange',
    icon: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" /></>,
  },
];

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
              <span className="font-label-code text-label-code text-primary">
                Available for full-time roles
              </span>
            </div>

            <h1 className="reveal font-headline-xl text-[2.5rem] leading-[1.1] sm:text-headline-xl lg:text-[4rem] lg:leading-[1.05] text-on-surface" style={stagger(1)}>
              Hi, I&apos;m Yosri. I build{' '}
              <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                intelligent systems
              </span>{' '}
              and AI-powered products.
            </h1>

            <p className="reveal font-body-lg text-body-lg text-on-surface-variant max-w-xl" style={stagger(2)}>
              Software engineer and full-stack developer. From multi-tenant SaaS architectures to
              RAG pipelines and secure Spring Boot backends, I take products from schema to
              shipped interface.
            </p>

            <div className="reveal flex flex-wrap items-center gap-3 pt-2" style={stagger(3)}>
              <a
                href="#projects"
                className="group px-7 h-12 inline-flex items-center gap-2 rounded-full bg-primary text-on-primary font-label-pill uppercase glow-btn transition-shadow duration-200"
              >
                View Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://github.com/yosriHamrouni"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 h-12 inline-flex items-center gap-2 rounded-full border border-outline-variant text-on-surface font-label-pill uppercase hover:border-primary hover:text-primary transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yosri-hamrouni-498a60238"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 h-12 inline-flex items-center gap-2 rounded-full border border-outline-variant text-on-surface font-label-pill uppercase hover:border-primary hover:text-primary transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>

            <ul className="reveal pt-6 flex flex-wrap gap-x-8 gap-y-3 text-on-surface-variant font-label-code text-label-code" style={stagger(4)}>
              {microStats.map((stat) => (
                <li key={stat.label} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" aria-hidden="true">
                    {stat.icon}
                  </svg>
                  {stat.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal lg:col-span-5 relative max-w-md mx-auto w-full" style={stagger(2)}>
            {/* Cyan glow cones */}
            <div aria-hidden="true" className="absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_70%_20%,var(--glow-strong),transparent_55%),radial-gradient(circle_at_20%_90%,var(--canvas-glow),transparent_60%)] blur-2xl opacity-70" />
            <div className="relative aspect-[4/5] rounded-2xl border border-outline-variant overflow-hidden bg-surface-container">
              <img src={devPhoto} alt="Portrait of Yosri Hamrouni" className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-background/70 backdrop-blur-md border border-outline-variant">
                <div>
                  <div className="text-sm font-semibold text-on-surface">Yosri Hamrouni</div>
                  <div className="font-label-code text-[11px] text-on-surface-variant">Software Engineer</div>
                </div>
                <span className="font-label-code text-[11px] text-primary">AI · Full-Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About" className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
        <span className="font-label-code text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="w-px h-8 bg-gradient-to-b from-current to-transparent" />
      </a>
    </section>
  );
};

export default Hero;
