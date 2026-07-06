import { useLanguage } from '@context/LanguageContext';
import { useTranslation } from '@i18n/translations';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const t = useTranslation();

  return (
    <div className="flex items-center gap-1 text-[0.62rem] font-medium uppercase tracking-widest">
      <button
        type="button"
        onClick={() => setLanguage('es')}
        aria-label={t.languageToggle.activateSpanish}
        aria-current={language === 'es' ? 'true' : undefined}
        className={`rounded px-1 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
          language === 'es' ? 'text-gold' : 'text-muted hover:text-gold'
        }`}
      >
        ES
      </button>
      <span className="text-border-input" aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-label={t.languageToggle.activateEnglish}
        aria-current={language === 'en' ? 'true' : undefined}
        className={`rounded px-1 py-0.5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold ${
          language === 'en' ? 'text-gold' : 'text-muted hover:text-gold'
        }`}
      >
        EN
      </button>
    </div>
  );
}
