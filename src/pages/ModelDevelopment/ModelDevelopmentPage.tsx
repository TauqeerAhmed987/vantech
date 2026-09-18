import { Fragment, useEffect } from 'react';
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

import heroIllustration from '../../assets/images/model-development/figma/bannnersectionimg/modeldev-hero__graphic.png';
import heroStarLeft from '../../assets/images/model-development/figma/bannnersectionimg/modeldev-heroIconleft.png';
import heroStarRight from '../../assets/images/model-development/figma/bannnersectionimg/modeldev-heroIconright.png';
import solutionStar from '../../assets/images/model-development/figma/solution-parts/star.png';
import solutionBgArcs from '../../assets/images/model-development/figma/solution-parts/bg-arcs.png';
import solutionIconTopLeft from '../../assets/images/model-development/figma/solution-parts/icon-top-left.png';
import solutionIconTopRight from '../../assets/images/model-development/figma/solution-parts/icon-top-right.png';
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

const problems = [
  'Knowledge is scattered across documents, systems and people.',
  'Answers cannot be traced back to a source.',
  'Sensitive information has no defined boundary.',
  'There is no way to measure whether output quality is improving.',
];

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

const buildCards = [
  {
    icon: buildIconDataIngestion,
    title: 'Data Ingestion',
    desc: 'Pipelines that collect documents and records into a usable form.',
    descWidth: 310,
  },
  {
    icon: buildIconKnowledgeStructuring,
    title: 'Knowledge Structuring',
    desc: 'Chunking, metadata and indexing designed for retrieval quality.',
    descWidth: 280,
  },
  {
    icon: buildIconRetrieval,
    title: 'Retrieval (RAG)',
    desc: 'Grounded responses that cite the underlying source.',
    descWidth: 282,
  },
  {
    icon: buildIconBusinessReasoning,
    title: 'Business Reasoning',
    desc: 'Your rules and constraints applied to model output.',
    descWidth: 304,
  },
  {
    icon: buildIconAccessBoundaries,
    title: 'Access Boundaries',
    desc: 'Permissions that determine who can retrieve what.',
    descWidth: 305,
  },
  {
    icon: buildIconEvaluation,
    title: 'Evaluation',
    desc: 'Test sets and review cycles that track answer quality over time.',
    descWidth: 313,
  },
];

const capabilityRow1 = [
  'Document ingestion',
  'Embeddings and indexing',
  'Retrieval-augmented generation',
  'Structured extraction',
  'Semantic search',
];

const capabilityRow2 = [
  'Business rule enforcement',
  'Model integration',
  'Evaluation harnesses',
  'Access control',
  'Monitoring',
];

const useCases = [
  {
    title: 'Internal knowledge assistant',
    desc: 'Staff answers drawn from approved internal documentation.',
  },
  {
    title: 'Document understanding',
    desc: 'Structured data extracted from contracts, forms and reports.',
  },
  {
    title: 'Domain search',
    desc: 'Semantic search across a large private content set.',
  },
  {
    title: 'Grounded agents',
    desc: 'A knowledge foundation that other AI systems build on.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Sources', tags: [['Documents', 'APIs'], ['Databases'], ['Business rules']] },
  { number: '02', title: 'Knowledge layer', tags: [['Ingestion', 'Chunking'], ['Embeddings', 'Index']] },
  { number: '03', title: 'Reasoning', tags: [['Retrieval', 'Model'], ['Constraints', 'Citations']] },
  { number: '04', title: 'Consumers', tags: [['Agents', 'Search'], ['Assistants', 'Automation'], ['Analytics']] },
  { number: '05', title: 'Assurance', tags: [['Evaluation', 'Permissions'], ['Monitoring']] },
];

const processCards = [
  {
    icon: processIconAssess,
    title: 'Assess',
    desc: 'Review the data available, its quality and its constraints.',
  },
  {
    icon: processIconArchitect,
    title: 'Architect',
    desc: 'Design ingestion, indexing, retrieval and access boundaries.',
  },
  {
    icon: processIconBuild,
    title: 'Build',
    desc: 'Implement the pipeline and the retrieval and reasoning layer.',
  },
  {
    icon: processIconEvaluate,
    title: 'Evaluate',
    desc: 'Measure output against a defined test set with real questions.',
  },
  {
    icon: processIconIntegrate,
    title: 'Integrate',
    desc: 'Expose the layer to the agents, search or applications that use it.',
  },
  {
    icon: processIconImprove,
    title: 'Improve',
    desc: 'Refine retrieval, prompts and rules as usage grows.',
  },
];

const integrationsRow1 = [
  { icon: funnelSvg, label: 'Databases' },
  { icon: databaseFilledSvg, label: 'Document storage' },
  { icon: listsRoundedSvg, label: 'Vector indexes' },
  { icon: hostGroupSvg, label: 'Model providers' },
];

const integrationsRow2 = [
  { icon: restApiSvg, label: 'Internal APIs' },
  { icon: analyticsSvg, label: 'Analytics' },
];

const whyCards = [
  {
    icon: whyIconGrounded,
    title: 'Grounded and traceable',
    desc: 'Answers reference the sources they came from.',
    descWidth: 313,
  },
  {
    icon: whyIconMeasured,
    title: 'Measured, not assumed',
    desc: 'Quality is evaluated against real questions before rollout.',
  },
  {
    icon: whyIconScoped,
    title: 'Scoped access',
    desc: 'Permissions decide what the system can retrieve and for whom.',
  },
];

export default function ModelDevelopmentPage() {
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
                Services
              </span>
              <h1 className="modeldev-hero__title">
                Your Data.
                <br />
                Intelligent Systems.
              </h1>
              <p className="modeldev-hero__desc">
                Retrieval, knowledge and reasoning systems built on your own documents,
                records and business rules — so AI answers reflect how your organization
                actually works.
              </p>
              <div className="modeldev-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  Get my project estimate
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#offerings" className="btn btn-outline">
                  Explore all services
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
            <h2 className="modeldev-h1-lg">Generic Models Do Not Know Your Business</h2>
            <p className="modeldev-p-lg">
              A capable model with no access to your documents, records and rules will
              produce confident answers that do not match your operations.
            </p>
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
            <h2 className="modeldev-solution__title">A knowledge layer you control</h2>
            <p className="modeldev-solution__desc">
              We build the layer between your data and the model: ingestion, structuring,
              retrieval, permissions and evaluation. The result is a system whose answers
              are grounded in your sources and can be measured, corrected and extended.
            </p>
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
            <h2 className="modeldev-h2">What we build</h2>
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
            <h2 className="modeldev-h2">Capabilities</h2>
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
            <h2 className="modeldev-h2">Use Cases</h2>
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
            <h2 className="modeldev-h1-lg modeldev-h1-lg--center">How it works</h2>
            <p className="modeldev-section-copy">
              We integrate and orchestrate existing foundation models around your data. We
              do not train foundation models from scratch.
            </p>
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
            <h2 className="modeldev-h2">Development process</h2>
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
            <h2 className="modeldev-h1-lg modeldev-h1-lg--center">Potential Integrations</h2>
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
            <h2 className="modeldev-h2">Why Van Tech Systems</h2>
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
              <h2 className="modeldev-pricing-cta__title">Starting at $1,500/month</h2>
              <p className="modeldev-pricing-cta__desc">
                Starting prices are planning benchmarks. Final pricing depends on scope,
                architecture, integrations and technical requirements.
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
