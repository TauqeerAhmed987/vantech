import { Fragment, useEffect } from 'react';
import './mobile-application.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import pushSvg from '../../assets/icons/famicons-push.svg?raw';
import identityPlatformSvg from '../../assets/icons/material-symbols-light-identity-platform-rounded.svg?raw';
import analyticsSvg from '../../assets/icons/clarity-analytics-solid.svg?raw';
import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import databaseSvg from '../../assets/icons/ant-design-database-filled.svg?raw';
import restApiSvg from '../../assets/icons/dashicons-rest-api.svg?raw';

import heroMockupGlow from '../../assets/images/mobile-application/figma/hero-parts/glow-badges.png';
import heroMockupPhone from '../../assets/images/mobile-application/figma/hero-parts/phone.png';
import heroMockupIcon from '../../assets/images/mobile-application/figma/hero-parts/icon-card.png';
import solutionIllustration from '../../assets/images/mobile-application/figma/solution-illustration.png';

import buildIconCustomer from '../../assets/images/mobile-application/figma/build-icon-customer.png';
import buildIconBusiness from '../../assets/images/mobile-application/figma/build-icon-business.png';
import buildIconCompanion from '../../assets/images/mobile-application/figma/build-icon-companion.png';
import buildIconBackend from '../../assets/images/mobile-application/figma/build-icon-backend.png';
import buildIconAdmin from '../../assets/images/mobile-application/figma/build-icon-admin.png';
import buildIconRelease from '../../assets/images/mobile-application/figma/build-icon-release.png';

import processIconDiscover from '../../assets/images/mobile-application/figma/process-icon-discover.png';
import processIconDesign from '../../assets/images/mobile-application/figma/process-icon-design.png';
import processIconArchitect from '../../assets/images/mobile-application/figma/process-icon-architect.png';
import processIconBuild from '../../assets/images/mobile-application/figma/process-icon-build.png';
import processIconTest from '../../assets/images/mobile-application/figma/process-icon-test.png';
import processIconLaunch from '../../assets/images/mobile-application/figma/process-icon-launch.png';

import whyIconBackend from '../../assets/images/mobile-application/figma/why-icon-backend.png';
import whyIconDesigned from '../../assets/images/mobile-application/figma/why-icon-designed.png';
import whyIconRelease from '../../assets/images/mobile-application/figma/why-icon-release.png';

import pricingGlowOrb from '../../assets/images/mobile-application/figma/pricing-glow-orb.png';

const problems = [
  'A responsive website is being used where an app is expected.',
  'No backend exists to support real accounts and data.',
  'Notifications and sessions are unreliable.',
  'Store submission requirements are discovered late.',
];

const buildCards = [
  {
    icon: buildIconCustomer,
    title: 'Customer Apps',
    desc: 'Accounts, activity, bookings, payments and notifications.',
    descWidth: 327,
  },
  {
    icon: buildIconBusiness,
    title: 'Business Apps',
    desc: 'Field and internal tools for teams working away from a desk.',
    descWidth: 343,
  },
  {
    icon: buildIconCompanion,
    title: 'Companion Apps',
    desc: 'Mobile access to an existing platform or portal.',
    descWidth: 312,
  },
  {
    icon: buildIconBackend,
    title: 'Backend Services',
    desc: 'APIs, data and authentication supporting the app.',
    descWidth: 342,
  },
  {
    icon: buildIconAdmin,
    title: 'Admin dashboard',
    desc: 'A web surface for managing users, content and operations.',
    descWidth: 289,
  },
  {
    icon: buildIconRelease,
    title: 'Release Setup',
    desc: 'Build pipelines, store preparation and versioning.',
    descWidth: 310,
  },
];

const capabilityRow1 = [
  'iOS and Android',
  'Authentication',
  'Push notifications',
  'In-app payments',
  'Offline-tolerant flows',
  'Media handling',
];

const capabilityRow2 = ['Deep linking', 'API integration', 'Analytics', 'Store release support'];

