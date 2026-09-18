import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-all-access-trip/figma/browser-mockup.png';
import relatedWorkPMB from '../../assets/images/work-van-travel/figma/related-work-3.png';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';
// The Figma "Power Mindset Breakthrough" related-work card mistakenly reused
// the Mighty Oak Legacy screenshot again here (same recurring issue seen on
// several other pages), so we reuse that page's own real hero screenshot
// instead of the wrong asset.
import relatedWorkPowerMindset from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.png';

// Hero content from Figma node 2329:568, middle sections from node
// 2329:569, related work + closing CTA from node 2329:570 (closing CTA
// matches the template's default, which already mirrors that node's
// content exactly).
const data = {
  ...createPlaceholderWorkData('All Access Trip'),
  hero: {
    badges: ['Web Applications', 'Travel & Immigration'],
    badgesMerged: true,
    titleLines: ['All Access Trip'],
    description:
      'A travel booking and itinerary platform for curated trips, groups and experiences.',
    screenshot: heroScreenshot,
    screenshotAlt: 'All Access Trip platform screenshot',
  },
  liveUrl: 'https://www.allaccesstrip.com/',
  stats: [
    { label: 'Project type', value: 'Web Applications' },
    { label: 'Capabilities', value: 'Web Development • Business Platform' },
    { label: 'Industry', value: 'Travel & Immigration' },
    { label: 'Status', value: 'Live' },
  ],
  detail: {
    overviewDesc:
      'All Access Trip curates travel experiences for individuals and groups. We built trip discovery, itinerary presentation and booking enquiry flows with operator-side management.',
    challengeDesc:
      'Trip planning content was scattered, and enquiries lacked the dates, group size and budget needed to respond with anything concrete.',
    builtDesc:
      'We rebuilt discovery around destinations and trip types, and attached a structured enquiry flow capturing dates, party size and budget before a response is drafted.',
  },
  sidebar: {
    techTags: ['React', 'Type Script', 'Tailwind CSS', 'Supabase'],
    serviceTags: ['Web Development', 'Business Platform'],
  },
  capabilities: {
    desc: '',
    items: [
      { number: '01', title: 'Destination and trip-type discovery' },
      { number: '02', title: 'Structured trip enquiry capture' },
      { number: '03', title: 'Responsive, image-led layout' },
      { number: '04', title: 'Automated enquiry confirmation' },
      { number: '05', title: 'SEO-oriented destination content' },
    ],
  },
  flow: {
    heading: 'Business workflow',
    steps: ['Browse', 'Reserve', 'Travel'],
    caption: 'Conceptual system view',
  },
  diagram: {
    badgeLines: ['Conceptual', 'system view'],
    pills: ['Traveller', 'Public experience', 'Reservation intake', 'Operations'],
  },
  outcomes: [
    'Enquiries include the details needed to quote',
    'Discovery is organised around how travellers actually search',
    'Responses go out faster with less clarification',
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

export default function WorkAllAccessTripPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
