import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';
import LegalSidebar from '../../components/LegalSidebar';

export default function AIUsagePage() {
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">Legal</span>
          <h1 className="legal-hero__title">AI Usage Policy</h1>
          <p className="legal-hero__updated">Last updated: 18 August 2026</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className={`legal-layout ${content.className}`} ref={content.ref}>
            <LegalSidebar />
            <div className="legal-content__wrap">
          <h2>1. Why This Policy Exists</h2>
          <p>
            We build AI systems for a living, which makes it reasonable to expect us to be
            explicit about how we use them ourselves. This policy covers the AI features on this
            website and the standards we apply when we build AI for clients.
          </p>

          <h2>2. Where AI Is Used on This Site</h2>
          <ul>
            <li>A website assistant that answers questions about our services using our own published content.</li>
            <li>Summarisation and prioritisation of incoming project enquiries for our internal team.</li>
            <li>Drafting support for editorial content, which is reviewed and edited by our team before publication.</li>
          </ul>

          <h2>3. Disclosure</h2>
          <p>
            Our assistant identifies itself as an AI system. We do not present automated
            responses as messages from a named human, and we do not use synthetic voices or
            personas designed to be mistaken for a specific person.
          </p>

          <h2>4. Grounding and Accuracy</h2>
          <p>
            The assistant answers from our published service, product and article content rather
            than generating open-ended claims. When it does not know something, it is designed to
            say so and offer to connect you with the team. Automated output can still be wrong.
            Nothing the assistant says is a binding quote, a commitment, or professional advice.
          </p>

          <h2>5. Human Oversight</h2>
          <ul>
            <li>Pricing, contractual terms and scope commitments are confirmed by a person, never by an automated system alone.</li>
            <li>Sensitive, ambiguous or complaint-related conversations are escalated to the team.</li>
            <li>Enquiry summaries are always read by a human before a response is sent.</li>
          </ul>

          <h2>6. Data Used by Our AI Features</h2>
          <p>
            Assistant conversations and enquiry content are processed by third-party AI model
            providers under contract. We do not permit that content to be used to train public
            foundation models. Please do not enter passwords, payment details, health information
            or other sensitive personal data into the assistant.
          </p>

          <h2>7. Standards We Apply in Client Work</h2>
          <ul>
            <li>Ground AI systems in the client&rsquo;s own verified content and data.</li>
            <li>Constrain agents to an explicit set of permitted actions and data scopes.</li>
            <li>Log conversations and executed actions so behaviour can be audited.</li>
            <li>Design a human escalation path before launch, not after a failure.</li>
            <li>Test for fabricated answers, prompt injection and permission leakage as part of delivery.</li>
            <li>Decline use cases where automated decisions would create unacceptable risk for the people affected.</li>
          </ul>

          <h2>8. Limitations We Do Not Hide</h2>
          <p>
            AI systems can be confidently wrong, can degrade when underlying models change, and
            can be manipulated by adversarial input. We design for those realities with grounding,
            constraints, monitoring and human review rather than claiming they do not exist.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions or concerns about our use of AI can be sent to{' '}
            <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a>.
          </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
