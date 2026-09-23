import { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './model-development.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import databaseFilledSvg from '../../assets/icons/ant-design-database-filled.svg?raw';
import listsRoundedSvg from '../../assets/icons/material-symbols-lists-rounded.svg?raw';
import hostGroupSvg from '../../assets/icons/clarity-host-group-solid.svg?raw';
import restApiSvg from '../../assets/icons/dashicons-rest-api.svg?raw';
import analyticsSvg from '../../assets/icons/clarity-analytics-solid-badged.svg?raw';

import heroIllustration from '../../assets/images/model-development/figma/bannnersectionimg/modeldev-hero__graphic.webp';
import heroStarLeft from '../../assets/images/model-development/figma/bannnersectionimg/modeldev-heroIconleft.png';
import heroStarRight from '../../assets/images/model-development/figma/bannnersectionimg/modeldev-heroIconright.png';
import solutionStar from '../../assets/images/model-development/figma/solution-parts/star.png';
import solutionBgArcs from '../../assets/images/model-development/figma/solution-parts/bg-arcs.png';
import solutionIconTopLeft from '../../assets/images/model-development/figma/solution-parts/icon-top-left.png';
import solutionIconTopRight from '../../assets/images/model-development/figma/solution-parts/icon-top-right.webp';
import solutionIconBottomLeft from '../../assets/images/model-development/figma/solution-parts/icon-bottom-left.png';
import solutionIconBottomRight from '../../assets/images/model-development/figma/solution-parts/icon-bottom-right.png';
import pricingGlowOrb from '../../assets/images/model-development/figma/pricing-glow.png';

import buildIconDataIngestion from '../../assets/images/model-development/figma/build-icon-data-ingestion.png';
import buildIconKnowledgeStructuring from '../../assets/images/model-development/figma/build-icon-knowledge-structuring.png';
import buildIconRetrieval from '../../assets/images/model-development/figma/build-icon-retrieval.png';
import buildIconBusinessReasoning from '../../assets/images/model-development/figma/build-icon-business-reasoning.png';
import buildIconAccessBoundaries from '../../assets/images/model-development/figma/build-icon-access-boundaries.png';
import buildIconEvaluation from '../../assets/images/model-development/figma/build-icon-evaluation.png';

import processIconAssess from '../../assets/images/model-development/figma/process-icon-assess.png';
import processIconArchitect from '../../assets/images/model-development/figma/process-icon-architect.png';
import processIconBuild from '../../assets/images/model-development/figma/process-icon-build.png';
import processIconEvaluate from '../../assets/images/model-development/figma/process-icon-evaluate.png';
import processIconIntegrate from '../../assets/images/model-development/figma/process-icon-integrate.png';
import processIconImprove from '../../assets/images/model-development/figma/process-icon-improve.png';

import whyIconGrounded from '../../assets/images/model-development/figma/why-icon-grounded.png';
import whyIconMeasured from '../../assets/images/model-development/figma/why-icon-measured.png';
import whyIconScoped from '../../assets/images/model-development/figma/why-icon-scoped.png';

// Each icon is its own pre-cropped piece cut from the original solution
// illustration, positioned (center point, as a percentage of the graphic's
// box) to match its spot in that image — this lets each one slide in from
// its own direction instead of the flat image moving as one rigid block.
const solutionIcons = [
  { src: solutionIconTopLeft, left: 26.2, top: 24.6, width: 47.5, dir: 'top' },
  { src: solutionIconTopRight, left: 77.0, top: 34.8, width: 47.3, dir: 'right' },
  { src: solutionIconBottomLeft, left: 22.1, top: 75.0, width: 44.9, dir: 'left' },
  { src: solutionIconBottomRight, left: 60.6, top: 83.2, width: 26.9, dir: 'bottom' },
];

// Icons/widths for the "What we build" cards, paired by index with the
// translated title/desc coming from the modelDevelopment.json namespace.
const buildCardIcons = [
  buildIconDataIngestion,
  buildIconKnowledgeStructuring,
  buildIconRetrieval,
  buildIconBusinessReasoning,
  buildIconAccessBoundaries,
  buildIconEvaluation,
];
const buildCardDescWidths = [310, 280, 282, 304, 305, 313];

// Icons for the "Development process" cards, paired by index.
const processCardIcons = [
  processIconAssess,
  processIconArchitect,
  processIconBuild,
  processIconEvaluate,
  processIconIntegrate,
  processIconImprove,
];

// Icons for the integrations pills, paired by index with translated labels.
const integrationsRow1Icons = [funnelSvg, databaseFilledSvg, listsRoundedSvg, hostGroupSvg];
const integrationsRow2Icons = [restApiSvg, analyticsSvg];

// Icons/widths for the "Why Van Tech Systems" cards, paired by index.
const whyCardIcons = [whyIconGrounded, whyIconMeasured, whyIconScoped];
const whyCardDescWidths = [313, undefined, undefined];

// Non-translatable step numbers for the "How it works" timeline, paired by index.
const timelineStepNumbers = ['01', '02', '03', '04', '05'];

type CardText = { title: string; desc: string };
type TimelineStepText = { title: string; tags: string[][] };

export default function ModelDevelopmentPage() {
  const { t } = useTranslation('modelDevelopment');

  const problems = t('disappoint.problems', { returnObjects: true }) as string[];

  const buildCards = (t('build.cards', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: buildCardIcons[i],
    descWidth: buildCardDescWidths[i],
  }));

  const capabilityRow1 = t('capabilities.row1', { returnObjects: true }) as string[];
  const capabilityRow2 = t('capabilities.row2', { returnObjects: true }) as string[];

  const useCases = t('usecases.items', { returnObjects: true }) as CardText[];

  const timelineSteps = (t('architecture.timeline', { returnObjects: true }) as TimelineStepText[]).map(
    (step, i) => ({
      ...step,
      number: timelineStepNumbers[i],
    })
  );

  const processCards = (t('process.cards', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: processCardIcons[i],
  }));

  const integrationsRow1 = (t('integrations.row1', { returnObjects: true }) as string[]).map((label, i) => ({
    icon: integrationsRow1Icons[i],
    label,
  }));
  const integrationsRow2 = (t('integrations.row2', { returnObjects: true }) as string[]).map((label, i) => ({
    icon: integrationsRow2Icons[i],
    label,
  }));

  const whyCards = (t('why.cards', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: whyCardIcons[i],
    descWidth: whyCardDescWidths[i],
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
  const heroGraphic = useReveal('up');
  const disappointHead = useReveal('left');
  const disappointList = useReveal<HTMLUListElement>('right');
  const solutionCopy = useReveal('right');
  const solutionGraphic = useReveal('left');
  const buildHead = useReveal('up');
  const capabilitiesHead = useReveal('up');
  const usecasesHead = useReveal('up');
  const architectureHead = useReveal('up');
  const processHead = useReveal('up');
  const integrationsHead = useReveal('up');
  const whyHead = useReveal('up');
  const buildGrid = useReveal('up');
  const capsRows = useReveal('up');
  const usecasesGrid = useReveal('up');
  const timelineGrid = useReveal('up');
  const process2Grid = useReveal('up');
  const integrationsGrid = useReveal('up');
  const whyGrid = useReveal('up');
  const pricingCta = useReveal('up');
  const architectureDivider = useReveal('up');

  return (
    <main className="modeldev-page">
      <section className="modeldev-hero section">
        <div className="container">
          <div className="row">
            <div className={`modeldev-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="modeldev-hero__badge">
                <Icon svg={servicesStarSvg} />
                {t('hero.badge')}
              </span>
              <h1
                className="modeldev-hero__title"
                dangerouslySetInnerHTML={{ __html: t('hero.title') }}
              />
              <p className="modeldev-hero__desc">{t('hero.desc')}</p>
              <div className="modeldev-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  {t('hero.ctaPrimary')}
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#offerings" className="btn btn-outline">
                  {t('hero.ctaSecondary')}
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className={`modeldev-hero__graphic ${heroGraphic.className}`} ref={heroGraphic.ref} aria-hidden="true">
              <img src={heroIllustration} alt="" className="modeldev-hero__illustration" loading="eager" />
              <img src={heroStarLeft} alt="" className="modeldev-hero__star modeldev-hero__star--left" loading="eager" />
              <img src={heroStarRight} alt="" className="modeldev-hero__star modeldev-hero__star--right" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="modeldev-disappoint section">
        <div className="container modeldev-disappoint__row">
          <div className={`modeldev-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="modeldev-h1-lg">{t('disappoint.title')}</h2>
            <p className="modeldev-p-lg">{t('disappoint.desc')}</p>
          </div>

          <ul className={`modeldev-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="modeldev-disappoint__item" key={text}>
                <span className="modeldev-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="modeldev-disappoint__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="modeldev-solution section">
        <div className="container modeldev-solution__row">
          <div className={`modeldev-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="modeldev-solution__title">{t('solution.title')}</h2>
            <p className="modeldev-solution__desc">{t('solution.desc')}</p>
          </div>

          <div className={`modeldev-solution__graphic ${solutionGraphic.className}`} ref={solutionGraphic.ref}>
            <img src={solutionBgArcs} alt="" className="modeldev-solution__bg-arcs" />
            {solutionIcons.map((icon, i) => (
              <img
                key={i}
                src={icon.src}
                alt=""
                loading="lazy"
                className={`modeldev-solution__icon modeldev-solution__icon--from-${icon.dir}`}
                style={{ left: `${icon.left}%`, top: `${icon.top}%`, width: `${icon.width}%` } as React.CSSProperties}
              />
            ))}
            <img src={solutionStar} alt="" className="modeldev-solution__star" />
          </div>
        </div>
      </section>

      <section className="modeldev-build section" id="offerings">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="modeldev-h2">{t('build.heading')}</h2>
          </div>

          <div className={`modeldev-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="modeldev-card modeldev-build-card" key={card.title}>
                <div className="modeldev-build-card__glow" />
                <div className="modeldev-build-card__head">
                  <h3 className="modeldev-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="modeldev-build-card__badge" loading="lazy" />
                </div>
                <p className="modeldev-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modeldev-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="modeldev-h2">{t('capabilities.heading')}</h2>
          </div>

          <div className={`modeldev-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="modeldev-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="modeldev-pill" key={label}>
                  <span className="modeldev-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="modeldev-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="modeldev-pill" key={label}>
                  <span className="modeldev-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="modeldev-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="modeldev-h2">{t('usecases.heading')}</h2>
          </div>

          <div className={`modeldev-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="modeldev-card modeldev-usecase-card" key={item.title}>
                <h3 className="modeldev-usecase-card__title">{item.title}</h3>
                <hr className="modeldev-usecase-card__divider" />
                <p className="modeldev-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modeldev-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="modeldev-h1-lg modeldev-h1-lg--center">{t('architecture.heading')}</h2>
            <p className="modeldev-section-copy">{t('architecture.desc')}</p>
          </div>

          <div style={{ position: 'relative' }} ref={architectureDivider.ref}>
            <hr className={`modeldev-architecture__divider ${architectureDivider.className}`} />
            <span className="modeldev-architecture__divider-dot" />
          </div>

          <div className={`modeldev-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="modeldev-timeline-step" key={step.number}>
                <span className="modeldev-timeline-step__badge">{step.number}</span>
                <h3 className="modeldev-timeline-step__title">{step.title}</h3>
                <div className="modeldev-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="modeldev-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="modeldev-timeline-tag" key={tag}>
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

      <section className="modeldev-process2 section">
        <div className="container">
          <div className={`section-head ${processHead.className}`} ref={processHead.ref}>
            <h2 className="modeldev-h2">{t('process.heading')}</h2>
          </div>

          <div className={`modeldev-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="modeldev-card modeldev-card--flat modeldev-process2-card" key={card.title}>
                <div className="modeldev-process2-card__body">
                  <h3 className="modeldev-process2-card__title">{card.title}</h3>
                  <p className="modeldev-process2-card__desc">{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="modeldev-process2-card__badge" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modeldev-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="modeldev-h1-lg modeldev-h1-lg--center">{t('integrations.heading')}</h2>
          </div>

          <div className={`modeldev-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="modeldev-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="modeldev-integration-connector" aria-hidden="true">
                      <span className="modeldev-integration-connector__line" />
                      <span className="modeldev-integration-connector__diamond-outer" />
                      <span className="modeldev-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="modeldev-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="modeldev-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="modeldev-integration-connector" aria-hidden="true">
                      <span className="modeldev-integration-connector__line" />
                      <span className="modeldev-integration-connector__diamond-outer" />
                      <span className="modeldev-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="modeldev-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="modeldev-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="modeldev-h2">{t('why.heading')}</h2>
          </div>

          <div className={`modeldev-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="modeldev-card modeldev-card--flat modeldev-why-card" key={card.title}>
                <img src={card.icon} alt="" className="modeldev-badge-img modeldev-why-card__badge" />
                <h3 className="modeldev-why-card__title">{card.title}</h3>
                <p className="modeldev-why-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="modeldev-pricing-cta section">
        <div className="container">
          <div className={`modeldev-pricing-cta__card ${pricingCta.className}`} ref={pricingCta.ref}>
            <img src={pricingGlowOrb} alt="" className="modeldev-pricing-cta__glow" loading="lazy" />
            <div className="modeldev-pricing-cta__copy">
              <h2 className="modeldev-pricing-cta__title">{t('pricingCta.title')}</h2>
              <p className="modeldev-pricing-cta__desc">{t('pricingCta.desc')}</p>
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
