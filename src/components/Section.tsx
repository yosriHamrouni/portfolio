import type { ReactNode } from 'react';

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Optional element aligned to the right of the header (e.g. a link). */
  action?: ReactNode;
  children: ReactNode;
};

const Section = ({ id, eyebrow, title, intro, action, children }: Props) => (
  <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
    <div className="container-page py-20 lg:py-28">
      <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
        <div className="max-w-2xl">
          <p className="meta text-accent flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-accent" aria-hidden="true" />
            {eyebrow}
          </p>
          <h2 id={`${id}-title`} className="text-h2 font-semibold text-ink text-balance">
            {title}
          </h2>
          {intro && <p className="mt-4 text-ink-muted">{intro}</p>}
        </div>
        {action}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
