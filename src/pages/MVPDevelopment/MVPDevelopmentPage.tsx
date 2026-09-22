import { Fragment, useEffect } from 'react';
import './mvp-development.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import fingerprintSvg from '../../assets/icons/fluent-fingerprint-32-filled.svg?raw';
import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import databaseSvg from '../../assets/icons/bi-database-fill.svg?raw';
import webhookSvg from '../../assets/icons/carbon-webhook.svg?raw';

import heroStar from '../../assets/images/mvp-development/figma/hero-orbit/rocket-single.png';
import rocketBgLines from '../../assets/images/mvp-development/figma/hero-orbit/rocket-bg-lines.png';
import orbitEllipse from '../../assets/images/mvp-development/figma/hero-orbit/orbit-ellipse.svg';
import orbitBadgeShield from '../../assets/images/mvp-development/figma/hero-orbit/movicon1.png';
import orbitBadgeCheck from '../../assets/images/mvp-development/figma/hero-orbit/movicon2.png';
import solutionGlow from '../../assets/images/mvp-development/figma/solution-glow.png';
import pricingGlowOrb from '../../assets/images/mvp-development/figma/pricing-glow-orb.png';

import buildIconProductDefinition from '../../assets/images/mvp-development/figma/build-icon-product-definition.png';
import buildIconProductDesign from '../../assets/images/mvp-development/figma/build-icon-product-design.png';
import buildIconApplication from '../../assets/images/mvp-development/figma/build-icon-application.png';
import buildIconDataFoundation from '../../assets/images/mvp-development/figma/build-icon-data-foundation.png';
import buildIconLaunchSetup from '../../assets/images/mvp-development/figma/build-icon-launch-setup.png';
import buildIconIterationPlan from '../../assets/images/mvp-development/figma/build-icon-iteration-plan.png';

import processIconDiscover from '../../assets/images/mvp-development/figma/process-icon-discover.png';
import processIconDefine from '../../assets/images/mvp-development/figma/process-icon-define.png';
import processIconDesign from '../../assets/images/mvp-development/figma/process-icon-design.png';
import processIconBuild from '../../assets/images/mvp-development/figma/process-icon-build.png';
import processIconTest from '../../assets/images/mvp-development/figma/process-icon-test.png';
import processIconLaunch from '../../assets/images/mvp-development/figma/process-icon-launch.png';

import whyIconScoped from '../../assets/images/mvp-development/figma/why-icon-scoped.png';
import whyIconArchitected from '../../assets/images/mvp-development/figma/why-icon-architected.png';
import whyIconTeam from '../../assets/images/mvp-development/figma/why-icon-team.png';

const ORBIT_DURATION = '42s';

// Same hand-traced ellipse path (mvp-badge-orbit) as AI Automation, just 2
// badges instead of 4 — each just started at a different point in the
// shared 42s cycle via animation-delay.
const orbitBadges = [
  { img: orbitBadgeShield, size: 68 },
  { img: orbitBadgeCheck, size: 68 },
];

const problems = [
  'Scope grows faster than the product can be built.',
  'Prototypes are thrown away because they were never architected.',
  'Design, development and infrastructure are handled by disconnected suppliers.',
  'No clear definition of what the first release has to prove.',
];

const buildCards = [
  {
    icon: buildIconProductDefinition,
    title: 'Product Definition',
    desc: 'Core user flows, data model and the scope of the first release.',
    descWidth: 301,
  },
  {
    icon: buildIconProductDesign,
    title: 'Product Design',
    desc: 'Interface design and prototypes for the flows that matter most.',
    descWidth: 327,
  },
  {
    icon: buildIconApplication,
    title: 'Application',
    desc: 'Frontend, backend, authentication and business logic in one codebase.',
    descWidth: 322,
  },
  {
    icon: buildIconDataFoundation,
    title: 'Data Foundation',
    desc: 'A schema designed for the product you intend to grow, not just to demo.',
    descWidth: 328,
  },
  {
    icon: buildIconLaunchSetup,
    title: 'Launch Setup',
    desc: 'Deployment, environments, monitoring and basic analytics.',
    descWidth: 327,
  },
  {
    icon: buildIconIterationPlan,
    title: 'Iteration Plan',
    desc: 'A prioritized backlog based on what the release actually reveals.',
    descWidth: 329,
  },
];

const capabilityRow1 = [
  'Product scoping',
  'UX and UI design',
  'Interactive prototypes',
  'Database architecture',
  'Authentication',
  'Payments',
];

