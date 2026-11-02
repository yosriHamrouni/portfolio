import { Link } from 'react-router-dom';
import devPhoto from '../assets/dev-photo.jpg';
import { pillars, profile } from '../data/profile';
import { stagger } from '../lib/motion';
import { ArrowRight, ArrowUpRight, Download } from './Icons';

const facts = [
  { label: 'Based in', value: profile.location },
  { label: 'Education', value: 'ESPRIT, Computer Engineering · 2026' },
  { label: 'Focus', value: 'Full-stack · Backend · Generative AI' },
  { label: 'Status', value: profile.availability },
];

const Hero = () => {
  return (
    <section aria-labelledby="hero-title" className="pt-28 lg:pt-36">
      <div className="container-page">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="reveal meta text-ink-subtle mb-6">
              {profile.name} — {profile.role}
            </p>
            <h1 id="hero-title" className="reveal text-display font-semibold text-ink text-balance" style={stagger(1)}>
              Software engineer building full-stack applications and{' '}
              <span className="text-accent">AI-powered</span> solutions.
            </h1>
            <p className="reveal mt-8 max-w-[38rem] text-lead text-ink-muted" style={stagger(2)}>
              {profile.intro}
            </p>

            <div className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" style={stagger(3)}>
              <Link
                to="/#projects"
                className="group inline-flex items-center gap-3 h-12 px-6 rounded-sm bg-accent text-paper font-medium hover:bg-accent-strong transition-colors"
              >
                See selected work
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              {profile.cvUrl && (
                <a href={profile.cvUrl} download className="inline-flex items-center gap-2 font-medium text-ink link-underline">
                  <Download /> Download CV <span className="meta text-ink-subtle">{profile.cvNote}</span>
                </a>
              )}
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-ink link-underline">
                LinkedIn <ArrowUpRight size={14} />
              </a>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-medium text-ink link-underline">
                GitHub <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <figure className="reveal col-span-8 sm:col-span-5 lg:col-span-3 lg:col-start-10" style={stagger(2)}>
            <img
              src={devPhoto}
              alt="Portrait of Yosri Hamrouni"
              width={400}
              height={400}
              className="w-full aspect-square object-cover rounded-sm bg-muted"
            />
            <figcaption className="meta text-ink-subtle mt-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
              Available for opportunities
            </figcaption>
          </figure>
        </div>

        <dl className="reveal mt-20 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 border-t border-line">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={`py-5 pr-4 border-b border-line lg:border-b-0 ${i % 2 === 1 ? 'pl-4 border-l' : ''} ${i === 2 ? 'lg:pl-4 lg:border-l' : ''}`}
            >
              <dt className="meta text-ink-subtle">{fact.label}</dt>
              <dd className="mt-1.5 text-small text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* The three capabilities the site is organised around */}
      <div className="border-t border-line bg-surface">
        <h2 className="sr-only">What I do</h2>
        <ol className="container-page grid grid-cols-1 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <li
              key={pillar.title}
              className={`reveal py-10 lg:py-14 md:pr-8 ${i > 0 ? 'border-t md:border-t-0 md:border-l border-line md:pl-8' : ''}`}
              style={stagger(i)}
            >
              <span className="meta text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-h3 font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-3 text-small text-ink-muted max-w-[22rem]">{pillar.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Hero;
