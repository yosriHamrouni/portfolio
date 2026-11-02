const steps = [
  {
    title: 'Define & Architect',
    description: 'Deconstruct complex requirements into modular, scalable system architectures with strict technical boundaries.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    title: 'Build & Optimize',
    description: 'Implement robust backend systems and pixel-perfect interfaces using test-driven development and modern stacks.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
        <path d="M18 3h3v3"/>
        <path d="M15 12l3 3-3 3"/>
        <path d="M18 15H9"/>
      </svg>
    ),
  },
  {
    title: 'Deploy & Scale',
    description: 'Automate CI/CD pipelines, monitor real-time telemetry, and scale infrastructure seamlessly under load.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13"/>
        <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
      </svg>
    ),
  },
];

const Process = () => {
  return (
    <section id="process" className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <div className="mb-16">
        <span className="font-label-code text-label-code text-primary uppercase tracking-wider block mb-3">
          Execution Lifecycle
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-4">
          Structured Engineering Process
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
          A disciplined approach ensuring architectural integrity and high-velocity execution.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-8 border border-outline-variant hover:border-primary transition-colors duration-200"
          >
            <div className="w-12 h-12 rounded-lg bg-surface-container border border-outline-variant flex items-center justify-center text-primary mb-6">
              {step.icon}
            </div>
            <h3 className="text-2xl font-bold font-sans text-on-surface mb-4">{step.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
