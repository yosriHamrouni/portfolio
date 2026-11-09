import fr from './locales/fr';
import type { Lang, Locale } from './types';

// French is the default and ships in the main bundle; the other languages are
// separate chunks fetched only when chosen.

export const LANGS: Lang[] = ['fr', 'ar', 'en'];
export const DEFAULT_LANG: Lang = 'fr';
export const STORAGE_KEY = 'lang';

/** Display data for the switcher. Names stay in their own language everywhere. */
export const LANG_META: Record<Lang, { code: string; name: string; dir: 'ltr' | 'rtl' }> = {
  fr: { code: 'FR', name: 'Français', dir: 'ltr' },
  ar: { code: 'AR', name: 'العربية', dir: 'rtl' },
  en: { code: 'EN', name: 'English', dir: 'ltr' },
};

const loaders: Record<Lang, () => Promise<Locale>> = {
  fr: () => Promise.resolve(fr),
  ar: () => import('./locales/ar').then((m) => m.default),
  en: () => import('./locales/en').then((m) => m.default),
};

const cache = new Map<Lang, Promise<Locale>>();

export const loadLocale = (lang: Lang): Promise<Locale> => {
  let pending = cache.get(lang);
  if (!pending) {
    pending = loaders[lang]();
    // Let a failed chunk download be retried on the next attempt.
    pending.catch(() => cache.delete(lang));
    cache.set(lang, pending);
  }
  return pending;
};

export const isLang = (value: unknown): value is Lang => typeof value === 'string' && (LANGS as string[]).includes(value);

/**
 * Language for this visit: a `?lang=` link wins (and is remembered), then the saved
 * choice, then French. The query parameter is removed so the URL stays clean and a
 * later switch is not overridden on refresh.
 */
export const resolveInitialLang = (): Lang => {
  const url = new URL(window.location.href);
  const fromUrl = url.searchParams.get('lang');
  if (isLang(fromUrl)) {
    saveLang(fromUrl);
    url.searchParams.delete('lang');
    window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
    return fromUrl;
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
  } catch {
    // Storage can be unavailable (private mode); fall back to the default.
  }
  return DEFAULT_LANG;
};

export const saveLang = (lang: Lang) => {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // The choice still applies for this visit.
  }
};
