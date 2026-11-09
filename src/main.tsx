import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { DEFAULT_LANG, loadLocale, resolveInitialLang } from './i18n/config';
import LanguageProvider from './i18n/LanguageProvider';
import type { Lang } from './i18n/types';

const render = (lang: Lang, locale: Awaited<ReturnType<typeof loadLocale>>) =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <LanguageProvider initialLang={lang} initialLocale={locale}>
        <App />
      </LanguageProvider>
    </StrictMode>,
  );

// French is bundled, so first-time visitors render immediately; a saved Arabic or
// English choice waits for its chunk, and falls back to French if it cannot load.
const lang = resolveInitialLang();
loadLocale(lang).then(
  (locale) => render(lang, locale),
  () => loadLocale(DEFAULT_LANG).then((locale) => render(DEFAULT_LANG, locale)),
);
