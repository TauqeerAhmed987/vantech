import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';
import LegalSidebar from '../../components/LegalSidebar';

export default function CookiePolicyPage() {
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">Legal</span>
          <h1 className="legal-hero__title">Cookie Policy</h1>
          <p className="legal-hero__updated">Last updated: 18 August 2026</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className={`legal-layout ${content.className}`} ref={content.ref}>
            <LegalSidebar />
            <div className="legal-content__wrap">
          <h2>1. Our Approach</h2>
          <p>
            We use the smallest set of browser storage that lets the site work correctly. We do
            not run advertising networks or cross-site tracking pixels on this website.
          </p>

          <h2>2. What We Store</h2>
          <ul>
            <li><strong>Essential session storage</strong> — maintains login and form protection.</li>
            <li><strong>Language preference</strong> — remembers your chosen site language.</li>
            <li><strong>Assistant state</strong> — preserves AI conversation availability.</li>
            <li><strong>Anonymous article counter</strong> — uses a random identifier for single-browser counting.</li>
          </ul>

          <h2>3. Analytics</h2>
          <p>
            Article view counting is anonymous: it records a random local identifier, the article
            and the language, with no name, email or advertising identifier attached. It cannot
            be used to identify you.
          </p>

          <h2>4. Third-Party Storage</h2>
          <p>
            Our infrastructure providers may set strictly necessary cookies for security, session
            integrity and abuse prevention. If you follow a link to an external site, that
            site&rsquo;s own cookie policy applies.
          </p>

          <h2>5. Controlling Storage</h2>
          <ul>
            <li>Your browser&rsquo;s privacy settings let you view, block or delete stored cookies and site data at any time.</li>
            <li>Blocking essential storage may prevent parts of the site, such as forms or the AI assistant, from working correctly.</li>
            <li>Clearing site data resets your language preference and any local assistant state.</li>
          </ul>

          <h2>6. Contact</h2>
          <p>
            For questions about browser storage on this site, contact{' '}
            <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a>.
          </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
