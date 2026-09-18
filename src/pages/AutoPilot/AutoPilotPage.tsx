import { Fragment, useEffect } from 'react';
import './auto-pilot.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import phoneSvg from '../../assets/icons/solar-phone-calling-rounded-bold.svg?raw';
import whatsappSvg from '../../assets/icons/basil-whatsapp-solid.svg?raw';
import smsSvg from '../../assets/icons/mdi-message-processing.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import calendarSvg from '../../assets/icons/ant-design-calendar-filled.svg?raw';
import formSvg from '../../assets/icons/fluent-form-32-filled.svg?raw';
import personSupportSvg from '../../assets/icons/fluent-person-support-28-filled.svg?raw';
import databaseSvg from '../../assets/icons/bi-database-fill.svg?raw';

import heroPhoto from '../../assets/images/auto-pilot/figma/hero-hand.png';
import heroStar from '../../assets/images/auto-pilot/figma/hero-star.png';
import solutionMoon from '../../assets/images/orb-sphere.webp';
import solutionStar from '../../assets/images/banner-star.svg';
import solutionRipple from '../../assets/images/auto-pilot/figma/solution-ripple.png';
import pricingGlowOrb from '../../assets/images/auto-pilot/figma/pricing-glow-orb.png';

import includedIconConnectedSystems from '../../assets/images/auto-pilot/figma/included-icon-connected-systems.png';
import includedIconAiHandling from '../../assets/images/auto-pilot/figma/included-icon-ai-handling.png';
import includedIconMonitoring from '../../assets/images/auto-pilot/figma/included-icon-monitoring.png';
import includedIconMaintenance from '../../assets/images/auto-pilot/figma/included-icon-maintenance.png';
import includedIconOptimization from '../../assets/images/auto-pilot/figma/included-icon-optimization.png';
import includedIconEvaluation from '../../assets/images/auto-pilot/figma/included-icon-evaluation.png';

import processIconAssess from '../../assets/images/auto-pilot/figma/process-icon-assess.png';
import processIconDesign from '../../assets/images/auto-pilot/figma/process-icon-design.png';
import processIconDeploy from '../../assets/images/auto-pilot/figma/process-icon-deploy.png';
import processIconOperate from '../../assets/images/auto-pilot/figma/process-icon-operate.png';
import processIconOptimize from '../../assets/images/auto-pilot/figma/process-icon-optimize.png';

import whyIconGrounded from '../../assets/images/auto-pilot/figma/why-icon-grounded.png';
import whyIconMeasured from '../../assets/images/auto-pilot/figma/why-icon-measured.png';
import whyIconScoped from '../../assets/images/auto-pilot/figma/why-icon-scoped.png';

const problems = [
  'Nobody notices when a workflow silently fails.',
  'Integrations break after a platform update.',
  'Processes change but the automation does not.',
  'Internal teams have no capacity to maintain it.',
];

const includedCards = [
  {
    icon: includedIconConnectedSystems,
    title: 'Connected Systems',
    desc: 'One automation layer across the tools your operations depend on.',
    descWidth: 317,
  },
  {
    icon: includedIconAiHandling,
    title: 'AI handling',
    desc: 'Qualification, reception and response where it adds real value.',
    descWidth: 313,
  },
  {
    icon: includedIconMonitoring,
    title: 'Monitoring',
    desc: 'Continuous checks with alerting when something stops working.',
    descWidth: 319,
  },
  {
    icon: includedIconMaintenance,
    title: 'Maintenance',
    desc: 'Fixes and adjustments when platforms or processes change.',
    descWidth: 345,
  },
  {
    icon: includedIconOptimization,
    title: 'Optimization',
    desc: 'Ongoing refinement of logic, timing and routing.',
  },
  {
    icon: includedIconEvaluation,
    title: 'Evaluation',
    desc: 'Test sets and review cycles that track answer quality over time.',
    descWidth: 313,
  },
];

const capabilityRow1 = [
  'Managed workflows',
  'AI reception',
  'Lead capture',
  'CRM synchronization',
  'Automated follow-up',
  'Scheduling',
];

const capabilityRow2 = ['Messaging', 'Operational reporting', 'Monitoring and alerting', 'Continuous improvement'];

const useCases = [
  {
    title: 'Teams without internal ops engineering',
    desc: 'Automation maintained by an external technology team.',
  },
  {
    title: 'High-volume inbound',
    desc: 'Consistent handling of enquiries as volume grows.',
  },
  {
    title: 'Multi-tool operations',
    desc: 'A single layer keeping separate systems in step.',
  },
  {
    title: 'Post-project continuity',
    desc: 'Ongoing ownership after an automation build.',
  },
];

const hubColumns = [
  { number: '01', title: 'Inputs', tags: [['Website', 'Phone'], ['Email', 'Forms'], ['Messaging']] },
  { number: '02', title: 'Autopilot layer', tags: [['Routing', 'AI handling'], ['Workflows']] },
  { number: '03', title: 'Systems', tags: [['CRM', 'Calendars'], ['Support', 'Databases']] },
  { number: '04', title: 'Management', tags: [['Monitoring', 'Alerting'], ['Optimization', 'Reporting']] },
];

