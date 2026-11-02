import { useEffect, useState, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

const FloatingNav = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    if (pathname !== '/') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
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

  const go = (id: string) => (e: MouseEvent) => {
    setOpen(false);
    // Re-clicking the current hash wouldn't change the URL, so scroll directly on the home page.
    if (pathname === '/') {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView();
      history.replaceState(null, '', `#${id}`);
    }
  };

  const linkClass = (id: string) =>
    `px-3 py-1.5 rounded-full transition-colors duration-200 ${
      pathname === '/' && active === id
        ? 'text-primary bg-primary/10'
        : 'text-on-surface-variant hover:text-on-surface'
    }`;

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-4">
      <nav
        aria-label="Primary"
        className={`max-w-6xl mx-auto border backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${open ? 'rounded-3xl' : 'rounded-full'} ${
          scrolled || open
            ? 'bg-background/80 border-outline-variant shadow-lg shadow-black/10'
            : 'bg-background/40 border-transparent'
        }`}
      >
        <div className="h-14 pl-5 pr-2 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-headline-md text-on-surface tracking-tight" onClick={() => setOpen(false)}>
            <span className="w-7 h-7 rounded-lg bg-primary text-on-primary font-label-code text-xs flex items-center justify-center">YH</span>
            <span className="hidden sm:inline">Yosri Hamrouni</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 text-sm font-medium">
            {links.map(({ id, label }) => (
              <Link key={id} to={`/#${id}`} onClick={go(id)} className={linkClass(id)}>
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/#contact"
              onClick={go('contact')}
              className="hidden sm:inline-flex px-5 h-10 items-center rounded-full bg-primary text-on-primary text-sm font-semibold glow-btn transition-shadow duration-200"
            >
              Let&apos;s Talk
            </Link>
            <button
              type="button"
              className="lg:hidden w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(!open)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div id="mobile-menu" className="lg:hidden px-3 pb-4 grid gap-1 text-base font-medium">
            {links.map(({ id, label }) => (
              <Link key={id} to={`/#${id}`} onClick={go(id)} className={`${linkClass(id)} py-2.5`}>
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default FloatingNav;
