import { languages } from '../data/education';
import Section from './Section';

const roles = [
  'Junior Full-Stack Developer',
  'Junior Backend Developer',
  'Java / Spring Boot Developer',
  'React Developer',
  'Software Engineer',
  'Junior AI / Generative AI Engineer',
];

const About = () => {
  return (
    <Section id="about" index="01" label="About" title="From engineering school to shipping real applications.">
      <div className="grid grid-cols-9 gap-x-6 gap-y-12">
        <div className="col-span-9 md:col-span-5 space-y-5 text-ink-muted reveal">
          <p>
            I studied computer engineering at <span className="text-ink">ESPRIT</span> in Tunisia, with an
            academic mobility at <span className="text-ink">CESI École d’Ingénieurs</span> in Caen, France.
            Studying in a French engineering school and working in multicultural teams taught me to adapt
            quickly and to communicate clearly.
          </p>
          <p>
            Across four internships I worked on real applications with quite different stacks — Laravel,
            React, ASP.NET Core, Node.js. The most substantial was my six-month final-year project at Maison
            du Web, where I contributed across the backend, frontend and database of a multi-tenant school
            management SaaS.
          </p>
          <p>
            What I enjoy most is the whole path: understanding a workflow, designing the data model and APIs,
            building the interface, then adding intelligence where it actually helps — an explainable rule
            engine, or an assistant grounded in the user’s own data.
          </p>
          <p>
            I’m now looking for my first full-time role, in a team where I can contribute from the start and
            keep growing as an engineer.
          </p>
        </div>

        <dl className="col-span-9 md:col-span-4 md:col-start-6 reveal text-small divide-y divide-line border-y border-line">
          <div className="py-4">
            <dt className="meta text-ink-subtle">Looking for</dt>
            <dd className="mt-2">
              <ul className="space-y-1 text-ink">
                {roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </dd>
          </div>
          <div className="py-4">
            <dt className="meta text-ink-subtle">Where</dt>
            <dd className="mt-2 text-ink">Tunisia first · France · Remote</dd>
          </div>
          <div className="py-4">
            <dt className="meta text-ink-subtle">Languages</dt>
            <dd className="mt-2 text-ink">
              {languages.map((l) => (
                <div key={l.name} className="flex justify-between gap-4">
                  <span>{l.name}</span>
                  <span className="text-ink-muted">{l.level}</span>
                </div>
              ))}
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
};

export default About;