const capabilityRow2 = ['Admin tooling', 'Analytics instrumentation', 'QA and testing', 'Deployment'];

const useCases = [
  {
    title: 'Founder validating an idea',
    desc: 'A focused product that proves demand before larger investment.',
  },
  {
    title: 'Company launching a new line',
    desc: 'A separate product built alongside existing operations.',
  },
  {
    title: 'Replacing a manual service',
    desc: 'Turning a spreadsheet-and-email process into a real application.',
  },
  {
    title: 'Pitching investors or partners',
    desc: 'A working product rather than a slide deck.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Interface', tags: [['Web app', 'Responsive UI'], ['Onboarding']] },
  { number: '02', title: 'Application', tags: [['Business logic', 'API'], ['Authentication', 'Roles']] },
  { number: '03', title: 'Data', tags: [['Database', 'File storage'], ['Events']] },
  { number: '04', title: 'Operations', tags: [['Deployment'], ['Monitoring', 'Analytics']] },
];

const processCards = [
  {
    icon: processIconDiscover,
    title: 'Discover',
    desc: 'Requirements, users, constraints and the goal of the first release.',
  },
  {
    icon: processIconDefine,
    title: 'Define',
    desc: 'Scope, data model and success criteria agreed before the build starts.',
  },
  {
    icon: processIconDesign,
    title: 'Design',
    desc: 'Flows and interface design for the core product experience.',
  },
  {
    icon: processIconBuild,
    title: 'Build',
    desc: 'Application development in reviewable increments.',
  },
  {
    icon: processIconTest,
    title: 'Test',
    desc: 'Functional QA, security review and responsive testing.',
  },
  {
    icon: processIconLaunch,
    title: 'Launch',
    desc: 'Deployment, handover and a plan for the next iteration.',
  },
];

const integrationsRow1 = [
  { icon: paymentsSvg, label: 'Payments' },
  { icon: emailSvg, label: 'Email' },
  { icon: fingerprintSvg, label: 'Auth providers' },
  { icon: funnelSvg, label: 'CRM' },
];

const integrationsRow2 = [
  { icon: databaseSvg, label: 'Storage' },
  { icon: webhookSvg, label: 'Webhooks' },
];

const whyCards = [
  {
    icon: whyIconScoped,
    title: 'Scoped before it is built',
    desc: 'We agree what the first release proves before development starts.',
  },
  {
    icon: whyIconArchitected,
    title: 'Architected to continue',
    desc: 'The foundation supports the next version instead of blocking it.',
  },
  {
    icon: whyIconTeam,
    title: 'One technology team',
    desc: 'Design, development, data and deployment under one architecture.',
  },
];

