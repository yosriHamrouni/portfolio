import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Stats from './components/Stats';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

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

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <div className="min-h-screen text-on-surface">
        <FloatingNav />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Experience />
                <Stats />
                <TechStack />
                <Projects />
                <Certifications />
                <Contact />
              </>
            } />
            <Route path="/project/:slug" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
