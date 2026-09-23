import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './partners.css';
import Icon from '../../components/Icon';
import FAQ from '../../components/FAQ';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';
import { type SupportedLanguage } from '../../i18n/i18n';
import { localizePath } from '../../i18n/localizedPath';

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

// ---------- Types ----------

type StatItem = { value: string; label: string };

type TierColumn = { label: string; items: string[] };
type Tier = { id: string; title: string; desc: string; columns: TierColumn[]; cta: string };

type PipelineStage = { name: string; who: string };

type CatalogChip = { id: string; variant?: string; label: string };
type CatalogCardItem = { id: string; label: string };
type CatalogTopCardData = {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  wrapChips?: boolean;
  chipRows?: CatalogChip[][];
  items: CatalogCardItem[];
  titleFirst?: boolean;
  iconRight?: boolean;
};
type CatalogBottomCardData = {
  slug: string;
  icon: string;
  title: string;
  desc: string;
  items: CatalogCardItem[];
};

type BrandLayer = { label: string; tags: string[] };

type PlanConfig = {
  id: string;
  icon: string;
  price: string;
  secondaryAmount?: string;
  highlighted?: boolean;
  accentOrange?: boolean;
};
type PlanText = {
  name: string;
  priceNote: string;
  secondaryPeriod?: string;
  desc: string;
  cta: string;
  features: string[];
};
type Plan = PlanConfig & PlanText;

type FulfillmentConfig = { id: string; category: string; price?: string; customQuote?: boolean };
type FulfillmentText = { title: string; note?: string };
type FulfillmentService = FulfillmentConfig & FulfillmentText;

type CompareCell = boolean | string;
type CompareRow = { label: string; connect: CompareCell; pro: CompareCell; white: CompareCell };

// ---------- Static (non-text) configuration ----------
// Text for all of these is pulled from the `partners` i18n namespace inside
// PartnersPage() and merged in by index/id at render time.

const tierIds = ['referral', 'reseller', 'white-label', 'strategic'];

const pipelineStageCount = 7;

const catalogIcons: Record<string, string> = {
  software: catalogSoftwareSvg,
  globe: catalogGlobeSvg,
  consulting: catalogConsultingSvg,
};

const catalogTopConfig: { slug: string; icon: string; wrapChips?: boolean; chipRows?: string[][]; items: string[]; titleFirst?: boolean; iconRight?: boolean }[] = [
  {
    slug: 'ai-solutions',
    icon: 'software',
    wrapChips: true,
    chipRows: [
      ['ai-receptionists', 'ai-voice-agents', 'ai-chat-agents'],
      ['ai-lead-qualification', 'ai-customer-support', 'ai-knowledge-systems'],
      ['ai-knowledge-systems--bottom', 'ai-workflow-automation'],
    ],
    items: ['ai-receptionists', 'ai-voice-agents', 'ai-chat-agents', 'ai-lead-qualification', 'ai-customer-support', 'ai-knowledge-systems', 'ai-workflow-automation'],
  },
  {
    slug: 'software',
    icon: 'software',
    titleFirst: true,
    iconRight: true,
    items: ['custom-web-applications', 'saas-platforms', 'marketplace-platforms', 'client-portals', 'internal-business-systems', 'crm-platforms'],
  },
];

const catalogBottomConfig: { slug: string; icon: string; items: string[] }[] = [
  {
    slug: 'automation',
    icon: 'software',
    items: ['crm-automation', 'email-sms-workflows', 'lead-follow-up-systems', 'operations-automation', 'appointment-automation', 'business-process-automation'],
  },
  {
    slug: 'digital-platforms',
    icon: 'globe',
    items: ['premium-website', 'e-commerce', 'customer-portals', 'business-dashboards', 'membership-platforms'],
  },
  {
    slug: 'consulting',
    icon: 'consulting',
    items: ['product-strategy', 'technology-architecture', 'ai-readiness', 'digital-transformation', 'system-audits'],
  },
];

const planIcons: Record<string, string> = {
  star: plansStarSvg,
  flash: plansFlashSvg,
};

