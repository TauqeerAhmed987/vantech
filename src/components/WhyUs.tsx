import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';
import arrowRightSvg from '../assets/icons/boxicons-arrow-right-stroke.svg?raw';

type WhyCardItem = { number: string; title: string; desc: string };

function WhyCard({
  card,
  isActive,
  onEnter,
  onLeave,
}: {
  card: WhyCardItem;
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const reveal = useReveal('left');

  return (
    <div
      className={`why-card${isActive ? ' why-card--active' : ''} ${reveal.className}`}
      ref={reveal.ref}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="why-card__glow" />
      <span className={`why-card__number${isActive ? ' is-orange' : ''}`}>{card.number}</span>
      <h3 className="why-card__title gradient-text">{card.title}</h3>
      <p className="why-card__desc">{card.desc}</p>
    </div>
  );
}

export default function WhyUs() {
  const { t } = useTranslation('home');
  const cards = t('whyUs.items', { returnObjects: true }) as WhyCardItem[];
  const [activeIndex, setActiveIndex] = useState(0);
  const head = useReveal('up');

  return (
    <section className="why-us section" id="about">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">{t('whyUs.eyebrow')}</span>
          <h2 className="section-title">{t('whyUs.title')}</h2>
        </div>

        <div className="why-us__grid">
          {cards.map((card, i) => (
            <WhyCard
              key={card.number}
              card={card}
              isActive={i === activeIndex}
              onEnter={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(0)}
            />
          ))}
        </div>

        <div className="why-us__cta">
          <a href="#contact" className="btn btn-outline-gradient">
            {t('whyUs.cta')}
            <Icon svg={arrowRightSvg} className="btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
