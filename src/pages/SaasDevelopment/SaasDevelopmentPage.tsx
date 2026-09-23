import { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './saas-development.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import identityPlatformSvg from '../../assets/icons/material-symbols-light-identity-platform-rounded.svg?raw';
import restApiSvg from '../../assets/icons/dashicons-rest-api.svg?raw';

import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import emailSvg from '../../assets/icons/dashicons-email.svg?raw';
import analyticsSvg from '../../assets/icons/clarity-analytics-solid.svg?raw';
import toolsSvg from '../../assets/icons/bi-tools.svg?raw';
import webhooksSvg from '../../assets/icons/ph-webhooks-logo-fill.svg?raw';

import heroMockup from '../../assets/images/saas-development/figma/hero-dashboard-mockup.png';
import solutionIllustration from '../../assets/images/saas-development/figma/solution-illustration-new.png';
import solutionBgLines from '../../assets/images/saas-development/figma/solution-bg-lines.png';

import buildIconMultitenant from '../../assets/images/saas-development/figma/build-icon-multitenant.png';
import buildIconIdentity from '../../assets/images/saas-development/figma/build-icon-identity.png';
import buildIconBilling from '../../assets/images/saas-development/figma/build-icon-billing.png';
import buildIconProduct from '../../assets/images/saas-development/figma/build-icon-product.png';
import buildIconAdmin from '../../assets/images/saas-development/figma/build-icon-admin.png';
import buildIconPlatform from '../../assets/images/saas-development/figma/build-icon-platform.png';

import processIconDefine from '../../assets/images/saas-development/figma/process-icon-define.png';
import processIconArchitect from '../../assets/images/saas-development/figma/process-icon-architect.png';
import processIconDesign from '../../assets/images/saas-development/figma/process-icon-design.png';
import processIconBuild from '../../assets/images/saas-development/figma/process-icon-build.png';
import processIconTest from '../../assets/images/saas-development/figma/process-icon-test.png';
import processIconLaunch from '../../assets/images/saas-development/figma/process-icon-launch.png';

import whyIconTenancy from '../../assets/images/saas-development/figma/why-icon-tenancy.png';
import whyIconBilling from '../../assets/images/saas-development/figma/why-icon-billing.png';
import whyIconOperable from '../../assets/images/saas-development/figma/why-icon-operable.png';

import pricingGlowOrb from '../../assets/images/saas-development/figma/pricing-glow-orb.png';

interface CardText {
  title: string;
  desc: string;
}

export default function SaasDevelopmentPage() {
  const { t } = useTranslation('saasDevelopment');

  const problems = t('disappoint.problems', { returnObjects: true }) as string[];

  const buildIcons = [
    buildIconMultitenant,
    buildIconIdentity,
    buildIconBilling,
    buildIconProduct,
    buildIconAdmin,
    buildIconPlatform,
  ];
  const buildDescWidths = [271, 351, 327, 297, 334, 289];
  const buildCards = (t('build.cards', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: buildIcons[i],
    descWidth: buildDescWidths[i],
  }));

  const capabilityRow1 = t('capabilities.row1', { returnObjects: true }) as string[];
  const capabilityRow2 = t('capabilities.row2', { returnObjects: true }) as string[];

  const useCases = t('usecases.items', { returnObjects: true }) as CardText[];

  const timelineNumbers = ['01', '02', '03', '04', '05'];
  const timelineSteps = (
    t('architecture.timeline', { returnObjects: true }) as { title: string; tags: string[][] }[]
  ).map((step, i) => ({ ...step, number: timelineNumbers[i] }));

  const processIcons = [
    processIconDefine,
    processIconArchitect,
    processIconDesign,
    processIconBuild,
    processIconTest,
    processIconLaunch,
  ];
  const processDescWidths = [247, 243, 200, 222, 224, 254];
  const processCards = (t('process2.steps', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: processIcons[i],
    descWidth: processDescWidths[i],
  }));

  const integrationsRow1Icons = [paymentsSvg, identityPlatformSvg, emailSvg, analyticsSvg];
  const integrationsRow1 = (
    t('integrations.row1', { returnObjects: true }) as { label: string }[]
  ).map((item, i) => ({ ...item, icon: integrationsRow1Icons[i] }));

  const integrationsRow2Icons = [toolsSvg, webhooksSvg, restApiSvg];
  const integrationsRow2 = (
    t('integrations.row2', { returnObjects: true }) as { label: string }[]
  ).map((item, i) => ({ ...item, icon: integrationsRow2Icons[i] }));

  const whyIcons = [whyIconTenancy, whyIconBilling, whyIconOperable];
  const whyDescWidths = [366, 354, 351];
  const whyCards = (t('why.cards', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: whyIcons[i],
    descWidth: whyDescWidths[i],
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
    <main className="saas-page">
      <section className="saas-hero section">
        <div className="container">
          <div className="row">
            <div className={`saas-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="saas-hero__badge">
                <Icon svg={servicesStarSvg} />
                {t('hero.badge')}
              </span>
              <h1 className="saas-hero__title">{t('hero.title')}</h1>
              <p className="saas-hero__desc">{t('hero.desc')}</p>
              <div className="saas-hero__actions">
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

            <div className="saas-hero__graphic" aria-hidden="true">
              <img src={heroMockup} alt="" className="saas-hero__mockup" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="saas-disappoint section">
        <div className="container saas-disappoint__row">
          <div className={`saas-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="saas-h1-lg" dangerouslySetInnerHTML={{ __html: t('disappoint.title') }} />
            <p className="saas-p-lg">{t('disappoint.desc')}</p>
          </div>

          <ul className={`saas-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="saas-disappoint__item" key={text}>
                <span className="saas-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="saas-disappoint__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="saas-solution section">
        <div className="container saas-solution__row">
          <div
            className={`saas-solution__graphic ${solutionGraphic.className}`}
            ref={solutionGraphic.ref}
          >
            <img src={solutionBgLines} alt="" className="saas-solution__graphic-bg" />
            <img src={solutionIllustration} alt="" className="saas-solution__illustration" loading="lazy" />
          </div>

          <div className={`saas-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="saas-solution__title">{t('solution.title')}</h2>
            <p className="saas-solution__desc">{t('solution.desc')}</p>
          </div>
        </div>
      </section>

      <section className="saas-build section" id="what-we-build">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="saas-h2">{t('build.title')}</h2>
          </div>

          <div className={`saas-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="saas-card saas-build-card" key={card.title}>
                <div className="saas-build-card__glow" />
                <div className="saas-build-card__head">
                  <h3 className="saas-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="saas-build-card__badge" loading="lazy" />
                </div>
                <p className="saas-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="saas-h2">{t('capabilities.title')}</h2>
          </div>

          <div className={`saas-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="saas-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="saas-pill" key={label}>
                  <span className="saas-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="saas-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="saas-pill" key={label}>
                  <span className="saas-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="saas-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="saas-h2">{t('usecases.title')}</h2>
          </div>

          <div className={`saas-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="saas-card saas-usecase-card" key={item.title}>
                <h3 className="saas-usecase-card__title">{item.title}</h3>
                <hr className="saas-usecase-card__divider" />
                <p className="saas-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="saas-h1-lg saas-h1-lg--center">{t('architecture.title')}</h2>
            <p className="saas-section-copy">{t('architecture.desc')}</p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="saas-architecture__divider" />
            <span className="saas-architecture__divider-dot" />
          </div>

          <div className={`saas-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="saas-timeline-step" key={step.number}>
                <span className="saas-timeline-step__badge">{step.number}</span>
                <h3 className="saas-timeline-step__title">{step.title}</h3>
                <div className="saas-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="saas-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="saas-timeline-tag" key={tag}>
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

      <section className="saas-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="saas-h2">{t('process2.title')}</h2>
          </div>

          <div className={`saas-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="saas-card saas-card--flat saas-process2-card" key={card.title}>
                <div className="saas-process2-card__body">
                  <h3 className="saas-process2-card__title">{card.title}</h3>
                  <p className="saas-process2-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="saas-process2-card__badge" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="saas-h1-lg saas-h1-lg--center">{t('integrations.title')}</h2>
          </div>

          <div className={`saas-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="saas-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="saas-integration-connector">
                      <span className="saas-integration-connector__line" />
                      <span className="saas-integration-connector__diamond-outer" />
                      <span className="saas-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="saas-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="saas-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="saas-integration-connector">
                      <span className="saas-integration-connector__line" />
                      <span className="saas-integration-connector__diamond-outer" />
                      <span className="saas-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="saas-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="saas-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="saas-h2">{t('why.title')}</h2>
          </div>

          <div className={`saas-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="saas-card saas-card--flat saas-why-card" key={card.title}>
                <img src={card.icon} alt="" className="saas-badge-img saas-why-card__badge" />
                <h3 className="saas-why-card__title">{card.title}</h3>
                <p className="saas-why-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-pricing-cta section">
        <div className="container">
          <div className="saas-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="saas-pricing-cta__glow" loading="lazy" />
            <div className="saas-pricing-cta__copy">
              <h2 className="saas-pricing-cta__title">{t('pricingCta.title')}</h2>
              <p className="saas-pricing-cta__desc">{t('pricingCta.desc')}</p>
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
