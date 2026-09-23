import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';

type PlanItem = {
  category: 'ai' | 'web' | 'software';
  title: string;
  price?: string;
  note?: string;
  customQuote?: boolean;
};

function PlanCard({
  plan,
  categoryLabel,
  startingAtLabel,
  customQuoteLabel,
  isActive,
  onEnter,
  onLeave,
}: {
  plan: PlanItem;
  categoryLabel: string;
  startingAtLabel: string;
  customQuoteLabel: string;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const reveal = useReveal('left');

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`plan-card${isActive ? ' plan-card--active' : ''} ${reveal.className}`}
      ref={reveal.ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="plan-card__glow" />
      <span className="plan-card__category">{categoryLabel}</span>
      <h3 className="plan-card__title">{plan.title}</h3>

      <div className="plan-card__footer">
        {plan.customQuote ? (
          <>
            <span className="plan-card__price gradient-text">{customQuoteLabel}</span>
            {plan.note && <span className="plan-card__note">{plan.note}</span>}
          </>
        ) : (
          <>
            <span className="plan-card__label">{startingAtLabel}</span>
            <div className="plan-card__price-row">
              <span className="plan-card__price gradient-text">{plan.price}</span>
              {plan.note && <span className="plan-card__note">{plan.note}</span>}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Pricing() {
  const { t } = useTranslation('home');
  const plans = t('pricing.plans', { returnObjects: true }) as PlanItem[];
  const [activeIndex, setActiveIndex] = useState(0);
  const head = useReveal('up');

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">{t('pricing.eyebrow')}</span>
          <h2 className="section-title">{t('pricing.title')}</h2>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <PlanCard
              key={plan.title}
              plan={plan}
              categoryLabel={t(`pricing.categories.${plan.category}`)}
              startingAtLabel={t('pricing.startingAt')}
              customQuoteLabel={t('pricing.customQuote')}
              isActive={i === activeIndex}
              onEnter={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(0)}
            />
          ))}
        </div>

        <p className="pricing__note">{t('pricing.note')}</p>
      </div>
    </section>
  );
}
