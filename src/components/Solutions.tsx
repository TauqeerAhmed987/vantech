import type { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
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

function DashboardMockup({
  pills,
  searchLabel,
}: {
  pills: { svg: string; label: string; x: number; y: number }[];
  searchLabel: string;
}) {
  return (
    <div className="dashboard-mock">
      <Icon svg={dashboardLinesSvg} className="dashboard-mock__lines" />
      <div className="dashboard-mock__dots">
        <span style={{ background: '#a6213a' }} />
        <span style={{ background: '#a78139' }} />
        <span style={{ background: '#399167' }} />
      </div>
      <div className="dashboard-mock__searchbar">{searchLabel}</div>
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
  const { t } = useTranslation('home');
  const copy1 = useReveal('left');
  const graphic1 = useReveal('right');
  const graphic2 = useReveal('left');
  const copy2 = useReveal('right');

  const pills = [
    { svg: voiceAiFillSvg, label: t('solutions.pills.voiceAi'), x: 476, y: 115 },
    { svg: crmSvg, label: t('solutions.pills.crm'), x: 79, y: 115 },
    { svg: paymentSvg, label: t('solutions.pills.payments'), x: 463, y: 386 },
    { svg: dataSvg, label: t('solutions.pills.ragData'), x: 79, y: 386 },
    { svg: emailSvg, label: t('solutions.pills.email'), x: 496, y: 250 },
    { svg: messagesSvg, label: t('solutions.pills.messages'), x: 79, y: 250 },
  ];

  return (
    <>
      <section className="solutions section">
        <div className="container solutions__row">
          <div className={`solutions__copy ${copy1.className}`} ref={copy1.ref}>
            <span className="eyebrow-pill">{t('solutions.channel.eyebrow')}</span>
            <h2 className="solutions__title">{t('solutions.channel.title')}</h2>
            <p className="solutions__desc">{t('solutions.channel.desc')}</p>
            <a href="#services" className="btn btn-outline-gradient">
              {t('solutions.channel.cta')}
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
            <DashboardMockup pills={pills} searchLabel={t('solutions.dashboardSearch')} />
          </div>

          <div className={`solutions__copy ${copy2.className}`} ref={copy2.ref}>
            <span className="eyebrow-pill">{t('solutions.agencies.eyebrow')}</span>
            <h2 className="solutions__title">{t('solutions.agencies.title')}</h2>
            <p className="solutions__desc">{t('solutions.agencies.desc')}</p>
            <a href="#contact" className="btn btn-outline-gradient">
              {t('solutions.agencies.cta')}
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
