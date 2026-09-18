import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-solid-rock-leadership/figma/browser-mockup.png';
import relatedWorkPMB from '../../assets/images/work-van-travel/figma/related-work-3.png';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';
// The Figma "Power Mindset Breakthrough" related-work card mistakenly reused
// the Mighty Oak Legacy screenshot again here (same recurring issue seen on
// the PMB Consulting and Mighty Oak Legacy pages), so we reuse that page's
// own real hero screenshot instead of the wrong asset.
import relatedWorkPowerMindset from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.png';

// Hero content from Figma node 2325:559, middle sections from node
// 2325:560, related work from node 2325:561 (closing CTA matches the
// template's default, which already mirrors that node's content exactly).
// The hero's "View Live Site" URL in Figma was a copy-paste of OneTap
// Digital Card's domain and the sidebar link text a copy-paste of Van
// Travel Business's domain — neither is this practice's real site, so per
// instruction we use the generic project-enquiry link instead of guessing
// a domain.
const data = {
  ...createPlaceholderWorkData('Solid Rock Leadership'),
  hero: {
    badges: ['Professional Services', 'Training & Development'],
    badgesMerged: true,
    titleLines: ['Solid Rock Leadership', 'Development'],
    description:
      'A leadership and financial education platform presenting programs, audiences and a consultation booking journey.',
    screenshot: heroScreenshot,
    screenshotAlt: 'Solid Rock Leadership Development platform screenshot',
  },
  liveUrl: 'https://vantechsystems.tech/start-a-project',
  stats: [
    { label: 'Project type', value: 'Professional Services' },
    { label: 'Capabilities', value: 'Web Development • UI/UX Design • Automation' },
    { label: 'Industry', value: 'Training & Development' },
    { label: 'Status', value: 'Live' },
  ],
  detail: {
    overviewDesc:
      'Solid Rock Leadership Development & Financial Solutions supports individuals and families through simplified financial education and leadership development. The platform presents its core services, the audiences it serves, its founder story, a partnership opportunity track, and a direct route to booking a free consultation.',
    challengeDesc:
      'The practice serves distinct audiences — healthcare professionals, families and prospective partners — across six different services. Without a structured information architecture, visitors could not tell which program applied to them or how to begin.',
    builtDesc:
      'We structured the platform around its six core services, a Who We Serve section for audience self-selection, a founder narrative for credibility, an opportunity track for prospective partners, and editorial media and blog areas — all leading to a single, low-friction consultation booking step.',
  },
  sidebar: {
    techTags: ['React', 'Type Script', 'Tailwind CSS', 'Supabase'],
    serviceTags: ['Web Development', 'UI/UX Design', 'Automation'],
  },
  capabilities: {
    desc: '',
    items: [
      { number: '01', title: 'Six core service presentations' },
      { number: '02', title: 'Who We Serve audience segmentation' },
      { number: '03', title: 'Founder and credibility narrative' },
      { number: '04', title: 'Founder and credibility narrative' },
      { number: '05', title: 'Partnership opportunity track' },
      { number: '06', title: 'Blog and media sections' },
      { number: '07', title: 'Free consultation booking journey' },
      { number: '08', title: 'Values and FAQ sections' },
    ],
  },
  flow: {
    heading: 'Business workflow',
    steps: ['Explore', 'Self-select', 'Book', 'Guidance'],
    caption: 'Conceptual system view',
  },
  diagram: {
    badgeLines: ['Conceptual', 'system view'],
    pills: ['Visitor', 'Program content', 'Booking journey', 'Advisor follow-up'],
  },
  outcomes: [
    'Created a structured platform for leadership and financial education programs',
    'Allowed distinct audiences to self-select the right program',
    'Connected every section to a single consultation booking step',
  ],
  relatedWork: [
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
    {
      image: relatedWorkOneTap,
      tag: 'SaaS',
      title: 'OneTap Digital Card',
      desc: 'A digital business card platform where professionals share contact details, links and a booking page through a public card link or QR code.',
    },
  ],
};

export default function WorkSolidRockLeadershipPage() {
  return <WorkCaseStudyTemplate data={data} pageClassName="wvt-page--solid-rock" />;
}
