import { Fragment, useEffect } from 'react';
import './web-applications.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';

import accountBalanceSvg from '../../assets/icons/ic-round-account-balance.svg?raw';
import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import emailSvg from '../../assets/icons/dashicons-email.svg?raw';
import calendarSvg from '../../assets/icons/ant-design-calendar-filled.svg?raw';
import databaseSvg from '../../assets/icons/ant-design-database-filled.svg?raw';
import webhookSvg from '../../assets/icons/carbon-webhook.svg?raw';
import restApiSvg from '../../assets/icons/dashicons-rest-api.svg?raw';

import heroWebAppScreen from '../../assets/images/web-applications/figma/hero-web-app-screen.png';
import heroWebAppIcon from '../../assets/images/web-applications/figma/hero-web-app-icon.png';
import webApplicationsIcon from '../../assets/images/web-applications/figma/web-applicationsicon.png';
import solutionIllustration from '../../assets/images/web-applications/figma/solution-illustration.png';
import pricingGlowOrb from '../../assets/images/web-applications/figma/pricing-glow-orb.png';

import buildIconCrm from '../../assets/images/web-applications/figma/build-icon-crm.png';
import buildIconBooking from '../../assets/images/web-applications/figma/build-icon-booking.png';
import buildIconClientPortals from '../../assets/images/web-applications/figma/build-icon-client-portals.png';
import buildIconInternalTools from '../../assets/images/web-applications/figma/build-icon-internal-tools.png';
import buildIconOperations from '../../assets/images/web-applications/figma/build-icon-operations.png';
import buildIconWorkflow from '../../assets/images/web-applications/figma/build-icon-workflow.png';

import processIconDiscover from '../../assets/images/web-applications/figma/process-icon-discover.png';
import processIconArchitect from '../../assets/images/web-applications/figma/process-icon-architect.png';
import processIconDesign from '../../assets/images/web-applications/figma/process-icon-design.png';
import processIconBuild from '../../assets/images/web-applications/figma/process-icon-build.png';
import processIconTest from '../../assets/images/web-applications/figma/process-icon-test.png';
import processIconLaunch from '../../assets/images/web-applications/figma/process-icon-launch.png';

import whyIconModelled from '../../assets/images/web-applications/figma/why-icon-modelled.png';
import whyIconPermissions from '../../assets/images/web-applications/figma/why-icon-permissions.png';
import whyIconExtend from '../../assets/images/web-applications/figma/why-icon-extend.png';

const problems = [
  'Critical processes run in spreadsheets beside the official system.',
  'Data is duplicated across tools that do not agree.',
  'Permissions are too coarse for how the team actually works.',
  'License costs grow while the fit gets worse.',
];

const buildCards = [
  {
    icon: buildIconCrm,
    title: 'CRM Platforms',
    desc: 'Pipelines and customer records designed around your sales process.',
    descWidth: 345,
  },
  {
    icon: buildIconBooking,
    title: 'Booking Platforms',
    desc: 'Availability, scheduling and confirmation workflows.',
  },
  {
    icon: buildIconClientPortals,
    title: 'Client portals',
    desc: 'Secure external access to documents, status and communication.',
    descWidth: 320,
  },
  {
    icon: buildIconInternalTools,
    title: 'Internal Tools',
    desc: 'Admin interfaces that replace manual spreadsheet work.',
    descWidth: 314,
  },
  {
    icon: buildIconOperations,
    title: 'Operations Systems',
    desc: 'The day-to-day tooling your team runs the business on.',
    descWidth: 316,
  },
  {
    icon: buildIconWorkflow,
    title: 'Workflow Systems',
    desc: 'Multi-step approvals, assignments and status tracking.',
    descWidth: 324,
  },
];

const capabilityRow1 = [
  'Data modelling',
  'Role-based access control',
  'Workflow engines',
  'Document handling',
  'Reporting and dashboards',
  'Audit trails',
];

const capabilityRow2 = ['Notifications', 'API development', 'Third-party integrations', 'Deployment and monitoring'];

