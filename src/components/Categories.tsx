import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks/useReveal';

type CategoryItem = { number: string; title: string; items: string[] };

function CategoryCard({
  cat,
  twoCols,
  isActive,
  onEnter,
  onLeave,
}: {
  cat: CategoryItem;
  twoCols: boolean;
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
      <ul className={`category-card__list${twoCols ? ' category-card__list--cols' : ''}`}>
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
  const { t } = useTranslation('home');
  const categories = t('categories.items', { returnObjects: true }) as CategoryItem[];
  const [activeIndex, setActiveIndex] = useState(0);
  const head = useReveal('up');

  return (
    <section className="categories section" id="services">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">{t('categories.eyebrow')}</span>
          <h2 className="section-title">{t('categories.title')}</h2>
          <p className="section-subtitle">{t('categories.subtitle')}</p>
        </div>

        <div className="categories__grid">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.number}
              cat={cat}
              twoCols={i === 0}
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
