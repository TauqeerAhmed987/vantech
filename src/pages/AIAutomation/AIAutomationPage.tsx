import { Fragment } from 'react';
import type { CSSProperties } from 'react';
import './ai-automation.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';
import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';
import databaseSvg from '../../assets/icons/bi-database-fill.svg?raw';
import designServicesSvg from '../../assets/icons/ic-baseline-design-services.svg?raw';
import workflowSvg from '../../assets/icons/boxicons-workflow-alt-filled.svg?raw';
import supportSvg from '../../assets/icons/fluent-person-support-28-filled.svg?raw';

import buildIconLeadCapture from '../../assets/images/ai-automation/figma/build-icon-lead-capture.png';
import buildIconQualification from '../../assets/images/ai-automation/figma/build-icon-qualification.png';
import buildIconCrmOperations from '../../assets/images/ai-automation/figma/build-icon-crm-operations.png';
import buildIconFollowup from '../../assets/images/ai-automation/figma/build-icon-followup.png';
import buildIconScheduling from '../../assets/images/ai-automation/figma/build-icon-scheduling.png';
import buildIconReporting from '../../assets/images/ai-automation/figma/build-icon-reporting.png';

import processIconMap from '../../assets/images/ai-automation/figma/process-icon-map.png';
import processIconDesign from '../../assets/images/ai-automation/figma/process-icon-design.png';
import processIconConnect from '../../assets/images/ai-automation/figma/process-icon-connect.png';
import processIconBuild from '../../assets/images/ai-automation/figma/process-icon-build.png';
import processIconTest from '../../assets/images/ai-automation/figma/process-icon-test.png';
import processIconOperate from '../../assets/images/ai-automation/figma/process-icon-operate.png';

import whyIconWorkflow from '../../assets/images/ai-automation/figma/why-icon-workflow.png';
import whyIconDesign from '../../assets/images/ai-automation/figma/why-icon-design.png';
import whyIconProduct from '../../assets/images/ai-automation/figma/why-icon-product.png';

import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import messageFilledSvg from '../../assets/icons/ant-design-message-filled.svg?raw';
import calendarSvg from '../../assets/icons/ant-design-calendar-filled.svg?raw';
import formFilledSvg from '../../assets/icons/fluent-form-32-filled.svg?raw';
import spreadsheetsSvg from '../../assets/icons/healthicons-spreadsheets.svg?raw';
import webhookSvg from '../../assets/icons/carbon-webhook.svg?raw';
import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';

import heroStar from '../../assets/images/ai-automation/figma/hero-star.png';
import badgeCircle from '../../assets/images/ai-automation/figma/badge-circle.png';
import orbitRing from '../../assets/images/ai-automation/figma/orbit-ring.svg';
import orbitEllipse from '../../assets/images/ai-automation/figma/orbit-ellipse.svg';
import bottomSphere from '../../assets/images/ai-automation/figma/bottom-sphere.png';
import solutionStar from '../../assets/images/ai-automation/figma/solution-parts/star.png';
import solutionStarBgLines from '../../assets/images/ai-automation/figma/solution-parts/star-bg-lines.png';
import solutionIconTopLeft from '../../assets/images/ai-automation/figma/solution-parts/icon-top-left.png';
import solutionIconTopRight from '../../assets/images/ai-automation/figma/solution-parts/icon-top-right.png';
import solutionIconMidLeft from '../../assets/images/ai-automation/figma/solution-parts/icon-mid-left.png';
import solutionIconMidRight from '../../assets/images/ai-automation/figma/solution-parts/icon-mid-right.png';
import solutionIconLowerLeft from '../../assets/images/ai-automation/figma/solution-parts/icon-lower-left.png';
import solutionIconLowerRight from '../../assets/images/ai-automation/figma/solution-parts/icon-lower-right.png';
import solutionIconBottomLeft from '../../assets/images/ai-automation/figma/solution-parts/icon-bottom-left.png';
import solutionIconBottomRight from '../../assets/images/ai-automation/figma/solution-parts/icon-bottom-right.png';
import pricingGlowOrb from '../../assets/images/ai-automation/figma/pricing-glow-orb.png';
// Shared hero ombre glow — the same asset already used behind the hero on
// the About and Partners pages; reused here instead of a duplicate export.

const ORBIT_DURATION = '42s';

