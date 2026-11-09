import { useContext } from 'react';
import { profile } from '../data/profile';
import { LanguageContext } from './context';

export const useLanguage = () => {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return value;
};

/** CV downloads in the order that suits the current language (first = default). */
export const useCvs = () => {
  const { cvOrder, ui } = useLanguage();
  return cvOrder.map((lang) => ({ lang, url: profile.cvs[lang], label: ui.common.cvLanguage[lang] }));
};
