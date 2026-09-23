import { useTranslation } from 'react-i18next';
import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';
import LegalSidebar from '../../components/LegalSidebar';

export default function AIUsagePage() {
  const { t } = useTranslation('aiUsage');
  const whereUsedItems = t('sections.whereUsed.items', { returnObjects: true }) as string[];
  const oversightItems = t('sections.oversight.items', { returnObjects: true }) as string[];
  const standardsItems = t('sections.standards.items', { returnObjects: true }) as string[];
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">{t('legal.eyebrow', { ns: 'common' })}</span>
          <h1 className="legal-hero__title">{t('legal.aiUsagePolicy', { ns: 'common' })}</h1>
          <p className="legal-hero__updated">{t('hero.updated')}</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className={`legal-layout ${content.className}`} ref={content.ref}>
            <LegalSidebar />
            <div className="legal-content__wrap">
          <h2>{t('sections.whyExists.title')}</h2>
          <p>{t('sections.whyExists.body')}</p>

          <h2>{t('sections.whereUsed.title')}</h2>
          <ul>
            {whereUsedItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t('sections.disclosure.title')}</h2>
          <p>{t('sections.disclosure.body')}</p>

          <h2>{t('sections.grounding.title')}</h2>
          <p>{t('sections.grounding.body')}</p>

          <h2>{t('sections.oversight.title')}</h2>
          <ul>
            {oversightItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t('sections.dataUsed.title')}</h2>
          <p>{t('sections.dataUsed.body')}</p>

          <h2>{t('sections.standards.title')}</h2>
          <ul>
            {standardsItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t('sections.limitations.title')}</h2>
          <p>{t('sections.limitations.body')}</p>

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
