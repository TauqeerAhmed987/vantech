import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './about.css';
import Icon from '../../components/Icon';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';
import { usePinnedReveal } from '../../hooks/usePinnedReveal';
import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import techBadge from '../../assets/images/section-about-3/technology-badge.webp';
import layersBadge from '../../assets/images/section-about-3/layers-badge.webp';
import Threebusinesses from '../../assets/images/about/three-ways-businesses-con.webp';
import discoveryIcon from '../../assets/images/about/section2-icons/discovery.png';
import architectureIcon from '../../assets/images/about/section2-icons/architecture.png';
import buildIcon from '../../assets/images/about/section2-icons/build.png';
import integrationIcon from '../../assets/images/about/section2-icons/integration.png';
import deploymentIcon from '../../assets/images/about/section2-icons/deployment.png';
import archDecisionSphere from '../../assets/images/about/figma/architecture-decision-sphere.webp';
import accessControlIcon from '../../assets/images/about/Access-control-c.png';
import confidentialityIcon from '../../assets/images/about/Confidentiality-E.png';
import dataHandlingIcon from '../../assets/images/about/Data-handling-F.png';
import ownershipIcon from '../../assets/images/about/Ownership-handover-N.png';
import responsibleAiIcon from '../../assets/images/about/Responsible-AI-O.png';
import workGlow from '../../assets/images/about/Three-businesses-rigth-S.webp';

const processIcons = [discoveryIcon, architectureIcon, buildIcon, integrationIcon, deploymentIcon];
const riskIcons = [dataHandlingIcon, accessControlIcon, confidentialityIcon, ownershipIcon, responsibleAiIcon];

type ProcessStep = { number: string; title: string; desc?: string; descLine1?: string; descLine2?: string };
type TitledDesc = { title: string; desc: string };
type LayerItem = TitledDesc & { number: string; tags: string[] };
type NumberedCard = TitledDesc & { number: string };

function TechCard({ text, primary }: { text: string; primary: boolean }) {
  const reveal = useReveal('up');

  return (
    <p
      className={`about-tech-card${primary ? ' about-tech-card--primary' : ''} ${reveal.className}`}
      ref={reveal.ref}
    >
      {text}
    </p>
  );
}

