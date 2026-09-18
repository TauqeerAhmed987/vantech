import { useState } from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';
import arrowRightSvg from '../assets/icons/boxicons-arrow-right-stroke.svg?raw';

const cards = [
  {
    number: '01',
    title: 'Built around your business',
    desc: 'We design systems around your actual workflows and requirements.',
  },
  {
    number: '02',
    title: 'Production focused',
    desc: 'Architecture, authentication, databases, permissions, integrations, QA and deployment are part of the product — not afterthoughts.',
  },
  {
    number: '03',
    title: 'One technology partner',
    desc: 'Strategy, product design, software, AI and automation work together under one architecture.',
  },
  {
    number: '04',
    title: 'Built to evolve',
    desc: 'Architecture that supports future capabilities instead of forcing complete rebuilds.',
  },
];

function WhyCard({
  card,
  isActive,
  onEnter,
  onLeave,
}: {
  card: (typeof cards)[number];
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
  const [activeIndex, setActiveIndex] = useState(0);
  const head = useReveal('up');

  return (
    <section className="why-us section" id="about">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">Why Van Tech Systems</span>
          <h2 className="section-title">An engineering partner, not a vendor.</h2>
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
            Get Started
            <Icon svg={arrowRightSvg} className="btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
