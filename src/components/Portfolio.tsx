import { useState } from 'react';
import vanTravelBusiness from '../assets/images/portfolio/van-travel-business.png';
import powerMindset from '../assets/images/portfolio/power-mindset.png';
import aiFna from '../assets/images/portfolio/ai-fna.png';
import oneTapDigitalCard from '../assets/images/portfolio/onetap-digital-card.png';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';
import arrowRightSvg from '../assets/icons/at-icons-arrow-right.svg?raw';

const platforms = [
  {
    number: '01',
    title: 'Van Travel Business',
    desc: 'A travel and immigration business platform covering packages, document intake and client enquiries.',
    image: vanTravelBusiness,
  },
  {
    number: '02',
    title: 'Power Mindset Breakthrough',
    desc: 'A coaching and personal development platform with programmes, booking and content delivery.',
    image: powerMindset,
  },
  {
    number: '03',
    title: 'AI FNA',
    desc: 'An AI-assisted financial needs analysis tool that turns client data into advisor-ready recommendations.',
    image: aiFna,
  },
  {
    number: '04',
    title: 'OneTap Digital Card',
    desc: 'A digital business card platform where professionals share contact details, links and a booking page through a public card link or QR code.',
    image: oneTapDigitalCard,
  },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = platforms[activeIndex];
  const head = useReveal('up');
  const list = useReveal('left');
  const device = useReveal('right');

  return (
    <section className="portfolio section" id="work">
      <div className="container container--wide">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">Our Work</span>
          <h2 className="section-title">Platforms We&rsquo;ve Built</h2>
        </div>

        <div className="portfolio__row">
          <div className={`portfolio__list-col ${list.className}`} ref={list.ref}>
            <ul className="portfolio__list">
              {platforms.map((p, i) => {
                const isActive = i === activeIndex;
                return (
                  <li
                    className={`portfolio-item${isActive ? ' portfolio-item--featured' : ''}`}
                    key={p.number}
                    onClick={() => setActiveIndex(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setActiveIndex(i);
                    }}
                  >
                    <div className="portfolio-item__row">
                      <span className="portfolio-item__number">{p.number}</span>
                      <div className="portfolio-item__body">
                        <h3 className="portfolio-item__title">{p.title}</h3>
                        <p className="portfolio-item__desc">{p.desc}</p>
                      </div>
                      {isActive && (
                        <span className="portfolio-item__arrow">
                          <Icon svg={arrowRightSvg} />
                        </span>
                      )}
                    </div>

                    <div className={`portfolio-item__mock-wrap${isActive ? ' is-open' : ''}`}>
                      <div className="portfolio-item__mock-inner">
                        <img
                          src={p.image}
                          alt={`${p.title} platform preview`}
                          loading="lazy"
                          className="portfolio-item__mock-image"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <a href="#work" className="btn btn-outline-gradient portfolio__view-btn">
              View Work
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>

          <div className={`device-mock ${device.className}`} ref={device.ref}>
            <div className="device-mock__bezel">
              <div className="device-mock__screen">
                <img
                  key={active.number}
                  src={active.image}
                  alt={`${active.title} platform preview`}
                  loading="lazy"
                  className="device-mock__image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