const processCards = [
  {
    icon: processIconAssess,
    title: 'Assess',
    desc: 'Review current operations, tools and volumes.',
  },
  {
    icon: processIconDesign,
    title: 'Design',
    desc: 'Define the automation layer and the reporting you need.',
  },
  {
    icon: processIconDeploy,
    title: 'Deploy',
    desc: 'Implement workflows and connect the systems involved.',
  },
  {
    icon: processIconOperate,
    title: 'Operate',
    desc: 'Monitor and maintain everything to keep operations running smoothly. Respond quickly whenever an issue or request needs attention.',
  },
  {
    icon: processIconOptimize,
    title: 'Optimize',
    desc: 'Review performance regularly to ensure everything works effectively. Refine the logic based on results and changing requirements.',
  },
];

const integrationsRow1 = [
  { icon: funnelSvg, label: 'CRM' },
  { icon: phoneSvg, label: 'Telephony' },
  { icon: whatsappSvg, label: 'WhatsApp' },
  { icon: smsSvg, label: 'SMS' },
  { icon: emailSvg, label: 'Email' },
];

const integrationsRow2 = [
  { icon: calendarSvg, label: 'Calendars' },
  { icon: formSvg, label: 'Forms' },
  { icon: personSupportSvg, label: 'Support desks' },
  { icon: databaseSvg, label: 'Databases' },
];

