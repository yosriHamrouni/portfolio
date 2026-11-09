import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';

// Dark-first: the site is dark unless the visitor picks light.
const ThemeToggle = () => {
  const { ui } = useLanguage();
  const [isDark, setIsDark] = useState(() => !document.documentElement.classList.contains('light'));

  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  }, [isDark]);

  const label = isDark ? ui.theme.toLight : ui.theme.toDark;

  return (
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
      className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink-muted hover:text-accent hover:border-accent transition-colors"
      aria-label={label}
      title={label}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 1.5v2M12 20.5v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1.5 12h2M20.5 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </>
        ) : (
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        )}
      </svg>
    </button>
  );
};

export default ThemeToggle;
