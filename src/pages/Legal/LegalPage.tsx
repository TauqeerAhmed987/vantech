import { Link } from 'react-router-dom';
import '../../styles/legal.css';
import './legal-center.css';
import { useReveal } from '../../hooks/useReveal';

const policies = [
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
    desc: 'What personal data Van Tech Systems collects, why we collect it, how long we keep it and the rights you have over it.',
  },
  {
    title: 'Terms of Service',
    href: '/terms-of-service',
    desc: 'The terms that govern use of this website, our published information, and the relationship between an enquiry and a signed engagement.',
  },
  {
    title: 'Cookie Policy',
    href: '/cookie-policy',
    desc: 'What we store in your browser, why it is stored, and how to control it — kept deliberately minimal.',
  },
  {
    title: 'Accessibility Statement',
    href: '/accessibility',
    desc: 'Our commitment to an accessible website, the standard we work toward, known limitations and how to report a barrier.',
  },
  {
    title: 'AI Usage Policy',
    href: '/ai-usage',
    desc: 'How we use artificial intelligence on this website and in client work, what it is allowed to do, and where a human is always required.',
  },
];

export default function LegalPage() {
  const hero = useReveal('up');
  const grid = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">Legal</span>
          <h1 className="legal-hero__title">Policies, terms and commitments</h1>
          <p className="legal-hero__updated">
            Everything governing how Van Tech Systems handles data, delivers services, uses AI
            and maintains accessibility.
          </p>
        </div>
      </section>

      <section className="legal-center section">
        <div className={`container legal-center__grid ${grid.className}`} ref={grid.ref}>
          {policies.map((p) => (
            <Link key={p.href} to={p.href} className="legal-center__card">
              <h3 className="legal-center__card-title">{p.title}</h3>
              <p className="legal-center__card-desc">{p.desc}</p>
              <div className="legal-center__card-footer">
                <span className="legal-center__card-updated">Updated 18 August 2026</span>
                <span className="legal-center__card-arrow" aria-hidden="true">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        <p className="legal-center__contact">
          Write to{' '}
          <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a> and a member
          of the team will respond.
        </p>
      </section>
    </main>
  );
}