const whyCards = [
  {
    icon: whyIconGrounded,
    title: 'Grounded and traceable',
    desc: 'Answers reference the sources they came from.',
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

export default function AutoPilotPage() {
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
  const problemHead = useReveal('left');
  const problemList = useReveal<HTMLUListElement>('right');
  const solutionCopy = useReveal('right');
  const includedHead = useReveal('up');
  const capabilitiesHead = useReveal('up');
  const usecasesHead = useReveal('up');
  const hubHead = useReveal('up');
  const processHead = useReveal('up');
  const integrationsHead = useReveal('up');
  const whyHead = useReveal('up');
  const includedGrid = useReveal('up');
  const capsRows = useReveal('up');
  const usecasesGrid = useReveal('up');
  const hubColumnsGrid = useReveal('up');
  const processGrid1 = useReveal('up');
  const processGrid2 = useReveal('up');
  const integrationsGrid = useReveal('up');
  const whyGrid = useReveal('up');

  return (
    <main className="autopilot-page">
      <section className="autopilot-hero section">
        <div className="container">
          <div className="row">
            <div className={`autopilot-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="autopilot-hero__badge">
                <Icon svg={servicesStarSvg} />
                Services
              </span>
              <h1 className="autopilot-hero__title">Your Operations, Running on Autopilot.</h1>
              <p className="autopilot-hero__desc">
                Managed automation infrastructure that combines AI, connected systems and ongoing
                optimization — operated and maintained as a service instead of handed over and
                forgotten.
              </p>
              <div className="autopilot-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  Get my project estimate
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#included" className="btn btn-outline">
                  Explore all services
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="autopilot-hero__graphic" aria-hidden="true">
              <div className="autopilot-hero__photo-wrap">
                <img src={heroPhoto} alt="" className="autopilot-hero__photo" loading="eager" />
                <img src={heroStar} alt="" className="autopilot-hero__star" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="autopilot-problem section">
        <div className="container autopilot-problem__row">
          <div className={`autopilot-problem__copy ${problemHead.className}`} ref={problemHead.ref}>
            <h2 className="autopilot-h1-lg">Automation Decays Without An Owner</h2>
            <p className="autopilot-p-lg">
              Workflows break when tools change, volumes grow or processes evolve. Without someone
              responsible for them, automation quietly stops working.
            </p>
          </div>

          <ul className={`autopilot-problem__list ${problemList.className}`} ref={problemList.ref}>
            {problems.map((text, i) => (
              <li className="autopilot-problem__item" key={text}>
                <span className="autopilot-problem__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="autopilot-problem__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="autopilot-solution section">
        <div className="container autopilot-solution__row">
          <div className="autopilot-solution__graphic" aria-hidden="true">
            <div className="autopilot-solution__moon-wrap">
              <img src={solutionMoon} alt="" className="autopilot-solution__moon" loading="lazy" />
              <img src={solutionStar} alt="" className="autopilot-solution__star" loading="lazy" />
            </div>
            <img src={solutionRipple} alt="" className="autopilot-solution__ripple" loading="lazy" />
          </div>

          <div className={`autopilot-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="autopilot-solution__title">Operated Automation Infrastructure</h2>
            <p className="autopilot-solution__desc">
              Autopilot is a managed engagement: we run the automation layer connecting your
              capture, CRM, follow-up, scheduling, messaging and reporting, monitor it
              continuously, and improve it as your operations change.
            </p>
          </div>
        </div>
      </section>

      <section className="autopilot-included section" id="included">
        <div className="container">
          <div className={`section-head ${includedHead.className}`} ref={includedHead.ref}>
            <h2 className="autopilot-h2">What is included</h2>
          </div>

          <div className={`autopilot-included__grid ${includedGrid.className}`} ref={includedGrid.ref}>
            {includedCards.map((card) => (
              <div className="autopilot-card autopilot-included-card" key={card.title}>
                <div className="autopilot-included-card__glow" />
                <div className="autopilot-included-card__head">
                  <h3 className="autopilot-included-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="autopilot-included-card__badge" loading="lazy" />
                </div>
                <p className="autopilot-included-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-capabilities section" id="capabilities">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="autopilot-h2">Capabilities</h2>
          </div>

          <div className={`autopilot-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="autopilot-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="autopilot-pill" key={label}>
                  <span className="autopilot-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="autopilot-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="autopilot-pill" key={label}>
                  <span className="autopilot-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="autopilot-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="autopilot-h2">Use Cases</h2>
          </div>

          <div className={`autopilot-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="autopilot-card autopilot-usecase-card" key={item.title}>
                <h3 className="autopilot-usecase-card__title">{item.title}</h3>
                <hr className="autopilot-usecase-card__divider" />
                <p className="autopilot-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-hub section">
        <div className="container">
          <div className={`section-head ${hubHead.className}`} ref={hubHead.ref}>
            <h2 className="autopilot-h1-lg autopilot-h1-lg--center">The Operations Hub</h2>
            <p className="autopilot-section-copy">
              Autopilot sits between your channels and your systems, coordinating the work and
              reporting on it.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="autopilot-hub__divider" />
            <span className="autopilot-hub__divider-dot" />
          </div>

          <div className={`autopilot-hub__columns ${hubColumnsGrid.className}`} ref={hubColumnsGrid.ref}>
            {hubColumns.map((col) => (
              <div className="autopilot-hub-column" key={col.number}>
                <span className="autopilot-hub-column__badge">{col.number}</span>
                <h3 className="autopilot-hub-column__title">{col.title}</h3>
                <div className="autopilot-hub-column__tags">
                  {col.tags.map((row, i) => (
                    <div className="autopilot-hub-column__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="autopilot-hub-tag" key={tag}>
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

      <section className="autopilot-process section" id="process">
        <div className="container">
          <div className={`section-head ${processHead.className}`} ref={processHead.ref}>
            <h2 className="autopilot-h2">How The Engagement Works</h2>
          </div>

          <div className="autopilot-process__rows">
            <div className={`autopilot-process__grid ${processGrid1.className}`} ref={processGrid1.ref}>
              {processCards.slice(0, 3).map((card) => (
                <div className="autopilot-card autopilot-card--flat autopilot-process-card" key={card.title}>
                  <div className="autopilot-process-card__body">
                    <h3 className="autopilot-process-card__title">{card.title}</h3>
                    <p className="autopilot-process-card__desc">{card.desc}</p>
                  </div>
                  <img src={card.icon} alt="" className="autopilot-process-card__badge" />
                </div>
              ))}
            </div>
            <div className={`autopilot-process__grid autopilot-process__grid--2 ${processGrid2.className}`} ref={processGrid2.ref}>
              {processCards.slice(3).map((card) => (
                <div className="autopilot-card autopilot-card--flat autopilot-process-card" key={card.title}>
                  <div className="autopilot-process-card__body">
                    <h3 className="autopilot-process-card__title">{card.title}</h3>
                    <p className="autopilot-process-card__desc">{card.desc}</p>
                  </div>
                  <img src={card.icon} alt="" className="autopilot-process-card__badge" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="autopilot-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="autopilot-h1-lg autopilot-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className={`autopilot-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="autopilot-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="autopilot-integration-connector" aria-hidden="true">
                      <span className="autopilot-integration-connector__line" />
                      <span className="autopilot-integration-connector__diamond-outer" />
                      <span className="autopilot-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="autopilot-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="autopilot-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="autopilot-integration-connector" aria-hidden="true">
                      <span className="autopilot-integration-connector__line" />
                      <span className="autopilot-integration-connector__diamond-outer" />
                      <span className="autopilot-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="autopilot-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="autopilot-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="autopilot-h2">Why Van Tech Systems</h2>
          </div>

          <div className={`autopilot-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="autopilot-card autopilot-card--flat autopilot-why-card" key={card.title}>
                <img src={card.icon} alt="" className="autopilot-badge-img autopilot-why-card__badge" />
                <h3 className="autopilot-why-card__title">{card.title}</h3>
                <p className="autopilot-why-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-pricing-cta section">
        <div className="container">
          <div className="autopilot-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="autopilot-pricing-cta__glow" loading="lazy" />
            <div className="autopilot-pricing-cta__copy">
              <h2 className="autopilot-pricing-cta__title">Starting at $1,500/month</h2>
              <p className="autopilot-pricing-cta__desc">
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
