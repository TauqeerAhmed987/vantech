import type { CSSProperties } from 'react';
import heroBg from '../assets/images/hero-banner.png';
import { useReveal } from '../hooks/useReveal';
import { useCountUp } from '../hooks/useCountUp';
import OrbSphere from './OrbSphere';
import Icon from './Icon';
import arrowRightSvg from '../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import botSparkleSvg from '../assets/icons/garden-bot-sparkle-fill-12.svg?raw';
import receiptSparkleSvg from '../assets/icons/fluent-receipt-sparkles-24-filled.svg?raw';
import emailSparkSvg from '../assets/icons/streamline-ai-email-generator-spark-solid.svg?raw';
import adsClickSvg from '../assets/icons/ic-outline-ads-click.svg?raw';
import voiceAiSvg from '../assets/icons/ri-voice-ai-line.svg?raw';
import messageBubbleSvg from '../assets/icons/boxicons-message-bubble-dots-filled.svg?raw';
import openaiSvg from '../assets/icons/meteor-icons-openai.svg?raw';
import earthSvg from '../assets/icons/pajamas-earth.svg?raw';

// angle/radius computed from each icon's original position around the
// orbit box center (310px, 301px), so the orbit animation traces the
// same circle the design placed them on.
const orbitIcons = [
  { svg: messageBubbleSvg, angle: 166.96, radius: 297 },
  { svg: botSparkleSvg, angle: -137.64, radius: 296 },
  { svg: voiceAiSvg, angle: -67.97, radius: 303 },
  { svg: receiptSparkleSvg, angle: -19.83, radius: 284 },
  { svg: adsClickSvg, angle: 32.9, radius: 310 },
  { svg: emailSparkSvg, angle: 110.76, radius: 278 },
];

const ORBIT_DURATION = '38s';

const stats = [
  { value: 14, suffix: '', label: 'Portfolio Projects' },
  { value: 4, suffix: '', label: 'Languages Supported' },
  { value: 10, suffix: '+', label: 'Technology Services' },
  { value: 3, suffix: '', label: 'Core Capabilities' },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const count = useCountUp(value);

  return (
    <div className="stat">
      <span className="stat__number">
        {count}
        {suffix}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const copy = useReveal('left');
  const graphic = useReveal('right');
  const statsReveal = useReveal('up');

  return (
    <section className="hero section" id="home">
      <img src={heroBg} alt="" className="hero__bg" loading="eager" />

      <div className="container hero__container">
        <div className={`hero__copy ${copy.className}`} ref={copy.ref}>
          <span className="eyebrow-pill hero__eyebrow">
            <span>AI</span>
            <span>Software</span>
            <span>Automation</span>
          </span>

          <h1 className="hero__title">
            We Build Intelligent{' '}
            <br />
            Software for Ambitious{' '}
            <br />
            Businesses.
          </h1>

          <p className="hero__desc">
            Van Tech Systems designs and develops AI systems, SaaS platforms, web
            applications, mobile apps, automation infrastructure, ecommerce solutions
            and custom software built around real business operations.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-outline">
              Start a Project
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
            <a href="#work" className="btn btn-outline">
              Our Work
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>

        <div className={`hero__graphic ${graphic.className}`} ref={graphic.ref}>
          <div className="hero__orbit">
            <div className="hero__orbit-ring hero__orbit-ring--1" />
            <div className="hero__orbit-ring hero__orbit-ring--2" />
            <div className="hero__orbit-ring hero__orbit-ring--3" />
            <OrbSphere className="hero__orbit-sphere" />
            {orbitIcons.map((item, i) => (
              <div
                key={i}
                className="hero__orbit-anchor"
                style={
                  {
                    '--start-angle': `${item.angle}deg`,
                    animationDuration: ORBIT_DURATION,
                  } as CSSProperties
                }
              >
                <div
                  className="hero__orbit-radius"
                  style={{ '--radius': item.radius } as CSSProperties}
                >
                  <div
                    className="hero__orbit-counter"
                    style={{ animationDuration: ORBIT_DURATION }}
                  >
                    <span className="hero__orbit-icon">
                      <Icon svg={item.svg} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container container-before">
        <div className={`stats-card ${statsReveal.className}`} ref={statsReveal.ref}>
          <div className="stats-card__header">
            <div className="stats-card__buttons">
              <div className="gpt-pill">
                <Icon svg={openaiSvg} />
                <span>GPT 5.6</span>
              </div>
              <div className="gpt-pill gpt-pill--icon-only">
                <Icon svg={earthSvg} />
              </div>
            </div>
            <p className="stats-card__title">A measurable engineering footprint.</p>
          </div>
          <div className="stats-card__grid">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
