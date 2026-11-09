import { LANG_META, LANGS, loadLocale } from '../i18n/config';
import { useLanguage } from '../i18n/useLanguage';

// Compact segmented control (FR · AR · EN), same height as the theme toggle.
// Each option is labelled in its own language so a visitor can always find theirs.
const LanguageSwitcher = ({ className = '' }: { className?: string }) => {
  const { lang, setLang, ui } = useLanguage();

  return (
    <div role="group" aria-label={ui.nav.language} className={`h-10 p-1 rounded-full border border-line flex items-center ${className}`}>
      {LANGS.map((code) => {
        const meta = LANG_META[code];
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            dir={meta.dir}
            aria-label={meta.name}
            title={meta.name}
            aria-pressed={active}
            onClick={() => setLang(code)}
            // Start fetching the bundle as soon as the visitor shows intent.
            onPointerEnter={() => void loadLocale(code).catch(() => {})}
            onFocus={() => void loadLocale(code).catch(() => {})}
            className={`h-8 min-w-8 px-2 rounded-full font-code text-[11px] font-medium tracking-wide transition-colors ${
              active ? 'bg-accent/15 text-accent' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {meta.code}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
