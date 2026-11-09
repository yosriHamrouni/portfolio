import type { CvLang } from '../data/profile';
import type { Content } from '../data/types';
import type { Ui } from './locales/en/ui';

export type { Ui };

export type Lang = 'fr' | 'ar' | 'en';

/** One language bundle: interface strings, site content, and which CV to offer first. */
export type Locale = {
  ui: Ui;
  content: Content;
  cvOrder: CvLang[];
};
