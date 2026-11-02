import { languages } from '../data/education';
import { stagger } from '../lib/motion';
import Section from './Section';

const roles = [
  'Junior Full-Stack Developer',
  'Junior Backend Developer',
  'Java / Spring Boot Developer',
  'React Developer',
  'Software Engineer',
  'Junior AI / GenAI Engineer',
];

const About = () => {
  return (
    <Section id="about" eyebrow="About me" title="From engineering school to shipping real applications.">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-ink-muted reveal">
          <p>
            I studied computer engineering at <span className="text-ink font-medium">ESPRIT</span> in Tunisia, with an
            academic mobility at <span className="text-ink font-medium">CESI École d’Ingénieurs</span> in Caen, France.
            Studying in a French engineering school and working in multicultural teams taught me to adapt quickly and
            to communicate clearly.
          </p>
          <p>
            Across four internships I worked on real applications with quite different stacks — Laravel, React,
            ASP.NET Core, Node.js. The most substantial was my six-month final-year project at Maison du Web, where I
            contributed across the backend, frontend and database of a multi-tenant school management SaaS.
          </p>
          <p>
            What I enjoy most is the whole path: understanding a workflow, designing the data model and APIs, building
            the interface, then adding intelligence where it actually helps — an explainable rule engine, or an
            assistant grounded in the user’s own data.
          </p>
          <p>
            I’m now looking for my first full-time role, in a team where I can contribute from the start and keep
            growing as an engineer.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="reveal card p-6">
            <h3 className="meta text-accent mb-4">Looking for</h3>
            <ul className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <li key={role} className="px-3 py-1.5 rounded-full bg-muted border border-line text-small text-ink">
                  {role}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-small text-ink-muted">Tunisia first · France · Remote</p>
          </div>
          <div className="reveal card p-6" style={stagger(1)}>
            <h3 className="meta text-accent mb-4">Languages</h3>
            <dl className="space-y-2 text-small">
              {languages.map((l) => (
                <div key={l.name} className="flex justify-between gap-4">
                  <dt className="text-ink">{l.name}</dt>
                  <dd className="text-ink-muted">{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
