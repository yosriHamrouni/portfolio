import uxBootcampCert from '../assets/certificate-space-academy-ux-bootcamp.jpg';

export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  icon: 'code' | 'design' | 'ai' | 'terminal' | 'cloud' | 'git' | 'language';
  /** Public proof: a Credly badge or the certificate image. */
  href?: string;
  hrefLabel?: string;
};

const credly = (badgeId: string) => `https://www.credly.com/badges/${badgeId}/public_url`;

export const certifications: Certification[] = [
  { title: 'Meta Front-End Developer', issuer: 'Meta · Coursera', icon: 'code' },
  { title: 'Google UX Design', issuer: 'Google · Coursera', icon: 'design' },
  { title: 'AI For Everyone', issuer: 'DeepLearning.AI · Andrew Ng', icon: 'ai' },
  { title: 'The Unix Workbench', issuer: 'Johns Hopkins University', icon: 'terminal' },
  {
    title: 'Google Cloud Fundamentals',
    issuer: 'Google Cloud',
    icon: 'cloud',
    href: credly('3160f154-785a-42e5-a350-139aeadf0768'),
    hrefLabel: 'Verify on Credly',
  },
  {
    title: 'Google Cloud Fundamentals',
    issuer: 'Google Cloud',
    icon: 'cloud',
    href: credly('176c0081-546f-4e46-b806-835f49f9ec06'),
    hrefLabel: 'Verify on Credly',
  },
  { title: 'Version Control', issuer: 'Meta · Coursera', date: 'Sep 2023', icon: 'git' },
  {
    title: 'UX Bootcamp',
    issuer: 'Space Academy',
    date: 'Jan 2023',
    icon: 'design',
    href: uxBootcampCert,
    hrefLabel: 'View certificate',
  },
  { title: 'TOEIC — B2', issuer: 'ETS Global', date: 'May 2025', icon: 'language' },
];