export default function AboutPage() {
  const { t } = useTranslation('about');
  const processSteps = t('process.steps', { returnObjects: true }) as ProcessStep[];
  const techCards = t('tech.cards', { returnObjects: true }) as string[];
  const layers = t('layers.items', { returnObjects: true }) as LayerItem[];
  const principles = t('principles.items', { returnObjects: true }) as TitledDesc[];
  const aiPoints = t('ai.points', { returnObjects: true }) as string[];
  const riskCards = t('risk.cards', { returnObjects: true }) as TitledDesc[];
  const workCards = t('work.cards', { returnObjects: true }) as NumberedCard[];

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
  const processHead = useReveal('left');
  const processPin = usePinnedReveal(processSteps.length);
  const techReveal = useReveal('right');
  const layersHead = useReveal('left');
  const layersGrid = useReveal('up');
  const principlesHead = useReveal('up');
  const archCenter = useReveal('up');
  const principlesGrid = useReveal('up');
  const aiCopy = useReveal('left');
  const aiList = useReveal<HTMLUListElement>('right');
  const riskHead = useReveal('right');
  const riskGrid = useReveal('up');
  const riskNote = useReveal('up');
  const workHead = useReveal('left');
  const workGrid = useReveal('up');
  const workGlowReveal = useReveal<HTMLImageElement>('up');

  return (
    <main className="about-page about-banner">
      <section className="about-hero section">
        <div className={`container about-hero__content ${hero.className}`} ref={hero.ref}>
          <span className="eyebrow-pill">{t('hero.eyebrow')}</span>
          <h1 className="about-hero__title">{t('hero.title')}</h1>
          <p className="about-hero__desc">{t('hero.desc')}</p>
          <div className="about-hero__actions">
            <a href="#contact" className="btn btn-outline">
              {t('hero.startAProject')}
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
            <a href="/#work" className="btn btn-outline">
              {t('hero.ourWork')}
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="about-process section">
        <div className="container maix-new-widthadd">
          <div className={`section-head ${processHead.className}`} ref={processHead.ref}>
            <h2 className="section-title section-title--process">{t('process.title')}</h2>
          </div>

          <div
            className="about-process__pin-wrapper"
            ref={processPin.wrapperRef}
            style={{ height: `calc(100vh + ${processPin.scrollSpan}px)` }}
          >
            <div className="about-process__pin">
              <div className="about-process__list">
                {processSteps.map((step, i) => (
                  <div
                    className={`about-process-item${i <= processPin.activeIndex ? ' is-active' : ''}`}
                    key={step.number}
                  >
                    <div className="about-process-item__lead">
                      <div className="about-process-item__icon about-process-item__icon--img">
                        <img src={processIcons[i]} alt="" className="about-process-item__icon-img" />
                      </div>
                      <h3 className="about-process-item__title">{step.title}</h3>
                    </div>
                    <p className="about-process-item__desc">
                      {step.descLine1 ? (
                        <>
                          {step.descLine1} <br />
                          {step.descLine2}
                        </>
                      ) : (
                        step.desc
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-tech section">
        
        <div className="container">
          <div className={`about-tech__head ${techReveal.className}`} ref={techReveal.ref}>
            <img src={techBadge} alt="" className="about-tech__badge" loading="lazy" />
            <h2 className="about-title">{t('tech.title')}</h2>
          </div>

          <div className="about-tech__grid">
            {techCards.map((text, i) => (
              <TechCard key={i} text={text} primary={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="about-layers section">
        <div className="container">
          <div className={`section-head ${layersHead.className}`} ref={layersHead.ref}>
            <img src={layersBadge} alt="" className="about-tech__badge" loading="lazy" />
            <h2 className="section-title section-title--layers">{t('layers.title')}</h2>
          </div>

          <div className={`about-layers-table ${layersGrid.className}`} ref={layersGrid.ref}>
            {layers.map((layer) => (
              <div className="about-layers-table__row" key={layer.number}>
                <h3 className="about-layers-table__title">{layer.title}</h3>
                <div className="about-layers-table__tags">
                  {layer.tags.map((tag) => (
                    <span className="about-layers-table__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-principles section">
        <div className="container">
          <div className={`section-head ${principlesHead.className}`} ref={principlesHead.ref}>
            <span className="eyebrow-pill">{t('principles.eyebrow')}</span>
            <h2 className="section-title section-title--principles">{t('principles.title')}</h2>
          </div>

          <div
            className={`about-arch-diagram ${archCenter.className}`}
            ref={archCenter.ref}
          >
            <div className="about-arch-diagram__panel about-arch-diagram__panel--left">
              <div className="about-arch-diagram__row about-arch-diagram__row--end">
                <span className="about-arch-diagram__pill about-arch-diagram__pill--orange">{t('principles.diagram.businessGoal')}</span>
              </div>
              <div className="about-arch-diagram__row">
                <span className="about-arch-diagram__pill about-arch-diagram__pill--blue">{t('principles.diagram.existingSystems')}</span>
                <span className="about-arch-diagram__pill about-arch-diagram__pill--orange">{t('principles.diagram.realData')}</span>
              </div>
              <div className="about-arch-diagram__row about-arch-diagram__row--center">
                <span className="about-arch-diagram__pill about-arch-diagram__pill--orange">{t('principles.diagram.constraints')}</span>
              </div>
            </div>
            <div className="about-arch-diagram__center">
              <span className="about-arch-diagram__line" />
              <div
                className="about-arch-diagram__circle"
                style={{ backgroundImage: `url(${archDecisionSphere})` }}
              >
                <img src={architectureIcon} alt="" />
                <span>
                  {t('principles.diagram.architectureDecisionLine1')}
                  <br />
                  {t('principles.diagram.architectureDecisionLine2')}
                </span>
              </div>
              <span className="about-arch-diagram__line" />
            </div>
            <div className="about-arch-diagram__panel about-arch-diagram__panel--right">
              <div className="about-arch-diagram__row">
                <span className="about-arch-diagram__pill about-arch-diagram__pill--orange">{t('principles.diagram.documentedModel')}</span>
              </div>
              <div className="about-arch-diagram__row">
                <span className="about-arch-diagram__pill about-arch-diagram__pill--blue">{t('principles.diagram.workingSystem')}</span>
              </div>
              <div className="about-arch-diagram__row">
                <span className="about-arch-diagram__pill about-arch-diagram__pill--orange">{t('principles.diagram.ownedInfrastructure')}</span>
              </div>
            </div>
          </div>

          <div
            className={`about-principles__grid ${principlesGrid.className}`}
            ref={principlesGrid.ref}
          >
            {principles.map((p) => (
              <div className="about-principle-card" key={p.title}>
                <div className="about-principle-card__glow" />
                <h3 className="about-principle-card__title">{p.title}</h3>
                <p className="about-principle-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-ai section">
        <div className="container about-row">
          <div className={`about-copy ${aiCopy.className}`} ref={aiCopy.ref}>
            <h2 className="about-title">{t('ai.title')}</h2>
            <p className="about-desc">{t('ai.desc1')}</p>
            <p className="about-desc">{t('ai.desc2')}</p>
          </div>

          <ul className={`about-ai__list ${aiList.className}`} ref={aiList.ref}>
            {aiPoints.map((point, i) => (
              <li key={point} className="about-ai__point">
                <span className="about-ai__point-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="about-ai__point-text">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-risk section">
        <div className="container">
          <div className={`section-head ${riskHead.className}`} ref={riskHead.ref}>
            <span className="eyebrow-pill">{t('risk.eyebrow')}</span>
            <h2 className="section-title section-title--risk">{t('risk.title')}</h2>
          </div>

          <div className={`about-risk__grid ${riskGrid.className}`} ref={riskGrid.ref}>
            {riskCards.map((card, i) => (
              <div className="about-risk-card" key={card.title}>
                <div className="about-risk-card__glow" />
                <img src={riskIcons[i]} alt="" className="about-risk-card__icon" loading="lazy" />
                <h3 className="about-risk-card__title">{card.title}</h3>
                <p className="about-risk-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>

          <p className={`about-risk__note ${riskNote.className}`} ref={riskNote.ref}>
            {t('risk.note')}{' '}
            <a href="/legal" className="about-risk__note-link">
              /legal
            </a>
          </p>
        </div>
      </section>

      <section className="about-work section">
        <img
          src={workGlow}
          alt=""
          className={`about-work__glow ${workGlowReveal.className}`}
          ref={workGlowReveal.ref}
          loading="lazy"
        />
        <div className="container">
          <div className={`section-head ${workHead.className}`} ref={workHead.ref}>
            <img src={Threebusinesses} alt="" className="about-tech__badge" loading="lazy" />
            <h2 className="section-title section-title--work">{t('work.title')}</h2>
          </div>

          <div className={`about-work__grid ${workGrid.className}`} ref={workGrid.ref}>
            {workCards.map((card) => (
              <div className="about-work-card" key={card.number}>
                <div className="about-work-card__glow" />
                {/* <Icon svg={workBadgeSvg} className="about-work-card__badge" /> */}
                <div className="icon-fle">
                  <h3 className="about-work-card__title">{card.title}</h3>
                  <span className="about-work-card__number">{card.number}</span>
                </div>
                <p className="about-work-card__desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}
