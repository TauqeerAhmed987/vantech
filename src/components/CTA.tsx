import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import ctaOrbMoon from '../assets/images/orb-sphere.webp';
import ctaOrbStar from '../assets/images/banner-star.svg';
import { useReveal } from '../hooks/useReveal';

export default function CTA() {
  const { t, i18n } = useTranslation();
  const copy = useReveal('left');
  const preview = useReveal('right');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="cta section" id="contact">
      <div className="container cta__row">
        <div className="cta__orb">
          <img src={ctaOrbMoon} alt="" className="cta__orb-img" />
          <img src={ctaOrbStar} alt="" className="cta__orb-star" />
        </div>

        <div className={`cta__copy ${copy.className}`} ref={copy.ref}>
          <h2
            className={`cta__title cta__title--${i18n.language}`}
            dangerouslySetInnerHTML={{ __html: t('cta.title') }}
          />

          <p className="cta__desc">{t('cta.desc')}</p>

          <span className="cta__banner">{t('cta.banner')}</span>
        </div>

        <div className={`cta__preview ${preview.className}`} ref={preview.ref}>
          <iframe
            src="https://api.leadconnectorhq.com/widget/booking/WJOxPAhY2gDWZ1zQEKq4"
            title="Book a free AI session"
            allow="payment"
            scrolling="no"
            id="WJOxPAhY2gDWZ1zQEKq4_1"
            className="cta__booking-frame"
          />
        </div>
      </div>
    </section>
  );
}