const useCases = [
  {
    title: 'Customer Engagement',
    desc: 'An app that keeps customers informed and transacting.',
  },
  {
    title: 'Field Operations',
    desc: 'Teams capturing and updating information on site.',
  },
  {
    title: 'Booking and Services',
    desc: 'Scheduling, reminders and payment in one place.',
  },
  {
    title: 'Loyalty and Accounts',
    desc: 'Profiles, history and personalized communication.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Mobile', tags: [['iOS', 'Android'], ['Offline cache'], ['Push']] },
  { number: '02', title: 'API', tags: [['Endpoints'], ['Validation', 'Versioning']] },
  { number: '03', title: 'Backend', tags: [['Business logic', 'Database'], ['Storage', 'Payments']] },
  { number: '04', title: 'Platform', tags: [['Authentication'], ['Analytics', 'Monitoring'], ['Releases']] },
];

const processCards = [
  {
    icon: processIconDiscover,
    title: 'Discover',
    desc: 'Users, platforms, core journeys and technical constraints.',
    descWidth: 253,
  },
  {
    icon: processIconDesign,
    title: 'Design',
    desc: 'Mobile interface design and prototypes for the main flows.',
    descWidth: 208,
  },
  {
    icon: processIconArchitect,
    title: 'Architect',
    desc: 'Backend, data model, authentication and notifications.',
    descWidth: 195,
  },
  {
    icon: processIconBuild,
    title: 'Build',
    desc: 'App and backend development with test builds you can install.',
    descWidth: 217,
  },
  {
    icon: processIconTest,
    title: 'Test',
    desc: 'Device testing, performance checks and release candidate QA.',
    descWidth: 229,
  },
  {
    icon: processIconLaunch,
    title: 'Release',
    desc: 'Store submission support, monitoring and post-launch fixes.',
    descWidth: 216,
  },
];

const integrationsRow1 = [
  { icon: paymentsSvg, label: 'Payments' },
  { icon: pushSvg, label: 'Push services' },
  { icon: identityPlatformSvg, label: 'Identity providers' },
  { icon: analyticsSvg, label: 'Analytics' },
];

const integrationsRow2 = [
  { icon: funnelSvg, label: 'CRM' },
  { icon: databaseSvg, label: 'Storage' },
  { icon: restApiSvg, label: 'Internal APIs' },
];

const whyCards = [
  {
    icon: whyIconBackend,
    title: 'Backend included',
    desc: 'We build the system the app depends on, not just the screens.',
  },
  {
    icon: whyIconDesigned,
    title: 'Designed for real use',
    desc: 'Sessions, notifications and errors are treated as product features.',
  },
  {
    icon: whyIconRelease,
    title: 'Release-ready',
    desc: 'Store requirements are planned into the build, not discovered at the end.',
  },
];