const useCases = [
  {
    title: 'Replacing spreadsheets',
    desc: 'A single source of truth with permissions and history.',
  },
  {
    title: 'Consolidating tools',
    desc: 'One system where several disconnected ones used to be.',
  },
  {
    title: 'Serving clients online',
    desc: 'A portal that reduces status emails and phone calls.',
  },
  {
    title: 'Scaling a manual process',
    desc: 'Structured workflows that survive higher volume.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Frontend', tags: [['Responsive UI'], ['Dashboards'], ['Forms'], ['Reporting']] },
  { number: '02', title: 'API', tags: [['Endpoints'], ['Validation'], ['Rate limits']] },
  { number: '03', title: 'Business logic', tags: [['Workflows', 'Rules'], ['Automation', 'Automation']] },
  { number: '04', title: 'Operations', tags: [['Deployment'], ['Monitoring', 'Analytics']] },
  { number: '05', title: 'Platform', tags: [['Authentication'], ['Monitoring'], ['Deployment', 'Integrations']] },
];

const processCards = [
  {
    icon: processIconDiscover,
    title: 'Discover',
    desc: 'Users, roles, workflows and the systems already in place.',
  },
  {
    icon: processIconArchitect,
    title: 'Architect',
    desc: 'Data model, permissions, integrations and infrastructure.',
  },
  {
    icon: processIconDesign,
    title: 'Design',
    desc: 'Interface design for the roles that will use it daily.',
  },
  {
    icon: processIconBuild,
    title: 'Build',
    desc: 'Iterative development with review at each increment.',
  },
  {
    icon: processIconTest,
    title: 'Test',
    desc: 'Functional QA, permission testing and security review.',
  },
  {
    icon: processIconLaunch,
    title: 'Launch',
    desc: 'Deployment, data migration where needed, training and handover.',
  },
];

const integrationsRow1 = [
  { icon: funnelSvg, label: 'CRM' },
  { icon: accountBalanceSvg, label: 'Accounting' },
  { icon: paymentsSvg, label: 'Payments' },
  { icon: emailSvg, label: 'Email' },
  { icon: calendarSvg, label: 'Calendars' },
];

const integrationsRow2 = [
  { icon: databaseSvg, label: 'Storage' },
  { icon: webhookSvg, label: 'Identity providers' },
  { icon: restApiSvg, label: 'Internal APIs' },
];

const whyCards = [
  {
    icon: whyIconModelled,
    title: 'Modelled on your operation',
    desc: 'The data structure reflects how your business actually works.',
  },
  {
    icon: whyIconPermissions,
    title: 'Permissions taken seriously',
    desc: 'Access control is designed with the application, not bolted on.',
  },
  {
    icon: whyIconExtend,
    title: 'Built to extend',
    desc: 'New modules and integrations fit the existing architecture.',
  },
];

