import { useState } from 'react';
import './work-main.css';
import Icon from '../../components/Icon';
import FAQ from '../../components/FAQ';
import Testimonials from '../../components/Testimonials';
import CTA from '../../components/CTA';
import { useReveal } from '../../hooks/useReveal';

import arrowRightSvg from '../../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import caseStudyArrowSvg from '../../assets/icons/at-icons-arrow-right.svg?raw';

import oneTapImg from '../../assets/images/work-van-travel/figma/related-work-2.png';
import vanTravelImg from '../../assets/images/work-van-travel/figma/browser-mockup.png';
import mightyOakImg from '../../assets/images/work-main/figma/mighty-oak-legacy.png';
import pmbConsultingImg from '../../assets/images/work-main/figma/pmb-consulting.png';
import aiFnaImg from '../../assets/images/work-main/figma/ai-fna.png';
import allAccessTripImg from '../../assets/images/work-main/figma/all-access-trip.png';
import solidRockImg from '../../assets/images/work-main/figma/solid-rock-leadership.png';
import powerMindsetImg from '../../assets/images/work-main/figma/power-mindset-breakthrough.png';
import lelofitImg from '../../assets/images/work-main/figma/lelofit.png';
import buketiImg from '../../assets/images/work-main/figma/buketi-financial-consulting.png';

const CASE_STUDY_CTA = 'https://vantechsystems.tech/start-a-project';

const filterTabs = ['All', 'AI', 'SaaS', 'Web Applications', 'Business Platforms', 'Insurance', 'E-commerce'];

const portfolioItems = [
  {
    title: 'OneTap Digital Card',
    category: 'SaaS',
    desc: 'A digital business card platform where professionals share contact details, links and a booking page through a public card link or QR code.',
    image: oneTapImg,
    caseHref: '/onetap-digital-card',
  },
  {
    title: 'The PMB Consulting',
    category: 'Business Platforms',
    desc: 'A professional digital presence for a consulting practice covering business mentorship, formation, branding and growth services.',
    image: pmbConsultingImg,
    caseHref: '/pmb-consulting',
  },
  {
    title: 'Buketi Financial & Consulting',
    category: 'Business Platforms',
    desc: 'A financial and consulting practice platform with service positioning, advisory offers and qualified enquiry capture.',
    image: buketiImg,
    caseHref: '/buketi-insurance-services',
  },
  {
    title: 'Mighty Oak Legacy',
    category: 'Business Platforms',
    desc: 'A digital platform built around financial education, mentorship, leadership development and family legacy guidance.',
    image: mightyOakImg,
    caseHref: '/mighty-oak-legacy',
  },
  {
    title: 'Solid Rock Leadership Development',
    category: 'Business Platforms',
    desc: 'A leadership and financial education platform presenting programs, audiences and a consultation booking journey.',
    image: solidRockImg,
    caseHref: '/solid-rock-leadership-development',
  },
  {
    title: 'Van Travel Business',
    category: 'Web Applications',
    desc: 'A travel and immigration business platform covering packages, document intake and client enquiries.',
    image: vanTravelImg,
    caseHref: '/van-travel-business',
  },
  {
    title: 'AI FNA',
    category: 'AI',
    desc: 'An AI-assisted financial needs analysis tool that turns client data into advisor-ready recommendations.',
    image: aiFnaImg,
    caseHref: CASE_STUDY_CTA,
  },
  {
    title: 'Power Mindset Breakthrough',
    category: 'Business Platforms',
    desc: 'A coaching and personal development platform with programmes, booking and content delivery.',
    image: powerMindsetImg,
    caseHref: '/power-mindset-breakthrough',
  },
  {
    title: 'Lelofit',
    category: 'SaaS',
    desc: 'A fitness and coaching experience with programme discovery, plans and member sign-up.',
    image: lelofitImg,
    caseHref: '/lelofit',
  },
  {
    title: 'All Access Trip',
    category: 'Web Applications',
    desc: 'A travel booking and itinerary platform for curated trips, groups and experiences.',
    image: allAccessTripImg,
    caseHref: '/all-access-trip',
  },
];

export default function WorkMainPage() {
  const heroReveal = useReveal('up');
  const portfolioReveal = useReveal('up');
  const [activeTab, setActiveTab] = useState('All');

  const visibleItems =
    activeTab === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <main className="work-page bacgron-bodyimage">
      <section className="work-hero section" id="work-hero">
        <div className={`container work-hero__content ${heroReveal.className}`} ref={heroReveal.ref}>
          <span className="work-hero__badge">Selected work</span>

          <h1 className="work-hero__title">
            Technology Built for
            <br />
            Real Businesses.
          </h1>

          <p className="work-hero__desc">
            Explore AI systems, SaaS platforms, web applications, business software and digital
            experiences designed and developed by Van Tech Systems.
          </p>

          <p className="work-hero__subdesc">
            From product strategy and architecture to development, automation and production
            deployment.
          </p>

          <div className="work-hero__actions">
            <a href="/contact" className="btn btn-outline">
              Start a Project
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
            <a href="/#work" className="btn btn-outline">
              Our Work
              <Icon svg={arrowRightSvg} className="btn-icon" />
            </a>
          </div>
        </div>
      </section>

      <section className="work-portfolio section">
        <div className={`container ${portfolioReveal.className}`} ref={portfolioReveal.ref}>
          <div className="work-portfolio__tabs">
            {filterTabs.map((tab) => (
              <button
                type="button"
                key={tab}
                className={`work-portfolio__tab${tab === activeTab ? ' is-active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="work-portfolio__grid">
            {visibleItems.map((item) => (
              <article className="work-card" key={item.title}>
                <div className="work-card__image">
                  <img src={item.image} alt={`${item.title} platform preview`} loading="lazy" />
                </div>

                <a
                  href={item.caseHref}
                  target={item.caseHref.startsWith('http') ? '_blank' : undefined}
                  rel={item.caseHref.startsWith('http') ? 'noreferrer' : undefined}
                  className="work-card__title"
                >
                  {item.title}
                </a>

                <p className="work-card__desc">{item.desc}</p>

                <div className="work-card__links">
                  <a
                    href={item.caseHref}
                    target={item.caseHref.startsWith('http') ? '_blank' : undefined}
                    rel={item.caseHref.startsWith('http') ? 'noreferrer' : undefined}
                    className="work-card__link"
                  >
                    View Case Study
                    <span className="work-card__link-icon work-card__link-icon--case">
                      <Icon svg={caseStudyArrowSvg} />
                    </span>
                  </a>
                  <span className="work-card__link">
                    View Live Site
                    <span className="work-card__link-icon work-card__link-icon--site">
                      <Icon svg={caseStudyArrowSvg} />
                    </span>
                  </span>
                </div>
              </article>
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
