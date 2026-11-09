import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import NotFound from './components/NotFound';
import { useLanguage } from './i18n/useLanguage';

// Scrolls to the hash target (or top) on every route change, and reveals
// `.reveal` elements as they enter the viewport.
const RouteEffects = () => {
  const { pathname, hash } = useLocation();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    // Jump instantly when arriving from another page; glide for in-page anchors.
    const behavior: ScrollBehavior = lastPathname.current === pathname ? 'smooth' : 'instant';
    lastPathname.current = pathname;
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px' },
    );
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

const Page = () => {
  const { pathname } = useLocation();
  const { ui } = useLanguage();

  useEffect(() => {
    if (pathname === '/') document.title = ui.meta.title;
  }, [pathname, ui]);

  return (
    // Keyed on the path so each route change replays the enter animation.
    <main key={pathname} className="page-enter">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Contact />
            </>
          }
        />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

function App() {
  const { ui } = useLanguage();
  return (
    <BrowserRouter>
      <RouteEffects />
      <div id="top" className="min-h-screen flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[60] focus:bg-accent focus:text-on-accent focus:px-4 focus:py-2 focus:rounded-full">
          {ui.common.skipToContent}
        </a>
        <Nav />
        <div id="main-content" className="flex-1">
          <Page />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