// Each part is its own pre-cropped piece (icon + the dashed line leading to
// the centre) cut from the original solution illustration, positioned as a
// percentage of the graphic's box so it lines up with where it sat in that
// image — this lets each piece animate/stagger in on its own.
const solutionParts = [
  { src: solutionIconTopLeft, left: 21.3, top: 1.9, width: 25.04, dir: 'top' },
  { src: solutionIconTopRight, left: 55.4, top: 1.9, width: 25.04, dir: 'top' },
  { src: solutionIconMidLeft, left: 0, top: 25.5, width: 38.67, dir: 'left' },
  { src: solutionIconMidRight, left: 61.2, top: 25.5, width: 38.67, dir: 'right' },
  { src: solutionIconLowerLeft, left: 0, top: 46.4, width: 38.67, dir: 'left' },
  { src: solutionIconLowerRight, left: 61.2, top: 46.4, width: 38.67, dir: 'right' },
  { src: solutionIconBottomLeft, left: 21.8, top: 52.9, width: 22.74, dir: 'bottom' },
  { src: solutionIconBottomRight, left: 52.3, top: 52.9, width: 22.74, dir: 'bottom' },
];

// angle/radius/size derived from each badge's position and footprint in
// the Figma frame relative to the graphic's center, so the float traces
// the same circle — and relative scale — the design placed them on.
const orbitBadges = [
  { svg: supportSvg, angle: -114.14, radius: 172, size: 40 },
  { svg: designServicesSvg, angle: -149.6, radius: 228, size: 78 },
  { svg: databaseSvg, angle: -42.35, radius: 163, size: 56 },
  { svg: workflowSvg, angle: -2.92, radius: 216, size: 78 },
];

const frictionPoints = [
  { number: '01', text: 'Leads sit unqualified while someone finds time to review them.' },
  { number: '02', text: 'The same data is entered into several systems by hand.' },
  { number: '03', text: 'Follow-up depends on individuals remembering.' },
  { number: '04', text: 'Reporting is assembled manually from separate tools.' },
];

const offeringCards = [
  {
    icon: buildIconLeadCapture,
    title: 'Lead Capture & Routing',
    desc: 'Forms, inbound messages and enquiries routed by rules or AI.',
    descWidth: 335,
  },
  {
    icon: buildIconQualification,
    title: 'Qualification',
    desc: 'Structured scoring and summarization before a human reads anything.',
    descWidth: 325,
  },
  {
    icon: buildIconCrmOperations,
    title: 'CRM Operations',
    desc: 'Records created and updated automatically from real activity.',
    descWidth: 261,
  },
  {
    icon: buildIconFollowup,
    title: 'Follow-up Sequences',
    desc: 'Timed, conditional messaging across email and messaging channels.',
    descWidth: 314,
  },
  {
    icon: buildIconScheduling,
    title: 'Scheduling',
    desc: 'Booking, reminders and rescheduling handled inside the workflow.',
    descWidth: 309,
  },
  {
    icon: buildIconReporting,
    title: 'Reporting',
    desc: 'Operational metrics compiled continuously instead of monthly.',
    descWidth: 359,
  },
];

const capabilityRow1 = [
  'Process mapping',
  'Rule-based routing',
  'AI qualification',
  'Data enrichment',
  'Conditional sequences',
  'Error handling and retries',
];

const capabilityRow2 = ['Run logging', 'Human handoff', 'Notifications', 'Operational dashboards'];

const useCases = [
  {
    title: 'Inbound lead handling',
    desc: 'Every enquiry qualified, logged and answered without delay.',
  },
  {
    title: 'Back-office operations',
    desc: 'Recurring internal processes executed on a schedule.',
  },
  {
    title: 'Client onboarding',
    desc: 'Documents, accounts and tasks created from a single trigger.',
  },
  {
    title: 'Reporting',
    desc: 'Operational data collected and summarized automatically.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Triggers', tags: [['Forms', 'Schedules'], ['Webhooks'], ['Inbound messages']] },
  { number: '02', title: 'Logic', tags: [['Rules', 'AI qualification'], ['Branching', 'Validation']] },
  { number: '03', title: 'Actions', tags: [['CRM updates', 'Messaging'], ['Scheduling', 'Documents']] },
  { number: '04', title: 'Oversight', tags: [['Run logs', 'Retries'], ['Alerts', 'Human handoff']] },
];

const processCards = [
  {
    icon: processIconMap,
    title: 'Map',
    desc: 'Document the process as it runs today, including exceptions.',
  },
  {
    icon: processIconDesign,
    title: 'Design',
    desc: 'Define triggers, decision logic and where a human stays in the loop.',
  },
  {
    icon: processIconConnect,
    title: 'Connect',
    desc: 'Establish access to the systems involved and validate the data flow.',
  },
  {
    icon: processIconBuild,
    title: 'Build',
    desc: 'Implement workflows with logging, validation and error handling.',
  },
  {
    icon: processIconTest,
    title: 'Test',
    desc: 'Run against real scenarios, including the ones that normally break.',
  },
  {
    icon: processIconOperate,
    title: 'Operate',
    desc: 'Monitor, tune and extend as the process changes.',
  },
];

