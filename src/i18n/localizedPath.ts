import { SUPPORTED_LANGUAGES, type SupportedLanguage } from './i18n';

const LOCALE_PREFIX_RE = new RegExp(`^/(${SUPPORTED_LANGUAGES.filter((l) => l !== 'en').join('|')})(?=/|$)`);

/** Strips a leading /fr, /es or /pt segment, returning the default-language path. */
export function stripLocale(pathname: string): string {
  return pathname.replace(LOCALE_PREFIX_RE, '') || '/';
}

/** Prefixes an internal path with the current language (no-op for English or non-internal links). */
export function localizePath(path: string, lang: SupportedLanguage): string {
  if (lang === 'en') return path;
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return `/${lang}${path}`;
}