const planConfig: PlanConfig[] = [
  { id: 'connect', icon: 'star', price: '$0' },
  { id: 'pro', icon: 'flash', price: '$499', secondaryAmount: '$99', highlighted: true },
  { id: 'white', icon: 'star', price: '$1,499', secondaryAmount: '$299', accentOrange: true },
];

const fulfillmentConfig: FulfillmentConfig[] = [
  { id: 'ai-receptionist', category: 'AI', price: '$1,500' },
  { id: 'ai-automation-system', category: 'AI', price: '$2,500' },
  { id: 'professional-business-website', category: 'Web', price: '$1,500' },
  { id: 'advanced-business-website', category: 'Web', price: '$3,500' },
  { id: 'custom-web-application', category: 'Software', price: '$5,000' },
  { id: 'saas-mvp', category: 'Software', price: '$7,500' },
  { id: 'advanced-saas-platform', category: 'Software', customQuote: true },
  { id: 'custom-ai-agent', category: 'AI', price: '$3,500' },
  { id: 'rag-business-knowledge-ai', category: 'AI', price: '$5,000' },
  { id: 'crm-operations-platform', category: 'Software', price: '$6,500' },
];

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

function TierCard({ tier }: { tier: Tier }) {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language as SupportedLanguage) || 'en';
  const reveal = useReveal('up');
  return (
    <div className={`partners-tier-card ${reveal.className}`} ref={reveal.ref}>
      <img src={tiersGlowTexture} alt="" className="partners-tier-card__bg" loading="lazy" />
      <div className="partners-tier-card__content">
        <h3 className="partners-tier-card__title">{tier.title}</h3>
        <p
          className={`partners-tier-card__desc${tier.id === 'referral' ? ' partners-tier-card__desc--referral' : ''}`}
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
        <a href={localizePath('/contact', currentLang)} className="partners-tier-card__cta">
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
  stage: PipelineStage;
  isLast: boolean;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const { i18n } = useTranslation();
  const reveal = useReveal('up');
  return (
    <div
      className={`partners-pipeline-step partners-pipeline-step--${i18n.language}${isLast ? ' partners-pipeline-step--last' : ''}${isActive ? ' partners-pipeline-step--active' : ''} ${reveal.className}`}
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

function CatalogTopCard({ cat }: { cat: CatalogTopCardData }) {
  const { i18n } = useTranslation();
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
                  const suffix = entry.variant ? `${entry.id}-${entry.variant}` : entry.id;
                  return (
                    <span
                      className={`partners-chip partners-chip--glass partners-chip--${suffix} partners-chip--${i18n.language}`}
                      key={`${entry.id}-${entry.variant ?? ''}`}
                    >
                      {entry.label}
                    </span>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`partners-catalog-card__chips-grid partners-catalog-card__chips-grid--${i18n.language}${cat.iconRight ? ' partners-catalog-card__chips-grid--icon-right' : ''}`}
          >
            {cat.items.map((item) => (
              <span
                className={`partners-chip partners-chip--glass partners-chip--${item.id} partners-chip--${i18n.language}`}
                key={item.id}
              >
                {item.label}
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

function CatalogBottomCard({ cat }: { cat: CatalogBottomCardData }) {
  const { i18n } = useTranslation();
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
        <div className={`partners-catalog-card__chips-grid partners-catalog-card__chips-grid--sm partners-catalog-card__chips-grid--${i18n.language}`}>
          {cat.items.map((item) => (
            <span
              className={`partners-chip partners-chip--glass partners-chip--sm partners-chip--${item.id} partners-chip--${i18n.language}`}
              key={item.id}
            >
              {item.label}
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
  layer: BrandLayer;
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

function PartnerPlanCard({ plan }: { plan: Plan }) {
  const { t, i18n } = useTranslation('partners');
  const currentLang = (i18n.language as SupportedLanguage) || 'en';
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
      {plan.highlighted && <span className="partners-plan-card__recommended">{t('plans.recommended')}</span>}
      <span className="partners-plan-card__badge">
        <Icon svg={planIcons[plan.icon]} className="partners-plan-card__badge-icon" />
        {plan.name}
      </span>
      <div className="partners-plan-card__price-row">
        <span className="partners-plan-card__price">{plan.price}</span>
        <span className="partners-plan-card__price-note">{plan.priceNote}</span>
        {plan.secondaryAmount && (
          <span className="partners-plan-card__secondary">
            <span className="partners-plan-card__secondary-amount">{plan.secondaryAmount}</span>
            <span className="partners-plan-card__secondary-period">/{plan.secondaryPeriod}</span>
          </span>
        )}
      </div>
      <p className="partners-plan-card__desc">{plan.desc}</p>
      <a href={localizePath('/contact', currentLang)} className="partners-plan-card__cta">
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
  svc: FulfillmentService;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const { t } = useTranslation('partners');
  const reveal = useReveal('up');
  return (
    <div
      className={`plan-card${isActive ? ' plan-card--active' : ''} ${reveal.className}`}
      ref={reveal.ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="plan-card__glow" />
      <span className="plan-card__category">{t(`fulfillment.categories.${svc.category}`)}</span>
      <h3 className="plan-card__title">{svc.title}</h3>
      <div className="plan-card__footer">
        {svc.customQuote ? (
          <>
            <span className="plan-card__price partners-fulfillment__price">{t('fulfillment.customQuoteLabel')}</span>
            {svc.note && <span className="plan-card__note">{svc.note}</span>}
          </>
        ) : (
          <>
            <span className="plan-card__label">{t('fulfillment.startingAt')}</span>
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

function MarginCalculator() {
  const { t } = useTranslation('partners');
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
        <h3 className="partners-calculator__card-title">{t('calculator.cardTitle')}</h3>
        <div className="partners-calculator__field">
          <label htmlFor="calc-revenue">{t('calculator.grossRevenue')}</label>
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
          <label htmlFor="calc-fulfillment">{t('calculator.fulfillmentCost')}</label>
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
          <label htmlFor="calc-additional">{t('calculator.additionalCosts')}</label>
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
            <span>{t('calculator.grossRevenue')}</span>
            <span>${revenue.toLocaleString()}</span>
          </div>
          <div className="partners-calculator__recap-row">
            <span>{t('calculator.recapFulfillmentCost')}</span>
            <span>${fulfillment.toLocaleString()}</span>
          </div>
        </div>
        <span className="partners-calculator__result-label">{t('calculator.resultLabel')}</span>
        <span className="partners-calculator__result-value">${margin.toLocaleString()}</span>
        <span className="partners-calculator__result-pct">{t('calculator.marginPrefix')} {marginPct}%</span>
        <p className="partners-calculator__disclaimer">{t('calculator.disclaimer')}</p>
      </div>
    </div>
  );
}

export default function PartnersPage() {
  const { t, i18n } = useTranslation('partners');
  const currentLang = (i18n.language as SupportedLanguage) || 'en';
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

  // ---------- Translated content, merged with the static config above ----------

  const stats = t('stats', { returnObjects: true }) as StatItem[];

  const tiersText = t('tiers.items', { returnObjects: true }) as Omit<Tier, 'id'>[];
  const tiers: Tier[] = tierIds.map((id, i) => ({ id, ...tiersText[i] }));

  const pipelineStages = t('pipeline.stages', { returnObjects: true }) as PipelineStage[];

  const catalogItemLabels = t('catalog.items', { returnObjects: true }) as Record<string, string>;

  const catalogTopText = t('catalog.top', { returnObjects: true }) as { title: string; desc: string }[];
  const catalogTop: CatalogTopCardData[] = catalogTopConfig.map((cfg, i) => ({
    ...cfg,
    title: catalogTopText[i].title,
    desc: catalogTopText[i].desc,
    items: cfg.items.map((id) => ({ id, label: catalogItemLabels[id] })),
    chipRows: cfg.chipRows?.map((row) =>
      row.map((entry) => {
        const [id, variant] = entry.split('--');
        return { id, variant, label: catalogItemLabels[id] };
      }),
    ),
  }));

  const catalogBottomText = t('catalog.bottom', { returnObjects: true }) as { title: string; desc: string }[];
  const catalogBottom: CatalogBottomCardData[] = catalogBottomConfig.map((cfg, i) => ({
    ...cfg,
    title: catalogBottomText[i].title,
    desc: catalogBottomText[i].desc,
    items: cfg.items.map((id) => ({ id, label: catalogItemLabels[id] })),
  }));

  const brandLayers = t('brand.layers', { returnObjects: true }) as BrandLayer[];

  const aiEngineChips = t('intel.aiEngine.chips', { returnObjects: true }) as string[];

  const plansText = t('plans.items', { returnObjects: true }) as PlanText[];
  const plans: Plan[] = planConfig.map((cfg, i) => ({ ...cfg, ...plansText[i] }));

  const compareRows = t('compare.rows', { returnObjects: true }) as CompareRow[];

  const fulfillmentText = t('fulfillment.services', { returnObjects: true }) as FulfillmentText[];
  const fulfillmentServices: FulfillmentService[] = fulfillmentConfig.map((cfg, i) => ({ ...cfg, ...fulfillmentText[i] }));

  const verticalsRow1 = t('verticals.row1', { returnObjects: true }) as string[];
  const verticalsRow2 = t('verticals.row2', { returnObjects: true }) as string[];

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
              {t('hero.pill')}
            </span>
            <h1 className="partners-hero__title">{t('hero.title')}</h1>
            <p className="partners-hero__desc">{t('hero.desc1')}</p>
            <p className="partners-hero__desc">{t('hero.desc2')}</p>
            <div className="partners-hero__actions">
              <a href={localizePath('/contact', currentLang)} className="btn btn-outline">
                {t('hero.ctaPrimary')}
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
              <a href="#tiers" className="btn btn-outline">
                {t('hero.ctaSecondary')}
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
              <span>{t('tiers.titleLine1')}</span>
              <span>{t('tiers.titleLine2')}</span>
            </h2>
          </div>

          <div className="partners-tiers__grid">
            {tiers.map((tier) => (
              <TierCard tier={tier} key={tier.id} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Pipeline: You Win the Client ---------- */}
      <section className="partners-pipeline section">
        <div className="container">
          <div className={`section-head ${pipelineHead.className}`} ref={pipelineHead.ref}>
            <h2 className={`section-title partners-pipeline__title partners-pipeline__title--${i18n.language}`}>
              <span>{t('pipeline.titleLine1')}</span>
              <span>{t('pipeline.titleLine2')}</span>
            </h2>
          </div>

          <div className="partners-pipeline__track">
            {pipelineStages.slice(0, pipelineStageCount).map((stage, i) => (
              <PipelineStep
                stage={stage}
                isLast={i === pipelineStageCount - 1}
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
            <span className="eyebrow-pill partners-catalog__badge">{t('catalog.badge')}</span>
            <h2 className={`section-title partners-catalog__title partners-catalog__title--${i18n.language}`}>
              <span>{t('catalog.titleLine1')}</span>
              <span>{t('catalog.titleLine2')}</span>
            </h2>
          </div>

          <div className="partners-catalog__grid-top">
            {catalogTop.map((cat) => (
              <CatalogTopCard cat={cat} key={cat.slug} />
            ))}
          </div>

          <div className="partners-catalog__grid-bottom">
            {catalogBottom.map((cat) => (
              <CatalogBottomCard cat={cat} key={cat.slug} />
            ))}
          </div>

          <div className="partners-catalog__cta">
            <a href={localizePath('/contact', currentLang)} className="btn btn-outline-gradient">
              {t('catalog.cta')}
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------- Your Brand in Front ---------- */}
      <section className="partners-brand section">
        <div className="container partners-brand__row">
          <div className={brandCopy.className} ref={brandCopy.ref}>
            <h2 className={`partners-brand__title partners-brand__title--${i18n.language}`}>
              <span>{t('brand.titleLine1')}</span>
              <span>{t('brand.titleLine2')}</span>
              <span>{t('brand.titleLine3')}</span>
            </h2>
            <p className="partners-brand__desc">{t('brand.desc')}</p>
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
                <span>{t('intel.visibility.titleLine1')}</span>
                <span>{t('intel.visibility.titleLine2')}</span>
              </h2>
              <p className="partners-intel__col-desc partners-intel__col-desc--visibility">{t('intel.visibility.desc')}</p>
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
                <span className={`partners-ai-flow__box ${aiFlowBox1.className}`} ref={aiFlowBox1.ref}>{t('intel.aiEngine.flow.clientBusiness')}</span>
                <span className="partners-ai-flow__connector" />
                <span className={`partners-ai-flow__box ${aiFlowBox2.className}`} ref={aiFlowBox2.ref}>VTS AI Engine</span>
                <span className="partners-ai-flow__connector" />
                <span className={`partners-ai-flow__box ${aiFlowBox3.className}`} ref={aiFlowBox3.ref}>{t('intel.aiEngine.flow.customerInteractions')}</span>
              </div>
            </div>

            <div className={intelRight.className} ref={intelRight.ref}>
              <h2 className={`partners-intel__col-title partners-intel__col-title--ai partners-intel__col-title--ai-${i18n.language}`}>
                <span>{t('intel.aiEngine.titleLine1')}</span>
                <span>{t('intel.aiEngine.titleLine2')}</span>
                <span>{t('intel.aiEngine.titleLine3')}</span>
              </h2>
              <p className="partners-intel__col-desc partners-intel__col-desc--ai">{t('intel.aiEngine.desc')}</p>
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
              <span>{t('plans.titleLine1')}</span>
              <span>{t('plans.titleLine2')}</span>
            </h2>
          </div>

          <div className="partners-plans__grid">
            {plans.map((plan) => (
              <PartnerPlanCard plan={plan} key={plan.id} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Compare partnership levels ---------- */}
      <section className="partners-compare section">
        <div className="container">
          <div className={`section-head ${compareHead.className}`} ref={compareHead.ref}>
            <h2 className="section-title">{t('compare.title')}</h2>
          </div>

          <div className={`partners-compare__table-wrap ${compareTableReveal.className}`} ref={compareTableReveal.ref}>
            <table className="partners-compare__table">
              <thead>
                <tr>
                  <th>{t('compare.headers.plans')}</th>
                  <th>{t('compare.headers.connect')}</th>
                  <th>{t('compare.headers.pro')}</th>
                  <th>{t('compare.headers.white')}</th>
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
            <span className="eyebrow-pill partners-fulfillment__badge">{t('fulfillment.badge')}</span>
            <h2 className="section-title">{t('fulfillment.title')}</h2>
          </div>

          <div className="pricing__grid">
            {fulfillmentServices.map((svc, i) => (
              <FulfillmentCard
                svc={svc}
                isActive={i === fulfillmentActiveIndex}
                onEnter={() => setFulfillmentActiveIndex(i)}
                onLeave={() => setFulfillmentActiveIndex(0)}
                key={svc.id}
              />
            ))}
          </div>

          <p className="partners-fulfillment__note">{t('fulfillment.note')}</p>
        </div>
      </section>

      {/* ---------- Margin calculator ---------- */}
      <section className="partners-calculator section">
        <div className="container">
          <div className={`section-head ${calculatorHead.className}`} ref={calculatorHead.ref}>
            <h2 className="section-title">{t('calculator.title')}</h2>
          </div>

          <MarginCalculator />
        </div>
      </section>

      {/* ---------- Industries served ---------- */}
      <section className="partners-verticals section">
        <div className="container">
          <div className={`section-head ${verticalsHead.className}`} ref={verticalsHead.ref}>
            <span className="eyebrow-pill partners-verticals__badge">{t('verticals.badge')}</span>
            <h2 className="section-title partners-verticals__title">
              <span>{t('verticals.titleLine1')}</span>
              <span>{t('verticals.titleLine2')}</span>
              <span>{t('verticals.titleLine3')}</span>
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
            <a href={localizePath('/contact', currentLang)} className="btn btn-outline-gradient">
              {t('verticals.cta')}
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
