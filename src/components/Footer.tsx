import { useLocation } from 'react-router-dom';
import footerBg from '../assets/images/footer-bg.webp';
import footerDecor from '../assets/images/footer-top-start.png';
import logo from '../assets/images/logo.webp';
import { useReveal } from '../hooks/useReveal';

const companyLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '/about' },
  { label: 'Partners Program', href: '/partners' },
  { label: 'Work', href: '#work' },
  { label: 'FAQs', href: '#faq' },
  { label: 'Contact', href: '/contact' },
];
const servicesLinksA = [
  { label: 'AI Agents', href: '/ai-agents' },
  { label: 'AI Automations', href: '/ai-automation' },
  { label: 'Model Development', href: '/model-development' },
  { label: 'Autopilot', href: '/auto-pilot' },
  { label: 'MVP Development', href: '/mvp-development' },
];
const servicesLinksB = [
  { label: 'Web Applications', href: '/web-applications' },
  { label: 'Mobile Applications', href: '/mobile-application' },
  { label: 'SaaS Development', href: '/saas-development' },
  { label: 'Custom Software', href: '/custom-development' },
  { label: 'Ecommerce', href: '/ecommerce-development' },
];
const legalLinks = [
  { label: 'Legal center', href: '/legal' },
  { label: 'Cookies', href: '/cookie-policy' },
  { label: 'Accessibility', href: '/accessibility' },
  { label: 'AI usage', href: '/ai-usage' },
];

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const brand = useReveal('left');
  const companyCol = useReveal('right');
  const servicesCol = useReveal('right');
  const legalCol = useReveal('right');

  return (
    <footer className="site-footer">
      <img src={footerBg} alt="" className="site-footer__bg" loading="lazy" />

      <div className="container">
        <div className="footer-card">
          <img src={footerDecor} alt="" className="footer-card__decor" loading="lazy" />

          <div className="footer-card__top">
            <div className={`footer-brand ${brand.className}`} ref={brand.ref}>
              <img src={logo} alt="Van Tech Systems" className="footer-brand__logo" />
              <p className="footer-brand__tagline">AI &bull; Software &bull; Automation</p>
              <p className="footer-brand__desc">
                We build intelligent software, AI systems, and digital products for
                ambitious businesses.
              </p>
              <div className="footer-brand__contact">
                <div>
                  <span className="footer-brand__contact-label">
                    <span className="footer-brand__bracket">[</span> Call us{' '}
                    <span className="footer-brand__bracket">]</span>
                  </span>
                  <a href="tel:+19034763762" className="footer-brand__contact-value">+1-903-4763762</a>
                </div>
                <div>
                  <span className="footer-brand__contact-label">
                    <span className="footer-brand__bracket">[</span> Mail us{' '}
                    <span className="footer-brand__bracket">]</span>
                  </span>
                  <a href="mailto:hello@vantechsystems.tech" className="footer-brand__contact-value">hello@vantechsystems.tech</a>
                </div>
              </div>
            </div>

            <div className={`footer-links ${companyCol.className}`} ref={companyCol.ref}>
              <h4 className="footer-links__title gradient-text">Company</h4>
              <ul>
                {companyLinks.map((l) => {
                  const href = l.href.startsWith('#') && !isHome ? `/${l.href}` : l.href;
                  return (
                    <li key={l.label}>
                      <a href={href}>{l.label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div
              className={`footer-links footer-links--services ${servicesCol.className}`}
              ref={servicesCol.ref}
            >
              <h4 className="footer-links__title gradient-text">Services</h4>
              <div className="footer-links__columns">
                <ul>
                  {servicesLinksA.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
                <ul>
                  {servicesLinksB.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`footer-links ${legalCol.className}`} ref={legalCol.ref}>
              <h4 className="footer-links__title gradient-text">Legal</h4>
              <ul>
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-card__bottom">
            <p>&copy; 2026 Van Tech Systems. All rights reserved.</p>
            <div className="footer-card__bottom-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Services</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
