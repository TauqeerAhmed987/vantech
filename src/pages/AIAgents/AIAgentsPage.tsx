import { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './ai-agents.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import buildIconReceptionRouting from '../../assets/images/ai-agents/figma/build-icon-reception-routing.png';
import buildIconSales from '../../assets/images/ai-agents/figma/build-icon-sales.png';
import buildIconSupport from '../../assets/images/ai-agents/figma/build-icon-support.png';
import buildIconScheduling from '../../assets/images/ai-agents/figma/build-icon-scheduling.png';
import buildIconOperations from '../../assets/images/ai-agents/figma/build-icon-operations.png';
import buildIconEscalation from '../../assets/images/ai-agents/figma/build-icon-escalation.png';

import processIconDefineRole from '../../assets/images/ai-agents/figma/process-icon-define-role.png';
import processIconAssembleKnowledge from '../../assets/images/ai-agents/figma/process-icon-assemble-knowledge.png';
import processIconConnectActions from '../../assets/images/ai-agents/figma/process-icon-connect-actions.png';
import processIconBuild from '../../assets/images/ai-agents/figma/process-icon-build.png';
import processIconReview from '../../assets/images/ai-agents/figma/process-icon-review.png';
import processIconOperate from '../../assets/images/ai-agents/figma/process-icon-operate.png';

import organizationSvg from '../../assets/icons/fluent-organization-20-filled.svg?raw';

import whyIconBoundedDesign from '../../assets/images/ai-agents/figma/why-icon-bounded-design.png';
import whyIconGroundedKnowledge from '../../assets/images/ai-agents/figma/why-icon-grounded-knowledge.png';
import whyIconEscalationProduct from '../../assets/images/ai-agents/figma/why-icon-escalation-product.png';

import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import calendarSvg from '../../assets/icons/ant-design-calendar-filled.svg?raw';
import phoneSvg from '../../assets/icons/solar-phone-calling-rounded-bold.svg?raw';
import whatsappSvg from '../../assets/icons/basil-whatsapp-solid.svg?raw';
import smsSvg from '../../assets/icons/mdi-message-processing.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import restApiSvg from '../../assets/icons/dashicons-rest-api.svg?raw';

import heroOrb from '../../assets/images/ai-agents/figma/hero-orb.webp';
import sparkle3d from '../../assets/images/ai-agents/figma/sparkle-3d.png';
import solutionIllustration from '../../assets/images/ai-agents/figma/agents-solution__graphic.webp';
import pricingGlowOrb from '../../assets/images/ai-agents/figma/pricing-glow-orb.png';

// Icon/image references only — text content comes from the `aiAgents` i18n
// namespace and is combined with these parallel arrays inside the component.
const buildIcons = [
  buildIconReceptionRouting,
  buildIconSales,
  buildIconSupport,
  buildIconScheduling,
  buildIconOperations,
  buildIconEscalation,
];
const buildDescWidths = [310, 345, 324, 306, 342, 335];

const timelineNumbers = ['01', '02', '03', '04', '05'];

const processIcons = [
  processIconDefineRole,
  processIconAssembleKnowledge,
  processIconConnectActions,
  processIconBuild,
  processIconReview,
  processIconOperate,
];
const processDescWidths = [253, 264, 242, 253, 253, 253];

const integrationsIcons1 = [funnelSvg, calendarSvg, organizationSvg, phoneSvg, whatsappSvg];
const integrationsIcons2 = [smsSvg, emailSvg, restApiSvg];

const whyIcons = [whyIconBoundedDesign, whyIconGroundedKnowledge, whyIconEscalationProduct];

type TitleDesc = { title: string; desc: string };

export default function AIAgentsPage() {
  const { t } = useTranslation('aiAgents');

  const problems = t('disappoint.problems', { returnObjects: true }) as string[];

  const buildCards = (t('build.cards', { returnObjects: true }) as TitleDesc[]).map((card, i) => ({
    ...card,
    icon: buildIcons[i],
    descWidth: buildDescWidths[i],
  }));

  const capabilityRow1 = t('capabilities.row1', { returnObjects: true }) as string[];
  const capabilityRow2 = t('capabilities.row2', { returnObjects: true }) as string[];

  const useCases = t('usecases.items', { returnObjects: true }) as TitleDesc[];

  const timelineSteps = (
    t('architecture.timeline', { returnObjects: true }) as { title: string; tags: string[][] }[]
  ).map((step, i) => ({ ...step, number: timelineNumbers[i] }));

  const processCards = (t('process2.steps', { returnObjects: true }) as TitleDesc[]).map((card, i) => ({
    ...card,
    icon: processIcons[i],
    descWidth: processDescWidths[i],
  }));

  const integrationsRow1 = (t('integrations.row1', { returnObjects: true }) as { label: string }[]).map(
    (item, i) => ({ ...item, icon: integrationsIcons1[i] })
  );
  const integrationsRow2 = (t('integrations.row2', { returnObjects: true }) as { label: string }[]).map(
    (item, i) => ({ ...item, icon: integrationsIcons2[i] })
  );

  const whyCards = (t('why.cards', { returnObjects: true }) as TitleDesc[]).map((card, i) => ({
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

  const hero = useReveal('right');
  const heroGraphic = useReveal('left');
  const disappointHead = useReveal('left');
  const disappointList = useReveal<HTMLUListElement>('right');
  const solutionGraphic = useReveal('left');
  const solutionCopy = useReveal('right');
  const buildHead = useReveal('up');
  const capabilitiesHead = useReveal('up');
  const usecasesHead = useReveal('up');
  const architectureHead = useReveal('up');
  const process2Head = useReveal('up');
  const integrationsHead = useReveal('up');
  const whyHead = useReveal('up');
  const buildGrid = useReveal('up');
  const usecasesGrid = useReveal('up');
  const timelineGrid = useReveal('up');
  const process2Grid = useReveal('up');
  const integrationsGrid = useReveal('up');
  const whyGrid = useReveal('up');
  const capsRows = useReveal('up');
  const pricingCta = useReveal('up');
  const architectureDivider = useReveal('up');

  return (
    <main className="agents-page">
      <section className="agents-hero section">
        <div className="container">
          <div className="row">
          <div className={`agents-hero__content ${hero.className}`} ref={hero.ref}>
            <span className="agents-hero__badge">
              <Icon svg={servicesStarSvg} />
              {t('hero.badge')}
            </span>
            <h1 className="agents-hero__title">{t('hero.title')}</h1>
            <p className="agents-hero__desc">{t('hero.desc')}</p>
            <div className="agents-hero__actions">
              <a href="#contact" className="btn btn-primary">
                {t('hero.ctaPrimary')}
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
              <a href="#agent-types" className="btn btn-outline">
                {t('hero.ctaSecondary')}
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
            </div>
          </div>

          <div className={`agents-hero__graphic ${heroGraphic.className}`} ref={heroGraphic.ref} aria-hidden="true">
            <div className="hero__orbit-ring hero__orbit-ring--1" />
            <div className="hero__orbit-ring hero__orbit-ring--2" />
            <div className="hero__orbit-ring hero__orbit-ring--3" />
            <div className="agents-hero__orb-wrap">
              <img src={heroOrb} alt="" className="agents-hero__orb" loading="eager" />
            </div>
            <img src={sparkle3d} alt="" className="agents-hero__sparkle agents-hero__sparkle--a" />
            <img src={sparkle3d} alt="" className="agents-hero__sparkle agents-hero__sparkle--b" />
          </div>
          </div>
        </div>
      </section>

      <section className="agents-disappoint section">
        <div className="container agents-disappoint__row">
          <div className={`agents-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="agents-h1-lg" dangerouslySetInnerHTML={{ __html: t('disappoint.title') }} />
            <p className="agents-p-lg">{t('disappoint.desc')}</p>
          </div>

          <ul className={`agents-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="agents-disappoint__item" key={text}>
                <span className="agents-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="agents-disappoint__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="agents-solution section">
        <div className="container agents-solution__row">
          <div className={`agents-solution__graphic ${solutionGraphic.className}`} ref={solutionGraphic.ref}>
            <img src={solutionIllustration} alt="" loading="lazy" />
          </div>

          <div className={`agents-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="agents-solution__title">{t('solution.title')}</h2>
            <p className="agents-solution__desc">{t('solution.desc')}</p>
          </div>
        </div>
      </section>

      <section className="agents-build section" id="agent-types">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="agents-h2">{t('build.title')}</h2>
          </div>

          <div className={`agents-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="agents-card agents-build-card" key={card.title}>
                <div className="agents-build-card__glow" />
                <div className="agents-build-card__head">
                  <h3 className="agents-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="agents-build-card__badge" loading="lazy" />
                </div>
                <p className="agents-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="agents-h2">{t('capabilities.title')}</h2>
          </div>

          <div className={`agents-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="agents-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="agents-pill" key={label}>
                  <span className="agents-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="agents-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="agents-pill" key={label}>
                  <span className="agents-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="agents-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="agents-h2">{t('usecases.title')}</h2>
          </div>

          <div className={`agents-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="agents-card agents-usecase-card" key={item.title}>
                <h3 className="agents-usecase-card__title">{item.title}</h3>
                <hr className="agents-usecase-card__divider" />
                <p className="agents-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="agents-h1-lg agents-h1-lg--center">{t('architecture.title')}</h2>
            <p className="agents-section-copy">{t('architecture.desc')}</p>
          </div>

          <div style={{ position: 'relative' }} ref={architectureDivider.ref}>
            <hr className={`agents-architecture__divider ${architectureDivider.className}`} />
            <span className="agents-architecture__divider-dot" />
          </div>

          <div className={`agents-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="agents-timeline-step" key={step.number}>
                <span className="agents-timeline-step__badge">{step.number}</span>
                <h3 className="agents-timeline-step__title">{step.title}</h3>
                <div className="agents-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="agents-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="agents-timeline-tag" key={tag}>
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

      <section className="agents-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="agents-h2">{t('process2.title')}</h2>
            <p className="agents-section-copy">{t('process2.desc')}</p>
          </div>

          <div className={`agents-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="agents-card agents-card--flat agents-process2-card" key={card.title}>
                <div className="agents-process2-card__body">
                  <h3 className="agents-process2-card__title">{card.title}</h3>
                  <p className="agents-process2-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>
                    {card.desc}
                  </p>
                </div>
                <img src={card.icon} alt="" className="agents-process2-card__badge" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="agents-h1-lg agents-h1-lg--center">{t('integrations.title')}</h2>
          </div>

          <div className={`agents-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="agents-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="agents-integration-connector" aria-hidden="true">
                      <span className="agents-integration-connector__line" />
                      <span className="agents-integration-connector__diamond-outer" />
                      <span className="agents-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="agents-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="agents-integrations__row agents-integrations__row--offset">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="agents-integration-connector" aria-hidden="true">
                      <span className="agents-integration-connector__line" />
                      <span className="agents-integration-connector__diamond-outer" />
                      <span className="agents-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="agents-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="agents-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="agents-h2">{t('why.title')}</h2>
          </div>

          <div className={`agents-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="agents-card agents-card--flat agents-why-card" key={card.title}>
                <img src={card.icon} alt="" className="agents-why-card__badge" loading="lazy" />
                <h3 className="agents-why-card__title">{card.title}</h3>
                <p className="agents-why-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="agents-pricing-cta section">
        <div className="container">
          <div className={`agents-pricing-cta__card ${pricingCta.className}`} ref={pricingCta.ref}>
            <img src={pricingGlowOrb} alt="" className="agents-pricing-cta__glow" loading="lazy" />
            <div className="agents-pricing-cta__copy">
              <h2 className="agents-pricing-cta__title">{t('pricingCta.title')}</h2>
              <p className="agents-pricing-cta__desc">{t('pricingCta.desc')}</p>
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
