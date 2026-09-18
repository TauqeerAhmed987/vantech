import { Fragment, useEffect } from 'react';
import './saas-development.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import identityPlatformSvg from '../../assets/icons/material-symbols-light-identity-platform-rounded.svg?raw';
import restApiSvg from '../../assets/icons/dashicons-rest-api.svg?raw';

import paymentsSvg from '../../assets/icons/ic-baseline-payments.svg?raw';
import emailSvg from '../../assets/icons/dashicons-email.svg?raw';
import analyticsSvg from '../../assets/icons/clarity-analytics-solid.svg?raw';
import toolsSvg from '../../assets/icons/bi-tools.svg?raw';
import webhooksSvg from '../../assets/icons/ph-webhooks-logo-fill.svg?raw';

import heroMockup from '../../assets/images/saas-development/figma/hero-dashboard-mockup.png';
import solutionIllustration from '../../assets/images/saas-development/figma/solution-illustration-new.png';
import solutionBgLines from '../../assets/images/saas-development/figma/solution-bg-lines.png';

import buildIconMultitenant from '../../assets/images/saas-development/figma/build-icon-multitenant.png';
import buildIconIdentity from '../../assets/images/saas-development/figma/build-icon-identity.png';
import buildIconBilling from '../../assets/images/saas-development/figma/build-icon-billing.png';
import buildIconProduct from '../../assets/images/saas-development/figma/build-icon-product.png';
import buildIconAdmin from '../../assets/images/saas-development/figma/build-icon-admin.png';
import buildIconPlatform from '../../assets/images/saas-development/figma/build-icon-platform.png';

import processIconDefine from '../../assets/images/saas-development/figma/process-icon-define.png';
import processIconArchitect from '../../assets/images/saas-development/figma/process-icon-architect.png';
import processIconDesign from '../../assets/images/saas-development/figma/process-icon-design.png';
import processIconBuild from '../../assets/images/saas-development/figma/process-icon-build.png';
import processIconTest from '../../assets/images/saas-development/figma/process-icon-test.png';
import processIconLaunch from '../../assets/images/saas-development/figma/process-icon-launch.png';

import whyIconTenancy from '../../assets/images/saas-development/figma/why-icon-tenancy.png';
import whyIconBilling from '../../assets/images/saas-development/figma/why-icon-billing.png';
import whyIconOperable from '../../assets/images/saas-development/figma/why-icon-operable.png';

import pricingGlowOrb from '../../assets/images/saas-development/figma/pricing-glow-orb.png';

const problems = [
  'Tenant data separation was not designed at the start.',
  'Roles and permissions do not match how customers organize teams.',
  'Billing, trials and plan changes are handled manually.',
  'There is no admin surface to support customers.',
];

const buildCards = [
  {
    icon: buildIconMultitenant,
    title: 'Multi-tenant core',
    desc: 'Organizations, membership and enforced data isolation.',
    descWidth: 271,
  },
  {
    icon: buildIconIdentity,
    title: 'Identity',
    desc: 'Sign-up, invitations, roles and permissions per organization.',
    descWidth: 351,
  },
  {
    icon: buildIconBilling,
    title: 'Billing',
    desc: 'Plans, trials, upgrades and subscription lifecycle.',
    descWidth: 327,
  },
  {
    icon: buildIconProduct,
    title: 'Product surface',
    desc: 'The application your customers use every day.',
    descWidth: 297,
  },
  {
    icon: buildIconAdmin,
    title: 'Admin console',
    desc: 'Internal tooling to support accounts and investigate issues.',
    descWidth: 334,
  },
  {
    icon: buildIconPlatform,
    title: 'Platform Services',
    desc: 'APIs, webhooks, email and storage for the product.',
    descWidth: 289,
  },
];

const capabilityRow1 = [
  'Multi-tenant architecture',
  'Tenant isolation',
  'Authentication',
  'Role-based access control',
  'Subscriptions and payments',
];

const capabilityRow2 = ['Usage tracking', 'Admin console', 'Public API', 'Transactional email', 'Product analytics'];

