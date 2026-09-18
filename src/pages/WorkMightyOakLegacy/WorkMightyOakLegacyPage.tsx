import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-mighty-oak-legacy/figma/browser-mockup.png';
import relatedWorkBuketi from '../../assets/images/work-van-travel/figma/related-work-buketi.png';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';
// The Figma "Power Mindset Breakthrough" related-work card mistakenly reused
// the Mighty Oak Legacy screenshot again here, so we reuse that page's own
// real hero screenshot instead of the wrong asset (same issue seen on the
// PMB Consulting page).
import relatedWorkPowerMindset from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.png';

// Hero content from Figma node 2323:556, middle sections from node 2323:557,
// related work from node 2323:558 (closing CTA matches the template's
// default, which already mirrors that node's content exactly).
const data = {
  ...createPlaceholderWorkData('Mighty Oak Legacy'),
  hero: {
    badges: ['Business Platforms', 'Legacy & Estate Planning'],
    badgesMerged: true,
    titleLines: ['Mighty Oak', 'Legacy'],
    titleOneLineOnMobile: true,
    description:
      'A digital platform built around financial education, mentorship, leadership development and family legacy guidance.',
    screenshot: heroScreenshot,
    screenshotAlt: 'Mighty Oak Legacy platform screenshot',
  },
  liveUrl: 'https://mightyoaklegacy.com/',
  stats: [
    { label: 'Project type', value: 'Business Platforms' },
    { label: 'Capabilities', value: 'Web Development • UI/UX Design' },
    { label: 'Industry', value: 'Legacy & Estate Planning' },
    { label: 'Status', value: 'Live' },
  ],
  detail: {
    overviewDesc:
      'Mighty Oak Legacy empowers individuals, families and emerging leaders through financial education, mentorship, a business opportunity and practical guidance. The platform brings its education themes, leadership track and consultation booking into one calm, trustworthy experience.',
    challengeDesc:
      "The organization's work spans education, mentorship, leadership and a business opportunity — four very different intents for a visitor. Presented as one undifferentiated services list, none of them read clearly, and there was no structured route from interest to a first conversation.",
    builtDesc:
      'We built the experience around what the organisation actually helps with — financial education, family protection awareness, the business opportunity and legacy building — with a values section, a simple four-step journey, workshops and FAQs. Consultation booking and a business-opportunity enrolment form give each audience its own next step.',
  },
  sidebar: {
    techTags: ['React', 'Type Script', 'Supabase', 'Tailwind CSS'],
    serviceTags: ['Web Development', 'Automation'],
  },
  capabilities: {
    desc: '',
    items: [
      { number: '01', title: 'Education-led service sections' },
      { number: '02', title: 'Family legacy and protection awareness content' },
      { number: '03', title: 'Business opportunity track with its own enrolment form' },
      { number: '04', title: 'Mentorship and personal growth guidance' },
      { number: '05', title: 'Community workshops presentation' },
      { number: '06', title: 'Consultation booking integration' },
      { number: '07', title: 'Four-step Connect, Learn, Grow, Build Legacy journey' },
      { number: '08', title: 'FAQ and education resources' },
    ],
  },
  flow: {
    heading: 'Business workflow',
    steps: ['Connect', 'Learn', 'Grow', 'Build legacy'],
    caption: 'Conceptual system view',
  },
  diagram: {
    badgeLines: ['Conceptual', 'system view'],
    pills: ['Visitor', 'Education content', 'Enrolment & booking', 'Team follow-up'],
  },
  outcomes: [
    'Created a centralized digital experience for education, mentorship and leadership audiences',
    'Gave each audience a distinct next step instead of one generic contact form',
    'Presented financial education without positioning it as personalised investment advice',
  ],
  relatedWork: [
    {
      image: relatedWorkBuketi,
      tag: 'Business Platforms',
      title: 'Buketi Financial & Consulting',
      desc: 'A financial and consulting practice platform with service positioning, advisory offers and qualified enquiry capture.',
    },
    {
      image: relatedWorkOneTap,
      tag: 'SaaS',
      title: 'OneTap Digital Card',
      desc: 'A digital business card platform where professionals share contact details, links and a booking page through a public card link or QR code.',
    },
    {
      image: relatedWorkPowerMindset,
      tag: 'Professional Services',
      title: 'Power Mindset Breakthrough',
      desc: 'A coaching and personal development platform with programmes, booking and content delivery.',
    },
  ],
};

export default function WorkMightyOakLegacyPage() {
  return <WorkCaseStudyTemplate data={data} pageClassName="wvt-page--mighty-oak" />;
}
