import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './work-main.css';
import Icon from '../../components/Icon';
import FAQ from '../../components/FAQ';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';
import { type SupportedLanguage } from '../../i18n/i18n';
import { localizePath } from '../../i18n/localizedPath';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import caseStudyArrowSvg from '../../assets/icons/at-icons-arrow-right.svg?raw';

// import oneTapImg from '../../assets/images/work-van-travel/figma/related-work-2.png';
import oneTapImg from '../../assets/images/Tap-Digital-Card-box.png';
import vanTravelImg from '../../assets/images/work-van-travel/figma/browser-mockup.webp';
import mightyOakImg from '../../assets/images/work-main/figma/mighty-oak-legacy.webp';
import pmbConsultingImg from '../../assets/images/work-main/figma/pmb-consulting.webp';
import aiFnaImg from '../../assets/images/work-main/figma/ai-fna.webp';
import allAccessTripImg from '../../assets/images/work-main/figma/all-access-trip.webp';
import solidRockImg from '../../assets/images/work-main/figma/solid-rock-leadership.webp';
import powerMindsetImg from '../../assets/images/work-main/figma/power-mindset-breakthrough.webp';
import lelofitImg from '../../assets/images/work-main/figma/lelofit.webp';
import buketiImg from '../../assets/images/work-main/figma/buketi-financial-consulting.webp';
import avocatConnectRdcImg from '../../assets/images/AvocatConnect-RDC.webp';

const CASE_STUDY_CTA = 'https://vantechsystems.tech/start-a-project';

const filterTabKeys = ['all', 'ai', 'saas', 'webApplications', 'businessPlatforms', 'insurance', 'ecommerce'] as const;

const portfolioItems = [
  { key: 'onetap', category: 'saas', image: oneTapImg, caseHref: '/onetap-digital-card', liveUrl: 'https://www.onetapdigitalcard.com/' },
  { key: 'pmb', category: 'businessPlatforms', image: pmbConsultingImg, caseHref: '/pmb-consulting', liveUrl: 'https://thepmbconsulting.com/' },
  { key: 'buketi', category: 'businessPlatforms', image: buketiImg, caseHref: '/buketi-insurance-services', liveUrl: 'https://buketifinancialconsulting.com/' },
  { key: 'mightyOak', category: 'businessPlatforms', image: mightyOakImg, caseHref: '/mighty-oak-legacy', liveUrl: 'https://mightyoaklegacy.com/' },
  { key: 'solidRock', category: 'businessPlatforms', image: solidRockImg, caseHref: '/solid-rock-leadership-development', liveUrl: CASE_STUDY_CTA },
  { key: 'vanTravel', category: 'webApplications', image: vanTravelImg, caseHref: '/van-travel-business', liveUrl: 'https://vantravelbusiness.com/' },
  { key: 'aiFna', category: 'ai', image: aiFnaImg, caseHref: CASE_STUDY_CTA, liveUrl: 'https://vantechsystems.tech/work/ai-fna' },
  { key: 'powerMindset', category: 'businessPlatforms', image: powerMindsetImg, caseHref: '/power-mindset-breakthrough', liveUrl: 'https://powermindsetbreakthrough.com/' },
  { key: 'lelofit', category: 'saas', image: lelofitImg, caseHref: '/lelofit', liveUrl: 'https://lelofit.com/' },
  { key: 'allAccessTrip', category: 'webApplications', image: allAccessTripImg, caseHref: '/all-access-trip', liveUrl: 'https://www.allaccesstrip.com/' },
  { key: 'avocatConnectRdc', category: 'webApplications', image: avocatConnectRdcImg, caseHref: '/avocat-connect-rdc', liveUrl: 'https://www.avocatconnectrdc.com/' },
] as const;

export default function WorkMainPage() {
  const { t, i18n } = useTranslation('workMain');
  const currentLang = (i18n.language as SupportedLanguage) || 'en';
  const heroReveal = useReveal('up');
  const portfolioReveal = useReveal('up');
  const [activeTab, setActiveTab] = useState<(typeof filterTabKeys)[number]>('all');

  const visibleItems =
    activeTab === 'all' ? portfolioItems : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <main className="work-page bacgron-bodyimage">
      <section className="work-hero section" id="work-hero">
        <div className={`container work-hero__content ${heroReveal.className}`} ref={heroReveal.ref}>
          <span className="work-hero__badge">{t('hero.badge')}</span>

          <h1 className="work-hero__title">
            {t('hero.titleLine1')}
            <br />
            {t('hero.titleLine2')}
          </h1>

          <p className="work-hero__desc">{t('hero.desc')}</p>

          <p className="work-hero__subdesc">{t('hero.subdesc')}</p>

          <div className="work-hero__actions">
            <a href={localizePath('/contact', currentLang)} className="btn btn-outline">
              {t('hero.startAProject')}
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
            <a href={`${localizePath('/', currentLang)}#work`} className="btn btn-outline">
              {t('hero.ourWork')}
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="work-portfolio section">
        <div className={`container ${portfolioReveal.className}`} ref={portfolioReveal.ref}>
          <div className="work-portfolio__tabs">
            {filterTabKeys.map((tab) => (
              <button
                type="button"
                key={tab}
                className={`work-portfolio__tab${tab === activeTab ? ' is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {t(`filterTabs.${tab}`)}
              </button>
            ))}
          </div>

          <div className="work-portfolio__grid">
            {visibleItems.map((item) => {
              const title = t(`items.${item.key}.title`);
              const desc = t(`items.${item.key}.desc`);
              const isExternal = item.caseHref.startsWith('http');
              const href = isExternal ? item.caseHref : localizePath(item.caseHref, currentLang);
              return (
                <article className="work-card" key={item.key}>
                  <div className="work-card__image">
                    <img src={item.image} alt={`${title} platform preview`} loading="lazy" />
                  </div>

                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    className="work-card__title"
                  >
                    {title}
                  </a>

                  <p className="work-card__desc">{desc}</p>

                  <div className="work-card__links">
                    <a
                      href={href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noreferrer' : undefined}
                      className="work-card__link"
                    >
                      {t('viewCaseStudy')}
                      <span className="work-card__link-icon work-card__link-icon--case">
                        <Icon svg={caseStudyArrowSvg} />
                      </span>
                    </a>
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="work-card__link"
                    >
                      {t('viewLiveSite')}
                      <span className="work-card__link-icon work-card__link-icon--site">
                        <Icon svg={caseStudyArrowSvg} />
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}