const useCases = [
  {
    title: 'New SaaS product',
    desc: 'A platform built for paying customers from the first release.',
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
    icon: processIconDefine,
    title: 'Define',
    desc: 'Product scope, customer model and commercial structure.',
    descWidth: 247,
  },
  {
    icon: processIconArchitect,
    title: 'Architect',
    desc: 'Tenancy, identity, permissions, billing and data design.',
    descWidth: 243,
  },
  {
    icon: processIconDesign,
    title: 'Design',
    desc: 'Product interface and onboarding for new organizations.',
    descWidth: 200,
  },
  {
    icon: processIconBuild,
    title: 'Build',
    desc: 'Platform and product development in reviewable increments.',
    descWidth: 222,
  },
  {
    icon: processIconTest,
    title: 'Test',
    desc: 'Isolation testing, permission testing, billing and security review.',
    descWidth: 224,
  },
  {
    icon: processIconLaunch,
    title: 'Launch',
    desc: 'Deployment, monitoring, admin tooling and iteration plan.',
    descWidth: 254,
  },
];

const integrations = [
  { icon: paymentsSvg, label: 'Payment providers' },
  { icon: identityPlatformSvg, label: 'Identity providers' },
  { icon: emailSvg, label: 'Email' },
  { icon: analyticsSvg, label: 'Analytics' },
  { icon: toolsSvg, label: 'Support tools' },
  { icon: webhooksSvg, label: 'Webhooks' },
  { icon: restApiSvg, label: 'Internal APIs' },
];

const whyCards = [
  {
    icon: whyIconTenancy,
    title: 'Tenancy first',
    desc: 'Isolation and permissions are designed before features.',
    descWidth: 366,
  },
  {
    icon: whyIconBilling,
    title: 'Commercially complete',
    desc: 'Plans, billing and administration are part of the build.',
    descWidth: 354,
  },
  {
    icon: whyIconOperable,
    title: 'Operable',
    desc: 'You get the tooling required to support real customers.',
    descWidth: 351,
  },
];

const integrationsRow1 = integrations.slice(0, 4);
const integrationsRow2 = integrations.slice(4);

