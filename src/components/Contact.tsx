import SectionHeader from './SectionHeader';

const faqs = [
  {
    question: 'What kind of roles are you looking for?',
    answer: 'I am actively seeking junior full-stack developer, junior software engineer, or AI/GenAI engineer positions where I can contribute to impactful projects.',
  },
  {
    question: 'What is your tech stack?',
    answer: 'I specialize in Java/Spring Boot, PHP/Laravel, React/TypeScript, and Python. I have experience with PostgreSQL, Docker, and AI/LLM integration.',
  },
  {
    question: 'Are you open to remote work?',
    answer: 'Yes, I am open to remote opportunities, particularly those based in Tunisia or European companies with remote-friendly policies.',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="w-full border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Inquiries & Answers"
            title="Frequently asked questions"
            description="Common questions about my background, skills and availability."
          />
        </div>

        <div className="reveal lg:col-span-7 space-y-3">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group card open:border-primary/40 [&_summary::-webkit-details-marker]:hidden" open={index === 0}>
              <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">{faq.question}</h3>
                <span className="w-8 h-8 rounded-full border border-outline-variant flex items-center justify-center text-primary shrink-0 transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </summary>
              <p className="px-5 pb-5 -mt-1 text-sm text-on-surface-variant leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="reveal lg:col-span-12 relative overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low p-10 lg:p-16 text-center">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,var(--glow-strong),transparent_60%)] opacity-50" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-outline-variant mb-6">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
              <span className="font-label-code text-label-code text-on-surface-variant">Ready to collaborate</span>
            </div>

            <h2 className="font-headline-xl text-[2rem] leading-tight sm:text-headline-xl text-on-surface mb-4">
              Let&apos;s build something{' '}
              <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">extraordinary</span>
            </h2>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
              I&apos;m available for full-time opportunities. Let&apos;s talk about how I can contribute to your team.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://linkedin.com/in/yosri-hamrouni-498a60238"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 h-12 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-on-primary font-label-pill uppercase glow-btn transition-shadow duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Message on LinkedIn
              </a>
              <a
                href="https://github.com/yosriHamrouni"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 h-12 inline-flex items-center justify-center gap-2 rounded-full border border-outline-variant text-on-surface font-label-pill uppercase hover:border-primary hover:text-primary transition-colors duration-200"
              >
                Browse GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
