import { profile } from '../data/profile';

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="container-page py-10 flex flex-col sm:flex-row justify-between gap-4 text-small text-ink-muted">
        <p>
          © {year} {profile.name}
        </p>
        <p>Designed and built with React, TypeScript and Tailwind CSS.</p>
        <a href="#top" className="text-ink link-underline self-start sm:self-auto">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
};

export default Footer;
