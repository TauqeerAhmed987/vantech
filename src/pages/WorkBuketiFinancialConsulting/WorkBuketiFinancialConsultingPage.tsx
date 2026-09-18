import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-buketi-financial-consulting/figma/browser-mockup.png';
import relatedWorkPMB from '../../assets/images/work-van-travel/figma/related-work-3.png';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';
// The Figma "Power Mindset Breakthrough" related-work card mistakenly reused
// the Mighty Oak Legacy screenshot again here (same recurring issue seen on
// several other pages), so we reuse that page's own real hero screenshot
// instead of the wrong asset.
import relatedWorkPowerMindset from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.png';

// Hero content from Figma node 2327:562, middle sections from node
// 2327:563, related work from node 2327:564 (closing CTA matches the
// template's default, which already mirrors that node's content exactly).
const data = {
  ...createPlaceholderWorkData('Buketi Financial & Consulting'),
  hero: {
    badges: ['Business Platforms', 'Financial Services'],
    badgesMerged: true,
    titleLines: ['Buketi Financial', '& Consulting'],
    description:
      'A financial and consulting practice platform with service positioning, advisory offers and qualified enquiry capture.',
    screenshot: heroScreenshot,
    screenshotAlt: 'Buketi Financial & Consulting platform screenshot',
  },
  liveUrl: 'https://buketifinancialconsulting.com/',
  stats: [
    { label: 'Project type', value: 'Business Platforms' },
    { label: 'Capabilities', value: 'Web Development • UI/UX Design' },
    { label: 'Industry', value: 'Financial Services' },
    { label: 'Status', value: 'Live' },
  ],
  detail: {
    overviewDesc:
      'Buketi Financial & Consulting needed a credible digital front door for advisory services. We designed and built a conversion-focused platform with structured service pages, multi-step enquiry capture and analytics-ready lead routing.',
    challengeDesc:
      'Advisory enquiries arrived without financial context, so every prospect required a long qualifying call before the practice knew whether the engagement was a fit.',
    builtDesc:
      'We built structured service pages per advisory offer and a multi-step enquiry flow that captures objective, situation and timeline, routing each submission to the practice as a complete brief.',
  },
  sidebar: {
    techTags: ['React', 'Type Script', 'Tailwind CSS', 'Postgres'],
    serviceTags: ['Web Development', 'UI/UX Design'],
  },
  capabilities: {
    desc: '',
    items: [
      { number: '01', title: 'Structured advisory service pages' },
      { number: '02', title: 'Multi-step enquiry capture with context fields' },
      { number: '03', title: 'Analytics-ready lead routing' },
      { number: '04', title: 'Credibility and process sections' },
      { number: '05', title: 'Responsive, conversion-focused layout' },
    ],
  },
  flow: {
    heading: 'Business workflow',
    steps: ['Discover', 'Enquire', 'Consultation'],
    caption: 'Conceptual system view',
  },
  diagram: {
    badgeLines: ['Conceptual', 'system view'],
    pills: ['Client', 'Public experience', 'Enquiry intake', 'Advisor operations'],
  },
  outcomes: [
    'Enquiries arrive qualified enough to scope',
    'Prospects self-select the right advisory offer',
    'Consistent follow-up across every enquiry',
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

export default function WorkBuketiFinancialConsultingPage() {
  return <WorkCaseStudyTemplate data={data} pageClassName="wvt-page--buketi" />;
}
