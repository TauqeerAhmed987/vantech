import { useEffect } from 'react';
import ctaOrbMoon from '../assets/images/orb-sphere.webp';
import ctaOrbStar from '../assets/images/banner-star.svg';
import { useReveal } from '../hooks/useReveal';

export default function CTA() {
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
          <h2 className="cta__title">
            Start Your{' '}
            <br />
            AI Journey{' '}
            <br />
            Today
          </h2>

          <p className="cta__desc">
            Whether you need an AI employee, a SaaS platform, a mobile application,
            or a custom business system, Van Tech Systems can help turn your idea
            into production-ready technology.
          </p>

          <span className="cta__banner">Book your free AI session today.</span>
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
