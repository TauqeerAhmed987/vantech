import { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './mobile-application.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import pushSvg from '../../assets/icons/famicons-push.svg?raw';
import identityPlatformSvg from '../../assets/icons/material-symbols-light-identity-platform-rounded.svg?raw';
import analyticsSvg from '../../assets/icons/clarity-analytics-solid.svg?raw';
import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import databaseSvg from '../../assets/icons/ant-design-database-filled.svg?raw';
import restApiSvg from '../../assets/icons/dashicons-rest-api.svg?raw';

import heroMockupGlow from '../../assets/images/mobile-application/figma/hero-parts/glow-badges.webp';
import heroMockupPhone from '../../assets/images/mobile-application/figma/hero-parts/phone.webp';
import heroMockupIcon from '../../assets/images/mobile-application/figma/hero-parts/icon-card.png';
import solutionIllustration from '../../assets/images/mobile-application/figma/solution-illustration.png';

import buildIconCustomer from '../../assets/images/mobile-application/figma/build-icon-customer.png';
import buildIconBusiness from '../../assets/images/mobile-application/figma/build-icon-business.png';
import buildIconCompanion from '../../assets/images/mobile-application/figma/build-icon-companion.png';
import buildIconBackend from '../../assets/images/mobile-application/figma/build-icon-backend.png';
import buildIconAdmin from '../../assets/images/mobile-application/figma/build-icon-admin.png';
import buildIconRelease from '../../assets/images/mobile-application/figma/build-icon-release.png';

import processIconDiscover from '../../assets/images/mobile-application/figma/process-icon-discover.png';
import processIconDesign from '../../assets/images/mobile-application/figma/process-icon-design.png';
import processIconArchitect from '../../assets/images/mobile-application/figma/process-icon-architect.png';
import processIconBuild from '../../assets/images/mobile-application/figma/process-icon-build.png';
import processIconTest from '../../assets/images/mobile-application/figma/process-icon-test.png';
import processIconLaunch from '../../assets/images/mobile-application/figma/process-icon-launch.png';

import whyIconBackend from '../../assets/images/mobile-application/figma/why-icon-backend.png';
import whyIconDesigned from '../../assets/images/mobile-application/figma/why-icon-designed.png';
import whyIconRelease from '../../assets/images/mobile-application/figma/why-icon-release.png';

import pricingGlowOrb from '../../assets/images/mobile-application/figma/pricing-glow-orb.png';

const buildIcons = [
  buildIconCustomer,
  buildIconBusiness,
  buildIconCompanion,
  buildIconBackend,
  buildIconAdmin,
  buildIconRelease,
];
const buildDescWidths = [327, 343, 312, 342, 289, 310];

const processIcons = [
  processIconDiscover,
  processIconDesign,
  processIconArchitect,
  processIconBuild,
  processIconTest,
  processIconLaunch,
];
const processDescWidths = [253, 208, 195, 217, 229, 216];

const integrationsIconsRow1 = [paymentsSvg, pushSvg, identityPlatformSvg, analyticsSvg];
const integrationsIconsRow2 = [funnelSvg, databaseSvg, restApiSvg];

const whyIcons = [whyIconBackend, whyIconDesigned, whyIconRelease];

type TitledDesc = { title: string; desc: string };
type IntegrationLabel = { label: string };
type TimelineStep = { number: string; title: string; tags: string[][] };

export default function MobileApplicationPage() {
  const { t } = useTranslation('mobileApplication');

  const problems = t('disappoint.problems', { returnObjects: true }) as string[];

  const buildCardsData = t('build.cards', { returnObjects: true }) as TitledDesc[];
  const buildCards = buildCardsData.map((card, i) => ({
    ...card,
    icon: buildIcons[i],
    descWidth: buildDescWidths[i],
  }));

  const capabilityRow1 = t('capabilities.row1', { returnObjects: true }) as string[];
  const capabilityRow2 = t('capabilities.row2', { returnObjects: true }) as string[];

  const useCases = t('useCases.items', { returnObjects: true }) as TitledDesc[];

  const timelineSteps = t('architecture.timeline', { returnObjects: true }) as TimelineStep[];

  const processCardsData = t('process.cards', { returnObjects: true }) as TitledDesc[];
  const processCards = processCardsData.map((card, i) => ({
    ...card,
    icon: processIcons[i],
    descWidth: processDescWidths[i],
  }));

  const integrationsRow1Data = t('integrations.row1', { returnObjects: true }) as IntegrationLabel[];
  const integrationsRow1 = integrationsRow1Data.map((item, i) => ({
    ...item,
    icon: integrationsIconsRow1[i],
  }));

  const integrationsRow2Data = t('integrations.row2', { returnObjects: true }) as IntegrationLabel[];
  const integrationsRow2 = integrationsRow2Data.map((item, i) => ({
    ...item,
    icon: integrationsIconsRow2[i],
  }));

  const whyCardsData = t('why.cards', { returnObjects: true }) as TitledDesc[];
  const whyCards = whyCardsData.map((card, i) => ({
    ...card,
    icon: whyIcons[i],
  }));

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      if (href.length > 1) {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const hero = useReveal('up');
  const disappointHead = useReveal('left');
  const disappointList = useReveal<HTMLUListElement>('right');
  const solutionCopy = useReveal('right');
  const solutionGraphic = useReveal('left');
  const buildHead = useReveal('up');
  const capabilitiesHead = useReveal('up');
  const usecasesHead = useReveal('up');
  const architectureHead = useReveal('up');
  const process2Head = useReveal('up');
  const integrationsHead = useReveal('up');
  const whyHead = useReveal('up');
  const buildGrid = useReveal('up');
  const capsRows = useReveal('up');
  const usecasesGrid = useReveal('up');
  const timelineGrid = useReveal('up');
  const process2Grid = useReveal('up');
  const integrationsGrid = useReveal('up');
  const whyGrid = useReveal('up');

  return (
    <main className="mobileapp-page">
      <section className="mobileapp-hero section">
        <div className="container">
          <div className="row">
            <div className={`mobileapp-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="mobileapp-hero__badge">
                <Icon svg={servicesStarSvg} />
                {t('hero.badge')}
              </span>
              <h1 className="mobileapp-hero__title">{t('hero.title')}</h1>
              <p className="mobileapp-hero__desc">{t('hero.desc')}</p>
              <div className="mobileapp-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  {t('hero.ctaPrimary')}
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#app-types" className="btn btn-outline">
                  {t('hero.ctaSecondary')}
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="mobileapp-hero__graphic" aria-hidden="true">
              <img
                src={heroMockupGlow}
                alt=""
                className="mobileapp-hero__mockup-part mobileapp-hero__mockup-part--glow"
              />
              <img
                src={heroMockupPhone}
                alt=""
                className="mobileapp-hero__mockup-part mobileapp-hero__mockup-part--phone"
                loading="eager"
              />
              <img
                src={heroMockupIcon}
                alt=""
                className="mobileapp-hero__mockup-part mobileapp-hero__mockup-part--icon"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mobileapp-disappoint section">
        <div className="container mobileapp-disappoint__row">
          <div className={`mobileapp-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="mobileapp-h1-lg">{t('disappoint.title')}</h2>
            <p className="mobileapp-p-lg">{t('disappoint.desc')}</p>
          </div>

          <ul className={`mobileapp-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="mobileapp-disappoint__item" key={text}>
                <span className="mobileapp-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="mobileapp-disappoint__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mobileapp-solution section">
        <div className="container mobileapp-solution__row">
          <div
            className={`mobileapp-solution__graphic ${solutionGraphic.className}`}
            ref={solutionGraphic.ref}
          >
            <img src={solutionIllustration} alt="" loading="lazy" />
          </div>

          <div className={`mobileapp-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="mobileapp-solution__title">{t('solution.title')}</h2>
            <p className="mobileapp-solution__desc">{t('solution.desc')}</p>
          </div>
        </div>
      </section>

      <section className="mobileapp-build section" id="app-types">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="mobileapp-h2">{t('build.heading')}</h2>
          </div>

          <div className={`mobileapp-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="mobileapp-card mobileapp-build-card" key={card.title}>
                <div className="mobileapp-build-card__glow" />
                <div className="mobileapp-build-card__head">
                  <h3 className="mobileapp-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="mobileapp-build-card__badge" loading="lazy" />
                </div>
                <p className="mobileapp-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobileapp-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="mobileapp-h2">{t('capabilities.heading')}</h2>
          </div>

          <div className={`mobileapp-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="mobileapp-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="mobileapp-pill" key={label}>
                  <span className="mobileapp-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="mobileapp-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="mobileapp-pill" key={label}>
                  <span className="mobileapp-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mobileapp-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="mobileapp-h2">{t('useCases.heading')}</h2>
          </div>

          <div className={`mobileapp-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="mobileapp-card mobileapp-usecase-card" key={item.title}>
                <h3 className="mobileapp-usecase-card__title">{item.title}</h3>
                <hr className="mobileapp-usecase-card__divider" />
                <p className="mobileapp-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobileapp-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="mobileapp-h1-lg mobileapp-h1-lg--center">{t('architecture.heading')}</h2>
            <p className="mobileapp-section-copy">{t('architecture.desc')}</p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="mobileapp-architecture__divider" />
            <span className="mobileapp-architecture__divider-dot" />
          </div>

          <div className={`mobileapp-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="mobileapp-timeline-step" key={step.number}>
                <span className="mobileapp-timeline-step__badge">{step.number}</span>
                <h3 className="mobileapp-timeline-step__title">{step.title}</h3>
                <div className="mobileapp-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="mobileapp-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="mobileapp-timeline-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobileapp-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="mobileapp-h2">{t('process.heading')}</h2>
          </div>

          <div className={`mobileapp-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="mobileapp-card mobileapp-card--flat mobileapp-process2-card" key={card.title}>
                <div className="mobileapp-process2-card__body">
                  <h3 className="mobileapp-process2-card__title">{card.title}</h3>
                  <p className="mobileapp-process2-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="mobileapp-process2-card__badge" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobileapp-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="mobileapp-h1-lg mobileapp-h1-lg--center">{t('integrations.heading')}</h2>
          </div>

          <div className={`mobileapp-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="mobileapp-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="mobileapp-integration-connector" aria-hidden="true">
                      <span className="mobileapp-integration-connector__line" />
                      <span className="mobileapp-integration-connector__diamond-outer" />
                      <span className="mobileapp-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="mobileapp-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="mobileapp-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="mobileapp-integration-connector" aria-hidden="true">
                      <span className="mobileapp-integration-connector__line" />
                      <span className="mobileapp-integration-connector__diamond-outer" />
                      <span className="mobileapp-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="mobileapp-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mobileapp-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="mobileapp-h2">{t('why.heading')}</h2>
          </div>

          <div className={`mobileapp-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="mobileapp-card mobileapp-card--flat mobileapp-why-card" key={card.title}>
                <img src={card.icon} alt="" className="mobileapp-badge-img mobileapp-why-card__badge" />
                <h3 className="mobileapp-why-card__title">{card.title}</h3>
                <p className="mobileapp-why-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobileapp-pricing-cta section">
        <div className="container">
          <div className="mobileapp-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="mobileapp-pricing-cta__glow" loading="lazy" />
            <div className="mobileapp-pricing-cta__copy">
              <h2 className="mobileapp-pricing-cta__title">{t('pricingCta.title')}</h2>
              <p className="mobileapp-pricing-cta__desc">{t('pricingCta.desc')}</p>
            </div>
            <a href="#contact" className="btn btn-primary">
              {t('pricingCta.cta')}
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}
