import type { ReactNode } from 'react';

type Props = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
};

// Swiss editorial layout: a narrow label column (index + name) beside a wide content column.
const Section = ({ id, index, label, title, intro, children }: Props) => (
  <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
    <div className="container-page py-20 lg:py-28 grid grid-cols-12 gap-x-6 gap-y-8">
      <div className="col-span-12 lg:col-span-3 reveal">
        <p className="meta text-ink-subtle flex gap-3 lg:flex-col lg:gap-1 lg:sticky lg:top-24">
          <span className="text-accent">{index}</span>
          <span>{label}</span>
        </p>
      </div>
      <div className="col-span-12 lg:col-span-9">
        <div className="reveal max-w-[44rem] mb-12 lg:mb-16">
          <h2 id={`${id}-title`} className="text-h2 font-semibold text-ink text-balance">
            {title}
          </h2>
          {intro && <p className="mt-4 text-lead text-ink-muted">{intro}</p>}
        </div>
        {children}
      </div>
    </div>
  </section>
);

export default Section;
