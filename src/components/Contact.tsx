import { profile } from '../data/profile';
import { ArrowUpRight, Download } from './Icons';
import Section from './Section';

const Contact = () => {
  const channels = [
    profile.email && { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: 'LinkedIn', value: 'yosri-hamrouni', href: profile.links.linkedin, external: true },
    { label: 'GitHub', value: 'yosriHamrouni', href: profile.links.github, external: true },
  ].filter((c): c is { label: string; value: string; href: string; external: boolean } => Boolean(c));

  return (
    <Section
      id="contact"
      index="06"
      label="Contact"
      title="Let’s talk about your team."
      intro="I’m looking for my first full-time role as a software engineer — in Tunisia, in France or remote. If you’re hiring or want to discuss a project, I’d be glad to hear from you."
    >
      <ul className="border-t border-line-strong reveal">
        {channels.map((channel) => (
          <li key={channel.label} className="border-b border-line">
            <a
              href={channel.href}
              {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group grid grid-cols-9 gap-x-6 py-6 items-baseline"
            >
              <span className="col-span-3 md:col-span-2 meta text-ink-subtle">{channel.label}</span>
              <span className="col-span-5 md:col-span-6 text-h3 font-semibold text-ink group-hover:text-accent transition-colors break-all">
                {channel.value}
              </span>
              <span className="col-span-1 flex justify-end text-ink-subtle group-hover:text-accent transition-colors">
                <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        ))}
        <li className="grid grid-cols-9 gap-x-6 py-6 items-baseline border-b border-line">
          <span className="col-span-3 md:col-span-2 meta text-ink-subtle">Location</span>
          <span className="col-span-6 md:col-span-7 text-h3 font-semibold text-ink">{profile.location}</span>
        </li>
      </ul>

      {profile.cvUrl && (
        <a
          href={profile.cvUrl}
          download
          className="reveal mt-10 inline-flex items-center gap-3 h-12 px-6 rounded-sm bg-ink text-paper font-medium hover:bg-accent transition-colors"
        >
          <Download /> Download my CV <span className="meta opacity-70">{profile.cvNote}</span>
        </a>
      )}
    </Section>
  );
};

export default Contact;
