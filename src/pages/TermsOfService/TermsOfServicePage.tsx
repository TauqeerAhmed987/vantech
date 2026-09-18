import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';
import LegalSidebar from '../../components/LegalSidebar';

export default function TermsOfServicePage() {
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">Legal</span>
          <h1 className="legal-hero__title">Terms of Service</h1>
          <p className="legal-hero__updated">Last updated: 18 August 2026</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className={`legal-layout ${content.className}`} ref={content.ref}>
            <LegalSidebar />
            <div className="legal-content__wrap">
          <h2>1. Acceptance</h2>
          <p>
            By using this website you accept these terms. If you do not accept them, do not use
            the site. Project engagements are governed by a separate signed agreement, which
            prevails over these terms in the event of conflict.
          </p>

          <h2>2. Permitted Use</h2>
          <ul>
            <li>You may browse, read and share our content for lawful purposes.</li>
            <li>You may not attempt to disrupt or overload the service, bypass access controls, or access data you are not authorised to access.</li>
            <li>You may not submit false information, malicious files or automated spam through our forms or AI assistant.</li>
            <li>You may not scrape or reuse our content at scale to train commercial models without written permission.</li>
          </ul>

          <h2>3. Enquiries Are Not Contracts</h2>
          <p>
            Submitting a project enquiry, receiving an estimate, or speaking with our AI
            assistant does not create a binding agreement. Work begins only under a written
            engagement agreement or accepted proposal signed by both parties.
          </p>

          <h2>4. Pricing Information</h2>
          <p>
            Prices and ranges published on this site are indicative starting points intended to
            help you plan. Final pricing depends on scope, complexity, integrations, data
            quality, compliance requirements and timeline, and is confirmed only in writing.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            Website content, brand assets, illustrations and proprietary products including Van
            AI remain the property of Van Tech Systems. Ownership of deliverables produced during
            an engagement is defined in the applicable agreement. Our default position is that
            clients own the code and infrastructure we build for them, while pre-existing tools,
            libraries and internal frameworks remain ours and are licensed for use within the
            delivered system.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            Systems we build often rely on third-party platforms and APIs. Their availability,
            pricing and terms are outside our control, and we are not responsible for changes
            those providers make.
          </p>

          <h2>7. AI Features on This Site</h2>
          <p>
            Our AI assistant provides general information and may be inaccurate or incomplete. It
            is not professional advice, and nothing it says forms a commitment on our part.
            Verify anything material with our team before acting on it.
          </p>

          <h2>8. Warranties and Liability</h2>
          <p>
            This website and its content are provided as is, without warranties of any kind. To
            the maximum extent permitted by law, Van Tech Systems is not liable for indirect,
            incidental or consequential loss, or for loss of profit, revenue or data arising from
            use of this site or reliance on its content. Nothing in these terms excludes liability
            that cannot lawfully be excluded.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may update these terms. Continued use of the site after an update constitutes
            acceptance of the revised terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms can be sent to{' '}
            <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a>.
          </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
