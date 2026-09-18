import { useEffect, useRef, useState } from 'react';
import './partners.css';
import Icon from '../../components/Icon';
import FAQ from '../../components/FAQ';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import vtsSparkleSvg from '../../assets/icons/vts-sparkle.svg?raw';
import mdiHandshakeSvg from '../../assets/icons/mdi-handshake.svg?raw';
import partnerCtaArrowSvg from '../../assets/icons/partner-cta-arrow.svg?raw';
import catalogSoftwareSvg from '../../assets/icons/catalog-software.svg?raw';
import catalogGlobeSvg from '../../assets/icons/catalog-globe.svg?raw';
import catalogConsultingSvg from '../../assets/icons/catalog-consulting.svg?raw';
import userVisibleSvg from '../../assets/icons/user-visible.svg?raw';
import plansCoinSvg from '../../assets/icons/plans-coin.svg?raw';
import plansStarSvg from '../../assets/icons/plans-star.svg?raw';
import plansFlashSvg from '../../assets/icons/plans-flash.svg?raw';

import orbSphere from '../../assets/images/orb-sphere.webp';
import heroChartImg from '../../assets/images/partners-hero-chart.webp';
import heroStarImg from '../../assets/images/partners-hero-star.webp';
import tiersBadgeGlow from '../../assets/images/partners-badge-glow.png';
import tiersGlowTexture from '../../assets/images/partners-glow-texture.png';
import visibilityOrb from '../../assets/images/partners-visibility-orb.png';

