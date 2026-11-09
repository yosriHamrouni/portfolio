import { useLanguage } from '../i18n/useLanguage';
import { stagger } from '../lib/motion';
import Rich from './Rich';
import Section from './Section';

const About = () => {
  const { ui, content } = useLanguage();
  return (
    <Section id="about" eyebrow={ui.about.eyebrow} title={ui.about.title}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7 space-y-5 text-ink-muted reveal">
          {content.about.map((paragraph) => (
            <p key={paragraph}>
              <Rich text={paragraph} />
            </p>
          ))}
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="reveal card p-6">
            <h3 className="meta text-accent mb-4">{ui.about.lookingFor}</h3>
            <dl className="space-y-3 text-small">
              {content.lookingFor.map((item) => (
                <div key={item.label}>
                  <dt className="meta text-ink-subtle normal-case tracking-normal">{item.label}</dt>
                  <dd className="mt-0.5 text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="reveal card p-6" style={stagger(1)}>
            <h3 className="meta text-accent mb-4">{ui.about.languages}</h3>
            <dl className="space-y-2 text-small">
              {content.languages.map((l) => (
                <div key={l.name} className="flex justify-between gap-4">
                  <dt className="text-ink">{l.name}</dt>
                  <dd className="text-ink-muted text-end">{l.level}</dd>
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
