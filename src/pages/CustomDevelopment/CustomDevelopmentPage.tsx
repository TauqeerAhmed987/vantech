import { Fragment, useEffect } from 'react';
import './custom-development.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import paymentsSvg from '../../assets/icons/fluent-payment-24-filled.svg?raw';
import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import storageSvg from '../../assets/icons/bi-database-fill.svg?raw';
import identityPlatformSvg from '../../assets/icons/material-symbols-light-identity-platform-rounded.svg?raw';
import toolsSvg from '../../assets/icons/bi-tools.svg?raw';
import restApiSvg from '../../assets/icons/dashicons-rest-api.svg?raw';

import heroBracket from '../../assets/images/custom-development/figma/hero-graphic-glow.png';
import solutionIllustration from '../../assets/images/custom-development/figma/solution-illustration.png';

import buildIconOperations from '../../assets/images/custom-development/figma/build-icon-operations.png';
import buildIconTeam from '../../assets/images/custom-development/figma/build-icon-team.png';
import buildIconDocument from '../../assets/images/custom-development/figma/build-icon-document.png';
import buildIconData from '../../assets/images/custom-development/figma/build-icon-data.png';
import buildIconFinance from '../../assets/images/custom-development/figma/build-icon-finance.png';
import buildIconIntegrations from '../../assets/images/custom-development/figma/build-icon-integrations.png';

import processIconDiscover from '../../assets/images/custom-development/figma/process-icon-discover.png';
import processIconArchitect from '../../assets/images/custom-development/figma/process-icon-architect.png';
import processIconDesign from '../../assets/images/custom-development/figma/process-icon-design.png';
import processIconBuild from '../../assets/images/custom-development/figma/process-icon-build.png';
import processIconTest from '../../assets/images/custom-development/figma/process-icon-test.png';
import processIconAdopt from '../../assets/images/custom-development/figma/process-icon-adopt.png';

import whyIconProcess from '../../assets/images/custom-development/figma/why-icon-process.png';
import whyIconDocumented from '../../assets/images/custom-development/figma/why-icon-documented.png';
import whyIconEvolve from '../../assets/images/custom-development/figma/why-icon-evolve.png';

import pricingGlowOrb from '../../assets/images/custom-development/figma/pricing-glow-orb.png';

const problems = [
  'Core operations depend on spreadsheets nobody can safely change.',
  'Teams re-enter the same information into several tools.',
  'Reporting requires manual assembly before every meeting.',
  'Generic software cannot express how the business actually works.',
];

const buildCards = [
  {
    icon: buildIconOperations,
    title: 'Operations platforms',
    desc: 'The core system your organization runs on daily.',
    descWidth: 298,
  },
  {
    icon: buildIconTeam,
    title: 'Team and Permissions',
    desc: 'Roles, assignments and accountability across departments.',
    descWidth: 340,
  },
  {
    icon: buildIconDocument,
    title: 'Document Workflows',
    desc: 'Generation, approval, storage and retrieval with an audit trail.',
    descWidth: 363,
  },
  {
    icon: buildIconData,
    title: 'Data and Reporting',
    desc: 'One source of truth with dashboards built on it.',
    descWidth: 317,
  },
  {
    icon: buildIconFinance,
    title: 'Finance Operations',
    desc: 'Quotes, invoicing status and financial reporting workflows.',
    descWidth: 341,
  },
  {
    icon: buildIconIntegrations,
    title: 'Integrations',
    desc: 'Connections to the tools that remain part of the operation.',
    descWidth: 318,
  },
];

const capabilityRow1 = [
  'Business process modelling',
  'Custom data architecture',
  'Workflow automation',
  'Document management',
  'Role-based permissions',
];

const capabilityRow2 = [
  'Reporting and dashboards',
  'Audit trails',
  'AI where it fits',
  'System integrations',
  'Security review',
];

