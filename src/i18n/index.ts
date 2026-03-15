import es from './es.json';
import en from './en.json';

const translations: Record<string, typeof es> = { es, en };

export type Lang = 'es' | 'en';

/**
 * Extract locale from the current URL path.
 * e.g. /es/servicios → 'es', /en/contact → 'en'
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es'; // default
}

/**
 * Returns a translator function for the given locale.
 * Usage:
 *   const t = useTranslations('es');
 *   t('nav.home') → "Inicio"
 */
export function useTranslations(lang: Lang) {
  const dict = translations[lang] ?? translations.es;

  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = dict;
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // fallback: return key itself
      }
    }
    return typeof value === 'string' ? value : key;
  };
}

/**
 * Get the alternate language path for the current URL.
 * e.g. /es/servicios → /en/servicios
 */
export function getAlternateLangUrl(url: URL, currentLang: Lang): string {
  const targetLang = currentLang === 'es' ? 'en' : 'es';
  return url.pathname.replace(`/${currentLang}`, `/${targetLang}`);
}
