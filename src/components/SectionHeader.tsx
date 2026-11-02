import type { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
};

const SectionHeader = ({ eyebrow, title, description, action }: Props) => (
  <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 lg:mb-16">
    <div>
      <span className="font-label-code text-label-code text-primary uppercase tracking-wider flex items-center gap-3 mb-4">
        <span className="w-6 h-px bg-primary" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="font-headline-lg text-[1.875rem] leading-tight sm:text-headline-lg text-on-surface mb-4">
        {title}
      </h2>
      {description && (
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">{description}</p>
      )}
    </div>
    {action}
  </div>
);

export default SectionHeader;
