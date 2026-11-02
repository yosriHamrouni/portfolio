import { useEffect, useRef, useState } from 'react';
import { certifications, languages } from '../data/education';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { stagger } from '../lib/motion';

// Only counts of things listed on this page — no invented metrics.
const stats = [
  { value: experiences.length, label: 'Internships' },
  { value: projects.length, label: 'Case studies' },
  { value: certifications.length, label: 'Certifications' },
  { value: languages.length, label: 'Working languages' },
];

const CountUp = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 900, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to]);

  return <span ref={ref}>{String(value).padStart(2, '0')}</span>;
};

const Stats = () => (
  <section aria-label="Highlights" className="border-t border-line bg-surface/60">
    <div className="container-page py-14">
      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden border border-line bg-line">
        {stats.map((stat, i) => (
          <div key={stat.label} className="reveal bg-paper p-6 lg:p-8 flex flex-col-reverse gap-2" style={stagger(i)}>
            <dt className="meta text-ink-subtle">{stat.label}</dt>
            <dd className="font-display text-4xl lg:text-5xl font-bold text-ink tabular-nums">
              <CountUp to={stat.value} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Stats;
