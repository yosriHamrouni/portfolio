import { createContext } from 'react';
import type { Lang, Locale } from './types';

export type LanguageContextValue = Locale & {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (lang: Lang) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);
