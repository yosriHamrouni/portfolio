import { useEffect, useState, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';
import { Download } from './Icons';
import ThemeToggle from './ThemeToggle';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const Nav = () => {
  const { pathname } = useLocation();
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
    links.forEach(({ id }) => {
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
        aria-label="Primary"
        className={`max-w-6xl mx-auto border backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
          open ? 'rounded-3xl' : 'rounded-full'
        } ${scrolled || open ? 'bg-paper/80 border-line shadow-lg shadow-black/10' : 'bg-paper/40 border-transparent'}`}
      >
        <div className="h-14 pl-4 pr-2 flex items-center justify-between gap-4">
          <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 font-display font-semibold text-ink tracking-tight">
            <span className="w-8 h-8 rounded-lg bg-accent text-on-accent font-mono text-xs flex items-center justify-center">YH</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 text-small font-medium">
            {links.map(({ id, label }) => (
              <Link key={id} to={`/#${id}`} onClick={go(id)} className={linkClass(id)} aria-current={active === id ? 'true' : undefined}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download
                className="hidden sm:inline-flex items-center gap-2 h-10 px-5 rounded-full bg-accent text-on-accent text-small font-semibold glow-btn transition-shadow"
              >
                <Download size={15} />
                CV
              </a>
            )}
            <button
              type="button"
              className="lg:hidden w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink"
              aria-label={open ? 'Close menu' : 'Open menu'}
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
            {profile.cvUrl && (
              <a href={profile.cvUrl} download className="mt-2 inline-flex items-center justify-center gap-2 h-11 rounded-full bg-accent text-on-accent font-semibold">
                <Download size={16} />
                Download CV <span className="meta opacity-80">{profile.cvNote}</span>
              </a>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