export default function MVPDevelopmentPage() {
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
    <main className="mvp-page">
      <section className="mvp-hero section">
        <div className="container">
          <div className="row">
            <div className={`mvp-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="mvp-hero__badge">
                <Icon svg={servicesStarSvg} />
                MVP Development
              </span>
              <h1 className="mvp-hero__title">
                Your Idea.
                <br />
                Built for Launch.
              </h1>
              <p className="mvp-hero__desc">
                Turn an idea into a functional digital product with product strategy,
                architecture, design, development, testing and deployment handled by
                one technology team.
              </p>
              <div className="mvp-hero__actions">
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

            <div className="mvp-hero__graphic" aria-hidden="true">
              <div className="mvp-orbit">
                <img src={rocketBgLines} alt="" className="mvp-orbit__bg-lines" />
                {/* Split into two copies so the ring can pass behind the
                    rocket on top and in front of it on the bottom, like a
                    ring around a sphere — a single flat image can't be on
                    both sides of the rocket layer at once. */}
                <img src={orbitEllipse} alt="" className="mvp-orbit__ellipse mvp-orbit__ellipse--back" />
                <img src={heroStar} alt="" className="mvp-orbit__star-glow" />
                <img src={heroStar} alt="" className="mvp-orbit__star" />
                <img src={orbitEllipse} alt="" className="mvp-orbit__ellipse mvp-orbit__ellipse--front" />

                {orbitBadges.map((item, i) => (
                  <div
                    key={i}
                    className="mvp-orbit__anchor"
                    style={
                      {
                        animationDuration: ORBIT_DURATION,
                        animationDelay: `-${(i / orbitBadges.length) * 42}s`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="mvp-orbit__radius">
                      <div className="mvp-orbit__counter">
                        <img
                          src={item.img}
                          alt=""
                          className="mvp-orbit__badge"
                          style={{ '--badge-size': item.size } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mvp-disappoint section">
        <div className="container mvp-disappoint__row">
          <div className={`mvp-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="mvp-h1-lg">Why Most First Versions Stall</h2>
            <p className="mvp-p-lg">
              Off-the-shelf tools work until your process differs from the product&apos;s
              assumptions. Then the workarounds become the operation.
            </p>
          </div>

          <ul className={`mvp-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="mvp-disappoint__item" key={text}>
                <span className="mvp-disappoint__item-text">{text}</span>
                <span className="mvp-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mvp-solution section">
        <div className="container mvp-solution__row">
          <div
            className={`mvp-solution__graphic ${solutionGraphic.className}`}
            ref={solutionGraphic.ref}
            aria-hidden="true"
          >
            <img src={solutionGlow} alt="" className="mvp-solution__mockup" loading="lazy" />
          </div>

          <div className={`mvp-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="mvp-solution__title">A First Release You Can Build On</h2>
            <p className="mvp-solution__desc">
              We start by defining what your first version has to prove, then architect
              it as a real product: a database schema, authentication, a working
              application, and a deployment path. The build is deliberately focused,
              but nothing is a throwaway prototype — the same foundation carries the
              next release.
            </p>
          </div>
        </div>
      </section>

      <section className="mvp-build section" id="what-we-build">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="mvp-h2">What We Build</h2>
          </div>

          <div className={`mvp-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="mvp-card mvp-build-card" key={card.title}>
                <div className="mvp-build-card__glow" />
                <div className="mvp-build-card__head">
                  <h3 className="mvp-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="mvp-build-card__badge" loading="lazy" />
                </div>
                <p className="mvp-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="mvp-h2">Capabilities</h2>
          </div>

          <div className={`mvp-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="mvp-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="mvp-pill" key={label}>
                  <span className="mvp-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="mvp-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="mvp-pill" key={label}>
                  <span className="mvp-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mvp-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="mvp-h2">Use Cases</h2>
          </div>

          <div className={`mvp-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="mvp-card mvp-usecase-card" key={item.title}>
                <h3 className="mvp-usecase-card__title">{item.title}</h3>
                <hr className="mvp-usecase-card__divider" />
                <p className="mvp-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="mvp-h1-lg mvp-h1-lg--center">MVP architecture</h2>
            <p className="mvp-section-copy">
              Even a first release is a full system. We keep it small, but structured —
              so the second version is an extension, not a rebuild.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="mvp-architecture__divider" />
            <span className="mvp-architecture__divider-dot" />
          </div>

          <div className={`mvp-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="mvp-timeline-step" key={step.number}>
                <span className="mvp-timeline-step__badge">{step.number}</span>
                <h3 className="mvp-timeline-step__title">{step.title}</h3>
                <div className="mvp-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="mvp-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="mvp-timeline-tag" key={tag}>
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

      <section className="mvp-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="mvp-h2">Development Process</h2>
          </div>

          <div className={`mvp-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="mvp-card mvp-card--flat mvp-process2-card" key={card.title}>
                <div className="mvp-process2-card__body">
                  <h3 className="mvp-process2-card__title">{card.title}</h3>
                  <p className="mvp-process2-card__desc">{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="mvp-process2-card__badge" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="mvp-h1-lg mvp-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className={`mvp-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="mvp-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="mvp-integration-connector" aria-hidden="true">
                      <span className="mvp-integration-connector__line" />
                      <span className="mvp-integration-connector__diamond-outer" />
                      <span className="mvp-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="mvp-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="mvp-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="mvp-integration-connector" aria-hidden="true">
                      <span className="mvp-integration-connector__line" />
                      <span className="mvp-integration-connector__diamond-outer" />
                      <span className="mvp-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="mvp-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mvp-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="mvp-h2">Why Van Tech Systems</h2>
          </div>

          <div className={`mvp-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="mvp-card mvp-card--flat mvp-why-card" key={card.title}>
                <img src={card.icon} alt="" className="mvp-badge-img mvp-why-card__badge" />
                <h3 className="mvp-why-card__title">{card.title}</h3>
                <p className="mvp-why-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mvp-pricing-cta section">
        <div className="container">
          <div className="mvp-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="mvp-pricing-cta__glow" loading="lazy" />
            <div className="mvp-pricing-cta__copy">
              <h2 className="mvp-pricing-cta__title">Starting at $2,500/month</h2>
              <p className="mvp-pricing-cta__desc">
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
