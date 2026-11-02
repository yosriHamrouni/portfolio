import { skillGroups } from '../data/skills';
import { stagger } from '../lib/motion';
import Section from './Section';

// Bento spans for the seven groups on large screens (12 columns).
const spans = ['lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-3', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-12'];

const Skills = () => (
  <Section
    id="skills"
    eyebrow="Core capabilities"
    title="The tools I build with"
    intro="Highlighted technologies are the ones I have used in internships or projects; the others I have worked with less."
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
      {skillGroups.map((group, i) => (
        <div key={group.name} className={`reveal card card-hover p-6 ${spans[i] ?? 'lg:col-span-4'}`} style={stagger(i % 3)}>
          <h3 className="text-h3 font-semibold text-ink mb-5">{group.name}</h3>
          <ul className="flex flex-wrap gap-2">
            {group.core.map((tech) => (
              <li key={tech} className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/25 text-small text-ink">
                {tech}
              </li>
            ))}
            {group.also?.map((tech) => (
              <li key={tech} className="px-3 py-1.5 rounded-full border border-line text-small text-ink-subtle">
                {tech}
              </li>
            ))}
          </ul>
          {group.exploring && (
            <div className="mt-5 pt-4 border-t border-line">
              <p className="meta text-tertiary mb-3">Currently exploring</p>
              <ul className="flex flex-wrap gap-2">
                {group.exploring.map((tech) => (
                  <li key={tech} className="px-3 py-1.5 rounded-full border border-dashed border-line-strong text-small text-ink-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
