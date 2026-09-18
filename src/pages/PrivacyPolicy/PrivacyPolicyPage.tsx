import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';
import LegalSidebar from '../../components/LegalSidebar';

export default function PrivacyPolicyPage() {
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">Legal</span>
          <h1 className="legal-hero__title">Privacy Policy</h1>
          <p className="legal-hero__updated">Last updated: 18 August 2026</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className={`legal-layout ${content.className}`} ref={content.ref}>
            <LegalSidebar />
            <div className="legal-content__wrap">
          <h2>1. Who We Are</h2>
          <p>
            Van Tech Systems designs and builds AI, software and automation systems. This policy
            covers personal data processed through our website, our project discovery form, our
            AI assistant and the commercial relationship that may follow. For data we process on
            behalf of a client while delivering a project, the client is the data controller and
            we act as a processor under the terms of the applicable agreement.
          </p>

          <h2>2. Data We Collect</h2>
          <ul>
            <li>Contact details you provide: name, email address, phone number, company name and role.</li>
            <li>Project information: descriptions, requirements, budget and timeline indications, and any files you choose to attach.</li>
            <li>Conversation data: messages exchanged with our AI assistant, and appointment details when you book a call.</li>
            <li>Technical data: IP-derived request metadata, browser type, referring source and pages viewed, used to keep the service secure and to understand which content is useful.</li>
            <li>Client engagement data: information required to deliver contracted work, including systems access details shared under agreement.</li>
          </ul>

          <h2>3. Why We Process It</h2>
          <ul>
            <li><strong>Responding to enquiries and preparing proposals</strong> — steps taken at your request prior to a contract.</li>
            <li><strong>Delivering and supporting contracted work</strong> — performance of a contract.</li>
            <li><strong>Securing our systems and preventing abuse</strong> — legitimate interest.</li>
            <li><strong>Improving our content and services</strong> — legitimate interest.</li>
            <li><strong>Sending operational and, where opted in, occasional updates</strong> — consent or legitimate interest.</li>
          </ul>

          <h2>4. Automated Assessment of Enquiries</h2>
          <p>
            Project enquiries may be summarised and prioritised by an automated system so our
            team can respond faster and more accurately. The output is used internally only and
            is always reviewed by a person before any decision affecting you is taken. No enquiry
            is rejected solely by automated means, and you can ask for a human review of anything
            we send you.
          </p>

          <h2>5. AI Assistant Conversations</h2>
          <p>
            Conversations with our website assistant are stored so we can maintain context,
            review quality, and improve answers. Do not share passwords, payment details or
            sensitive personal data in the chat. You may request deletion of a conversation at
            any time by contacting us with the approximate date and email address used.
          </p>

          <h2>6. Sharing and Processors</h2>
          <p>
            We do not sell personal data. We share it only with service providers who help us
            operate: cloud hosting and database infrastructure, transactional email delivery, and
            AI model providers used to power assistant and assessment features. Each provider is
            bound by contract to process data only on our instructions and to apply appropriate
            security measures.
          </p>

          <h2>7. International Transfers</h2>
          <p>
            Our infrastructure and providers may process data outside your country of residence.
            Where that happens, transfers rely on recognised safeguards such as standard
            contractual clauses or an adequacy decision.
          </p>

          <h2>8. Retention</h2>
          <ul>
            <li>Enquiry records: retained while a commercial relationship is being considered, then for a limited period for record-keeping, unless you ask for deletion.</li>
            <li>Client project data: retained for the duration of the engagement and any agreed support period, then deleted or returned according to the agreement.</li>
            <li>Assistant conversations: retained for quality and improvement purposes and deleted on request.</li>
            <li>Email delivery logs: retained for a limited period to diagnose delivery problems.</li>
          </ul>

          <h2>9. Security</h2>
          <p>
            We apply least-privilege access, row-level authorization on stored records, encrypted
            transport, encrypted secret storage and logging of administrative actions. Access to
            client environments is restricted to the engineers assigned to that engagement and
            revoked at the end of it. No system is absolutely secure. If a breach affects your
            data, we will notify you and, where required, the relevant authority without undue
            delay.
          </p>

          <h2>10. Your Rights</h2>
          <ul>
            <li>Access a copy of the personal data we hold about you.</li>
            <li>Correct data that is inaccurate or incomplete.</li>
            <li>Request deletion of data we no longer need to keep.</li>
            <li>Object to or restrict certain processing based on legitimate interest.</li>
            <li>Withdraw consent at any time where processing relies on consent.</li>
            <li>Request a portable copy of data you provided to us.</li>
          </ul>

          <h2>11. Children</h2>
          <p>
            Our services are directed at businesses. We do not knowingly collect personal data
            from children. If you believe a child has provided us with data, contact us and we
            will delete it.
          </p>

          <h2>12. Changes and Contact</h2>
          <p>
            We update this policy when our processing changes. The date at the top of the page
            reflects the current version. To exercise a right or ask a question, contact us at{' '}
            <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a>.
          </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

