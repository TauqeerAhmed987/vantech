import type { WorkCaseStudyData } from '../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';

import browserMockup from '../assets/images/work-van-travel/figma/browser-mockup.png';
import relatedWork1 from '../assets/images/work-van-travel/figma/related-work-1.png';
import relatedWork2 from '../assets/images/work-van-travel/figma/related-work-2.png';
import relatedWork3 from '../assets/images/work-van-travel/figma/related-work-3.png';

function splitTitleLines(title: string): string[] {
  const words = title.split(' ');
  if (words.length <= 1) return [title];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

/**
 * Generic "coming soon" content for a Work case-study page, built entirely
 * from the page's own title — no business-specific claims are invented.
 * Swap the returned object's fields for real content once a Figma link for
 * that page is provided.
 */
export function createPlaceholderWorkData(title: string): WorkCaseStudyData {
  return {
    hero: {
      badges: ['Case Study'],
      titleLines: splitTitleLines(title),
      description: `Full case study details for ${title} are coming soon.`,
      screenshot: browserMockup,
      screenshotAlt: `${title} platform screenshot placeholder`,
    },
    liveUrl: '#',
    stats: [
      { label: 'Project type', value: 'Coming soon' },
      { label: 'Capabilities', value: 'Coming soon' },
      { label: 'Industry', value: 'Coming soon' },
      { label: 'Status', value: 'Coming soon' },
    ],
    detail: {
      overviewDesc: `An overview of ${title} will be added here once the case study is ready.`,
      challengeDesc: `The challenge behind ${title} will be added here once the case study is ready.`,
      builtDesc: `What we built for ${title} will be added here once the case study is ready.`,
    },
    sidebar: {
      techTags: ['Coming soon'],
      serviceTags: ['Coming soon'],
    },
    capabilities: {
      desc: `Core capabilities for ${title} will be listed here once the case study is ready.`,
      items: [
        { number: '01', title: 'Coming soon' },
        { number: '02', title: 'Coming soon' },
        { number: '03', title: 'Coming soon' },
        { number: '04', title: 'Coming soon' },
        { number: '05', title: 'Coming soon' },
      ],
    },
    flow: {
      steps: ['Explore', 'Enquire', 'Follow-up'],
      caption: 'Conceptual system view',
    },
    diagram: {
      badgeLines: ['Conceptual', 'system view'],
      pills: ['Coming soon', 'Coming soon', 'Coming soon', 'Coming soon'],
    },
    outcomes: [
      'Outcomes for this case study will be added soon.',
      'Outcomes for this case study will be added soon.',
      'Outcomes for this case study will be added soon.',
    ],
    relatedWork: [
      {
        image: relatedWork1,
        tag: 'Case Study',
        title: 'Solid Rock Leadership Development',
        desc: 'A leadership and financial education platform presenting programs, audiences and a consultation booking journey.',
      },
      {
        image: relatedWork2,
        tag: 'Case Study',
        title: 'OneTap Digital Card',
        desc: 'A digital business card platform where professionals share contact details, links and a booking page.',
      },
      {
        image: relatedWork3,
        tag: 'Case Study',
        title: 'The PMB Consulting',
        desc: 'A professional digital presence for a consulting practice covering business mentorship, formation, branding and growth services.',
      },
    ],
  };
}
