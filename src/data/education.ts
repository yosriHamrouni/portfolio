import awsBadge from '../assets/badge-aws-cloud-foundations.png';
import uxBootcampCert from '../assets/certificate-space-academy-ux-bootcamp.jpg';

export const education = [
  {
    school: 'ESPRIT — École Supérieure Privée d’Ingénierie et de Technologies',
    degree: 'Engineering degree in Computer Science (Génie Informatique)',
    period: '2021 – 2026',
    location: 'Tunisia',
    text: 'Software engineering, object-oriented programming, algorithms and data structures, web development, databases, application architecture, artificial intelligence and software project management.',
  },
  {
    school: 'CESI École d’Ingénieurs',
    degree: 'International academic mobility (ESPRIT exchange program)',
    location: 'Caen, France',
    text: 'Studied in a French engineering school and worked in multicultural project teams — a useful test of adaptability and communication across backgrounds. Research project: machine learning to predict pathogenic genetic variants from ClinVar.',
  },
];

export type Certification = {
  title: string;
  issuer?: string;
  date?: string;
  /** Extra detail shown under the issuer (score, duration…). */
  note?: string;
  /** Only real, verified proof links. */
  href?: string;
  hrefLabel?: string;
  /** Official badge image, when the issuer provides one. */
  image?: string;
};

// Verified against the certificate files on Yosri's PC (2026-11-02). Coursera and
// Credly links resolve to public verification pages. The TOEIC report is not linked
// because it shows date of birth and ID number.
export const certifications: Certification[] = [
  {
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services · AWS Academy',
    date: 'Nov 2025',
    note: 'Training badge · 20 hours',
    href: 'https://www.credly.com/badges/3160f154-785a-42e5-a350-139aeadf0768/public_url',
    hrefLabel: 'Verify on Credly',
    image: awsBadge,
  },
  {
    title: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    href: 'https://www.credly.com/badges/176c0081-546f-4e46-b806-835f49f9ec06/public_url',
    hrefLabel: 'Verify on Credly',
  },
  {
    title: 'TOEIC Listening & Reading — 795 / 990',
    issuer: 'ETS Global',
    date: 'May 2025',
    note: 'Listening 420 (B2) · Reading 375 (B1) · valid until May 2027',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta · Coursera',
    date: 'Apr 2023',
    note: 'Meta Front-End Developer program',
    href: 'https://coursera.org/verify/RJL97PPCEVTX',
    hrefLabel: 'Verify on Coursera',
  },
  {
    title: 'Programming with JavaScript',
    issuer: 'Meta · Coursera',
    date: 'Sep 2023',
    note: 'Meta Front-End Developer program',
    href: 'https://coursera.org/verify/2GP7EKLCX9HR',
    hrefLabel: 'Verify on Coursera',
  },
  {
    title: 'Version Control',
    issuer: 'Meta · Coursera',
    date: 'Sep 2023',
    note: 'Meta Front-End Developer program',
    href: 'https://coursera.org/verify/T2EVZYB2UBBQ',
    hrefLabel: 'Verify on Coursera',
  },
  {
    title: 'Foundations of User Experience (UX) Design',
    issuer: 'Google · Coursera',
    date: 'Feb 2023',
    note: 'Google UX Design program',
    href: 'https://coursera.org/verify/TQ6GP9LMRRV8',
    hrefLabel: 'Verify on Coursera',
  },
  {
    title: 'UX/UI Bootcamp',
    issuer: 'Space Academy',
    date: 'Sep 2023',
    note: '12-week online bootcamp',
    href: uxBootcampCert,
    hrefLabel: 'View certificate',
  },
  { title: 'AI For Everyone', issuer: 'DeepLearning.AI' },
  { title: 'Unix Tools and Scripting' },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Professional' },
  { name: 'English', level: 'Professional (TOEIC 795, B2)' },
];

export const activities = [
  {
    title: 'Guitar teacher',
    org: 'Dimouzika Club, Nabeul',
    since: 'Since Sep 2023',
    text: 'Teaching guitar: explaining ideas clearly, staying patient, organizing lessons and working with very different people.',
  },
  {
    title: 'Volunteer',
    org: 'Tunisian Red Crescent',
    since: 'Since 2019',
    text: 'Volunteer involvement with the Tunisian Red Crescent.',
  },
];
