import { useEffect, useState, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';
import { useCvs, useLanguage } from '../i18n/useLanguage';
import { Download } from './Icons';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

const sectionIds = ['about', 'experience', 'projects', 'skills', 'education', 'contact'] as const;

const Nav = () => {
  const { pathname } = useLocation();
  const { ui } = useLanguage();
  const cvs = useCvs();
  const links = sectionIds.map((id) => ({ id, label: ui.nav.links[id] }));
  const [sectionInView, setSectionInView] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight the section crossing the middle of the viewport.
  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setSectionInView(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const active = pathname === '/' ? sectionInView : pathname.startsWith('/project/') ? 'projects' : '';

  const go = (id: string) => (e: MouseEvent) => {
    setOpen(false);
    // Re-clicking the current hash would not change the URL, so scroll directly on the home page.
    if (pathname === '/') {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView();
      history.replaceState(null, '', `#${id}`);
    }
  };

  const linkClass = (id: string) =>
    `px-3 py-1.5 rounded-full transition-colors duration-200 ${
      active === id ? 'text-accent bg-accent/10' : 'text-ink-muted hover:text-ink'
    }`;

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-4">
      <nav
        aria-label={ui.nav.label}
        className={`max-w-6xl mx-auto border backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
          open ? 'rounded-3xl' : 'rounded-full'
        } ${scrolled || open ? 'bg-paper/80 border-line shadow-lg shadow-black/10' : 'bg-paper/40 border-transparent'}`}
      >
        <div className="h-14 ps-4 pe-2 flex items-center justify-between gap-3 sm:gap-4">
          <Link to="/" onClick={() => setOpen(false)} aria-label={ui.common.home} className="flex items-center gap-2.5 font-display font-semibold text-ink tracking-tight shrink-0">
            {/* Name and monogram stay in Latin script: they match the CV and search results. */}
            <span dir="ltr" className="w-8 h-8 rounded-lg bg-accent text-on-accent font-code text-xs flex items-center justify-center">YH</span>
            <span dir="ltr" className="hidden sm:inline lg:hidden xl:inline">{profile.name}</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 text-small font-medium">
            {links.map(({ id, label }) => (
              <Link key={id} to={`/#${id}`} onClick={go(id)} className={linkClass(id)} aria-current={active === id ? 'true' : undefined}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            {cvs[0] && (
              <a
                href={cvs[0].url}
                download
                aria-label={ui.common.downloadCvIn(cvs[0].label)}
                className="hidden sm:inline-flex items-center gap-2 h-10 px-5 rounded-full bg-accent text-on-accent text-small font-semibold glow-btn transition-shadow"
              >
                <Download size={15} />
                {ui.common.cvShort}
              </a>
            )}
            <button
              type="button"
              className="lg:hidden w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink"
              aria-label={open ? ui.nav.closeMenu : ui.nav.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="lg:hidden px-3 pb-4 grid gap-1">
            {links.map(({ id, label }) => (
              <Link key={id} to={`/#${id}`} onClick={go(id)} className={`${linkClass(id)} py-2.5 text-body`}>
                {label}
              </Link>
            ))}
            {cvs.map((cv, i) => (
              <a
                key={cv.url}
                href={cv.url}
                download
                className={`inline-flex items-center justify-center gap-2 h-11 rounded-full font-semibold ${
                  i === 0 ? 'mt-2 bg-accent text-on-accent' : 'border border-line text-ink'
                }`}
              >
                <Download size={16} />
                {ui.common.downloadCv} <span className="meta opacity-80">{cv.label}</span>
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
