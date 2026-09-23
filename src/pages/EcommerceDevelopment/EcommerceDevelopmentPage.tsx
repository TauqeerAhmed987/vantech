import { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ecommerce-development.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import shippingFastSvg from '../../assets/icons/fa7-solid-shipping-fast.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import messageCircleDetailSvg from '../../assets/icons/boxicons-message-circle-detail-filled.svg?raw';
import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import analyticsSvg from '../../assets/icons/clarity-analytics-solid.svg?raw';
import warehouseSvg from '../../assets/icons/ic-baseline-warehouse.svg?raw';
import accountingSvg from '../../assets/icons/map-accounting.svg?raw';

import heroGlow from '../../assets/images/ecommerce-development/figma/hero-glow.webp';
import solutionGlow from '../../assets/images/ecommerce-development/figma/solution-glow.webp';

import buildIconStorefront from '../../assets/images/ecommerce-development/figma/build-icon-storefront.png';
import buildIconAssistant from '../../assets/images/ecommerce-development/figma/build-icon-assistant.png';
import buildIconCheckout from '../../assets/images/ecommerce-development/figma/build-icon-checkout.png';
import buildIconRecovery from '../../assets/images/ecommerce-development/figma/build-icon-recovery.png';
import buildIconPostpurchase from '../../assets/images/ecommerce-development/figma/build-icon-postpurchase.png';
import buildIconOperations from '../../assets/images/ecommerce-development/figma/build-icon-operations.png';

import processIconDiscover from '../../assets/images/ecommerce-development/figma/process-icon-discover.png';
import processIconDesign from '../../assets/images/ecommerce-development/figma/process-icon-design.png';
import processIconBuild from '../../assets/images/ecommerce-development/figma/process-icon-build.png';
import processIconAutomate from '../../assets/images/ecommerce-development/figma/process-icon-automate.png';
import processIconTest from '../../assets/images/ecommerce-development/figma/process-icon-test.png';
import processIconLaunch from '../../assets/images/ecommerce-development/figma/process-icon-launch.png';

import whyIconOperations from '../../assets/images/ecommerce-development/figma/why-icon-operations.png';
import whyIconAutomation from '../../assets/images/ecommerce-development/figma/why-icon-automation.png';
import whyIconMeasurable from '../../assets/images/ecommerce-development/figma/why-icon-measurable.png';

import pricingGlowOrb from '../../assets/images/ecommerce-development/figma/pricing-glow-orb.png';

interface CardText {
  title: string;
  desc: string;
}

export default function EcommerceDevelopmentPage() {
  const { t } = useTranslation('ecommerceDevelopment');

  const problems = t('leak.problems', { returnObjects: true }) as string[];

  const buildIcons = [
    buildIconStorefront,
    buildIconAssistant,
    buildIconCheckout,
    buildIconRecovery,
    buildIconPostpurchase,
    buildIconOperations,
  ];
  const buildDescWidths = [310, 281, 330, 321, 298, 293];
  const buildCards = (t('build.cards', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: buildIcons[i],
    descWidth: buildDescWidths[i],
  }));

  const capabilityRow1 = t('capabilities.row1', { returnObjects: true }) as string[];
  const capabilityRow2 = t('capabilities.row2', { returnObjects: true }) as string[];

  const useCases = t('useCases.items', { returnObjects: true }) as CardText[];

  const timelineSteps = t('architecture.timeline', { returnObjects: true }) as {
    number: string;
    title: string;
    tags: string[][];
  }[];

  const processIcons = [
    processIconDiscover,
    processIconDesign,
    processIconBuild,
    processIconAutomate,
    processIconTest,
    processIconLaunch,
  ];
  const processDescWidths = [232, 227, 277, 264, 218, 257];
  const processCards = (t('process.cards', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: processIcons[i],
    descWidth: processDescWidths[i],
  }));

  const integrationsRow1Icons = [paymentsSvg, shippingFastSvg, emailSvg, messageCircleDetailSvg, funnelSvg];
  const integrationsRow1 = (
    t('integrations.row1', { returnObjects: true }) as { label: string }[]
  ).map((item, i) => ({ ...item, icon: integrationsRow1Icons[i] }));

  const integrationsRow2Icons = [analyticsSvg, warehouseSvg, accountingSvg];
  const integrationsRow2 = (
    t('integrations.row2', { returnObjects: true }) as { label: string }[]
  ).map((item, i) => ({ ...item, icon: integrationsRow2Icons[i] }));

  const whyIcons = [whyIconOperations, whyIconAutomation, whyIconMeasurable];
  const whyDescWidths = [395, 358, 315];
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
  const leakHead = useReveal('left');
  const leakList = useReveal<HTMLUListElement>('right');
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
    <main className="ecommerce-page">
      <section className="ecommerce-hero section">
        <div className="container">
          <div className="row">
            <div className={`ecommerce-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="ecommerce-hero__badge">
                <Icon svg={servicesStarSvg} />
                Services
              </span>
              <h1 className="ecommerce-hero__title">Commerce That Works Smarter.</h1>
              <p className="ecommerce-hero__desc">
                Storefronts, payments and post-purchase experiences connected to
                automation and AI — so customers get answers and your team stops
                handling the same requests manually.
              </p>
              <div className="ecommerce-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  Get my project estimate
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#what-we-build" className="btn btn-outline">
                  Explore all services
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="ecommerce-hero__graphic" aria-hidden="true">
              <img src={heroGlow} alt="" className="ecommerce-hero__mockup" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce-leak section">
        <div className="container ecommerce-leak__row">
          <div className={`ecommerce-leak__copy ${leakHead.className}`} ref={leakHead.ref}>
            <h2 className="ecommerce-h1-lg">
              Where <span className="accent">Commerce</span> Operations Leak
            </h2>
            <p className="ecommerce-p-lg">
              Most stores do not lose money on the storefront. They lose it in
              abandoned carts, repeated support questions and manual post-purchase
              work.
            </p>
          </div>

          <ul className={`ecommerce-leak__list ${leakList.className}`} ref={leakList.ref}>
            {problems.map((text, i) => (
              <li className="ecommerce-leak__item" key={text}>
                <span className="ecommerce-leak__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="ecommerce-leak__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ecommerce-solution section">
        <div className="container ecommerce-solution__row">
          <div
            className={`ecommerce-solution__graphic ${solutionGraphic.className}`}
            ref={solutionGraphic.ref}
          >
            <img src={solutionGlow} alt="" className="ecommerce-solution__mockup" loading="lazy" />
          </div>

          <div className={`ecommerce-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="ecommerce-solution__title">Commerce Connected End To End</h2>
            <p className="ecommerce-solution__desc">
              We build the storefront and the operational layer behind it: payments,
              order flow, fulfilment updates, customer messaging and analytics — with
              AI assistance for the questions and journeys that repeat.
            </p>
          </div>
        </div>
      </section>

      <section className="ecommerce-build section" id="what-we-build">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="ecommerce-h2">What We Build</h2>
          </div>

          <div className={`ecommerce-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="ecommerce-card ecommerce-build-card" key={card.title}>
                <div className="ecommerce-build-card__glow" />
                <div className="ecommerce-build-card__head">
                  <h3 className="ecommerce-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="ecommerce-build-card__badge" loading="lazy" />
                </div>
                <p className="ecommerce-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="ecommerce-h2">Capabilities</h2>
          </div>

          <div className={`ecommerce-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="ecommerce-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="ecommerce-pill" key={label}>
                  <span className="ecommerce-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="ecommerce-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="ecommerce-pill" key={label}>
                  <span className="ecommerce-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="ecommerce-h2">Use Cases</h2>
          </div>

          <div className={`ecommerce-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="ecommerce-card ecommerce-usecase-card" key={item.title}>
                <h3 className="ecommerce-usecase-card__title">{item.title}</h3>
                <hr className="ecommerce-usecase-card__divider" />
                <p className="ecommerce-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-architecture section" id="architecture">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="ecommerce-h1-lg ecommerce-h1-lg--center">MVP architecture</h2>
            <p className="ecommerce-section-copy">
              Even a first release is a full system. We keep it small, but structured
              — so the second version is an extension, not a rebuild.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="ecommerce-architecture__divider" />
            <span className="ecommerce-architecture__divider-dot" />
          </div>

          <div className={`ecommerce-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="ecommerce-timeline-step" key={step.number}>
                <span className="ecommerce-timeline-step__badge">{step.number}</span>
                <h3 className="ecommerce-timeline-step__title">{step.title}</h3>
                <div className="ecommerce-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="ecommerce-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="ecommerce-timeline-tag" key={tag}>
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

      <section className="ecommerce-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="ecommerce-h2">Development Process</h2>
          </div>

          <div className={`ecommerce-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card, i) => (
              <div className="ecommerce-card ecommerce-card--flat ecommerce-process2-card" key={`${card.title}-${i}`}>
                <div className="ecommerce-process2-card__body">
                  <h3 className="ecommerce-process2-card__title">{card.title}</h3>
                  <p className="ecommerce-process2-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="ecommerce-process2-card__badge" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="ecommerce-h1-lg ecommerce-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className={`ecommerce-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="ecommerce-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="ecommerce-integration-connector">
                      <span className="ecommerce-integration-connector__line" />
                      <span className="ecommerce-integration-connector__diamond-outer" />
                      <span className="ecommerce-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="ecommerce-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="ecommerce-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="ecommerce-integration-connector">
                      <span className="ecommerce-integration-connector__line" />
                      <span className="ecommerce-integration-connector__diamond-outer" />
                      <span className="ecommerce-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="ecommerce-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ecommerce-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="ecommerce-h2">Why Van Tech Systems</h2>
          </div>

          <div className={`ecommerce-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="ecommerce-card ecommerce-card--flat ecommerce-why-card" key={card.title}>
                <img src={card.icon} alt="" className="ecommerce-badge-img ecommerce-why-card__badge" />
                <h3 className="ecommerce-why-card__title">{card.title}</h3>
                <p className="ecommerce-why-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ecommerce-pricing-cta section">
        <div className="container">
          <div className="ecommerce-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="ecommerce-pricing-cta__glow" loading="lazy" />
            <div className="ecommerce-pricing-cta__copy">
              <h2 className="ecommerce-pricing-cta__title">Starting at $3,500/month</h2>
              <p className="ecommerce-pricing-cta__desc">
                Starting prices are planning benchmarks. Final pricing depends on
                scope, architecture, integrations and technical requirements.
              </p>
            </div>
            <a href="#contact" className="btn btn-primary">
              Get my project estimate
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
