import type { CSSProperties } from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';
import arrowRightSvg from '../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import partnerSvg from '../assets/icons/material-symbols-partner-exchange.svg?raw';
import labelSvg from '../assets/icons/bxs-label.svg?raw';
import assistantSvg from '../assets/icons/griddy-icons-ai-assistant-filled.svg?raw';
import settingsSvg from '../assets/icons/ic-sharp-settings-applications.svg?raw';
import engineeringSvg from '../assets/icons/ic-baseline-engineering.svg?raw';
import coinSvg from '../assets/icons/streamline-ultimate-monetization-touch-coin-bold.svg?raw';
import voiceAiFillSvg from '../assets/icons/ri-voice-ai-fill.svg?raw';
import crmSvg from '../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import paymentSvg from '../assets/icons/fluent-payment-24-filled.svg?raw';
import dataSvg from '../assets/icons/bxs-data.svg?raw';
import emailSvg from '../assets/icons/griddy-icons-email-filled.svg?raw';
import messagesSvg from '../assets/icons/boxicons-message-detail-filled.svg?raw';
import OrbSphere from './OrbSphere';
import dashboardOrb from '../assets/images/dashboard-mock-orb.png';
import intelligenceLinesSvg from '../assets/icons/intelligence-lines.svg?raw';
import dashboardLinesSvg from '../assets/icons/dashboard-lines.svg?raw';

const intelligenceBubbles = [
  { svg: partnerSvg, x: 0, y: 294 },
  { svg: labelSvg, x: 239, y: 294 },
  { svg: assistantSvg, x: 478, y: 294 },
  { svg: settingsSvg, x: 0, y: 446 },
  { svg: engineeringSvg, x: 239, y: 446 },
  { svg: coinSvg, x: 478, y: 446 },
];

const pills = [
  { svg: voiceAiFillSvg, label: 'Voice AI', x: 476, y: 115 },
  { svg: crmSvg, label: 'CRM', x: 79, y: 115 },
  { svg: paymentSvg, label: 'Payments', x: 463, y: 386 },
  { svg: dataSvg, label: 'RAG / Data', x: 79, y: 386 },
  { svg: emailSvg, label: 'Email', x: 496, y: 250 },
  { svg: messagesSvg, label: 'Messages', x: 79, y: 250 },
];

function DashboardMockup() {
  return (
    <div className="dashboard-mock">
      <Icon svg={dashboardLinesSvg} className="dashboard-mock__lines" />
      <div className="dashboard-mock__dots">
        <span style={{ background: '#a6213a' }} />
        <span style={{ background: '#a78139' }} />
        <span style={{ background: '#399167' }} />
      </div>
      <div className="dashboard-mock__searchbar">Explore Agencies Services</div>
      <div className="dashboard-mock__divider" />
      <div className="dashboard-mock__center">
        <OrbSphere spin src={dashboardOrb} />
      </div>
      {pills.map((p) => (
        <div
          className="dashboard-mock__pill"
          style={{ '--x': p.x, '--y': p.y } as CSSProperties}
          key={p.label}
        >
          <Icon svg={p.svg} />
          <span>{p.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Solutions() {
  const copy1 = useReveal('left');
  const graphic1 = useReveal('right');
  const graphic2 = useReveal('left');
  const copy2 = useReveal('right');

  return (
    <>
      <section className="solutions section">
        <div className="container solutions__row">
          <div className={`solutions__copy ${copy1.className}`} ref={copy1.ref}>
            <span className="eyebrow-pill">AI & Automation</span>
            <h2 className="solutions__title">One intelligence layer across every channel.</h2>
            <p className="solutions__desc">
              Capture demand wherever it arrives, qualify it with AI, and push
              structured outcomes into the systems your team already uses.
            </p>
            <a href="#services" className="btn btn-outline-gradient">
              Explore All Services
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>

          <div
            className={`solutions__graphic intelligence-graphic ${graphic1.className}`}
            ref={graphic1.ref}
          >
            <Icon svg={intelligenceLinesSvg} className="intelligence-graphic__lines" />
            <div className="intelligence-graphic__center">
              <OrbSphere spin />
            </div>
            {intelligenceBubbles.map((b, i) => (
              <span
                className="intelligence-graphic__bubble"
                style={{ '--x': b.x, '--y': b.y } as CSSProperties}
                key={i}
              >
                <Icon svg={b.svg} />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions section solutions--reverse" id="agencies">
        <div className="container solutions__row solutions__row--reverse">
          <div className={`solutions__graphic ${graphic2.className}`} ref={graphic2.ref}>
            <DashboardMockup />
          </div>

          <div className={`solutions__copy ${copy2.className}`} ref={copy2.ref}>
            <span className="eyebrow-pill">For Agencies</span>
            <h2 className="solutions__title">AI Solutions Built for Agencies</h2>
            <p className="solutions__desc">
              Expand your services, deliver more value to your clients, and grow
              recurring revenue with white-label AI, automation, and development
              solutions.
            </p>
            <a href="#contact" className="btn btn-outline-gradient">
              Explore Agencies Services
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