const useCases = [
  {
    title: 'Multi-department operations',
    desc: 'One platform coordinating work across teams.',
  },
  {
    title: 'Productizing a service',
    desc: 'Turning a delivered service into recurring software revenue.',
  },
  {
    title: 'Internal tool to product',
    desc: 'Extending a working internal system for external customers.',
  },
  {
    title: 'Platform modernization',
    desc: 'Rebuilding an ageing product on a maintainable architecture.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Tenants', tags: [['Organizations'], ['Members'], ['Roles'], ['Invitations']] },
  { number: '02', title: 'Platform', tags: [['Authentication'], ['Isolation policies'], ['API'], ['Webhooks']] },
  { number: '03', title: 'Commercial', tags: [['Plans'], ['Subscriptions'], ['Payments'], ['Usage']] },
  { number: '04', title: 'Data', tags: [['Database'], ['Storage', 'Analytics'], ['Audit log']] },
  { number: '05', title: 'Operations', tags: [['Admin console'], ['Monitoring'], ['Deployment'], ['Support tooling']] },
];

const processCards = [
  {
    icon: processIconDiscover,
    title: 'Discover',
    desc: 'Departments, processes, documents and reporting requirements.',
    descWidth: 228,
  },
  {
    icon: processIconArchitect,
    title: 'Architect',
    desc: 'Data model, permissions, integrations and infrastructure.',
    descWidth: 204,
  },
  {
    icon: processIconDesign,
    title: 'Design',
    desc: 'Interfaces for each role that will use the platform.',
    descWidth: 240,
  },
  {
    icon: processIconBuild,
    title: 'Build',
    desc: 'Module-by-module development with review at each stage.',
    descWidth: 217,
  },
  {
    icon: processIconTest,
    title: 'Test',
    desc: 'Process testing, permissions, security and performance.',
    descWidth: 244,
  },
  {
    icon: processIconAdopt,
    title: 'Adopt',
    desc: 'Migration, training, rollout and continued improvement.',
    descWidth: 254,
  },
];

const integrations = [
  { icon: paymentsSvg, label: 'Accounting' },
  { icon: funnelSvg, label: 'CRM' },
  { icon: paymentsSvg, label: 'Payments' },
  { icon: emailSvg, label: 'Email' },
  { icon: storageSvg, label: 'Storage' },
  { icon: identityPlatformSvg, label: 'Identity providers' },
  { icon: toolsSvg, label: 'Reporting tools' },
  { icon: restApiSvg, label: 'Internal APIs' },
];

const whyCards = [
  {
    icon: whyIconProcess,
    title: 'Built from your process',
    desc: "The platform reflects your operation instead of a vendor's assumptions.",
    descWidth: 380,
  },
  {
    icon: whyIconDocumented,
    title: 'Documented architecture',
    desc: 'Structure, decisions and data model are written down.',
    descWidth: 366,
  },
  {
    icon: whyIconEvolve,
    title: 'Room to evolve',
    desc: 'New departments, modules and integrations fit the same foundation.',
    descWidth: 390,
  },
];

const integrationsRow1 = integrations.slice(0, 5);
const integrationsRow2 = integrations.slice(5);