const integrationsRow1 = [
  { icon: funnelSvg, label: 'CRM' },
  { icon: emailSvg, label: 'Email' },
  { icon: messageFilledSvg, label: 'Messaging' },
  { icon: calendarSvg, label: 'Calendars' },
  { icon: formFilledSvg, label: 'Forms' },
];

const integrationsRow2 = [
  { icon: databaseSvg, label: 'Databases' },
  { icon: spreadsheetsSvg, label: 'Spreadsheets' },
  { icon: webhookSvg, label: 'Webhooks' },
  { icon: paymentsSvg, label: 'Payments' },
];

const whyCards = [
  {
    icon: whyIconWorkflow,
    title: 'Built around the real process',
    desc: 'We automate the workflow you actually run, including its exceptions.',
  },
  {
    icon: whyIconDesign,
    title: 'Observable by design',
    desc: 'Every run is logged, so failures surface instead of hiding.',
  },
  {
    icon: whyIconProduct,
    title: 'Observable by design',
    desc: 'Every run is logged, so failures surface instead of hiding.',
  },
];

export default function AIAutomationPage() {
  const copy = useReveal('left');
  const graphic = useReveal('right');
  const operations = useReveal('left');
  const frictionReveal = useReveal('right');
  const solutionCopy = useReveal('left');
  const solutionGraphic = useReveal('right');
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
  const pricingCta = useReveal('up');
  const architectureDivider = useReveal('up');

  return (
    <main className="ai-automation-page">
      <section className="ai-automation-hero section" id="ai-automation-hero">
        <div className="container ai-automation-hero__container">
          <div className={`ai-automation-hero__copy ${copy.className}`} ref={copy.ref}>
            <span className="ai-automation-hero__eyebrow">
              <Icon svg={servicesStarSvg} />
              Services
            </span>

            <h1 className="ai-automation-hero__title">
              Your Operations.
              <br />
              Automated.
            </h1>

            <p className="ai-automation-hero__desc">
              Connect the systems your business already uses and remove the repetitive
              manual steps between them — capture, qualification, updates, follow-up,
              scheduling and reporting.
            </p>

            <div className="ai-automation-hero__actions">
              <a
                href="https://vantechsystems.tech/start-a-project"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Get my project estimate
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
              <a href="/#services" className="btn btn-outline">
                Explore all services
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
            </div>
          </div>

          <div className={`ai-automation-hero__graphic ${graphic.className}`} ref={graphic.ref}>
            <div className="ai-automation-orbit">
              <img src={orbitRing} alt="" className="ai-automation-orbit__ring" />
              <img src={orbitEllipse} alt="" className="ai-automation-orbit__ellipse" />
              <img src={heroStar} alt="" className="ai-automation-orbit__star-glow" />
              <img src={heroStar} alt="" className="ai-automation-orbit__star" />

              {orbitBadges.map((item, i) => (
                <div
                  key={i}
                  className="ai-automation-orbit__anchor"
                  style={
                    {
                      animationDuration: ORBIT_DURATION,
                      animationDelay: `-${(i / orbitBadges.length) * 42}s`,
                    } as CSSProperties
                  }
                >
                  <div className="ai-automation-orbit__radius">
                    <div className="ai-automation-orbit__counter">
                      <span
                        className="ai-automation-orbit__badge"
                        style={
                          {
                            backgroundImage: `url(${badgeCircle})`,
                            '--badge-size': item.size,
                          } as CSSProperties
                        }
                      >
                        <Icon svg={item.svg} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-automation-friction section">
        <img src={bottomSphere} alt="" className="ai-automation-friction__sphere" loading="lazy" />
        <div className="container ai-automation-friction__row">
          <div className={`ai-automation-friction__copy ${operations.className}`} ref={operations.ref}>
            <h2 className="ai-automation-friction__title">Where operational time disappears</h2>
            <p className="ai-automation-friction__desc">
              Most teams do not lose time on the work itself. They lose it moving
              information between tools, re-typing the same details and remembering to
              follow up.
            </p>
          </div>

          <div
            className={`ai-automation-friction__list ${frictionReveal.className}`}
            ref={frictionReveal.ref}
          >
            {frictionPoints.map((item) => (
              <div className="ai-automation-friction-item" key={item.number}>
                <span className="ai-automation-friction-item__number">{item.number}</span>
                <p className="ai-automation-friction-item__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-automation-solution section">
        <div className="container ai-automation-solution__row">
          <div className={`ai-automation-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="ai-automation-solution__title">Workflows that run without supervision</h2>
            <p className="ai-automation-solution__desc">
              We map the process as it actually happens, then rebuild it as connected
              workflows: information is captured once, qualified, routed to the right
              system, and followed up automatically — with a clear log of what ran and
              what needs a person.
            </p>
          </div>

          <div className={`ai-automation-solution__graphic ${solutionGraphic.className}`} ref={solutionGraphic.ref}>
            <img src={solutionStarBgLines} alt="" className="ai-automation-solution__bg-lines" />
            {solutionParts.map((part, i) => (
              <img
                key={i}
                src={part.src}
                alt=""
                loading="lazy"
                className={`ai-automation-solution__part ai-automation-solution__part--from-${part.dir}`}
                style={{ left: `${part.left}%`, top: `${part.top}%`, width: `${part.width}%` } as CSSProperties}
              />
            ))}
            <img src={solutionStar} alt="" className="ai-automation-solution__star" />
          </div>
        </div>
      </section>

      <section className="ai-automation-build section" id="what-we-automate">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="ai-automation-h2">What we Automate</h2>
          </div>

          <div className={`ai-automation-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {offeringCards.map((card) => (
              <div className="ai-automation-card ai-automation-build-card" key={card.title}>
                <div className="ai-automation-build-card__glow" />
                <div className="ai-automation-build-card__head">
                  <h3 className="ai-automation-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="ai-automation-build-card__badge" loading="lazy" />
                </div>
                <p className="ai-automation-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-automation-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="ai-automation-h2">Capabilities</h2>
          </div>

          <div className={`ai-automation-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="ai-automation-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="ai-automation-pill" key={label}>
                  <span className="ai-automation-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="ai-automation-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="ai-automation-pill" key={label}>
                  <span className="ai-automation-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-automation-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="ai-automation-h2">Use Cases</h2>
          </div>

          <div className={`ai-automation-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="ai-automation-card ai-automation-usecase-card" key={item.title}>
                <h3 className="ai-automation-usecase-card__title">{item.title}</h3>
                <hr className="ai-automation-usecase-card__divider" />
                <p className="ai-automation-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-automation-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="ai-automation-h1-lg ai-automation-h1-lg--center">Workflow architecture</h2>
            <p className="ai-automation-section-copy">
              Automation is only useful when it is observable. Every workflow we build
              records what ran, what failed and what a person still needs to decide.
            </p>
          </div>

          <div style={{ position: 'relative' }} ref={architectureDivider.ref}>
            <hr className={`ai-automation-architecture__divider ${architectureDivider.className}`} />
            <span className="ai-automation-architecture__divider-dot" />
          </div>

          <div className={`ai-automation-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="ai-automation-timeline-step" key={step.number}>
                <span className="ai-automation-timeline-step__badge">{step.number}</span>
                <h3 className="ai-automation-timeline-step__title">{step.title}</h3>
                <div className="ai-automation-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="ai-automation-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="ai-automation-timeline-tag" key={tag}>
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

      <section className="ai-automation-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="ai-automation-h2">Implementation process</h2>
          </div>

          <div className={`ai-automation-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="ai-automation-card ai-automation-card--flat ai-automation-process2-card" key={card.title}>
                <div className="ai-automation-process2-card__body">
                  <h3 className="ai-automation-process2-card__title">{card.title}</h3>
                  <p className="ai-automation-process2-card__desc">{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="ai-automation-process2-card__badge" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-automation-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="ai-automation-h1-lg ai-automation-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className={`ai-automation-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="ai-automation-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="ai-automation-integration-connector" aria-hidden="true">
                      <span className="ai-automation-integration-connector__line" />
                      <span className="ai-automation-integration-connector__diamond-outer" />
                      <span className="ai-automation-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="ai-automation-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="ai-automation-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="ai-automation-integration-connector" aria-hidden="true">
                      <span className="ai-automation-integration-connector__line" />
                      <span className="ai-automation-integration-connector__diamond-outer" />
                      <span className="ai-automation-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="ai-automation-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ai-automation-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="ai-automation-h2">Why Van Tech Systems</h2>
          </div>

          <div className={`ai-automation-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card, i) => (
              <div className="ai-automation-card ai-automation-card--flat ai-automation-why-card" key={`${card.title}-${i}`}>
                <img src={card.icon} alt="" className="ai-automation-why-card__badge" loading="lazy" />
                <h3 className="ai-automation-why-card__title">{card.title}</h3>
                <p className="ai-automation-why-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-automation-pricing-cta section">
        <div className="container">
          <div className={`ai-automation-pricing-cta__card ${pricingCta.className}`} ref={pricingCta.ref}>
            <img src={pricingGlowOrb} alt="" className="ai-automation-pricing-cta__glow" loading="lazy" />
            <div className="ai-automation-pricing-cta__copy">
              <h2 className="ai-automation-pricing-cta__title">Starting at $1,500/month</h2>
              <p className="ai-automation-pricing-cta__desc">
                Starting prices are planning benchmarks. Final pricing depends on scope,
                architecture, integrations and technical requirements.
              </p>
            </div>
            <a
              href="https://vantechsystems.tech/start-a-project"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
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
