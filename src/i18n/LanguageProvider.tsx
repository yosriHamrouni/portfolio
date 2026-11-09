import { useCallback, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { LANG_META, loadLocale, saveLang } from './config';
import { LanguageContext } from './context';
import type { Lang, Locale } from './types';

const setMeta = (selector: string, value: string) => {
  document.querySelector(selector)?.setAttribute('content', value);
};

type Props = { initialLang: Lang; initialLocale: Locale; children: ReactNode };

// Holds the active language. Switching swaps the bundle in place: no reload,
// the route and scroll position stay where they are.
const LanguageProvider = ({ initialLang, initialLocale, children }: Props) => {
  const [state, setState] = useState({ lang: initialLang, locale: initialLocale });
  // Latest requested language, so a slow download cannot overwrite a newer choice.
  const requested = useRef(initialLang);

  const setLang = useCallback((next: Lang) => {
    requested.current = next;
    saveLang(next);
    loadLocale(next).then(
      (locale) => {
        if (requested.current === next) setState({ lang: next, locale });
      },
      () => {
        // Chunk failed to download (offline): stay on the current language.
      },
    );
  }, []);

  const { lang, locale } = state;
  const dir = LANG_META[lang].dir;

  // Before paint, so the page never shows Arabic text in a left-to-right layout.
  useLayoutEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
    setMeta('meta[name="description"]', locale.ui.meta.description);
    setMeta('meta[property="og:title"]', locale.ui.meta.title);
    setMeta('meta[property="og:description"]', locale.ui.meta.ogDescription);
    setMeta('meta[property="og:locale"]', locale.ui.meta.ogLocale);
  }, [lang, dir, locale]);

  const value = useMemo(() => ({ ...locale, lang, dir, setLang }), [locale, lang, dir, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
