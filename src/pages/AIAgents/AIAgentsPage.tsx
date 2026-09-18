import { Fragment, useEffect } from 'react';
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

import heroOrb from '../../assets/images/ai-agents/figma/hero-orb.png';
import sparkle3d from '../../assets/images/ai-agents/figma/sparkle-3d.png';
import solutionIllustration from '../../assets/images/ai-agents/figma/agents-solution__graphic.png';
import pricingGlowOrb from '../../assets/images/ai-agents/figma/pricing-glow-orb.png';

const problems = [
  'Answers are generic because the assistant has no business knowledge.',
  'The assistant can talk, but cannot actually do anything.',
  'There is no defined handover when a request exceeds its scope.',
  'Nobody can see what it said or why.',
];

const buildCards = [
  {
    icon: buildIconReceptionRouting,
    title: 'Reception & Routing',
    desc: 'Answers are generic because the assistant has no business knowledge.',
    descWidth: 310,
  },
  {
    icon: buildIconSales,
    title: 'Sales Agents',
    desc: 'Qualification, information and handover to your team.',
    descWidth: 345,
  },
  {
    icon: buildIconSupport,
    title: 'Support Agents',
    desc: 'Answers grounded in your documented knowledge.',
    descWidth: 324,
  },
  {
    icon: buildIconScheduling,
    title: 'Scheduling Agents',
    desc: 'Availability, booking and confirmation inside the conversation.',
    descWidth: 306,
  },
  {
    icon: buildIconOperations,
    title: 'Operations Agents',
    desc: 'Internal agents that retrieve information & update records.',
    descWidth: 342,
  },
  {
    icon: buildIconEscalation,
    title: 'Escalation design',
    desc: 'Defined thresholds where a human takes over with full context.',
    descWidth: 335,
  },
];

const capabilityRow1 = [
  'Intent understanding',
  'Knowledge grounding',
  'Multi-channel conversations',
  'Permitted actions',
  'Record lookup and updates',
  'Scheduling',
];

const capabilityRow2 = ['Conversation logging', 'Human escalation', 'Tone and policy control', 'Behaviour review'];

const useCases = [
  {
    title: 'Front-desk coverage',
    desc: 'Enquiries answered outside working hours with proper handover.',
  },
  {
    title: 'Qualification',
    desc: 'Structured information collected before your team engages.',
  },
  {
    title: 'Customer support',
    desc: 'Repeated questions answered from documented knowledge.',
  },
  {
    title: 'Internal assistants',
    desc: 'Staff-facing agents that find information across systems.',
  },
];

const timelineSteps = [
  { number: '01', title: 'Channels', tags: [['Chat', 'Voice'], ['SMS', 'Email'], ['Messaging']] },
  { number: '02', title: 'Reasoning', tags: [['Intent', 'Policy'], ['Conversation state']] },
  { number: '03', title: 'Knowledge', tags: [['Documents', 'FAQs'], ['Records'], ['Business rules']] },
  { number: '04', title: 'Actions', tags: [['Lookups', 'Updates'], ['Scheduling'], ['Notifications']] },
  { number: '05', title: 'Oversight', tags: [['Transcripts', 'Escalation'], ['Review']] },
];

const processCards = [
  {
    icon: processIconDefineRole,
    title: 'Define the role',
    desc: 'Responsibilities, tone, boundaries and escalation rules.',
    descWidth: 253,
  },
  {
    icon: processIconAssembleKnowledge,
    title: 'Assemble knowledge',
    desc: 'Collect and structure the information the agent may rely on.',
    descWidth: 264,
  },
  {
    icon: processIconConnectActions,
    title: 'Connect actions',
    desc: 'Give the agent bounded access to the systems it needs.',
    descWidth: 242,
  },
  {
    icon: processIconBuild,
    title: 'Build',
    desc: 'Implement the agent, its guardrails and its logging.',
    descWidth: 253,
  },
  {
    icon: processIconReview,
    title: 'Review',
    desc: 'Test against real scenarios and refine from transcripts.',
    descWidth: 253,
  },
  {
    icon: processIconOperate,
    title: 'Operate',
    desc: 'Monitor conversations and extend capabilities over time.',
    descWidth: 253,
  },
];

const integrationsRow1 = [
  { icon: funnelSvg, label: 'CRM' },
  { icon: calendarSvg, label: 'Calendars' },
  { icon: organizationSvg, label: 'Knowledge base' },
  { icon: phoneSvg, label: 'Telephony' },
  { icon: whatsappSvg, label: 'WhatsApp' },
];

const integrationsRow2 = [
  { icon: smsSvg, label: 'SMS' },
  { icon: emailSvg, label: 'Email' },
  { icon: restApiSvg, label: 'Internal APIs' },
];

const whyCards = [
  {
    icon: whyIconBoundedDesign,
    title: 'Bounded by design',
    desc: 'Agents act only within permissions you approve.',
  },
  {
    icon: whyIconGroundedKnowledge,
    title: 'Grounded in your knowledge',
    desc: 'Answers come from your content, not from guesswork.',
  },
  {
    icon: whyIconEscalationProduct,
    title: 'Escalation is part of the product',
    desc: 'Handover to a person is designed, not an afterthought.',
  },
];

export default function AIAgentsPage() {
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
              Services
            </span>
            <h1 className="agents-hero__title">AI Agents That Actually Work.</h1>
            <p className="agents-hero__desc">
              Agents built around a defined role, real business knowledge and permitted
              actions — with a clear escalation path to your team when a request needs a
              person.
            </p>
            <div className="agents-hero__actions">
              <a href="#contact" className="btn btn-primary">
                Get my project estimate
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
              <a href="#agent-types" className="btn btn-outline">
                Explore all services
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
            <h2 className="agents-h1-lg">
              Why Most <span className="accent">AI</span> Deployments Disappoint
            </h2>
            <p className="agents-p-lg">
              A general-purpose chatbot with no knowledge, no permissions and no
              escalation path creates work instead of removing it.
            </p>
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
            <h2 className="agents-solution__title">Agents with a role, knowledge and permissions</h2>
            <p className="agents-solution__desc">
              We define what each agent is responsible for, connect it to your knowledge
              and systems, and give it a bounded set of actions it is allowed to
              perform. Conversations are logged, escalation is explicit, and behaviour
              is reviewed against real transcripts.
            </p>
          </div>
        </div>
      </section>

      <section className="agents-build section" id="agent-types">
        <div className="container">
          <div className={`section-head ${buildHead.className}`} ref={buildHead.ref}>
            <h2 className="agents-h2">What We Build</h2>
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
            <h2 className="agents-h2">Capabilities</h2>
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
            <h2 className="agents-h2">Use Cases</h2>
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
            <h2 className="agents-h1-lg agents-h1-lg--center">Agent architecture</h2>
            <p className="agents-section-copy">
              An agent is a system, not a prompt: knowledge, tools, permissions, memory
              and escalation are designed together.
            </p>
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
            <h2 className="agents-h2">Agent architecture</h2>
            <p className="agents-section-copy">
              An agent is a system, not a prompt: knowledge, tools, permissions, memory
              and escalation are designed together.
            </p>
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
            <h2 className="agents-h1-lg agents-h1-lg--center">Potential Integrations</h2>
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
            <h2 className="agents-h2">Why Van Tech Systems</h2>
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
              <h2 className="agents-pricing-cta__title">Starting at $1,500/month</h2>
              <p className="agents-pricing-cta__desc">
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
