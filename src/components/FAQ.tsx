import { useState } from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';
import arrowRightSvg from '../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import toggleOpenSvg from '../assets/icons/faq-toggle-open.svg?raw';
import toggleClosedSvg from '../assets/icons/faq-toggle-closed.svg?raw';

const faqs = [
  {
    q: 'How does an engagement start?',
    a: 'Through the guided project discovery. You share goals, scope and constraints, and we respond with a scoped technical direction.',
  },
  {
    q: 'Do you only build AI products?',
    a: 'No — we build full software products, and add AI where it genuinely improves the outcome, not by default.',
  },
  {
    q: 'How is pricing determined?',
    a: 'Pricing depends on scope, integrations and timeline. The figures above are planning benchmarks, not final quotes.',
  },
  {
    q: 'Can you work with our existing systems?',
    a: 'Yes, we regularly integrate with existing CRMs, databases and third-party tools rather than replacing them outright.',
  },
  {
    q: 'What happens after launch?',
    a: 'You get the full handover plus an optional support arrangement for monitoring, fixes and future iterations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const intro = useReveal('left');
  const accordion = useReveal('right');

  return (
    <section className="faq section" id="faq">
      <div className="container faq__row">
        <div className={`faq__intro ${intro.className}`} ref={intro.ref}>
          <span className="eyebrow-pill">FAQ</span>
          <h2 className="faq__title">
            Frequently{' '}
            <br />
            asked{' '}
            <br />
            questions
          </h2>
          <p className="faq__intro-heading">Got any Questions?</p>
          <p className="faq__intro-desc">
            Let us know! Reach out and our team will get right back to you.
          </p>
          <a href="#contact" className="btn btn-outline-gradient">
            Contact us
            <Icon svg={arrowRightSvg} className="btn-icon" />
          </a>
        </div>

        <div className={`faq__accordion ${accordion.className}`} ref={accordion.ref}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item-border${isOpen ? ' is-open' : ''}`} key={item.q}>
                <div className="faq-item">
                  <button
                    className="faq-item__question"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className="faq-item__toggle">
                      <Icon svg={isOpen ? toggleOpenSvg : toggleClosedSvg} />
                    </span>
                  </button>
                  <div className={`faq-item__answer-wrap${isOpen ? ' is-open' : ''}`}>
                    <div className="faq-item__answer-inner">
                      <p className="faq-item__answer">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
