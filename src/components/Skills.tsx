import { skillGroups } from '../data/skills';
import { stagger } from '../lib/motion';
import Section from './Section';

const Skills = () => {
  return (
    <Section
      id="skills"
      index="04"
      label="Skills"
      title="The tools I build with."
      intro="Grouped by area. Technologies in bright text are ones I have used in internships or projects; dimmed ones I have worked with less."
    >
      <dl className="border-t border-line-strong">
        {skillGroups.map((group, i) => (
          <div key={group.name} className="reveal grid grid-cols-9 gap-x-6 gap-y-2 py-6 border-b border-line" style={stagger(i % 3)}>
            <dt className="col-span-9 md:col-span-3 text-small font-semibold text-ink">{group.name}</dt>
            <dd className="col-span-9 md:col-span-6 text-small leading-relaxed">
              <span className="text-ink">{group.core.join(', ')}</span>
              {group.also && <span className="text-ink-subtle">, {group.also.join(', ')}</span>}
              {group.exploring && (
                <p className="mt-2 text-ink-muted">
                  <span className="meta text-accent mr-2">Currently exploring</span>
                  {group.exploring.join(', ')}
                </p>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
};

export default Skills;
