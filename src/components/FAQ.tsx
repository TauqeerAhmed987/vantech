import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';
import arrowRightSvg from '../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import toggleOpenSvg from '../assets/icons/faq-toggle-open.svg?raw';
import toggleClosedSvg from '../assets/icons/faq-toggle-closed.svg?raw';

type FaqItem = { q: string; a: string };

export default function FAQ() {
  const { t } = useTranslation();
  const faqs = t('faq.items', { returnObjects: true }) as FaqItem[];
  const [openIndex, setOpenIndex] = useState(0);
  const intro = useReveal('left');
  const accordion = useReveal('right');

  return (
    <section className="faq section" id="faq">
      <div className="container faq__row">
        <div className={`faq__intro ${intro.className}`} ref={intro.ref}>
          <span className="eyebrow-pill">{t('faq.eyebrow')}</span>
          <h2 className="faq__title" dangerouslySetInnerHTML={{ __html: t('faq.title') }} />
          <p className="faq__intro-heading">{t('faq.intro')}</p>
          <p className="faq__intro-desc">{t('faq.desc')}</p>
          <a href="#contact" className="btn btn-outline-gradient">
            {t('faq.contactUs')}
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
