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
    text: 'Studied in a French engineering school and worked in multicultural project teams — a useful test of adaptability and communication across backgrounds.',
  },
];

export type Certification = {
  title: string;
  issuer?: string;
  date?: string;
  /** Only real, verified proof links. */
  href?: string;
};

export const certifications: Certification[] = [
  { title: 'Meta Front-End Developer', issuer: 'Meta · Coursera' },
  { title: 'Google UX Design', issuer: 'Google · Coursera' },
  { title: 'AI For Everyone', issuer: 'DeepLearning.AI' },
  { title: 'Unix Tools and Scripting' },
  { title: 'UX/UI Bootcamp', issuer: 'Space Academy', date: 'Jan 2023', href: uxBootcampCert },
  { title: 'TOEIC — English B2', issuer: 'ETS Global', date: 'May 2025' },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Professional' },
  { name: 'English', level: 'Professional (TOEIC B2)' },
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
