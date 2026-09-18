import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const plans = [
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

function PlanCard({
  plan,
  isActive,
  onEnter,
  onLeave,
}: {
  plan: (typeof plans)[number];
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const reveal = useReveal('left');

  return (
    <div
      className={`plan-card${isActive ? ' plan-card--active' : ''} ${reveal.className}`}
      ref={reveal.ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="plan-card__glow" />
      <span className="plan-card__category">{plan.category}</span>
      <h3 className="plan-card__title">{plan.title}</h3>

      <div className="plan-card__footer">
        {plan.customQuote ? (
          <>
            <span className="plan-card__price gradient-text">Custom Quote</span>
            {plan.note && <span className="plan-card__note">{plan.note}</span>}
          </>
        ) : (
          <>
            <span className="plan-card__label">Starting at</span>
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
  const [activeIndex, setActiveIndex] = useState(0);
  const head = useReveal('up');

  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">Pricing</span>
          <h2 className="section-title">Simple Pricing. Serious Software.</h2>
        </div>

        <div className="pricing__grid">
          {plans.map((plan, i) => (
            <PlanCard
              key={plan.title}
              plan={plan}
              isActive={i === activeIndex}
              onEnter={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(0)}
            />
          ))}
        </div>

        <p className="pricing__note">
          Starting prices are planning benchmarks. Final pricing depends on scope,
          architecture, integrations, timeline and technical requirements.
        </p>
      </div>
    </section>
  );
}
