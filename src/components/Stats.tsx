import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/projects';
import { certifications } from '../data/certifications';
import { stagger } from '../lib/motion';

// Only verifiable numbers — each one maps to something listed on this page.
const stats = [
  { value: 4, label: 'Engineering internships' },
  { value: projects.length, label: 'Shipped projects' },
  { value: certifications.length, label: 'Certifications' },
  { value: 3, label: 'Working languages' },
];

const CountUp = ({ to }: { to: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setValue(0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 900, 1);
        setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return <span ref={ref}>{String(value).padStart(2, '0')}</span>;
};

const Stats = () => {
  return (
    <section aria-label="Highlights" className="w-full border-t border-outline-variant bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-outline-variant rounded-[var(--radius-card)] overflow-hidden border border-outline-variant">
          {stats.map((stat, index) => (
            <div key={stat.label} className="reveal bg-background p-6 lg:p-8 flex flex-col-reverse gap-2" style={stagger(index)}>
              <dt className="font-label-code text-label-code text-on-surface-variant uppercase tracking-wider">
                {stat.label}
              </dt>
              <dd className="font-headline-xl text-4xl lg:text-5xl text-on-surface tabular-nums">
                <CountUp to={stat.value} />
                <span className="text-primary">+</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stats;
