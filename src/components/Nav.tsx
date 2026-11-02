import { useEffect, useState, type MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data/profile';
import { Download } from './Icons';

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
    const onScroll = () => setScrolled(window.scrollY > 8);
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
    `relative py-1 transition-colors duration-200 ${
      active === id ? 'text-accent' : 'text-ink-muted hover:text-ink'
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-paper/95 border-b transition-colors duration-300 ${
        scrolled || open ? 'border-line' : 'border-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-page h-16 flex items-center justify-between gap-6">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-baseline gap-3">
          <span className="font-semibold tracking-tight text-ink">{profile.name}</span>
          <span className="hidden sm:inline meta text-ink-subtle">{profile.role}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-7 text-small">
          {links.map(({ id, label }) => (
            <Link key={id} to={`/#${id}`} onClick={go(id)} className={linkClass(id)} aria-current={active === id ? 'true' : undefined}>
              {label}
              {active === id && <span className="absolute -bottom-[21px] inset-x-0 h-px bg-accent" aria-hidden="true" />}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              download
              className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-sm border border-ink text-small font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              <Download size={15} />
              CV
            </a>
          )}
          <button
            type="button"
            className="lg:hidden h-9 px-3 -mr-3 meta text-ink"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-line bg-paper">
          <ul className="container-page py-4">
            {links.map(({ id, label }, i) => (
              <li key={id} className="border-b border-line last:border-b-0">
                <Link to={`/#${id}`} onClick={go(id)} className={`flex items-baseline gap-4 py-3.5 text-lead ${active === id ? 'text-accent' : 'text-ink'}`}>
                  <span className="meta text-ink-subtle w-6">{String(i + 1).padStart(2, '0')}</span>
                  {label}
                </Link>
              </li>
            ))}
            {profile.cvUrl && (
              <li className="pt-4">
                <a href={profile.cvUrl} download className="inline-flex items-center gap-2 h-11 px-5 rounded-sm bg-ink text-paper font-medium">
                  <Download size={16} />
                  Download CV
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
