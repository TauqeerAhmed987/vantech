import { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './auto-pilot.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import servicesStarSvg from '../../assets/icons/figma-services-star.svg?raw';

import funnelSvg from '../../assets/icons/ant-design-funnel-plot-filled.svg?raw';
import phoneSvg from '../../assets/icons/solar-phone-calling-rounded-bold.svg?raw';
import whatsappSvg from '../../assets/icons/basil-whatsapp-solid.svg?raw';
import smsSvg from '../../assets/icons/mdi-message-processing.svg?raw';
import emailSvg from '../../assets/icons/ic-baseline-email.svg?raw';
import calendarSvg from '../../assets/icons/ant-design-calendar-filled.svg?raw';
import formSvg from '../../assets/icons/fluent-form-32-filled.svg?raw';
import personSupportSvg from '../../assets/icons/fluent-person-support-28-filled.svg?raw';
import databaseSvg from '../../assets/icons/bi-database-fill.svg?raw';

import heroPhoto from '../../assets/images/auto-pilot/figma/hero-hand.png';
import heroStar from '../../assets/images/auto-pilot/figma/hero-star.png';
import solutionMoon from '../../assets/images/orb-sphere.webp';
import solutionStar from '../../assets/images/banner-star.svg';
import solutionRipple from '../../assets/images/auto-pilot/figma/solution-ripple.png';
import pricingGlowOrb from '../../assets/images/auto-pilot/figma/pricing-glow-orb.png';

import includedIconConnectedSystems from '../../assets/images/auto-pilot/figma/included-icon-connected-systems.png';
import includedIconAiHandling from '../../assets/images/auto-pilot/figma/included-icon-ai-handling.png';
import includedIconMonitoring from '../../assets/images/auto-pilot/figma/included-icon-monitoring.png';
import includedIconMaintenance from '../../assets/images/auto-pilot/figma/included-icon-maintenance.png';
import includedIconOptimization from '../../assets/images/auto-pilot/figma/included-icon-optimization.png';
import includedIconEvaluation from '../../assets/images/auto-pilot/figma/included-icon-evaluation.png';

import processIconAssess from '../../assets/images/auto-pilot/figma/process-icon-assess.png';
import processIconDesign from '../../assets/images/auto-pilot/figma/process-icon-design.png';
import processIconDeploy from '../../assets/images/auto-pilot/figma/process-icon-deploy.png';
import processIconOperate from '../../assets/images/auto-pilot/figma/process-icon-operate.png';
import processIconOptimize from '../../assets/images/auto-pilot/figma/process-icon-optimize.png';

import whyIconGrounded from '../../assets/images/auto-pilot/figma/why-icon-grounded.png';
import whyIconMeasured from '../../assets/images/auto-pilot/figma/why-icon-measured.png';
import whyIconScoped from '../../assets/images/auto-pilot/figma/why-icon-scoped.png';

interface CardText {
  title: string;
  desc: string;
}

export default function AutoPilotPage() {
  const { t } = useTranslation('autoPilot');

  const problems = t('problem.items', { returnObjects: true }) as string[];

  const includedIcons = [
    includedIconConnectedSystems,
    includedIconAiHandling,
    includedIconMonitoring,
    includedIconMaintenance,
    includedIconOptimization,
    includedIconEvaluation,
  ];
  const includedDescWidths = [317, 313, 319, 345, undefined, 313];
  const includedCards = (t('included.cards', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: includedIcons[i],
    descWidth: includedDescWidths[i],
  }));

  const capabilityRow1 = t('capabilities.row1', { returnObjects: true }) as string[];
  const capabilityRow2 = t('capabilities.row2', { returnObjects: true }) as string[];

  const useCases = t('useCases.items', { returnObjects: true }) as CardText[];

  const hubNumbers = ['01', '02', '03', '04'];
  const hubColumns = (
    t('hub.columns', { returnObjects: true }) as { title: string; tags: string[][] }[]
  ).map((col, i) => ({ ...col, number: hubNumbers[i] }));

  const processIcons = [processIconAssess, processIconDesign, processIconDeploy, processIconOperate, processIconOptimize];
  const processCards = (t('process.cards', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: processIcons[i],
  }));

  const integrationsRow1Icons = [funnelSvg, phoneSvg, whatsappSvg, smsSvg, emailSvg];
  const integrationsRow1 = (
    t('integrations.row1', { returnObjects: true }) as { label: string }[]
  ).map((item, i) => ({ ...item, icon: integrationsRow1Icons[i] }));

  const integrationsRow2Icons = [calendarSvg, formSvg, personSupportSvg, databaseSvg];
  const integrationsRow2 = (
    t('integrations.row2', { returnObjects: true }) as { label: string }[]
  ).map((item, i) => ({ ...item, icon: integrationsRow2Icons[i] }));

  const whyIcons = [whyIconGrounded, whyIconMeasured, whyIconScoped];
  const whyCards = (t('why.cards', { returnObjects: true }) as CardText[]).map((card, i) => ({
    ...card,
    icon: whyIcons[i],
  }));

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      if (href.length > 1) {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const hero = useReveal('up');
  const problemHead = useReveal('left');
  const problemList = useReveal<HTMLUListElement>('right');
  const solutionCopy = useReveal('right');
  const includedHead = useReveal('up');
  const capabilitiesHead = useReveal('up');
  const usecasesHead = useReveal('up');
  const hubHead = useReveal('up');
  const processHead = useReveal('up');
  const integrationsHead = useReveal('up');
  const whyHead = useReveal('up');
  const includedGrid = useReveal('up');
  const capsRows = useReveal('up');
  const usecasesGrid = useReveal('up');
  const hubColumnsGrid = useReveal('up');
  const processGrid1 = useReveal('up');
  const processGrid2 = useReveal('up');
  const integrationsGrid = useReveal('up');
  const whyGrid = useReveal('up');

  return (
    <main className="autopilot-page">
      <section className="autopilot-hero section">
        <div className="container">
          <div className="row">
            <div className={`autopilot-hero__content ${hero.className}`} ref={hero.ref}>
              <span className="autopilot-hero__badge">
                <Icon svg={servicesStarSvg} />
                {t('hero.badge')}
              </span>
              <h1 className="autopilot-hero__title">{t('hero.title')}</h1>
              <p className="autopilot-hero__desc">{t('hero.desc')}</p>
              <div className="autopilot-hero__actions">
                <a href="#contact" className="btn btn-primary">
                  {t('hero.ctaPrimary')}
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
                <a href="#included" className="btn btn-outline">
                  {t('hero.ctaSecondary')}
                  <Icon svg={arrowRightSvg} className="btn-icon" />
                </a>
              </div>
            </div>

            <div className="autopilot-hero__graphic" aria-hidden="true">
              <div className="autopilot-hero__photo-wrap">
                <img src={heroPhoto} alt="" className="autopilot-hero__photo" loading="eager" />
                <img src={heroStar} alt="" className="autopilot-hero__star" loading="eager" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="autopilot-problem section">
        <div className="container autopilot-problem__row">
          <div className={`autopilot-problem__copy ${problemHead.className}`} ref={problemHead.ref}>
            <h2 className="autopilot-h1-lg">{t('problem.title')}</h2>
            <p className="autopilot-p-lg">{t('problem.desc')}</p>
          </div>

          <ul className={`autopilot-problem__list ${problemList.className}`} ref={problemList.ref}>
            {problems.map((text, i) => (
              <li className="autopilot-problem__item" key={text}>
                <span className="autopilot-problem__item-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="autopilot-problem__item-text">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="autopilot-solution section">
        <div className="container autopilot-solution__row">
          <div className="autopilot-solution__graphic" aria-hidden="true">
            <div className="autopilot-solution__moon-wrap">
              <img src={solutionMoon} alt="" className="autopilot-solution__moon" loading="lazy" />
              <img src={solutionStar} alt="" className="autopilot-solution__star" loading="lazy" />
            </div>
            <img src={solutionRipple} alt="" className="autopilot-solution__ripple" loading="lazy" />
          </div>

          <div className={`autopilot-solution__copy ${solutionCopy.className}`} ref={solutionCopy.ref}>
            <h2 className="autopilot-solution__title">{t('solution.title')}</h2>
            <p className="autopilot-solution__desc">{t('solution.desc')}</p>
          </div>
        </div>
      </section>

      <section className="autopilot-included section" id="included">
        <div className="container">
          <div className={`section-head ${includedHead.className}`} ref={includedHead.ref}>
            <h2 className="autopilot-h2">{t('included.title')}</h2>
          </div>

          <div className={`autopilot-included__grid ${includedGrid.className}`} ref={includedGrid.ref}>
            {includedCards.map((card) => (
              <div className="autopilot-card autopilot-included-card" key={card.title}>
                <div className="autopilot-included-card__glow" />
                <div className="autopilot-included-card__head">
                  <h3 className="autopilot-included-card__title">{card.title}</h3>
                  <img src={card.icon} alt="" className="autopilot-included-card__badge" loading="lazy" />
                </div>
                <p className="autopilot-included-card__desc" style={{ '--dw': card.descWidth } as React.CSSProperties}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-capabilities section" id="capabilities">
        <div className="container">
          <div className={`section-head ${capabilitiesHead.className}`} ref={capabilitiesHead.ref}>
            <h2 className="autopilot-h2">{t('capabilities.title')}</h2>
          </div>

          <div className={`autopilot-capabilities__rows ${capsRows.className}`} ref={capsRows.ref}>
            <div className="autopilot-capabilities__row">
              {capabilityRow1.map((label) => (
                <span className="autopilot-pill" key={label}>
                  <span className="autopilot-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
            <div className="autopilot-capabilities__row">
              {capabilityRow2.map((label) => (
                <span className="autopilot-pill" key={label}>
                  <span className="autopilot-pill__dot">
                    <span />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="autopilot-usecases section">
        <div className="container">
          <div className={`section-head ${usecasesHead.className}`} ref={usecasesHead.ref}>
            <h2 className="autopilot-h2">{t('useCases.title')}</h2>
          </div>

          <div className={`autopilot-usecases__grid ${usecasesGrid.className}`} ref={usecasesGrid.ref}>
            {useCases.map((item) => (
              <div className="autopilot-card autopilot-usecase-card" key={item.title}>
                <h3 className="autopilot-usecase-card__title">{item.title}</h3>
                <hr className="autopilot-usecase-card__divider" />
                <p className="autopilot-usecase-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-hub section">
        <div className="container">
          <div className={`section-head ${hubHead.className}`} ref={hubHead.ref}>
            <h2 className="autopilot-h1-lg autopilot-h1-lg--center">{t('hub.title')}</h2>
            <p className="autopilot-section-copy">{t('hub.desc')}</p>
          </div>

          <div style={{ position: 'relative' }}>
            <hr className="autopilot-hub__divider" />
            <span className="autopilot-hub__divider-dot" />
          </div>

          <div className={`autopilot-hub__columns ${hubColumnsGrid.className}`} ref={hubColumnsGrid.ref}>
            {hubColumns.map((col) => (
              <div className="autopilot-hub-column" key={col.number}>
                <span className="autopilot-hub-column__badge">{col.number}</span>
                <h3 className="autopilot-hub-column__title">{col.title}</h3>
                <div className="autopilot-hub-column__tags">
                  {col.tags.map((row, i) => (
                    <div className="autopilot-hub-column__tag-row" key={i}>
                      {row.map((tag) => (
                        <span className="autopilot-hub-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-process section" id="process">
        <div className="container">
          <div className={`section-head ${processHead.className}`} ref={processHead.ref}>
            <h2 className="autopilot-h2">{t('process.title')}</h2>
          </div>

          <div className="autopilot-process__rows">
            <div className={`autopilot-process__grid ${processGrid1.className}`} ref={processGrid1.ref}>
              {processCards.slice(0, 3).map((card) => (
                <div className="autopilot-card autopilot-card--flat autopilot-process-card" key={card.title}>
                  <div className="autopilot-process-card__body">
                    <h3 className="autopilot-process-card__title">{card.title}</h3>
                    <p className="autopilot-process-card__desc">{card.desc}</p>
                  </div>
                  <img src={card.icon} alt="" className="autopilot-process-card__badge" />
                </div>
              ))}
            </div>
            <div className={`autopilot-process__grid autopilot-process__grid--2 ${processGrid2.className}`} ref={processGrid2.ref}>
              {processCards.slice(3).map((card) => (
                <div className="autopilot-card autopilot-card--flat autopilot-process-card" key={card.title}>
                  <div className="autopilot-process-card__body">
                    <h3 className="autopilot-process-card__title">{card.title}</h3>
                    <p className="autopilot-process-card__desc">{card.desc}</p>
                  </div>
                  <img src={card.icon} alt="" className="autopilot-process-card__badge" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="autopilot-integrations section">
        <div className="container">
          <div className={`section-head ${integrationsHead.className}`} ref={integrationsHead.ref}>
            <h2 className="autopilot-h1-lg autopilot-h1-lg--center">{t('integrations.title')}</h2>
          </div>

          <div className={`autopilot-integrations__grid ${integrationsGrid.className}`} ref={integrationsGrid.ref}>
            <div className="autopilot-integrations__row">
              {integrationsRow1.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="autopilot-integration-connector" aria-hidden="true">
                      <span className="autopilot-integration-connector__line" />
                      <span className="autopilot-integration-connector__diamond-outer" />
                      <span className="autopilot-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="autopilot-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
            <div className="autopilot-integrations__row">
              {integrationsRow2.map((item, i) => (
                <Fragment key={item.label}>
                  {i > 0 && (
                    <span className="autopilot-integration-connector" aria-hidden="true">
                      <span className="autopilot-integration-connector__line" />
                      <span className="autopilot-integration-connector__diamond-outer" />
                      <span className="autopilot-integration-connector__diamond-inner" />
                    </span>
                  )}
                  <span className="autopilot-integration-pill">
                    <Icon svg={item.icon} />
                    {item.label}
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="autopilot-why section">
        <div className="container">
          <div className={`section-head ${whyHead.className}`} ref={whyHead.ref}>
            <h2 className="autopilot-h2">{t('why.title')}</h2>
          </div>

          <div className={`autopilot-why__grid ${whyGrid.className}`} ref={whyGrid.ref}>
            {whyCards.map((card) => (
              <div className="autopilot-card autopilot-card--flat autopilot-why-card" key={card.title}>
                <img src={card.icon} alt="" className="autopilot-badge-img autopilot-why-card__badge" />
                <h3 className="autopilot-why-card__title">{card.title}</h3>
                <p className="autopilot-why-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="autopilot-pricing-cta section">
        <div className="container">
          <div className="autopilot-pricing-cta__card">
            <img src={pricingGlowOrb} alt="" className="autopilot-pricing-cta__glow" loading="lazy" />
            <div className="autopilot-pricing-cta__copy">
              <h2 className="autopilot-pricing-cta__title">{t('pricingCta.title')}</h2>
              <p className="autopilot-pricing-cta__desc">{t('pricingCta.desc')}</p>
            </div>
            <a href="#contact" className="btn btn-primary">
              {t('pricingCta.cta')}
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}
