import { useTranslation } from 'react-i18next';
import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';
import LegalSidebar from '../../components/LegalSidebar';

export default function CookiePolicyPage() {
  const { t } = useTranslation('cookiePolicy');
  const whatWeStoreItems = t('sections.whatWeStore.items', { returnObjects: true }) as string[];
  const controllingItems = t('sections.controlling.items', { returnObjects: true }) as string[];
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">{t('legal.eyebrow', { ns: 'common' })}</span>
          <h1 className="legal-hero__title">{t('hero.title')}</h1>
          <p className="legal-hero__updated">{t('hero.updated')}</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className={`legal-layout ${content.className}`} ref={content.ref}>
            <LegalSidebar />
            <div className="legal-content__wrap">
          <h2>{t('sections.approach.title')}</h2>
          <p>{t('sections.approach.body')}</p>

          <h2>{t('sections.whatWeStore.title')}</h2>
          <ul>
            {whatWeStoreItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>

          <h2>{t('sections.analytics.title')}</h2>
          <p>{t('sections.analytics.body')}</p>

          <h2>{t('sections.thirdParty.title')}</h2>
          <p>{t('sections.thirdParty.body')}</p>

          <h2>{t('sections.controlling.title')}</h2>
          <ul>
            {controllingItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

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
