import { useTranslation } from 'react-i18next';
import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';
import LegalSidebar from '../../components/LegalSidebar';

export default function PrivacyPolicyPage() {
  const { t } = useTranslation('privacyPolicy');
  const dataItems = t('sections.dataWeCollect.items', { returnObjects: true }) as string[];
  const whyItems = t('sections.whyWeProcess.items', { returnObjects: true }) as string[];
  const retentionItems = t('sections.retention.items', { returnObjects: true }) as string[];
  const rightsItems = t('sections.yourRights.items', { returnObjects: true }) as string[];
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">{t('legal.eyebrow', { ns: 'common' })}</span>
          <h1 className="legal-hero__title">{t('legal.privacyPolicy', { ns: 'common' })}</h1>
          <p className="legal-hero__updated">{t('hero.updated')}</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className={`legal-layout ${content.className}`} ref={content.ref}>
            <LegalSidebar />
            <div className="legal-content__wrap">
          <h2>{t('sections.whoWeAre.title')}</h2>
          <p>{t('sections.whoWeAre.body')}</p>

          <h2>{t('sections.dataWeCollect.title')}</h2>
          <ul>
            {dataItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t('sections.whyWeProcess.title')}</h2>
          <ul>
            {whyItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>

          <h2>{t('sections.automatedAssessment.title')}</h2>
          <p>{t('sections.automatedAssessment.body')}</p>

          <h2>{t('sections.aiConversations.title')}</h2>
          <p>{t('sections.aiConversations.body')}</p>

          <h2>{t('sections.sharing.title')}</h2>
          <p>{t('sections.sharing.body')}</p>

          <h2>{t('sections.internationalTransfers.title')}</h2>
          <p>{t('sections.internationalTransfers.body')}</p>

          <h2>{t('sections.retention.title')}</h2>
          <ul>
            {retentionItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t('sections.security.title')}</h2>
          <p>{t('sections.security.body')}</p>

          <h2>{t('sections.yourRights.title')}</h2>
          <ul>
            {rightsItems.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h2>{t('sections.children.title')}</h2>
          <p>{t('sections.children.body')}</p>

          <h2>{t('sections.changesContact.title')}</h2>
          <p>
            {t('sections.changesContact.bodyPrefix')}{' '}
            <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a>.
          </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
