import { useTranslation } from 'react-i18next';
import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';
import LegalSidebar from '../../components/LegalSidebar';

export default function AccessibilityPage() {
  const { t } = useTranslation('accessibility');
  const implementItems = t('sections.implement.items', { returnObjects: true }) as string[];
  const limitationItems = t('sections.limitations.items', { returnObjects: true }) as string[];
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">{t('legal.eyebrow', { ns: 'common' })}</span>
          <h1 className="legal-hero__title">{t('legal.accessibilityStatement', { ns: 'common' })}</h1>
          <p className="legal-hero__updated">{t('hero.updated')}</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className={`legal-layout ${content.className}`} ref={content.ref}>
            <LegalSidebar />
            <div className="legal-content__wrap">
          <h2>{t('sections.commitment.title')}</h2>
          <p>{t('sections.commitment.body')}</p>

          <h2>{t('sections.implement.title')}</h2>
          <ul>
            {implementItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t('sections.limitations.title')}</h2>
          <p>{t('sections.limitations.intro')}</p>
          <ul>
            {limitationItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t('sections.assessment.title')}</h2>
          <p>{t('sections.assessment.body')}</p>

          <h2>{t('sections.reporting.title')}</h2>
          <p>
            {t('sections.reporting.bodyPrefix')}{' '}
            <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a>. {t('sections.reporting.bodySuffix')}
          </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
