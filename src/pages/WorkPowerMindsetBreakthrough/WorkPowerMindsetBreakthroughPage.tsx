import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.png';
import relatedWorkPMB from '../../assets/images/work-van-travel/figma/related-work-3.png';
import relatedWorkSolidRock from '../../assets/images/work-van-travel/figma/related-work-1.png';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';

// Hero section content from Figma node 2306:542, middle sections from node
// 2306:543, related work from node 2306:544 (closing CTA copy matches the
// template's default, which already mirrors this node's content exactly).
const data = {
  ...createPlaceholderWorkData('Power Mindset Breakthrough'),
  hero: {
    badges: ['Professional Services'],
    titleLines: ['Power Mindset', 'Breakthrough'],
    description:
      'A travel and immigration business platform covering packages, document intake and client enquiries.',
    screenshot: heroScreenshot,
    screenshotAlt: 'Power Mindset Breakthrough platform screenshot',
  },
  liveUrl: 'https://powermindsetbreakthrough.com/',
  liveUrlLabel: 'powermindsetbreakthrough.com',
  stats: [
    { label: 'Project type', value: 'Professional Services' },
    { label: 'Capabilities', value: 'Web Development • UI/UX Design' },
    { label: 'Status', value: 'Live' },
  ],
  detail: {
    overviewDesc:
      'Power Mindset Breakthrough delivers coaching programmes at scale. We built a platform that presents the methodology, handles session booking and distributes programme content to enrolled clients.',
    challengeDesc:
      'Coaching delivery was spread across scheduling tools, email and file shares, which capped how many clients the programme could serve without adding admin.',
    builtDesc:
      'We built a single platform that presents the methodology, handles session booking and distributes programme content to enrolled clients, with access tied to enrolment.',
  },
  sidebar: {
    techTags: ['React', 'Type Script', 'Tailwind CSS'],
    serviceTags: ['Web Development', 'Automation'],
  },
  capabilities: {
    desc: '',
    items: [
      { number: '01', title: 'Methodology and programme presentation' },
      { number: '02', title: 'Session booking with availability' },
      { number: '03', title: 'Programme content delivery to enrolled clients' },
      { number: '04', title: 'Enrolment-based access control' },
      { number: '05', title: 'Automated booking confirmations' },
    ],
  },
  flow: {
    heading: 'Business workflow',
    steps: ['Discover', 'Choose', 'Book'],
    caption: 'Conceptual system view',
  },
  diagram: {
    badgeLines: ['Conceptual', 'system view'],
    pills: ['Visitor', 'Program content', 'Booking journey', 'Coach operations'],
  },
  outcomes: [
    'Booking and content delivery live in one place',
    'Admin no longer scales linearly with client count',
    'Clients get a consistent programme experience',
  ],
  relatedWork: [
    {
      image: relatedWorkPMB,
      tag: 'Professional Services',
      title: 'The PMB Consulting',
      desc: 'A professional digital presence for a consulting practice covering business mentorship, formation, branding and growth services.',
      href: '/pmb-consulting',
    },
    {
      image: relatedWorkSolidRock,
      tag: 'Professional Services',
      title: 'Solid Rock Leadership Development',
      desc: 'A leadership and financial education platform presenting programs, audiences and a consultation booking journey.',
      href: '/solid-rock-leadership-development',
    },
    {
      image: relatedWorkOneTap,
      tag: 'SaaS',
      title: 'OneTap Digital Card',
      desc: 'A digital business card platform where professionals share contact details, links and a booking page through a public card link or QR code.',
      href: '/onetap-digital-card',
    },
  ],
};

export default function WorkPowerMindsetBreakthroughPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
