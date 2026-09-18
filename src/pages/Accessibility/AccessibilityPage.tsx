import '../../styles/legal.css';
import { useReveal } from '../../hooks/useReveal';
import LegalSidebar from '../../components/LegalSidebar';

export default function AccessibilityPage() {
  const hero = useReveal('up');
  const content = useReveal('up');

  return (
    <main className="legal-page">
      <section className="legal-hero section">
        <div className={`container legal-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">Legal</span>
          <h1 className="legal-hero__title">Accessibility Statement</h1>
          <p className="legal-hero__updated">Last updated: 18 August 2026</p>
        </div>
      </section>

      <section className="legal-content section">
        <div className="container">
          <div className={`legal-layout ${content.className}`} ref={content.ref}>
            <LegalSidebar />
            <div className="legal-content__wrap">
          <h2>1. Our Commitment</h2>
          <p>
            We build software that people rely on to work, so accessibility is treated as an
            engineering requirement rather than a finishing touch. We aim to meet WCAG 2.1 Level
            AA across this website and to apply the same standard to the products we build for
            clients.
          </p>

          <h2>2. What We Implement</h2>
          <ul>
            <li>Semantic HTML structure with a single main heading per page and a logical heading order.</li>
            <li>Full keyboard operability, with visible focus indicators on interactive elements.</li>
            <li>Colour contrast targets met in both light and dark themes.</li>
            <li>Text alternatives for meaningful images, and decorative visuals hidden from assistive technology.</li>
            <li>Labelled form fields with error messages that are announced, not only shown in colour.</li>
            <li>Responsive layouts that remain usable when text is enlarged or the viewport is small.</li>
            <li>Reduced-motion support for users who have requested less animation at the system level.</li>
          </ul>

          <h2>3. Known Limitations</h2>
          <p>This is an honest list rather than a claim of perfection:</p>
          <ul>
            <li>Complex technical diagrams convey structure visually; each has a text explanation nearby, but the diagrams themselves are simplified for screen readers.</li>
            <li>Some data tables scroll horizontally on very small screens.</li>
            <li>Voice interaction in the AI assistant depends on browser speech support and is not available in every browser.</li>
          </ul>

          <h2>4. Assessment Approach</h2>
          <p>
            We test with keyboard navigation, browser accessibility inspection tools and
            automated checks during development. We are not currently certified by an external
            auditor, and we say so rather than implying a formal audit has taken place.
          </p>

          <h2>5. Reporting a Barrier</h2>
          <p>
            If any part of this site prevents you from doing something, tell us at{' '}
            <a href="mailto:hello@vantechsystems.tech">hello@vantechsystems.tech</a>. Describe the
            page and what happened. We aim to acknowledge accessibility reports within five
            working days and to provide the information you needed in an alternative format while
            we fix the underlying issue.
          </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
