import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { type SupportedLanguage } from '../i18n/i18n';
import { localizePath, stripLocale } from '../i18n/localizedPath';

export default function LegalSidebar() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const currentLang = (i18n.language as SupportedLanguage) || 'en';
  const basePath = stripLocale(pathname);

  const links = [
    { label: t('legal.privacyPolicy'), href: '/privacy-policy' },
    { label: t('legal.termsOfService'), href: '/terms-of-service' },
    { label: t('legal.cookiePolicy'), href: '/cookie-policy' },
    { label: t('legal.accessibilityStatement'), href: '/accessibility' },
    { label: t('legal.aiUsagePolicy'), href: '/ai-usage' },
  ];

  return (
    <nav className="legal-sidebar" aria-label="Legal pages">
      <Link to={localizePath('/legal', currentLang)} className="legal-sidebar__back">
        &larr; {t('legal.sidebarBack')}
      </Link>
      <ul className="legal-sidebar__list">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              to={localizePath(l.href, currentLang)}
              className={`legal-sidebar__link${basePath === l.href ? ' legal-sidebar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
