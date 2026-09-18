import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-pmb-consulting/figma/browser-mockup.png';
import relatedWorkSolidRock from '../../assets/images/work-van-travel/figma/related-work-1.png';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';
// The Figma "Power Mindset Breakthrough" related-work card mistakenly reused
// the Mighty Oak Legacy screenshot, so we reuse that page's own real hero
// screenshot instead of the wrong asset.
import relatedWorkPowerMindset from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.png';

// Hero content from Figma node 2321:553, middle sections from node 2321:554,
// related work from node 2321:555 (closing CTA matches the template's
// default, which already mirrors that node's content exactly).
const data = {
  ...createPlaceholderWorkData('The PMB Consulting'),
  hero: {
    badges: ['Professional Services'],
    titleLines: ['The PMB', 'Consulting'],
    titleOneLineOnMobile: true,
    description:
      'A professional digital presence for a consulting practice covering business mentorship, formation, branding and growth services.',
    screenshot: heroScreenshot,
    screenshotAlt: 'The PMB Consulting platform screenshot',
  },
  liveUrl: 'https://thepmbconsulting.com/',
  liveUrlLabel: 'thepmbconsulting.com',
  stats: [
    { label: 'Project type', value: 'Professional Services' },
    { label: 'Capabilities', value: 'Web Development • UI/UX Design • Automation' },
    { label: 'Industry', value: 'Professional Services' },
    { label: 'Status', value: 'Live' },
  ],
  detail: {
    overviewDesc:
      'The PMB Consulting is a personal branding and business consulting firm. The site presents its advisory services — mentorship and coaching, business formation, branding, digital presence, growth and financial planning — and gives prospective clients a direct route to a consultation.',
    challengeDesc:
      'The practice offers several distinct advisory services to very different audiences: new entrepreneurs, established professionals and families. A single generic page could not explain those offers clearly or help a visitor identify the engagement that fits their situation.',
    builtDesc:
      "We structured the experience around the firm's service areas, each with its own explanation and positioning, supported by credibility sections covering accreditation, values and client testimonials. A consultation request flow is reachable from every section, and the site supports multilingual visitors.",
  },
  sidebar: {
    techTags: ['React', 'Type Script', 'Supabase', 'Tailwind CSS'],
    serviceTags: ['Web Development', 'UI/UX Design', 'Automation'],
  },
  capabilities: {
    desc: '',
    items: [
      { number: '01', title: 'Dedicated presentation per advisory service' },
      { number: '02', title: 'Business mentorship and coaching section' },
      { number: '03', title: 'Business formation and structure guidance' },
      { number: '04', title: 'Branding and business identity positioning' },
      { number: '05', title: 'Growth and expansion services' },
      { number: '06', title: 'Consultation request experience' },
      { number: '07', title: 'Multilingual visitor support' },
    ],
  },
  flow: {
    heading: 'Business workflow',
    steps: ['Discover', 'Compare services', 'Request'],
    caption: 'Conceptual system view',
  },
  diagram: {
    badgeLines: ['Conceptual', 'system view'],
    pills: ['Visitor', 'Service pages', 'Consultation intake', 'Practice follow-up'],
  },
  outcomes: [
    'Created a centralized digital presence for a multi-service consulting practice',
    'Separated distinct advisory offers so prospects can self-select',
    'Provided a consistent route from any page to a consultation request',
  ],
  relatedWork: [
    {
      image: relatedWorkSolidRock,
      tag: 'Professional Services',
      title: 'Solid Rock Leadership Development',
      desc: 'A leadership and financial education platform presenting programs, audiences and a consultation booking journey.',
    },
    {
      image: relatedWorkPowerMindset,
      tag: 'Professional Services',
      title: 'Power Mindset Breakthrough',
      desc: 'A coaching and personal development platform with programmes, booking and content delivery.',
    },
    {
      image: relatedWorkOneTap,
      tag: 'SaaS',
      title: 'OneTap Digital Card',
      desc: 'A digital business card platform where professionals share contact details, links and a booking page through a public card link or QR code.',
    },
  ],
};

export default function WorkPMBConsultingPage() {
  return <WorkCaseStudyTemplate data={data} pageClassName="wvt-page--pmb" />;
}