export default function WebApplicationsPage() {
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
    <main className="webapps-page">
      <section className="webapps-hero section">
        <div className="container">
          <div className="webapps-hero__row">
            <div className={`webapps-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="webapps-hero__badge">
                <Icon svg={servicesStarSvg} />
                Services
              </span>
              <h1 className="webapps-hero__title">Custom Software. Built Around Your Business.</h1>
              <p className="webapps-hero__desc">
                We do not force your business into generic software. We design applications
                around your workflows, users, operations and growth plans.
              </p>
              <div className="webapps-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  Get my project estimate
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#build" className="btn btn-outline">
                  Explore all services
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="webapps-hero__graphic" aria-hidden="true">
              <img src={webApplicationsIcon} alt="" className="webapps-hero__code-badge" />
              <img src={heroWebAppScreen} alt="" className="webapps-hero__screen" loading="eager" />
              <img src={heroWebAppIcon} alt="" className="webapps-hero__icon-float" />
            </div>
          </div>
        </div>
      </section>

      <section className="webapps-disappoint section">
        <div className="container webapps-disappoint__row">
          <div className={`webapps-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="webapps-h1-lg">When Generic Software Becomes The Constraint</h2>
            <p className="webapps-p-lg">
              Off-the-shelf tools work until your process differs from the product&apos;s
              assumptions. Then the workarounds become the operation.
            </p>
          </div>

          <ul className={`webapps-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="webapps-disappoint__item" key={text}>
                <span className="webapps-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="webapps-disappoint__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="webapps-solution section">
        <div className="container webapps-solution__row">
          <div
            className={`webapps-solution__graphic ${solutionGraphic.className}`}
            ref={solutionGraphic.ref}
          >
            <img src={solutionIllustration} alt="" loading="lazy" />
          </div>

          <div className={`webapps-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="webapps-solution__title">An Application Shaped By Your Operation</h2>
            <p className="webapps-solution__desc">
              We model your entities, roles and workflows first, then build the application
              around them: a real data layer, granular permissions, the screens your team
              needs, and integrations with the systems you keep.
            </p>
          </div>
        </div>
      </section>

      <section className="webapps-build section" id="build">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="webapps-h2">What we build</h2>
          </div>

          <div className={`webapps-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="webapps-card webapps-build-card" key={card.title}>
                <div className="webapps-build-card__glow" />
                <div className="webapps-build-card__head">
                  <h3 className="webapps-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="webapps-build-card__badge" loading="lazy" />
                </div>
                <p className="webapps-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="webapps-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="webapps-h2">Capabilities</h2>
          </div>

          <div className={`webapps-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="webapps-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="webapps-pill" key={label}>
                  <span className="webapps-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="webapps-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="webapps-pill" key={label}>
                  <span className="webapps-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="webapps-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="webapps-h2">Use Cases</h2>
          </div>

          <div className={`webapps-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="webapps-card webapps-usecase-card" key={item.title}>
                <h3 className="webapps-usecase-card__title">{item.title}</h3>
                <hr className="webapps-usecase-card__divider" />
                <p className="webapps-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="webapps-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="webapps-h1-lg webapps-h1-lg--center">Application Architecture</h2>
            <p className="webapps-section-copy">
              Even a first release is a full system. We keep it small, but structured — so
              the second version is an extension, not a rebuild.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="webapps-architecture__divider" />
            <span className="webapps-architecture__divider-dot" />
          </div>

          <div className={`webapps-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="webapps-timeline-step" key={step.number}>
                <span className="webapps-timeline-step__badge">{step.number}</span>
                <h3 className="webapps-timeline-step__title">{step.title}</h3>
                <div className="webapps-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="webapps-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="webapps-timeline-tag" key={tag}>
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

      <section className="webapps-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="webapps-h2">Development Process</h2>
          </div>

          <div className={`webapps-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="webapps-card webapps-card--flat webapps-process2-card" key={card.title}>
                <div className="webapps-process2-card__body">
                  <h3 className="webapps-process2-card__title">{card.title}</h3>
                  <p className="webapps-process2-card__desc">{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="webapps-process2-card__badge" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="webapps-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="webapps-h1-lg webapps-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className={`webapps-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="webapps-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="webapps-integration-connector" aria-hidden="true">
                      <span className="webapps-integration-connector__line" />
                      <span className="webapps-integration-connector__diamond-outer" />
                      <span className="webapps-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="webapps-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="webapps-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="webapps-integration-connector" aria-hidden="true">
                      <span className="webapps-integration-connector__line" />
                      <span className="webapps-integration-connector__diamond-outer" />
                      <span className="webapps-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="webapps-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="webapps-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="webapps-h2">Why Van Tech Systems</h2>
          </div>

          <div className={`webapps-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="webapps-card webapps-card--flat webapps-why-card" key={card.title}>
                <img src={card.icon} alt="" className="webapps-badge-img webapps-why-card__badge" />
                <h3 className="webapps-why-card__title">{card.title}</h3>
                <p className="webapps-why-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="webapps-pricing-cta section">
        <div className="container">
          <div className="webapps-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="webapps-pricing-cta__glow" loading="lazy" />
            <div className="webapps-pricing-cta__copy">
              <h2 className="webapps-pricing-cta__title">Starting at $5,000/month</h2>
              <p className="webapps-pricing-cta__desc">
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