export default function CustomDevelopmentPage() {
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

  return (
    <main className="customdev-page">
      <section className="customdev-hero section">
        <div className="container">
          <div className="row">
            <div className={`customdev-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="customdev-hero__badge">
                <Icon svg={servicesStarSvg} />
                Services
              </span>
              <h1 className="customdev-hero__title">
                Software Built Around
                <br />
                How Your Business Works.
              </h1>
              <p className="customdev-hero__desc">
                For organizations that have outgrown spreadsheets, disconnected tools, manual
                workflows, generic SaaS and legacy processes.
              </p>
              <div className="customdev-hero__actions">
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

            <div className="customdev-hero__graphic" aria-hidden="true">
              <img src={heroBracket} alt="" className="customdev-hero__bracket" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="customdev-disappoint section">
        <div className="container customdev-disappoint__row">
          <div className={`customdev-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="customdev-h1-lg">Outgrowing The Tools You Started With</h2>
            <p className="customdev-p-lg">
              The systems that carried a business through its first phase often become the
              reason it cannot move faster in the next one.
            </p>
          </div>

          <ul className={`customdev-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="customdev-disappoint__item" key={text}>
                <span className="customdev-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="customdev-disappoint__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="customdev-solution section">
        <div className="container customdev-solution__row">
          <div
            className={`customdev-solution__graphic ${solutionGraphic.className}`}
            ref={solutionGraphic.ref}
          >
            <img src={solutionIllustration} alt="" loading="lazy" />
          </div>

          <div className={`customdev-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="customdev-solution__title">One Platform Designed Around Your Operation</h2>
            <p className="customdev-solution__desc">
              We study how the organization runs — its entities, documents, approvals and
              reporting — and build a platform that expresses it directly, connecting to the
              systems worth keeping and automating the steps that do not need a person.
            </p>
          </div>
        </div>
      </section>

      <section className="customdev-build section" id="offerings">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="customdev-h2">What we build</h2>
          </div>

          <div className={`customdev-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="customdev-card customdev-build-card" key={card.title}>
                <div className="customdev-build-card__glow" />
                <div className="customdev-build-card__head">
                  <h3 className="customdev-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="customdev-build-card__badge" loading="lazy" />
                </div>
                <p className="customdev-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="customdev-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="customdev-h2">Capabilities</h2>
          </div>

          <div className={`customdev-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="customdev-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="customdev-pill" key={label}>
                  <span className="customdev-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="customdev-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="customdev-pill" key={label}>
                  <span className="customdev-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="customdev-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="customdev-h2">Use Cases</h2>
          </div>

          <div className={`customdev-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="customdev-card customdev-usecase-card" key={item.title}>
                <h3 className="customdev-usecase-card__title">{item.title}</h3>
                <hr className="customdev-usecase-card__divider" />
                <p className="customdev-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="customdev-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="customdev-h1-lg customdev-h1-lg--center">Platform architecture</h2>
            <p className="customdev-section-copy">
              Custom does not mean improvised. The platform is built on a documented
              architecture your team can maintain and extend.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="customdev-architecture__divider" />
            <span className="customdev-architecture__divider-dot" />
          </div>

          <div className={`customdev-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="customdev-timeline-step" key={step.number}>
                <span className="customdev-timeline-step__badge">{step.number}</span>
                <h3 className="customdev-timeline-step__title">{step.title}</h3>
                <div className="customdev-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="customdev-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="customdev-timeline-tag" key={tag}>
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

      <section className="customdev-process2 section">
        <div className="container">
          <div className={`section-head ${processHead.className}`} ref={processHead.ref}>
            <h2 className="customdev-h2">Development Process</h2>
          </div>

          <div className={`customdev-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="customdev-card customdev-card--flat customdev-process2-card" key={card.title}>
                <div className="customdev-process2-card__body">
                  <h3 className="customdev-process2-card__title">{card.title}</h3>
                  <p className="customdev-process2-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="customdev-process2-card__badge" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="customdev-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="customdev-h1-lg customdev-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className={`customdev-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="customdev-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="customdev-integration-connector">
                      <span className="customdev-integration-connector__line" />
                      <span className="customdev-integration-connector__diamond-outer" />
                      <span className="customdev-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="customdev-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="customdev-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="customdev-integration-connector">
                      <span className="customdev-integration-connector__line" />
                      <span className="customdev-integration-connector__diamond-outer" />
                      <span className="customdev-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="customdev-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="customdev-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="customdev-h2">Why Van Tech Systems</h2>
          </div>

          <div className={`customdev-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="customdev-card customdev-card--flat customdev-why-card" key={card.title}>
                <img src={card.icon} alt="" className="customdev-badge-img customdev-why-card__badge" />
                <h3 className="customdev-why-card__title">{card.title}</h3>
                <p className="customdev-why-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="customdev-pricing-cta section">
        <div className="container">
          <div className="customdev-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="customdev-pricing-cta__glow" loading="lazy" />
            <div className="customdev-pricing-cta__copy">
              <h2 className="customdev-pricing-cta__title">Get a Custom Quote</h2>
              <p className="customdev-pricing-cta__desc">
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
