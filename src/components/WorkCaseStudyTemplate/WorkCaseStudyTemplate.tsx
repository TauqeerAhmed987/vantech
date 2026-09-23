import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './work-case-study.css';
import Icon from '../Icon';
import FAQ from '../FAQ';
import Testimonials from '../Testimonials';
import CTA from '../CTA';
import { useReveal } from '../../hooks/useReveal';
import { type SupportedLanguage } from '../../i18n/i18n';
import { localizePath } from '../../i18n/localizedPath';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import badgeCheckSvg from '../../assets/icons/work-van-badge-check.svg?raw';
import shareIconSvg from '../../assets/icons/ci-share-ios-export.svg?raw';
import copyIconSvg from '../../assets/icons/akar-icons-copy.svg?raw';
import carbonReferenceArchitectureSvg from '../../assets/icons/carbon-reference-architecture.svg?raw';
import databaseGearSvg from '../../assets/icons/bi-database-fill-gear.svg?raw';
import diagramVector29 from '../../assets/icons/work-van-diagram-vector-29.svg';
import diagramVector30 from '../../assets/icons/work-van-diagram-vector-30.svg';
import diagramVector31 from '../../assets/icons/work-van-diagram-vector-31.svg';
import closingSparkle from '../../assets/icons/work-van-closing-sparkle.svg';
import closingRing1 from '../../assets/icons/work-van-closing-ring-1.svg';
import closingRing2 from '../../assets/icons/work-van-closing-ring-2.svg';
import closingRing3 from '../../assets/icons/work-van-closing-ring-3.svg';

import defaultBannerWide from '../../assets/images/work-van-travel/figma/banner-wide.png';
import iconCircleBg from '../../assets/images/work-van-travel/figma/icon-circle-bg.png';
import defaultCtaBoxBg from '../../assets/images/work-van-travel/figma/cta-box-bg.png';
import orbSphere from '../../assets/images/orb-sphere.webp';

export interface WorkCaseStudyStat {
  label: string;
  value: string;
}

export interface WorkCaseStudyCapability {
  number: string;
  title: string;
}

export interface WorkCaseStudyRelatedItem {
  image: string;
  tag: string;
  title: string;
  desc: string;
  /** Internal route to that project's case study page. Card renders without a "View Work" button when omitted. */
  href?: string;
}

export interface WorkCaseStudyData {
  hero: {
    badges: string[];
    /** Renders all badges inside one merged pill instead of one pill per badge — matches this page's own Figma hero. */
    badgesMerged?: boolean;
    titleLines: string[];
    /** Collapses titleLines onto a single line on mobile (≤599px) instead of breaking at each line. Only set this for titles short enough to still read comfortably at that width. */
    titleOneLineOnMobile?: boolean;
    description: string;
    screenshot: string;
    screenshotAlt: string;
  };
  /** Full https:// URL for the live product — used in the hero button, browser mock, and sidebar link. */
  liveUrl: string;
  /** Short display text, e.g. "vantravelbusiness.com". Defaults to liveUrl with the protocol/trailing slash stripped. */
  liveUrlLabel?: string;
  /** Overrides the hero section's background image (defaults to the master's banner image). */
  heroBackgroundImage?: string;
  stats: WorkCaseStudyStat[];
  detail: {
    overviewDesc: string;
    challengeDesc: string;
    builtDesc: string;
  };
  sidebar: {
    techTags: string[];
    serviceTags: string[];
  };
  capabilities: {
    desc: string;
    items: WorkCaseStudyCapability[];
  };
  flow: {
    /** Overrides the "05 — " section heading text (defaults to "Services"). */
    heading?: string;
    steps: string[];
    caption: string;
  };
  diagram: {
    badgeLines: string[];
    pills: string[];
  };
  outcomes: string[];
  banner?: {
    image: string;
  };
  relatedWork: WorkCaseStudyRelatedItem[];
  closing?: {
    title: string;
    desc: string;
  };
}

