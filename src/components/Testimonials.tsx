import { useTranslation } from 'react-i18next';
import quoteDecoration from '../assets/images/quote-decoration.webp';
import { useReveal } from '../hooks/useReveal';

type TestimonialItem = { quote: string; name: string; role: string };

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true }) as TestimonialItem[];
  const head = useReveal('up');

  return (
    <section className="testimonials section">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">{t('testimonials.eyebrow')}</span>
          <h2 className="section-title">{t('testimonials.title')}</h2>
        </div>
      </div>

      <div className="testimonials__mask">
        <div className="testimonials__track">
          {[...testimonials, ...testimonials, ...testimonials].map((item, i) => (
            <div className={`testimonial-card testimonial-card--${i18n.language}`} key={`${item.name}-${i}`}>
              <img src={quoteDecoration} alt="" className="testimonial-card__quote-mark" />
              <p className={`testimonial-card__quote testimonial-card__quote--${i18n.language}`}>{item.quote}</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__name">{item.name}</span>
                <span className="testimonial-card__role">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
