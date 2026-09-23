import { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './mvp-development.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import fingerprintSvg from '../../assets/icons/fluent-fingerprint-32-filled.svg?raw';
import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import databaseSvg from '../../assets/icons/bi-database-fill.svg?raw';
import webhookSvg from '../../assets/icons/carbon-webhook.svg?raw';

import heroStar from '../../assets/images/mvp-development/figma/hero-orbit/rocket-single.webp';
import rocketBgLines from '../../assets/images/mvp-development/figma/hero-orbit/rocket-bg-lines.png';
import orbitEllipse from '../../assets/images/mvp-development/figma/hero-orbit/orbit-ellipse.svg';
import orbitBadgeShield from '../../assets/images/mvp-development/figma/hero-orbit/movicon1.png';
import orbitBadgeCheck from '../../assets/images/mvp-development/figma/hero-orbit/movicon2.png';
import solutionGlow from '../../assets/images/mvp-development/figma/solution-glow.png';
import pricingGlowOrb from '../../assets/images/mvp-development/figma/pricing-glow-orb.png';

import buildIconProductDefinition from '../../assets/images/mvp-development/figma/build-icon-product-definition.png';
import buildIconProductDesign from '../../assets/images/mvp-development/figma/build-icon-product-design.png';
import buildIconApplication from '../../assets/images/mvp-development/figma/build-icon-application.png';
import buildIconDataFoundation from '../../assets/images/mvp-development/figma/build-icon-data-foundation.png';
import buildIconLaunchSetup from '../../assets/images/mvp-development/figma/build-icon-launch-setup.png';
import buildIconIterationPlan from '../../assets/images/mvp-development/figma/build-icon-iteration-plan.png';

import processIconDiscover from '../../assets/images/mvp-development/figma/process-icon-discover.png';
import processIconDefine from '../../assets/images/mvp-development/figma/process-icon-define.png';
import processIconDesign from '../../assets/images/mvp-development/figma/process-icon-design.png';
import processIconBuild from '../../assets/images/mvp-development/figma/process-icon-build.png';
import processIconTest from '../../assets/images/mvp-development/figma/process-icon-test.png';
import processIconLaunch from '../../assets/images/mvp-development/figma/process-icon-launch.png';

import whyIconScoped from '../../assets/images/mvp-development/figma/why-icon-scoped.png';
import whyIconArchitected from '../../assets/images/mvp-development/figma/why-icon-architected.png';
import whyIconTeam from '../../assets/images/mvp-development/figma/why-icon-team.png';

const ORBIT_DURATION = '42s';

// Same hand-traced ellipse path (mvp-badge-orbit) as AI Automation, just 2
// badges instead of 4 — each just started at a different point in the
// shared 42s cycle via animation-delay.
const orbitBadges = [
  { img: orbitBadgeShield, size: 68 },
  { img: orbitBadgeCheck, size: 68 },
];

// Icon/geometry-only companions to the translated text arrays built inside
// the component (text lives in the mvpDevelopment i18n namespace; only
// non-text visuals and layout numbers stay here at module scope).
const buildCardMeta = [
  { icon: buildIconProductDefinition, descWidth: 301 },
  { icon: buildIconProductDesign, descWidth: 327 },
  { icon: buildIconApplication, descWidth: 322 },
  { icon: buildIconDataFoundation, descWidth: 328 },
  { icon: buildIconLaunchSetup, descWidth: 327 },
  { icon: buildIconIterationPlan, descWidth: 329 },
];

const timelineNumbers = ['01', '02', '03', '04'];

const processCardIcons = [
  processIconDiscover,
  processIconDefine,
  processIconDesign,
  processIconBuild,
  processIconTest,
  processIconLaunch,
];

const integrationsIcons1 = [paymentsSvg, emailSvg, fingerprintSvg, funnelSvg];
const integrationsIcons2 = [databaseSvg, webhookSvg];

const whyCardIcons = [whyIconScoped, whyIconArchitected, whyIconTeam];

type CardText = { title: string; desc: string };

export default function MVPDevelopmentPage() {
  const { t } = useTranslation('mvpDevelopment');

  const problems = t('disappoint.problems', { returnObjects: true }) as string[];

  const buildCardsText = t('build.cards', { returnObjects: true }) as CardText[];
  const buildCards = buildCardsText.map((card, i) => ({ ...card, ...buildCardMeta[i] }));

  const capabilityRow1 = t('capabilities.row1', { returnObjects: true }) as string[];
  const capabilityRow2 = t('capabilities.row2', { returnObjects: true }) as string[];

  const useCases = t('usecases.items', { returnObjects: true }) as CardText[];

  const architectureSteps = t('architecture.steps', { returnObjects: true }) as {
    title: string;
    tags: string[][];
  }[];
  const timelineSteps = architectureSteps.map((step, i) => ({ number: timelineNumbers[i], ...step }));

  const processCardsText = t('process.cards', { returnObjects: true }) as CardText[];
  const processCards = processCardsText.map((card, i) => ({ icon: processCardIcons[i], ...card }));

  const integrationsLabels1 = t('integrations.row1', { returnObjects: true }) as string[];
  const integrationsRow1 = integrationsLabels1.map((label, i) => ({ icon: integrationsIcons1[i], label }));

  const integrationsLabels2 = t('integrations.row2', { returnObjects: true }) as string[];
  const integrationsRow2 = integrationsLabels2.map((label, i) => ({ icon: integrationsIcons2[i], label }));

  const whyCardsText = t('why.cards', { returnObjects: true }) as CardText[];
  const whyCards = whyCardsText.map((card, i) => ({ icon: whyCardIcons[i], ...card }));

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
    <main className="mvp-page">
      <section className="mvp-hero section">
        <div className="container">
          <div className="row">
            <div className={`mvp-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="mvp-hero__badge">
                <Icon svg={servicesStarSvg} />
                {t('hero.badge')}
              </span>
              <h1 className="mvp-hero__title" dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
              <p className="mvp-hero__desc">{t('hero.desc')}</p>
              <div className="mvp-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  {t('hero.ctaPrimary')}
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#what-we-build" className="btn btn-outline">
                  {t('hero.ctaSecondary')}
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="mvp-hero__graphic" aria-hidden="true">
              <div className="mvp-orbit">
                <img src={rocketBgLines} alt="" className="mvp-orbit__bg-lines" />
                {/* Split into two copies so the ring can pass behind the
                    rocket on top and in front of it on the bottom, like a
                    ring around a sphere — a single flat image can't be on
                    both sides of the rocket layer at once. */}
                <img src={orbitEllipse} alt="" className="mvp-orbit__ellipse mvp-orbit__ellipse--back" />
                <img src={heroStar} alt="" className="mvp-orbit__star-glow" />
                <img src={heroStar} alt="" className="mvp-orbit__star" />
                <img src={orbitEllipse} alt="" className="mvp-orbit__ellipse mvp-orbit__ellipse--front" />

                {orbitBadges.map((item, i) => (
                  <div
                    key={i}
                    className="mvp-orbit__anchor"
                    style={
                      {
                        animationDuration: ORBIT_DURATION,
                        animationDelay: `-${(i / orbitBadges.length) * 42}s`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="mvp-orbit__radius">
                      <div className="mvp-orbit__counter">
                        <img
                          src={item.img}
                          alt=""
                          className="mvp-orbit__badge"
                          style={{ '--badge-size': item.size } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mvp-disappoint section">
        <div className="container mvp-disappoint__row">
          <div className={`mvp-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="mvp-h1-lg">{t('disappoint.title')}</h2>
            <p className="mvp-p-lg">{t('disappoint.desc')}</p>
          </div>

          <ul className={`mvp-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="mvp-disappoint__item" key={text}>
                <span className="mvp-disappoint__item-text">{text}</span>
                <span className="mvp-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mvp-solution section">
        <div className="container mvp-solution__row">
          <div
            className={`mvp-solution__graphic ${solutionGraphic.className}`}
            ref={solutionGraphic.ref}
            aria-hidden="true"
          >
            <img src={solutionGlow} alt="" className="mvp-solution__mockup" loading="lazy" />
          </div>

          <div className={`mvp-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="mvp-solution__title">{t('solution.title')}</h2>
            <p className="mvp-solution__desc">{t('solution.desc')}</p>
          </div>
        </div>
      </section>

      <section className="mvp-build section" id="what-we-build">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="mvp-h2">{t('build.title')}</h2>
          </div>

          <div className={`mvp-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="mvp-card mvp-build-card" key={card.title}>
                <div className="mvp-build-card__glow" />
                <div className="mvp-build-card__head">
                  <h3 className="mvp-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="mvp-build-card__badge" loading="lazy" />
                </div>
                <p className="mvp-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="mvp-h2">{t('capabilities.title')}</h2>
          </div>

          <div className={`mvp-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="mvp-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="mvp-pill" key={label}>
                  <span className="mvp-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="mvp-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="mvp-pill" key={label}>
                  <span className="mvp-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mvp-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="mvp-h2">{t('usecases.title')}</h2>
          </div>

          <div className={`mvp-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="mvp-card mvp-usecase-card" key={item.title}>
                <h3 className="mvp-usecase-card__title">{item.title}</h3>
                <hr className="mvp-usecase-card__divider" />
                <p className="mvp-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="mvp-h1-lg mvp-h1-lg--center">{t('architecture.title')}</h2>
            <p className="mvp-section-copy">{t('architecture.desc')}</p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="mvp-architecture__divider" />
            <span className="mvp-architecture__divider-dot" />
          </div>

          <div className={`mvp-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="mvp-timeline-step" key={step.number}>
                <span className="mvp-timeline-step__badge">{step.number}</span>
                <h3 className="mvp-timeline-step__title">{step.title}</h3>
                <div className="mvp-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="mvp-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="mvp-timeline-tag" key={tag}>
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

      <section className="mvp-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="mvp-h2">{t('process.title')}</h2>
          </div>

          <div className={`mvp-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="mvp-card mvp-card--flat mvp-process2-card" key={card.title}>
                <div className="mvp-process2-card__body">
                  <h3 className="mvp-process2-card__title">{card.title}</h3>
                  <p className="mvp-process2-card__desc">{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="mvp-process2-card__badge" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="mvp-h1-lg mvp-h1-lg--center">{t('integrations.title')}</h2>
          </div>

          <div className={`mvp-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="mvp-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="mvp-integration-connector" aria-hidden="true">
                      <span className="mvp-integration-connector__line" />
                      <span className="mvp-integration-connector__diamond-outer" />
                      <span className="mvp-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="mvp-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="mvp-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="mvp-integration-connector" aria-hidden="true">
                      <span className="mvp-integration-connector__line" />
                      <span className="mvp-integration-connector__diamond-outer" />
                      <span className="mvp-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="mvp-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mvp-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="mvp-h2">{t('why.title')}</h2>
          </div>

          <div className={`mvp-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="mvp-card mvp-card--flat mvp-why-card" key={card.title}>
                <img src={card.icon} alt="" className="mvp-badge-img mvp-why-card__badge" />
                <h3 className="mvp-why-card__title">{card.title}</h3>
                <p className="mvp-why-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-pricing-cta section">
        <div className="container">
          <div className="mvp-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="mvp-pricing-cta__glow" loading="lazy" />
            <div className="mvp-pricing-cta__copy">
              <h2 className="mvp-pricing-cta__title">{t('pricingCta.title')}</h2>
              <p className="mvp-pricing-cta__desc">{t('pricingCta.desc')}</p>
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