const chipImageClass: Record<string, string> = {
  'AI Chat Agents': 'ai-chat-agents',
  'AI Customer Support': 'ai-customer-support',
  'AI Knowledge Systems': 'ai-knowledge-systems',
  'AI Lead Qualification': 'ai-lead-qualification',
  'AI Receptionists': 'ai-receptionists',
  'AI Voice Agents': 'ai-voice-agents',
  'AI Workflow Automation': 'ai-workflow-automation',
  'Custom Web Applications': 'custom-web-applications',
  'SaaS Platforms': 'saas-platforms',
  'Marketplace Platforms': 'marketplace-platforms',
  'Client Portals': 'client-portals',
  'Internal Business Systems': 'internal-business-systems',
  'CRM Platforms': 'crm-platforms',
  'CRM Automation': 'crm-automation',
  'Email/SMS Workflows': 'email-sms-workflows',
  'Lead Follow-Up Systems': 'lead-follow-up-systems',
  'Operations Automation': 'operations-automation',
  'Appointment Automation': 'appointment-automation',
  'Business Process Automation': 'business-process-automation',
  'Premium Website': 'premium-website',
  'E-Commerce': 'e-commerce',
  'Customer Portals': 'customer-portals',
  'Business Dashboards': 'business-dashboards',
  'Membership Platforms': 'membership-platforms',
  'Product Strategy': 'product-strategy',
  'Technology Architecture': 'technology-architecture',
  'AI Readiness': 'ai-readiness',
  'Digital Transformation': 'digital-transformation',
  'System Audits': 'system-audits',
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8.5L6.2 11.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const stats = [
  { value: '0%', label: 'Equity Required' },
  { value: '04', label: 'Ways to partner' },
  { value: '1 Team', label: 'Technology delivery partner' },
  { value: 'Global', label: 'Remote delivery capability' },
];

const tiers = [
  {
    title: 'Referral Partner',
    desc: 'Best for people who simply want to introduce qualified businesses to Van Tech Systems.',
    columns: [
      { label: 'Partner', items: ['Identifies opportunity', 'Makes introduction', 'Remains relationship source'] },
      {
        label: 'Van Tech Systems',
        items: ['Scopes project', 'Closes project', 'Contracts client', 'Delivers technology', 'Supports client'],
      },
    ],
    cta: 'Become Referral Partner',
  },
  {
    title: 'Reseller Partner',
    desc: 'Best for agencies wanting to sell VTS solutions directly.',
    columns: [
      { label: 'Partner', items: ['Owns sales relationship', 'Selects solutions', 'Manages commercial relationship'] },
      {
        label: 'Van Tech Systems',
        items: ['Provides partner pricing', 'Provides technical scoping', 'Builds solution', 'Supports implementation'],
      },
    ],
    cta: 'Become Reseller Partner',
  },
  {
    title: 'White-Label Partner',
    desc: 'Best for agencies that want technology delivered behind their own brand.',
    columns: [
      { label: 'Partner', items: ['Owns brand', 'Owns client relationship', 'Sets retail pricing', 'Handles account strategy'] },
      {
        label: 'Van Tech Systems',
        items: ['Performs technical delivery', 'Works behind the scenes', 'Provides QA', 'Supports deployments'],
      },
    ],
    cta: 'Become White-Label Partner',
  },
  {
    title: 'Strategic Delivery Partner',
    desc: 'Best for established agencies requiring a dedicated technology capability.',
    columns: [
      { label: 'Possible support', items: ['Custom software', 'SaaS development', 'AI systems', 'AI agents', 'Automation'] },
      { label: 'Also available', items: ['Integrations', 'Architecture', 'Maintenance', 'Technical consulting'] },
    ],
    cta: 'Become Strategic Delivery Partner',
  },
];

const pipelineStages = [
  { name: 'Lead', who: 'Partner' },
  { name: 'Discovery', who: 'Partner + VTS' },
  { name: 'Scope', who: 'VTS' },
  { name: 'Build', who: 'VTS' },
  { name: 'QA', who: 'VTS' },
  { name: 'Launch', who: 'Joint' },
  { name: 'Support', who: 'Based on partnership model' },
];

const catalogIcons: Record<string, string> = {
  software: catalogSoftwareSvg,
  globe: catalogGlobeSvg,
  consulting: catalogConsultingSvg,
};

const catalogTop = [
  {
    title: 'AI Solutions',
    slug: 'ai-solutions',
    desc: "Conversational and operational AI systems built around a client's workflows.",
    icon: 'software',
    wrapChips: true,
    chipRows: [
      ['AI Receptionists', 'AI Voice Agents', 'AI Chat Agents'],
      ['AI Lead Qualification', 'AI Customer Support', 'AI Knowledge Systems'],
      ['AI Knowledge Systems--bottom', 'AI Workflow Automation'],
    ],
    items: ['AI Receptionists', 'AI Voice Agents', 'AI Chat Agents', 'AI Lead Qualification', 'AI Customer Support', 'AI Knowledge Systems', 'AI Workflow Automation'],
  },
  {
    title: 'Software',
    slug: 'software',
    desc: 'Custom applications and platforms engineered for how a business operates.',
    icon: 'software',
    titleFirst: true,
    iconRight: true,
    items: ['Custom Web Applications', 'SaaS Platforms', 'Marketplace Platforms', 'Client Portals', 'Internal Business Systems', 'CRM Platforms'],
  },
];

const catalogBottom = [
  {
    title: 'Automation',
    slug: 'automation',
    desc: 'Process automation that removes manual work across sales and operations.',
    icon: 'software',
    items: ['CRM Automation', 'Email/SMS Workflows', 'Lead Follow-Up Systems', 'Operations Automation', 'Appointment Automation', 'Business Process Automation'],
  },
  {
    title: 'Digital Platforms',
    slug: 'digital-platforms',
    desc: 'Customer-facing digital products with a premium engineering standard.',
    icon: 'globe',
    items: ['Premium Website', 'E-Commerce', 'Customer Portals', 'Business Dashboards', 'Membership Platforms'],
  },
  {
    title: 'Consulting',
    slug: 'consulting',
    desc: 'Strategic and architectural guidance ahead of a build.',
    icon: 'consulting',
    items: ['Product Strategy', 'Technology Architecture', 'AI Readiness', 'Digital Transformation', 'System Audits'],
  },
];

const brandLayers = [
  { label: 'Your Agency', tags: ['Client Relationship', 'Brand', 'Sales', 'Strategy'] },
  { label: 'Van Tech Systems', tags: ['Architecture', 'Development', 'AI', 'Automation', 'QA', 'Infrastructure'] },
  { label: 'Client Solution', tags: ['Website', 'AI Agent', 'SaaS', 'Automation', 'Platform'] },
];

const aiEngineChips = ['Voice', 'Chat', 'CRM', 'Email', 'SMS', 'Calendar', 'Knowledge Base', 'Analytics', 'Automation', 'API'];

const planIcons: Record<string, string> = {
  star: plansStarSvg,
  flash: plansFlashSvg,
};

const plans = [
  {
    name: 'VTS Connect',
    icon: 'star',
    price: '$0',
    priceNote: 'Partner Enrollment',
    desc: 'For professionals who occasionally encounter technology opportunities and want a reliable delivery partner to hand them to.',
    cta: 'Join VTS Connect',
    features: [
      'Partner account',
      'Referral tracking',
      'VTS service catalog',
      'Project introduction form',
      'Basic sales materials',
      'Referral opportunity tracking',
      'VTS contracts and invoices the client directly',
    ],
  },
  {
    name: 'VTS Pro Partner',
    icon: 'flash',
    price: '$499',
    priceNote: 'onboarding',
    secondary: '$99/month',
    desc: 'Everything in Connect, plus partner pricing and reseller rights for eligible services.',
    cta: 'Become Pro Partner',
    highlighted: true,
    features: [
      'Everything in VTS Connect',
      'Partner service pricing',
      'Reseller rights for eligible services',
      'Priority project scoping',
      'Proposal support',
      'Partner sales resources',
      'Co-branded solution materials',
      'Project delivery dashboard',
      'Partner onboarding session',
      'Technical consultation support',
      'Access to standardized solution packages',
    ],
  },
  {
    name: 'VTS White Label',
    icon: 'star',
    price: '$1,499',
    priceNote: 'onboarding',
    secondary: '$299/month',
    desc: 'Everything in Pro, plus delivery behind your own brand where agreed.',
    cta: 'Apply For White Label',
    accentOrange: true,
    features: [
      'Everything in VTS Pro Partner',
      'White-label eligible services',
      'Client-facing delivery under partner brand where agreed',
      'Dedicated partnership contact',
      'Priority production queue',
      'White-label proposal templates',
      'Technical discovery assistance',
      'Architecture consultation',
      'QA support',
      'Deployment support',
      'Partner delivery reporting',
      'Custom service catalog assistance',
    ],
  },
];

type CompareCell = boolean | string;

const compareRows: { label: string; connect: CompareCell; pro: CompareCell; white: CompareCell }[] = [
  { label: 'Referral tracking', connect: true, pro: true, white: true },
  { label: 'Partner pricing', connect: false, pro: true, white: true },
  { label: 'Reselling', connect: false, pro: true, white: true },
  { label: 'Proposal support', connect: false, pro: true, white: true },
  { label: 'Technical scoping', connect: 'VTS-led', pro: true, white: true },
  { label: 'White-label delivery', connect: false, pro: false, white: true },
  { label: 'Priority queue', connect: false, pro: false, white: true },
  { label: 'Dedicated partnership contact', connect: false, pro: false, white: true },
  { label: 'Delivery reporting', connect: false, pro: true, white: true },
  { label: 'Architecture support', connect: false, pro: 'On request', white: true },
];

function TierCard({ tier }: { tier: (typeof tiers)[number] }) {
  const reveal = useReveal('up');
  return (
    <div className={`partners-tier-card ${reveal.className}`} ref={reveal.ref}>
      <img src={tiersGlowTexture} alt="" className="partners-tier-card__bg" loading="lazy" />
      <div className="partners-tier-card__content">
        <h3 className="partners-tier-card__title">{tier.title}</h3>
        <p
          className={`partners-tier-card__desc${tier.title === 'Referral Partner' ? ' partners-tier-card__desc--referral' : ''}`}
        >
          {tier.desc}
        </p>
        <div className="partners-tier-card__roles">
          {tier.columns.map((col, i) => (
            <div className={`partners-tier-role ${i === 0 ? 'partners-tier-role--blue' : 'partners-tier-role--orange'}`} key={col.label}>
              <span className="partners-tier-role__label">{col.label}</span>
              <ul className="partners-tier-role__list">
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a href="/contact" className="partners-tier-card__cta">
          {tier.cta}
          <Icon svg={partnerCtaArrowSvg} className="partners-tier-card__cta-icon" />
        </a>
      </div>
    </div>
  );
}

function PipelineStep({
  stage,
  isLast,
  isActive,
  onEnter,
  onLeave,
}: {
  stage: (typeof pipelineStages)[number];
  isLast: boolean;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const reveal = useReveal('up');
  return (
    <div
      className={`partners-pipeline-step${isLast ? ' partners-pipeline-step--last' : ''}${isActive ? ' partners-pipeline-step--active' : ''} ${reveal.className}`}
      ref={reveal.ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="partners-pipeline-step__glow" />
      <span className="partners-pipeline-step__name">{stage.name}</span>
      <span className="partners-pipeline-step__who">{stage.who}</span>
    </div>
  );
}

function CatalogTopCard({ cat }: { cat: (typeof catalogTop)[number] }) {
  const reveal = useReveal('up');
  return (
    <div
      className={`partners-catalog-card partners-catalog-card--glow partners-catalog-card--${cat.slug}${cat.titleFirst ? ' partners-catalog-card--title-first' : ''} ${reveal.className}`}
      ref={reveal.ref}
    >
      <div className={`partners-catalog-card__glow-area${cat.iconRight ? ' partners-catalog-card__glow-area--icon-right' : ''}`}>
        <span className={`partners-catalog-card__icon-badge${cat.iconRight ? ' partners-catalog-card__icon-badge--right' : ''}`}>
          <img src={orbSphere} alt="" className="partners-catalog-card__icon-orb" loading="lazy" />
          <Icon svg={catalogIcons[cat.icon]} className="partners-catalog-card__icon" />
        </span>
        {cat.wrapChips && cat.chipRows ? (
          <div className="partners-catalog-card__chips-wrap">
            {cat.chipRows.map((row, i) => (
              <div className="partners-catalog-card__chips-row" key={i}>
                {row.map((entry) => {
                  const [text, variant] = entry.split('--');
                  const suffix = variant ? `${chipImageClass[text]}-${variant}` : chipImageClass[text];
                  return (
                    <span
                      className={`partners-chip partners-chip--glass${suffix ? ` partners-chip--${suffix}` : ''}`}
                      key={entry}
                    >
                      {text}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`partners-catalog-card__chips-grid${cat.iconRight ? ' partners-catalog-card__chips-grid--icon-right' : ''}`}
          >
            {cat.items.map((item) => (
              <span
                className={`partners-chip partners-chip--glass${chipImageClass[item] ? ` partners-chip--${chipImageClass[item]}` : ''}`}
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
      <h3 className="partners-catalog-card__title">{cat.title}</h3>
      <p className="partners-catalog-card__desc">{cat.desc}</p>
    </div>
  );
}

function CatalogBottomCard({ cat }: { cat: (typeof catalogBottom)[number] }) {
  const reveal = useReveal('up');
  return (
    <div
      className={`partners-catalog-card partners-catalog-card--glow partners-catalog-card--sm partners-catalog-card--${cat.slug} ${reveal.className}`}
      ref={reveal.ref}
    >
      <div className="partners-catalog-card__glow-area partners-catalog-card__glow-area--sm">
        <span className="partners-catalog-card__icon-badge">
          <img src={orbSphere} alt="" className="partners-catalog-card__icon-orb" loading="lazy" />
          <Icon svg={catalogIcons[cat.icon]} className="partners-catalog-card__icon" />
        </span>
        <div className="partners-catalog-card__chips-grid partners-catalog-card__chips-grid--sm">
          {cat.items.map((item) => (
            <span
              className={`partners-chip partners-chip--glass partners-chip--sm${chipImageClass[item] ? ` partners-chip--${chipImageClass[item]}` : ''}`}
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <h3 className="partners-catalog-card__title">{cat.title}</h3>
      <p className="partners-catalog-card__desc">{cat.desc}</p>
    </div>
  );
}

function BrandLayerItem({
  layer,
  index,
  isLast,
}: {
  layer: (typeof brandLayers)[number];
  index: number;
  isLast: boolean;
}) {
  const reveal = useReveal('up');
  return (
    <div style={{ display: 'contents' }}>
      <div
        className={`partners-brand-layer ${reveal.className}`}
        ref={reveal.ref}
        style={{ transitionDelay: `${index * 0.12}s` }}
      >
        <span className="partners-brand-layer__label">{layer.label}</span>
        <div className="partners-brand-layer__chips">
          {layer.tags.map((tag) => (
            <span className="partners-brand-chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      {!isLast && <span className="partners-brand-connector" />}
    </div>
  );
}

function edgeFromPoint(e: { clientX: number; clientY: number }, rect: DOMRect): 'top' | 'bottom' | 'left' | 'right' {
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  if (Math.abs(x) / rect.width > Math.abs(y) / rect.height) {
    return x > 0 ? 'right' : 'left';
  }
  return y > 0 ? 'bottom' : 'top';
}

const originForEdge: Record<'top' | 'bottom' | 'left' | 'right', string> = {
  top: '50% 0%',
  bottom: '50% 100%',
  left: '0% 50%',
  right: '100% 50%',
};

function PartnerPlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const reveal = useReveal('up');
  const fillRef = useRef<HTMLSpanElement>(null);

  const setFillOrigin = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!fillRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    fillRef.current.style.transformOrigin = originForEdge[edgeFromPoint(e, rect)];
  };

  return (
    <div
      className={`partners-plan-card${plan.highlighted ? ' partners-plan-card--highlight' : ''}${plan.accentOrange ? ' partners-plan-card--accent-orange' : ''} ${reveal.className}`}
      ref={reveal.ref}
      onMouseEnter={setFillOrigin}
      onMouseLeave={setFillOrigin}
    >
      <span className="partners-plan-card__hover-fill" ref={fillRef} />
      {plan.highlighted && <span className="partners-plan-card__recommended">Recommended</span>}
      <span className="partners-plan-card__badge">
        <Icon svg={planIcons[plan.icon]} className="partners-plan-card__badge-icon" />
        {plan.name}
      </span>
      <div className="partners-plan-card__price-row">
        <span className="partners-plan-card__price">{plan.price}</span>
        <span className="partners-plan-card__price-note">{plan.priceNote}</span>
        {plan.secondary && (
          <span className="partners-plan-card__secondary">
            <span className="partners-plan-card__secondary-amount">{plan.secondary.split('/')[0]}</span>
            <span className="partners-plan-card__secondary-period">/{plan.secondary.split('/')[1]}</span>
          </span>
        )}
      </div>
      <p className="partners-plan-card__desc">{plan.desc}</p>
      <a href="/contact" className="partners-plan-card__cta">
        {plan.cta}
      </a>
      <div className="partners-plan-card__features">
        {plan.features.map((f) => (
          <div className="partners-plan-card__feature" key={f}>
            <span className="partners-plan-card__check">
              <CheckIcon />
            </span>
            {f}
          </div>
        ))}
      </div>
    </div>
  );
}

function FulfillmentCard({
  svc,
  isActive,
  onEnter,
  onLeave,
}: {
  svc: (typeof fulfillmentServices)[number];
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const reveal = useReveal('up');
  return (
    <div
      className={`plan-card${isActive ? ' plan-card--active' : ''} ${reveal.className}`}
      ref={reveal.ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="plan-card__glow" />
      <span className="plan-card__category">{svc.category}</span>
      <h3 className="plan-card__title">{svc.title}</h3>
      <div className="plan-card__footer">
        {svc.customQuote ? (
          <>
            <span className="plan-card__price partners-fulfillment__price">Custom Quote</span>
            {svc.note && <span className="plan-card__note">{svc.note}</span>}
          </>
        ) : (
          <>
            <span className="plan-card__label">Starting at</span>
            <div className="plan-card__price-row">
              <span className="plan-card__price partners-fulfillment__price">{svc.price}</span>
              {svc.note && <span className="plan-card__note">{svc.note}</span>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function CompareCellView({ value }: { value: CompareCell }) {
  if (value === true) {
    return (
      <span className="partners-compare__check">
        <CheckIcon />
      </span>
    );
  }
  if (value === false) {
    return <span className="partners-compare__dash" aria-hidden="true" />;
  }
  return <span>{value}</span>;
}

const fulfillmentServices = [
  { category: 'AI', title: 'AI Receptionist', price: '$1,500', note: 'Ongoing from $249/mo' },
  { category: 'AI', title: 'AI Automation System', price: '$2,500' },
  { category: 'Web', title: 'Professional Business Website', price: '$1,500' },
  { category: 'Web', title: 'Advanced Business Website', price: '$3,500' },
  { category: 'Software', title: 'Custom Web Application', price: '$5,000' },
  { category: 'Software', title: 'SaaS MVP', price: '$7,500' },
  { category: 'Software', title: 'Advanced SaaS Platform', customQuote: true, note: 'Custom scope.' },
  { category: 'AI', title: 'Custom AI Agent', price: '$3,500' },
  { category: 'AI', title: 'RAG / Business Knowledge AI', price: '$5,000' },
  { category: 'Software', title: 'CRM / Operations Platform', price: '$6,500' },
];

const verticalsRow1 = ['Digital Agencies', 'Consultants', 'CRM Consultants', 'Business Consultants', 'Freelance Developers', 'Managed Service Providers'];
const verticalsRow2 = ['Marketing Agencies', 'Automation Agencies', 'Web Designers', 'IT Companies', 'Entrepreneurs', 'Existing AI Agencies'];

function MarginCalculator() {
  const [revenue, setRevenue] = useState(3500);
  const [fulfillment, setFulfillment] = useState(1500);
  const [additional, setAdditional] = useState(250);

  const margin = revenue - fulfillment - additional;
  const marginPct = revenue > 0 ? Math.round((margin / revenue) * 100) : 0;

  const handleNumber = (setter: (n: number) => void) => (raw: string) => {
    const n = Number(raw.replace(/[^0-9]/g, ''));
    setter(Number.isNaN(n) ? 0 : n);
  };

  const cardReveal = useReveal('up');

  return (
    <div className={`partners-calculator__card ${cardReveal.className}`} ref={cardReveal.ref}>
      <div className="partners-calculator__inputs">
        <h3 className="partners-calculator__card-title">Model Your Own Economics</h3>
        <div className="partners-calculator__field">
          <label htmlFor="calc-revenue">Gross revenue</label>
          <div className="partners-calculator__input-wrap">
            <span>$</span>
            <input
              id="calc-revenue"
              type="text"
              inputMode="numeric"
              value={revenue}
              onChange={(e) => handleNumber(setRevenue)(e.target.value)}
            />
          </div>
        </div>
        <div className="partners-calculator__field">
          <label htmlFor="calc-fulfillment">VTS fulfillment cost</label>
          <div className="partners-calculator__input-wrap">
            <span>$</span>
            <input
              id="calc-fulfillment"
              type="text"
              inputMode="numeric"
              value={fulfillment}
              onChange={(e) => handleNumber(setFulfillment)(e.target.value)}
            />
          </div>
        </div>
        <div className="partners-calculator__field">
          <label htmlFor="calc-additional">Additional partner costs</label>
          <div className="partners-calculator__input-wrap">
            <span>$</span>
            <input
              id="calc-additional"
              type="text"
              inputMode="numeric"
              value={additional}
              onChange={(e) => handleNumber(setAdditional)(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="partners-calculator__result">
        <div className="partners-calculator__recap">
          <div className="partners-calculator__recap-row">
            <span>Gross revenue</span>
            <span>${revenue.toLocaleString()}</span>
          </div>
          <div className="partners-calculator__recap-row">
            <span>Fulfillment cost</span>
            <span>${fulfillment.toLocaleString()}</span>
          </div>
        </div>
        <span className="partners-calculator__result-label">Estimated gross margin</span>
        <span className="partners-calculator__result-value">${margin.toLocaleString()}</span>
        <span className="partners-calculator__result-pct">Margin {marginPct}%</span>
        <p className="partners-calculator__disclaimer">
          Illustrative calculation only. Actual pricing, costs, taxes, fees, refunds, support obligations and profitability vary by project.
        </p>
      </div>
    </div>
  );
}

export default function PartnersPage() {
  const [fulfillmentActiveIndex, setFulfillmentActiveIndex] = useState(0);
  const [statsActiveIndex, setStatsActiveIndex] = useState(0);
  const [pipelineActiveIndex, setPipelineActiveIndex] = useState(0);

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

  const heroCopy = useReveal('left');
  const heroGraphic = useReveal('right');
  const statsReveal = useReveal('up');
  const tiersHead = useReveal('up');
  const pipelineHead = useReveal('up');
  const catalogHead = useReveal('up');
  const brandCopy = useReveal('left');
  const brandGraphic = useReveal('right');
  const intelLeft = useReveal('left');
  const intelRight = useReveal('right');
  const plansHead = useReveal('up');
  const compareHead = useReveal('up');
  const fulfillmentHead = useReveal('up');
  const calculatorHead = useReveal('up');
  const verticalsHead = useReveal('up');
  const compareTableReveal = useReveal('up');
  const aiFlowBox1 = useReveal<HTMLSpanElement>('up');
  const aiFlowBox2 = useReveal<HTMLSpanElement>('up');
  const aiFlowBox3 = useReveal<HTMLSpanElement>('up');

  return (
    <main className="partners-page partners-body-page">
      <section className="partners-hero section">
        <div className="container partners-hero__container">
          <div className={`partners-hero__copy ${heroCopy.className}`} ref={heroCopy.ref}>
            <span className="partners-hero__pill">
              <Icon svg={vtsSparkleSvg} className="partners-hero__pill-icon" />
              VTS Partner Network
            </span>
            <h1 className="partners-hero__title">Grow Your Agency. We Power the Technology.</h1>
            <p className="partners-hero__desc">
              Offer premium AI, automation, software, SaaS, web development and digital
              transformation solutions without building a large technical team internally.
            </p>
            <p className="partners-hero__desc">
              Van Tech Systems provides the technology and delivery infrastructure. You
              focus on relationships, sales, strategy and growth.
            </p>
            <div className="partners-hero__actions">
              <a href="/contact" className="btn btn-outline">
                Become VTS Partner
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
              <a href="#tiers" className="btn btn-outline">
                Explore Pricing Partner
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
            </div>
          </div>

          <div className={`partners-hero__graphic ${heroGraphic.className}`} ref={heroGraphic.ref}>
            <img src={heroChartImg} alt="" className="partners-hero__chart-img" loading="eager" />
            <img src={heroStarImg} alt="" className="partners-hero__star partners-hero__star--1" loading="eager" />
            <img src={heroStarImg} alt="" className="partners-hero__star partners-hero__star--2" loading="eager" />
          </div>
        </div>

        <div className="container">
          <div className={`partners-stats ${statsReveal.className}`} ref={statsReveal.ref}>
            {stats.map((s, i) => (
              <div
                className={`partners-stat${i === statsActiveIndex ? ' partners-stat--active' : ''}`}
                key={s.label}
                onMouseEnter={() => setStatsActiveIndex(i)}
                onMouseLeave={() => setStatsActiveIndex(0)}
              >
                <div className="partners-stat__glow" />
                <span className="partners-stat__value">{s.value}</span>
                <span className="partners-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Tiers ---------- */}
      <section className="partners-tiers section" id="tiers">
        <span className="partners-tiers__glow-left" />
        <span className="partners-tiers__glow-right" />
        <div className="container">
          <div className={`partners-tiers__head ${tiersHead.className}`} ref={tiersHead.ref}>
            <div className="partners-tiers__badge">
              <img src={tiersBadgeGlow} alt="" className="partners-tiers__badge-bg" loading="lazy" />
              <Icon svg={mdiHandshakeSvg} className="partners-tiers__badge-icon" />
            </div>
            <h2 className="section-title partners-tiers__title">
              <span>One Technology Partner.</span>
              <span>Multiple Ways to Grow.</span>
            </h2>
          </div>

          <div className="partners-tiers__grid">
            {tiers.map((tier) => (
              <TierCard tier={tier} key={tier.title} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Pipeline: You Win the Client ---------- */}
      <section className="partners-pipeline section">
        <div className="container">
          <div className={`section-head ${pipelineHead.className}`} ref={pipelineHead.ref}>
            <h2 className="section-title partners-pipeline__title">
              <span>You Win the Client.</span>
              <span>We Help Deliver the Technology.</span>
            </h2>
          </div>

          <div className="partners-pipeline__track">
            {pipelineStages.map((stage, i) => (
              <PipelineStep
                stage={stage}
                isLast={i === pipelineStages.length - 1}
                isActive={i === pipelineActiveIndex}
                onEnter={() => setPipelineActiveIndex(i)}
                onLeave={() => setPipelineActiveIndex(0)}
                key={stage.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Service catalog ---------- */}
      <section className="partners-catalog section">
        <div className="container">
          <div className={`section-head ${catalogHead.className}`} ref={catalogHead.ref}>
            <span className="eyebrow-pill partners-catalog__badge">What partners can sell</span>
            <h2 className="section-title partners-catalog__title">
              <span>Expand Your Service Catalog Without</span>
              <span>Expanding Your Engineering Team.</span>
            </h2>
          </div>

          <div className="partners-catalog__grid-top">
            {catalogTop.map((cat) => (
              <CatalogTopCard cat={cat} key={cat.title} />
            ))}
          </div>

          <div className="partners-catalog__grid-bottom">
            {catalogBottom.map((cat) => (
              <CatalogBottomCard cat={cat} key={cat.title} />
            ))}
          </div>

          <div className="partners-catalog__cta">
            <a href="/contact" className="btn btn-outline-gradient">
              Get Started
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Your Brand in Front ---------- */}
      <section className="partners-brand section">
        <div className="container partners-brand__row">
          <div className={brandCopy.className} ref={brandCopy.ref}>
            <h2 className="partners-brand__title">
              <span>Your Brand in Front.</span>
              <span>Our Technology</span>
              <span>Behind It.</span>
            </h2>
            <p className="partners-brand__desc">
              Keep your client relationship while gaining access to a broader technology delivery capability.
            </p>
          </div>

          <div className={`partners-brand-layers ${brandGraphic.className}`} ref={brandGraphic.ref}>
            {brandLayers.map((layer, i) => (
              <BrandLayerItem layer={layer} index={i} isLast={i === brandLayers.length - 1} key={layer.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Visibility + AI Engine ---------- */}
      <section className="partners-intel section">
        <div className="container">
          <div className="partners-intel__row first-row-copy">
            <div className={intelLeft.className} ref={intelLeft.ref}>
              <h2 className="partners-intel__col-title partners-intel__col-title--visibility">
                <span>Visibility Across</span>
                <span>Every Delivery Stage</span>
              </h2>
              <p className="partners-intel__col-desc partners-intel__col-desc--visibility">
                Partners see delivery progress, stage status and upcoming milestones for the projects they bring to Van Tech Systems.
              </p>
            </div>
            <div className="partners-intel__decor">
              <span className="partners-intel__decor-ring partners-intel__decor-ring--1" />
              <span className="partners-intel__decor-ring partners-intel__decor-ring--2" />
              <span className="partners-intel__decor-shadow" />
              <div className="partners-intel__decor-card-wrap partners-intel__decor-card-wrap--1">
                <div className="partners-intel__decor-card partners-intel__decor-card--1">
                  <span className="partners-intel__decor-card-icon">
                    <PersonIcon />
                  </span>
                  <span className="partners-intel__decor-card-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
              </div>
              <div className="partners-intel__decor-card-wrap partners-intel__decor-card-wrap--2">
                <div className="partners-intel__decor-card partners-intel__decor-card--2">
                  <span className="partners-intel__decor-card-icon">
                    <PersonIcon />
                  </span>
                  <span className="partners-intel__decor-card-lines">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                </div>
              </div>
              <span className="partners-intel__decor-avatar">
                <img src={visibilityOrb} alt="" className="partners-intel__decor-orb" loading="lazy" />
                <Icon svg={userVisibleSvg} className="partners-intel__decor-icon" />
              </span>
            </div>
          </div>

          <div className="partners-intel__row partners-intel__row--reverse">
            <div className="partners-ai-diagram">
              <div className="partners-ai-sphere">
                <img
                  src={orbSphere}
                  alt=""
                  className="orb-sphere__img orb-sphere__img--spin"
                  style={{ borderRadius: '50%', width: '100%', height: '100%' }}
                  loading="lazy"
                />
                <div className="partners-ai-sphere__label">
                  <strong>VTS</strong>
                  <span>AI ENGINE</span>
                </div>
              </div>

              <div className="partners-ai-chips">
                {aiEngineChips.map((chip) => (
                  <span className="partners-brand-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>

              <div className="partners-ai-flow">
                <span className={`partners-ai-flow__box ${aiFlowBox1.className}`} ref={aiFlowBox1.ref}>Client Business</span>
                <span className="partners-ai-flow__connector" />
                <span className={`partners-ai-flow__box ${aiFlowBox2.className}`} ref={aiFlowBox2.ref}>VTS AI Engine</span>
                <span className="partners-ai-flow__connector" />
                <span className={`partners-ai-flow__box ${aiFlowBox3.className}`} ref={aiFlowBox3.ref}>Customer Interactions</span>
              </div>
            </div>

            <div className={intelRight.className} ref={intelRight.ref}>
              <h2 className="partners-intel__col-title partners-intel__col-title--ai">
                <span>One AI Engine.</span>
                <span>Many Client</span>
                <span>Touchpoints.</span>
              </h2>
              <p className="partners-intel__col-desc partners-intel__col-desc--ai">
                AI systems are assembled from the channels and data a client actually uses. Integrations shown are conceptual examples
                and are confirmed during scoping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Partnership pricing plans ---------- */}
      <section className="partners-plans section">
        <div className="container">
          <div className={`partners-tiers__head ${plansHead.className}`} ref={plansHead.ref}>
            <div className="partners-tiers__badge">
              <img src={tiersBadgeGlow} alt="" className="partners-tiers__badge-bg" loading="lazy" />
              <Icon svg={plansCoinSvg} className="partners-tiers__badge-icon" />
            </div>
            <h2 className="section-title partners-plans__title">
              <span>Choose the Partnership That</span>
              <span>Fits Your Business</span>
            </h2>
          </div>

          <div className="partners-plans__grid">
            {plans.map((plan) => (
              <PartnerPlanCard plan={plan} key={plan.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Compare partnership levels ---------- */}
      <section className="partners-compare section">
        <div className="container">
          <div className={`section-head ${compareHead.className}`} ref={compareHead.ref}>
            <h2 className="section-title">Compare partnership levels</h2>
          </div>

          <div className={`partners-compare__table-wrap ${compareTableReveal.className}`} ref={compareTableReveal.ref}>
            <table className="partners-compare__table">
              <thead>
                <tr>
                  <th>Plans</th>
                  <th>Connect</th>
                  <th>Pro Partner</th>
                  <th>White Label</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>
                      <CompareCellView value={row.connect} />
                    </td>
                    <td>
                      <CompareCellView value={row.pro} />
                    </td>
                    <td>
                      <CompareCellView value={row.white} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ---------- Partner fulfillment pricing ---------- */}
      <section className="partners-fulfillment section">
        <div className="container">
          <div className={`section-head ${fulfillmentHead.className}`} ref={fulfillmentHead.ref}>
            <span className="eyebrow-pill partners-fulfillment__badge">Service partner rates</span>
            <h2 className="section-title">Partner Fulfillment Pricing</h2>
          </div>

          <div className="pricing__grid">
            {fulfillmentServices.map((svc, i) => (
              <FulfillmentCard
                svc={svc}
                isActive={i === fulfillmentActiveIndex}
                onEnter={() => setFulfillmentActiveIndex(i)}
                onLeave={() => setFulfillmentActiveIndex(0)}
                key={svc.title}
              />
            ))}
          </div>

          <p className="partners-fulfillment__note">
            Final partner pricing is determined after technical scoping. Third-party software, infrastructure, messaging, telephony,
            AI usage, hosting, licensing and other external costs may be billed separately where applicable.
          </p>
        </div>
      </section>

      {/* ---------- Margin calculator ---------- */}
      <section className="partners-calculator section">
        <div className="container">
          <div className={`section-head ${calculatorHead.className}`} ref={calculatorHead.ref}>
            <h2 className="section-title">Partner Margin Calculator</h2>
          </div>

          <MarginCalculator />
        </div>
      </section>

      {/* ---------- Industries served ---------- */}
      <section className="partners-verticals section">
        <div className="container">
          <div className={`section-head ${verticalsHead.className}`} ref={verticalsHead.ref}>
            <span className="eyebrow-pill partners-verticals__badge">Industries</span>
            <h2 className="section-title partners-verticals__title">
              <span>Built for Businesses</span>
              <span>That Want to Sell More</span>
              <span>Than They Build.</span>
            </h2>
          </div>
          <div className="partners-verticals__glow-wrap">
          <img src={orbSphere} alt="" className="partners-verticals__glow partners-verticals__glow--blur" loading="lazy" />
          <img src={orbSphere} alt="" className="partners-verticals__glow" loading="lazy" />
        </div>
          <div className="partners-verticals__rows">
            <div className="partners-verticals__row-mask">
              <div className="partners-verticals__row partners-verticals__row--left">
                {[...verticalsRow1, ...verticalsRow1].map((v, i) => (
                  <span className="partners-vertical-pill" key={`${v}-${i}`}>
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="partners-verticals__row-mask">
              <div className="partners-verticals__row partners-verticals__row--right">
                {[...verticalsRow2, ...verticalsRow2].map((v, i) => (
                  <span className="partners-vertical-pill" key={`${v}-${i}`}>
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="partners-verticals__cta">
            <a href="/contact" className="btn btn-outline-gradient">
              Get Started
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
