import { useEffect } from 'react';
import './contact.css';
import { useReveal } from '../../hooks/useReveal';
import FAQ from '../../components/FAQ';
import Testimonials from '../../components/Testimonials';
import heroBg from '../../assets/images/contact/contact-page-banner.png';

export default function ContactPage() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      if (href.length > 1) {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const hero = useReveal('up');
  const booking = useReveal('up');

  return (
    <main className="contact-page">
      <section className="contact-hero section">
        <div className="contact-hero__bg-wrap" aria-hidden="true">
          <img src={heroBg} alt="" className="contact-hero__bg" loading="eager" />
        </div>

        <div className={`container contact-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">Contact Us</span>
          <h1 className="contact-hero__title">Get started today</h1>
        </div>

        <div className="container">
          <div className={`contact-hero__booking ${booking.className}`} ref={booking.ref}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/WJOxPAhY2gDWZ1zQEKq4"
              title="Book a free AI session"
              allow="payment"
              scrolling="no"
              id="WJOxPAhY2gDWZ1zQEKq4_1"
              className="contact-hero__booking-frame"
            />
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />
    </main>
  );
}
