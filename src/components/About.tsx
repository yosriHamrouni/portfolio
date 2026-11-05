import { languages } from '../data/education';
import { stagger } from '../lib/motion';
import Section from './Section';

const lookingFor = [
  { label: 'Role', value: 'Full-Stack Software Engineer (junior)' },
  { label: 'Strongest on', value: 'Backend (Laravel, Spring Boot, ASP.NET Core) · React / TypeScript · LLM & RAG integration' },
  { label: 'Where', value: 'Tunisia · France · Remote' },
  { label: 'Start', value: 'Immediately' },
];

const About = () => {
  return (
    <Section id="about" eyebrow="About me" title="I like owning the whole path, from workflow to working software.">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-ink-muted reveal">
          <p>
            What I enjoy most is the whole path: understanding how people actually work, designing the data model and
            APIs, building the interface, then adding intelligence where it genuinely helps — like a risk score
            teachers can read, or an assistant that only sees what the user is allowed to see.
          </p>
          <p>
            I’ve done that in four internships, on four different stacks. At{' '}
            <span className="text-ink font-medium">Maison du Web</span> I spent six months building, on my own, a
            multi-tenant school management SaaS (Laravel, React, Inertia.js, PostgreSQL) that is now deployed, piloted
            with a school and handed over to the company. At <span className="text-ink font-medium">L-Mobile</span> I
            owned modules of a field-service app in ASP.NET Core and React, in a team of three. At{' '}
            <span className="text-ink font-medium">Krenova</span> I built a campaign platform in Node.js and React.
          </p>
          <p>
            I studied computer engineering at <span className="text-ink font-medium">ESPRIT</span> in Tunisia and spent
            an exchange semester at <span className="text-ink font-medium">CESI École d’Ingénieurs</span> in Caen,
            France, where I co-authored a machine-learning research project on genetic variants. Working in French
            engineering teams made me comfortable switching languages and ways of working.
          </p>
          <p>
            Outside code I teach guitar, which has taught me more about explaining things clearly than any course.
          </p>
          <p>I’m looking for my first full-time role as a full-stack engineer, in Tunisia, in France or remotely.</p>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="reveal card p-6">
            <h3 className="meta text-accent mb-4">Looking for</h3>
            <dl className="space-y-3 text-small">
              {lookingFor.map((item) => (
                <div key={item.label}>
                  <dt className="meta text-ink-subtle normal-case tracking-normal">{item.label}</dt>
                  <dd className="mt-0.5 text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
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