export default function MobileApplicationPage() {
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
    <main className="mobileapp-page">
      <section className="mobileapp-hero section">
        <div className="container">
          <div className="row">
            <div className={`mobileapp-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="mobileapp-hero__badge">
                <Icon svg={servicesStarSvg} />
                Services
              </span>
              <h1 className="mobileapp-hero__title">Your Business. In Their Hands.</h1>
              <p className="mobileapp-hero__desc">
                Production-ready mobile applications for customers and internal teams,
                backed by the APIs, authentication and cloud infrastructure that keep
                them running.
              </p>
              <div className="mobileapp-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  Get my project estimate
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#app-types" className="btn btn-outline">
                  Explore all services
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="mobileapp-hero__graphic" aria-hidden="true">
              <img
                src={heroMockupGlow}
                alt=""
                className="mobileapp-hero__mockup-part mobileapp-hero__mockup-part--glow"
              />
              <img
                src={heroMockupPhone}
                alt=""
                className="mobileapp-hero__mockup-part mobileapp-hero__mockup-part--phone"
                loading="eager"
              />
              <img
                src={heroMockupIcon}
                alt=""
                className="mobileapp-hero__mockup-part mobileapp-hero__mockup-part--icon"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mobileapp-disappoint section">
        <div className="container mobileapp-disappoint__row">
          <div className={`mobileapp-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="mobileapp-h1-lg">A Mobile App Is Not A Smaller Website</h2>
            <p className="mobileapp-p-lg">
              Off-the-shelf tools work until your process differs from the product&apos;s
              assumptions. Then the workarounds become the operation.
            </p>
          </div>

          <ul className={`mobileapp-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="mobileapp-disappoint__item" key={text}>
                <span className="mobileapp-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="mobileapp-disappoint__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mobileapp-solution section">
        <div className="container mobileapp-solution__row">
          <div
            className={`mobileapp-solution__graphic ${solutionGraphic.className}`}
            ref={solutionGraphic.ref}
          >
            <img src={solutionIllustration} alt="" loading="lazy" />
          </div>

          <div className={`mobileapp-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="mobileapp-solution__title">The App And The System Behind It</h2>
            <p className="mobileapp-solution__desc">
              We design the mobile experience for how it will actually be used, and
              build the backend with it: accounts, data, notifications, payments and an
              admin surface for your team.
            </p>
          </div>
        </div>
      </section>

      <section className="mobileapp-build section" id="app-types">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="mobileapp-h2">What We Build</h2>
          </div>

          <div className={`mobileapp-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="mobileapp-card mobileapp-build-card" key={card.title}>
                <div className="mobileapp-build-card__glow" />
                <div className="mobileapp-build-card__head">
                  <h3 className="mobileapp-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="mobileapp-build-card__badge" loading="lazy" />
                </div>
                <p className="mobileapp-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobileapp-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="mobileapp-h2">Capabilities</h2>
          </div>

          <div className={`mobileapp-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="mobileapp-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="mobileapp-pill" key={label}>
                  <span className="mobileapp-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="mobileapp-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="mobileapp-pill" key={label}>
                  <span className="mobileapp-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mobileapp-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="mobileapp-h2">Use Cases</h2>
          </div>

          <div className={`mobileapp-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="mobileapp-card mobileapp-usecase-card" key={item.title}>
                <h3 className="mobileapp-usecase-card__title">{item.title}</h3>
                <hr className="mobileapp-usecase-card__divider" />
                <p className="mobileapp-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobileapp-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="mobileapp-h1-lg mobileapp-h1-lg--center">MVP architecture</h2>
            <p className="mobileapp-section-copy">
              Even a first release is a full system. We keep it small, but structured —
              so the second version is an extension, not a rebuild.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="mobileapp-architecture__divider" />
            <span className="mobileapp-architecture__divider-dot" />
          </div>

          <div className={`mobileapp-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="mobileapp-timeline-step" key={step.number}>
                <span className="mobileapp-timeline-step__badge">{step.number}</span>
                <h3 className="mobileapp-timeline-step__title">{step.title}</h3>
                <div className="mobileapp-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="mobileapp-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="mobileapp-timeline-tag" key={tag}>
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

      <section className="mobileapp-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="mobileapp-h2">Development Process</h2>
          </div>

          <div className={`mobileapp-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="mobileapp-card mobileapp-card--flat mobileapp-process2-card" key={card.title}>
                <div className="mobileapp-process2-card__body">
                  <h3 className="mobileapp-process2-card__title">{card.title}</h3>
                  <p className="mobileapp-process2-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="mobileapp-process2-card__badge" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobileapp-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="mobileapp-h1-lg mobileapp-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className={`mobileapp-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="mobileapp-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="mobileapp-integration-connector" aria-hidden="true">
                      <span className="mobileapp-integration-connector__line" />
                      <span className="mobileapp-integration-connector__diamond-outer" />
                      <span className="mobileapp-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="mobileapp-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="mobileapp-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="mobileapp-integration-connector" aria-hidden="true">
                      <span className="mobileapp-integration-connector__line" />
                      <span className="mobileapp-integration-connector__diamond-outer" />
                      <span className="mobileapp-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="mobileapp-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mobileapp-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="mobileapp-h2">Why Van Tech Systems</h2>
          </div>

          <div className={`mobileapp-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="mobileapp-card mobileapp-card--flat mobileapp-why-card" key={card.title}>
                <img src={card.icon} alt="" className="mobileapp-badge-img mobileapp-why-card__badge" />
                <h3 className="mobileapp-why-card__title">{card.title}</h3>
                <p className="mobileapp-why-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobileapp-pricing-cta section">
        <div className="container">
          <div className="mobileapp-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="mobileapp-pricing-cta__glow" loading="lazy" />
            <div className="mobileapp-pricing-cta__copy">
              <h2 className="mobileapp-pricing-cta__title">Starting at $7,500/month</h2>
              <p className="mobileapp-pricing-cta__desc">
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
