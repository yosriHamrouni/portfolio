import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from './Icons';
import { useLanguage } from '../i18n/useLanguage';

// Catch-all for unknown paths. Vercel rewrites every route to index.html,
// so the SPA has to render its own 404.
const NotFound = () => {
  const { ui } = useLanguage();

  useEffect(() => {
    document.title = ui.meta.pageNotFoundTitle;
  }, [ui]);

  return (
    <section className="container-page pt-36 pb-24 min-h-[70vh] text-center">
      <p className="meta text-accent">404</p>
      <h1 className="mt-3 text-h1 font-bold text-ink">{ui.project.pageNotFound}</h1>
      <Link to="/" className="mt-8 inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-on-accent font-semibold glow-btn">
        <ArrowLeft size={14} /> {ui.project.backHome}
      </Link>
    </section>
  );
};

export default NotFound;
