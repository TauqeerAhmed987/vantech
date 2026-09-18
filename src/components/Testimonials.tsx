import quoteDecoration from '../assets/images/quote-decoration.webp';
import { useReveal } from '../hooks/useReveal';

const testimonials = [
  {
    quote:
      'Van Tech Systems transformed our manual processes into intelligent workflows, saving our team time and improving customer response speed.',
    name: 'Daniel Carter',
    role: 'Operations Director',
  },
  {
    quote:
      'The team understood our business and delivered a scalable platform that feels polished, reliable, and built for long-term growth.',
    name: 'Sophia Bennett',
    role: 'Founder & CEO',
  },
  {
    quote:
      'Our AI automation now handles repetitive tasks seamlessly, giving our staff more time to focus on customers and priorities.',
    name: 'Michael Reed',
    role: 'Head of Customer Experience',
  },
  {
    quote:
      'From strategy to launch, Van Tech Systems made the development process clear, collaborative, and surprisingly efficient for our team.',
    name: 'Olivia Grant',
    role: 'Product Manager',
  },
];

export default function Testimonials() {
  const head = useReveal('up');

  return (
    <section className="testimonials section">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">Testimonials</span>
          <h2 className="section-title">What Our Client Say</h2>
        </div>
      </div>

      <div className="testimonials__mask">
        <div className="testimonials__track">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div className="testimonial-card" key={`${t.name}-${i}`}>
              <img src={quoteDecoration} alt="" className="testimonial-card__quote-mark" />
              <p className="testimonial-card__quote">{t.quote}</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__name">{t.name}</span>
                <span className="testimonial-card__role">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
