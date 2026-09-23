import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/legal.css';
import './legal-center.css';
import { useReveal } from '../../hooks/useReveal';
import { type SupportedLanguage } from '../../i18n/i18n';
import { localizePath } from '../../i18n/localizedPath';

const policyKeys = [
  { key: 'privacyPolicy', href: '/privacy-policy' },
  { key: 'termsOfService', href: '/terms-of-service' },
  { key: 'cookiePolicy', href: '/cookie-policy' },
  { key: 'accessibilityStatement', href: '/accessibility' },
  { key: 'aiUsagePolicy', href: '/ai-usage' },
] as const;

export default function LegalPage() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as SupportedLanguage) || 'en';
  const hero = useReveal('up');
  const grid = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">{t('legal.eyebrow')}</span>
          <h1 className="legal-hero__title">{t('legalCenter:hero.title')}</h1>
          <p className="legal-hero__updated">{t('legalCenter:hero.desc')}</p>
        </div>
      </section>

      <section className="legal-center section">
        <div className={`container legal-center__grid ${grid.className}`} ref={grid.ref}>
          {policyKeys.map((p) => (
            <Link key={p.href} to={localizePath(p.href, currentLang)} className="legal-center__card">
              <h3 className="legal-center__card-title">{t(`legal.${p.key}`)}</h3>
              <p className="legal-center__card-desc">{t(`legalCenter:policies.${p.key}`)}</p>
              <div className="legal-center__card-footer">
                <span className="legal-center__card-updated">{t('legalCenter:updated')}</span>
                <span className="legal-center__card-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="legal-center__contact">
          {t('legalCenter:contactPrefix')}{' '}
          <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a>{' '}
          {t('legalCenter:contactSuffix')}
        </p>
      </section>
    </main>
  );
}
