import { useTranslation } from 'react-i18next';
import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';
import LegalSidebar from '../../components/LegalSidebar';

export default function TermsOfServicePage() {
  const { t } = useTranslation('termsOfService');
  const permittedUseItems = t('sections.permittedUse.items', { returnObjects: true }) as string[];
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">{t('legal.eyebrow', { ns: 'common' })}</span>
          <h1 className="legal-hero__title">{t('legal.termsOfService', { ns: 'common' })}</h1>
          <p className="legal-hero__updated">{t('hero.updated')}</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className={`legal-layout ${content.className}`} ref={content.ref}>
            <LegalSidebar />
            <div className="legal-content__wrap">
          <h2>{t('sections.acceptance.title')}</h2>
          <p>{t('sections.acceptance.body')}</p>

          <h2>{t('sections.permittedUse.title')}</h2>
          <ul>
            {permittedUseItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t('sections.enquiries.title')}</h2>
          <p>{t('sections.enquiries.body')}</p>

          <h2>{t('sections.pricing.title')}</h2>
          <p>{t('sections.pricing.body')}</p>

          <h2>{t('sections.ip.title')}</h2>
          <p>{t('sections.ip.body')}</p>

          <h2>{t('sections.thirdParty.title')}</h2>
          <p>{t('sections.thirdParty.body')}</p>

          <h2>{t('sections.aiFeatures.title')}</h2>
          <p>{t('sections.aiFeatures.body')}</p>

          <h2>{t('sections.warranties.title')}</h2>
          <p>{t('sections.warranties.body')}</p>

          <h2>{t('sections.changes.title')}</h2>
          <p>{t('sections.changes.body')}</p>

          <h2>{t('sections.contact.title')}</h2>
          <p>
            {t('sections.contact.bodyPrefix')}{' '}
            <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a>.
          </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