function stripProtocol(url: string): string {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

export default function WorkCaseStudyTemplate({
  data,
  pageClassName,
}: {
  data: WorkCaseStudyData;
  /** Extra class on the page root — lets one case study page carry its own CSS overrides without affecting the shared template. */
  pageClassName?: string;
}) {
  const { t, i18n } = useTranslation('workCaseStudy');
  const currentLang = (i18n.language as SupportedLanguage) || 'en';
  const heroLeft = useReveal('left');
  const heroRight = useReveal('right');
  const heroMockReveal = useReveal('up');
  const overviewReveal = useReveal('left');
  const capabilitiesReveal = useReveal('up');
  const flowReveal = useReveal('up');
  const approachReveal = useReveal('up');
  const outcomeReveal = useReveal('up');
  const bannerReveal = useReveal('up');
  const relatedReveal = useReveal('up');
  const closingReveal = useReveal('up');

  const liveUrlLabel =
    data.liveUrlLabel ?? (data.liveUrl === '#' ? t('comingSoon') : stripProtocol(data.liveUrl));
  const bannerImage = data.banner?.image ?? defaultBannerWide;
  const closingTitle = data.closing?.title ?? t('closing.title');
  const closingDesc = data.closing?.desc ?? t('closing.desc');

  return (
    <main
      className={`wvt-page backimage-boy${pageClassName ? ` ${pageClassName}` : ''}`}
      style={data.heroBackgroundImage ? { backgroundImage: `url(${data.heroBackgroundImage})` } : undefined}
    >
      <section className="wvt-hero section" id="wvt-hero">
        <div className="container wvt-hero__row">
          <div className={`wvt-hero__left ${heroLeft.className}`} ref={heroLeft.ref}>
            <div className={`wvt-badges${data.hero.badgesMerged ? ' wvt-badges--merged' : ''}`}>
              {data.hero.badges.map((badge) => (
                <span className="wvt-badge" key={badge}>
                  <Icon svg={badgeCheckSvg} />
                  {badge}
                </span>
              ))}
            </div>
            <h1
              className={`wvt-hero__title${data.hero.titleOneLineOnMobile ? ' wvt-hero__title--one-line-mobile' : ''}`}
            >
              {data.hero.titleLines.map((line, i) => (
                <Fragment key={line}>
                  {line}
                  {i < data.hero.titleLines.length - 1 && <>{' '}<br /></>}
                </Fragment>
              ))}
            </h1>
          </div>

          <div className={`wvt-hero__right ${heroRight.className}`} ref={heroRight.ref}>
            <p className="wvt-hero__desc">{data.hero.description}</p>
            <div className="wvt-hero__actions">
              <a href={data.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                {t('viewLiveSite')}
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
              <a href={localizePath('/contact', currentLang)} className="btn btn-outline">
                {t('startSimilarProject')}
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className={`container maic-boc ${heroMockReveal.className}`} ref={heroMockReveal.ref}>
          <div className="wvt-browser-mock">
            <div className="wvt-browser-mock__toolbar">
              <div className="wvt-browser-mock__dots">
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
              </div>
              <div className="wvt-browser-mock__url">
                <a href={data.liveUrl} target="_blank" rel="noreferrer">
                  {data.liveUrl}
                </a>
              </div>
              <div className="wvt-browser-mock__tools">
                <span className="wvt-browser-mock__tool">
                  <Icon svg={shareIconSvg} />
                </span>
                <span className="wvt-browser-mock__tool">
                  <Icon svg={copyIconSvg} />
                </span>
              </div>
            </div>
            <div className="wvt-browser-mock__screen">
              <img src={data.hero.screenshot} alt={data.hero.screenshotAlt} loading="eager" />
            </div>
          </div>

          <div className="wvt-stats">
            {data.stats.map((s) => (
              <div className="wvt-stat" key={s.label}>
                <span className="wvt-stat__label">{s.label}</span>
                <span className="wvt-stat__value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wvt-detail section">
        <div className={`container wvt-detail__row ${overviewReveal.className}`} ref={overviewReveal.ref}>
          <div className="wvt-detail__col">
            <div className="wvt-detail-item">
              <span className="wvt-eyebrow-number">01 — {t('sections.overview')}</span>
              <p className="wvt-detail-item__desc">{data.detail.overviewDesc}</p>
              <span className="wvt-detail-item__divider" />
            </div>

            <div className="wvt-detail-item">
              <span className="wvt-eyebrow-number">02 — {t('sections.challenge')}</span>
              <p className="wvt-detail-item__desc">{data.detail.challengeDesc}</p>
              <span className="wvt-detail-item__divider" />
            </div>

            <div className="wvt-detail-item">
              <span className="wvt-eyebrow-number">03 — {t('sections.whatWeBuilt')}</span>
              <p className="wvt-detail-item__desc">{data.detail.builtDesc}</p>
              <span className="wvt-detail-item__divider" />
            </div>

            <div className={`wvt-capabilities ${capabilitiesReveal.className}`} ref={capabilitiesReveal.ref}>
              <span className="wvt-eyebrow-number">04 — {t('sections.coreCapabilities')}</span>
              {data.capabilities.desc && <p className="wvt-section-desc">{data.capabilities.desc}</p>}

              <div className="wvt-capabilities__grid">
                {data.capabilities.items.map((c) => (
                  <div className="wvt-capability-card" key={c.number}>
                    <span className="wvt-capability-card__number">{c.number}</span>
                    <span className="wvt-capability-card__title">{c.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`wvt-flow ${flowReveal.className}`} ref={flowReveal.ref}>
              <span className="wvt-eyebrow-number">05 — {data.flow.heading ?? t('sections.services')}</span>
              <div className="wvt-flow__steps">
                {data.flow.steps.map((step, i) => (
                  <div className="wvt-flow__step-wrap" key={step}>
                    <span className="wvt-flow__step">{step}</span>
                    {i < data.flow.steps.length - 1 && <span className="wvt-flow__connector" />}
                  </div>
                ))}
              </div>
              <p className="wvt-flow__caption">{data.flow.caption}</p>
            </div>

            <div className={`wvt-approach ${approachReveal.className}`} ref={approachReveal.ref}>
              <span className="wvt-approach__divider" />
              <span className="wvt-eyebrow-number">06 — {t('sections.systemApproach')}</span>

              <div className="wvt-diagram">
                <div className="wvt-diagram__badge">
                  <Icon svg={carbonReferenceArchitectureSvg} className="wvt-diagram__badge-icon" />
                  <span className="wvt-diagram__badge-label">
                    {data.diagram.badgeLines.map((line, i) => (
                      <Fragment key={line}>
                        {line}
                        {i < data.diagram.badgeLines.length - 1 && <br />}
                      </Fragment>
                    ))}
                  </span>
                </div>

                <img src={diagramVector29} alt="" className="wvt-diagram__vector wvt-diagram__vector--1" />
                <img src={diagramVector31} alt="" className="wvt-diagram__vector wvt-diagram__vector--2" />
                <img src={diagramVector31} alt="" className="wvt-diagram__vector wvt-diagram__vector--3" />
                <img src={diagramVector30} alt="" className="wvt-diagram__vector wvt-diagram__vector--4" />
                <span className="wvt-diagram__dot wvt-diagram__dot--center" />

                <div className="wvt-diagram__pills">
                  {data.diagram.pills.map((pill, i) => (
                    <span className="wvt-diagram__pill-row" key={`${pill}-${i}`}>
                      <span className="wvt-diagram__pill-dot" />
                      <span className="wvt-diagram__pill">{pill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={`wvt-outcome ${outcomeReveal.className}`} ref={outcomeReveal.ref}>
              <span className="wvt-eyebrow-number">07 — {t('sections.outcome')}</span>
              <ul className="wvt-outcome__list">
                {data.outcomes.map((item, i) => (
                  <li key={`${item}-${i}`}>
                    <span className="wvt-outcome__dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="wvt-sidebar">
            <div className="wvt-sidebar-card">
              <span className="wvt-sidebar-card__title">{t('sidebar.techAndServices')}</span>
              <div className="wvt-tags">
                {data.sidebar.techTags.map((tag) => (
                  <span className="wvt-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="wvt-sidebar-card">
              <span className="wvt-sidebar-card__title">{t('sidebar.services')}</span>
              <div className="wvt-tags">
                {data.sidebar.serviceTags.map((tag) => (
                  <span className="wvt-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={data.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="wvt-sidebar-card wvt-sidebar-card--link"
            >
              <span className="wvt-sidebar-card__title">{t('sidebar.exploreLiveProduct')}</span>
              <span className="wvt-sidebar-card__link">
                {liveUrlLabel}
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </span>
            </a>
          </aside>
        </div>
      </section>

      <div className={`wvt-banner ${bannerReveal.className}`} ref={bannerReveal.ref}>
        <img src={bannerImage} alt="" className="wvt-banner__img" loading="lazy" />
        <span className="wvt-banner__icon">
          <img src={iconCircleBg} alt="" />
          <Icon svg={databaseGearSvg} />
        </span>
      </div>

      <section className="wvt-related section">
        <div className={`container ${relatedReveal.className}`} ref={relatedReveal.ref}>
          <h2 className="wvt-related__title">{t('relatedWork')}</h2>

          {/* <div className="wvt-related__grid link">
            {data.relatedWork.map((item) => (
              <div className="wvt-related-card" key={item.title}>
                <div className="wvt-related-card__image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <span className="wvt-related-card__tag">{item.tag}</span>
                <h3 className="wvt-related-card__title">{item.title}</h3>
                <p className="wvt-related-card__desc">{item.desc}</p>
                {item.href && (
                  <a href={localizePath(item.href, currentLang)} className="wvt-related-card__link">
                    {t('viewWork')}
                    <span className="wvt-related-card__link-icon">
                      <Icon svg={caseStudyArrowSvg} />
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div> */}
          <div className="wvt-related__grid">
              {data.relatedWork.map((item) => {
                const href = item.href ? localizePath(item.href, currentLang) : undefined;
                const handleCardClick = () => {
                  if (href) {
                    window.location.href = href;
                  }
                };
                return (
                  <div
                    className={`wvt-related-card${href ? ' wvt-related-card--clickable' : ''}`}
                    key={item.title}
                    role={href ? 'link' : undefined}
                    tabIndex={href ? 0 : undefined}
                    onClick={href ? handleCardClick : undefined}
                    onKeyDown={
                      href
                        ? (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleCardClick();
                            }
                          }
                        : undefined
                    }
                  >
                    <div className="wvt-related-card__image">
                      <img src={item.image} alt={item.title} loading="lazy" />
                    </div>
                    <span className="wvt-related-card__tag">{item.tag}</span>
                    <h3 className="wvt-related-card__title">{item.title}</h3>
                    <p className="wvt-related-card__desc">{item.desc}</p>
                    {/* {href && (
                      <a
                        href={href}
                        className="wvt-related-card__link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t('viewWork')}
                        <span className="wvt-related-card__link-icon">
                          <Icon svg={caseStudyArrowSvg} />
                        </span>
                      </a>
                    )} */}
                  </div>
                );
              })}
            </div>

          <div className="wvt-related__cta">
            <a href={`${localizePath('/', currentLang)}#services`} className="btn btn-outline">
              {t('exploreAllServices')}
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="wvt-closing section">
        <div className={`container ${closingReveal.className}`} ref={closingReveal.ref}>
          <div className="wvt-closing__box">
            <img src={defaultCtaBoxBg} alt="" className="wvt-closing__bg" loading="lazy" />
            <div className="wvt-closing__orb">
              <img src={closingRing1} alt="" className="wvt-closing__ring wvt-closing__ring--1" />
              <img src={closingRing2} alt="" className="wvt-closing__ring wvt-closing__ring--2" />
              <img src={closingRing3} alt="" className="wvt-closing__ring wvt-closing__ring--3" />
              <img src={orbSphere} alt="" className="orb-sphere__img orb-sphere__img--spin" />
              <img src={closingSparkle} alt="" className="wvt-closing__sparkle" />
            </div>
            <div className="wvt-closing__content">
              <h2 className="wvt-closing__title">{closingTitle}</h2>
              <p className="wvt-closing__desc">{closingDesc}</p>
              <a href={localizePath('/contact', currentLang)} className="btn btn-primary">
                {t('closing.startAProject')}
                <Icon svg={arrowRightSvg} className="btn-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  );
}
