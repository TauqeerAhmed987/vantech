import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-lelofit/figma/browser-mockup.png';
import relatedWorkPMB from '../../assets/images/work-van-travel/figma/related-work-3.png';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';
// The Figma "Power Mindset Breakthrough" related-work card mistakenly reused
// the Mighty Oak Legacy screenshot again here (same recurring issue seen on
// several other pages), so we reuse that page's own real hero screenshot
// instead of the wrong asset.
import relatedWorkPowerMindset from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.png';

// Hero content from Figma node 2328:565, middle sections from node
// 2328:566, related work from node 2328:567 (closing CTA matches the
// template's default). The hero's badges/stats/description in Figma were a
// literal copy-paste from the Buketi Financial & Consulting page (a
// financial-practice description on a fitness product) — per the earlier
// established preference, we keep the literal Figma text rather than
// guessing what it should say.
const data = {
  ...createPlaceholderWorkData('Lelofit'),
  hero: {
    badges: ['Business Platforms', 'Financial Services'],
    badgesMerged: true,
    titleLines: ['Lelofit'],
    description:
      'A financial and consulting practice platform with service positioning, advisory offers and qualified enquiry capture.',
    screenshot: heroScreenshot,
    screenshotAlt: 'Lelofit platform screenshot',
  },
  liveUrl: 'https://lelofit.com/',
  stats: [
    { label: 'Project type', value: 'Web Applications' },
    { label: 'Capabilities', value: 'Web Development • Mobile Experience • UI/UX Design' },
    { label: 'Status', value: 'Live' },
  ],
  detail: {
    overviewDesc:
      'Lelofit needed a fast, mobile-first product for discovering training programmes and subscribing to coaching. We delivered a responsive experience with programme browsing, plan comparison and streamlined sign-up.',
    challengeDesc:
      'Training programmes and coaching plans were discovered almost entirely on mobile, where a slow, desktop-first layout was losing users before they reached pricing.',
    builtDesc:
      'We delivered a fast mobile-first experience with programme browsing, side-by-side plan comparison and a streamlined sign-up path that removes steps between interest and subscription.',
  },
  sidebar: {
    techTags: ['React', 'Type Script', 'Tailwind CSS'],
    serviceTags: ['Web Development', 'Mobile Experience', 'UI/UX Design'],
  },
  capabilities: {
    desc: '',
    items: [
      { number: '01', title: 'Mobile-first programme discovery' },
      { number: '02', title: 'Plan comparison view' },
      { number: '03', title: 'Streamlined subscription sign-up' },
      { number: '04', title: 'Coach and methodology content' },
      { number: '05', title: 'Performance-focused implementation' },
    ],
  },
  flow: {
    heading: 'Business workflow',
    steps: ['Browse', 'Book', 'Train'],
    caption: 'Conceptual system view',
  },
  diagram: {
    badgeLines: ['Conceptual', 'system view'],
    pills: ['Member', 'Public experience', 'Booking logic', 'Operations'],
  },
  outcomes: [
    'Programme discovery works properly on phones',
    'Plan differences are understandable at a glance',
    'Sign-up is a short path, not a form marathon',
  ],
  relatedWork: [
    {
      image: relatedWorkOneTap,
      tag: 'SaaS',
      title: 'OneTap Digital Card',
      desc: 'A digital business card platform where professionals share contact details, links and a booking page through a public card link or QR code.',
    },
    {
      image: relatedWorkPMB,
      tag: 'Ai',
      title: 'The PMB Consulting',
      desc: 'A professional digital presence for a consulting practice covering business mentorship, formation, branding and growth services.',
    },
    {
      image: relatedWorkPowerMindset,
      tag: 'Professional Services',
      title: 'Power Mindset Breakthrough',
      desc: 'A coaching and personal development platform with programmes, booking and content delivery.',
    },
  ],
};

export default function WorkLelofitPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