export default function SaasDevelopmentPage() {
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
    <main className="saas-page">
      <section className="saas-hero section">
        <div className="container">
          <div className="row">
            <div className={`saas-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="saas-hero__badge">
                <Icon svg={servicesStarSvg} />
                Services
              </span>
              <h1 className="saas-hero__title">Build Software People Pay to Use.</h1>
              <p className="saas-hero__desc">
                Multi-tenant platforms with the parts that make software sellable: isolation
                between customers, authentication, roles, subscriptions, administration and
                analytics.
              </p>
              <div className="saas-hero__actions">
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

            <div className="saas-hero__graphic" aria-hidden="true">
              <img src={heroMockup} alt="" className="saas-hero__mockup" loading="eager" />
            </div>
          </div>
        </div>
      </section>

      <section className="saas-disappoint section">
        <div className="container saas-disappoint__row">
          <div className={`saas-disappoint__copy ${disappointHead.className}`} ref={disappointHead.ref}>
            <h2 className="saas-h1-lg">
              The Hard Parts Of <span className="accent">SaaS</span> Are Not The Features
            </h2>
            <p className="saas-p-lg">
              Off-the-shelf tools work until your process differs from the product&apos;s
              assumptions. Then the workarounds become the operation.
            </p>
          </div>

          <ul className={`saas-disappoint__list ${disappointList.className}`} ref={disappointList.ref}>
            {problems.map((text, i) => (
              <li className="saas-disappoint__item" key={text}>
                <span className="saas-disappoint__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="saas-disappoint__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="saas-solution section">
        <div className="container saas-solution__row">
          <div
            className={`saas-solution__graphic ${solutionGraphic.className}`}
            ref={solutionGraphic.ref}
          >
            <img src={solutionBgLines} alt="" className="saas-solution__graphic-bg" />
            <img src={solutionIllustration} alt="" className="saas-solution__illustration" loading="lazy" />
          </div>

          <div className={`saas-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="saas-solution__title">A Platform Designed To Be Sold</h2>
            <p className="saas-solution__desc">
              We architect tenancy, identity and billing first, then build the product on top.
              Organizations, invitations, roles, plans, usage and administration are part of the
              platform rather than later additions.
            </p>
          </div>
        </div>
      </section>

      <section className="saas-build section" id="what-we-build">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="saas-h2">What we build</h2>
          </div>

          <div className={`saas-build__grid ${buildGrid.className}`} ref={buildGrid.ref}>
            {buildCards.map((card) => (
              <div className="saas-card saas-build-card" key={card.title}>
                <div className="saas-build-card__glow" />
                <div className="saas-build-card__head">
                  <h3 className="saas-build-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="saas-build-card__badge" loading="lazy" />
                </div>
                <p className="saas-build-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-capabilities section">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="saas-h2">Capabilities</h2>
          </div>

          <div className={`saas-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="saas-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="saas-pill" key={label}>
                  <span className="saas-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="saas-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="saas-pill" key={label}>
                  <span className="saas-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="saas-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="saas-h2">Use Cases</h2>
          </div>

          <div className={`saas-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="saas-card saas-usecase-card" key={item.title}>
                <h3 className="saas-usecase-card__title">{item.title}</h3>
                <hr className="saas-usecase-card__divider" />
                <p className="saas-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-architecture section" id="process">
        <div className="container">
          <div className={`section-head ${architectureHead.className}`} ref={architectureHead.ref}>
            <h2 className="saas-h1-lg saas-h1-lg--center">SaaS architecture</h2>
            <p className="saas-section-copy">
              Tenant isolation is enforced at the data layer, not only in the interface.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="saas-architecture__divider" />
            <span className="saas-architecture__divider-dot" />
          </div>

          <div className={`saas-timeline ${timelineGrid.className}`} ref={timelineGrid.ref}>
            {timelineSteps.map((step) => (
              <div className="saas-timeline-step" key={step.number}>
                <span className="saas-timeline-step__badge">{step.number}</span>
                <h3 className="saas-timeline-step__title">{step.title}</h3>
                <div className="saas-timeline-step__tags">
                  {step.tags.map((row, i) => (
                    <div className="saas-timeline-step__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="saas-timeline-tag" key={tag}>
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

      <section className="saas-process2 section">
        <div className="container">
          <div className={`section-head ${process2Head.className}`} ref={process2Head.ref}>
            <h2 className="saas-h2">Development Process</h2>
          </div>

          <div className={`saas-process2__grid ${process2Grid.className}`} ref={process2Grid.ref}>
            {processCards.map((card) => (
              <div className="saas-card saas-card--flat saas-process2-card" key={card.title}>
                <div className="saas-process2-card__body">
                  <h3 className="saas-process2-card__title">{card.title}</h3>
                  <p className="saas-process2-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
                </div>
                <img src={card.icon} alt="" className="saas-process2-card__badge" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="saas-h1-lg saas-h1-lg--center">Potential Integrations</h2>
          </div>

          <div className={`saas-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="saas-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="saas-integration-connector">
                      <span className="saas-integration-connector__line" />
                      <span className="saas-integration-connector__diamond-outer" />
                      <span className="saas-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="saas-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="saas-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="saas-integration-connector">
                      <span className="saas-integration-connector__line" />
                      <span className="saas-integration-connector__diamond-outer" />
                      <span className="saas-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="saas-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="saas-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="saas-h2">Why Van Tech Systems</h2>
          </div>

          <div className={`saas-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="saas-card saas-card--flat saas-why-card" key={card.title}>
                <img src={card.icon} alt="" className="saas-badge-img saas-why-card__badge" />
                <h3 className="saas-why-card__title">{card.title}</h3>
                <p className="saas-why-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="saas-pricing-cta section">
        <div className="container">
          <div className="saas-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="saas-pricing-cta__glow" loading="lazy" />
            <div className="saas-pricing-cta__copy">
              <h2 className="saas-pricing-cta__title">Starting at $7,500/month</h2>
              <p className="saas-pricing-cta__desc">
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
