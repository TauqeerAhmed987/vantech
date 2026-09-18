import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

const categories = [
  {
    number: '01',
    title: 'AI Systems',
    twoCols: true,
    items: ['AI Agents', 'AI Employees', 'Automation', 'Voice AI', 'Conversational AI', 'Custom AI'],
  },
  {
    number: '02',
    title: 'Digital Products',
    items: ['MVPs', 'SaaS', 'Web Applications', 'Mobile Applications'],
  },
  {
    number: '03',
    title: 'Business Platforms',
    items: ['CRM', 'Client Portals', 'Workflow Systems', 'Operations Software'],
  },
  {
    number: '04',
    title: 'Digital Commerce',
    items: ['Ecommerce', 'Payments', 'Subscriptions', 'AI Commerce'],
  },
];

function CategoryCard({
  cat,
  isActive,
  onEnter,
  onLeave,
}: {
  cat: (typeof categories)[number];
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const reveal = useReveal('left');

  return (
    <div
      className={`category-card${isActive ? ' category-card--active' : ''} ${reveal.className}`}
      ref={reveal.ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="category-card__glow" />
      <span className="category-card__number">{cat.number}</span>
      <h3 className="category-card__title">{cat.title}</h3>
      <ul className={`category-card__list${cat.twoCols ? ' category-card__list--cols' : ''}`}>
        {cat.items.map((item) => (
          <li key={item}>
            <span className="category-card__dot" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const head = useReveal('up');

  return (
    <section className="categories section" id="services">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">What we build</span>
          <h2 className="section-title">Four categories. One engineering standard.</h2>
          <p className="section-subtitle">
            Every engagement is scoped, architected and delivered by the same team —
            from a first MVP to a multi-tenant platform.
          </p>
        </div>

        <div className="categories__grid">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.number}
              cat={cat}
              isActive={i === activeIndex}
              onEnter={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(0)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
