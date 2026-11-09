import { useLanguage } from '../i18n/useLanguage';
import { stagger } from '../lib/motion';
import Section from './Section';

// Bento spans for the seven groups on large screens (12 columns).
const spans = ['lg:col-span-4', 'lg:col-span-4', 'lg:col-span-4', 'lg:col-span-3', 'lg:col-span-5', 'lg:col-span-4', 'lg:col-span-12'];

const Skills = () => {
  const { ui, content } = useLanguage();
  return (
  <Section id="skills" eyebrow={ui.skills.eyebrow} title={ui.skills.title} intro={ui.skills.intro}>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
      {content.skillGroups.map((group, i) => (
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
              <p className="meta text-tertiary mb-3">{ui.skills.exploring}</p>
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
};

export default Skills;
