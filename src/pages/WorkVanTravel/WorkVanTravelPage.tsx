import WorkCaseStudyTemplate, {
  type WorkCaseStudyData,
} from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';

import browserMockup from '../../assets/images/work-van-travel/figma/browser-mockup.png';
import relatedWork1 from '../../assets/images/work-van-travel/figma/related-work-1.png';
import relatedWork2 from '../../assets/images/work-van-travel/figma/related-work-2.png';
import relatedWork3 from '../../assets/images/work-van-travel/figma/related-work-3.png';

const data: WorkCaseStudyData = {
  hero: {
    badges: ['Web Applications', 'Travel & Immigration'],
    badgesMerged: true,
    titleLines: ['Van Travel', 'Business'],
    description:
      'A travel and immigration business platform covering packages, document intake and client enquiries.',
    screenshot: browserMockup,
    screenshotAlt: 'Van Travel Business platform screenshot',
  },
  liveUrl: 'https://vantravelbusiness.com/',
  stats: [
    { label: 'Project type', value: 'Web Applications' },
    { label: 'Capabilities', value: 'Web Development • Automation' },
    { label: 'Industry', value: 'Travel & Immigration' },
    { label: 'Status', value: 'Live' },
  ],
  detail: {
    overviewDesc:
      'Van Travel Business runs travel and immigration services that depend on structured client intake. We built a platform combining service catalogues, document-aware enquiry flows and an operations view for follow-up.',
    challengeDesc:
      'Van Travel Business runs travel and immigration services that depend on structured client intake. We built a platform combining service catalogues, document-aware enquiry flows and an operations view for follow-up.',
    builtDesc:
      'We combined a structured service catalogue with document-aware enquiry flows and an operations view, so each case opens with its requirements and evidence already captured.',
  },
  sidebar: {
    techTags: ['React', 'Type Script', 'Supabase', 'Tailwind CSS'],
    serviceTags: ['Web Development', 'Automation'],
  },
  capabilities: {
    desc: 'We combined a structured service catalogue with document-aware enquiry flows and an operations view, so each case opens with its requirements and evidence already captured.',
    items: [
      { number: '01', title: 'Service and package catalogue' },
      { number: '02', title: 'Document-aware enquiry intake' },
      { number: '03', title: 'Operations view for case follow-up' },
      { number: '04', title: 'Automated enquiry confirmations' },
      { number: '05', title: 'Multi-device client experience' },
    ],
  },
  flow: {
    steps: ['Explore', 'Enquire', 'Follow-up'],
    caption: 'Conceptual system view',
  },
  diagram: {
    badgeLines: ['Conceptual', 'system view'],
    pills: ['Traveller', 'Public experience', 'Enquiry logic', 'Operations'],
  },
  outcomes: [
    'Cases start with the required details captured',
    'Less back-and-forth before an assessment',
    'Follow-up is tracked in one place',
  ],
  relatedWork: [
    {
      image: relatedWork1,
      tag: 'Professional Services',
      title: 'Solid Rock Leadership Development',
      desc: 'A leadership and financial education platform presenting programs, audiences and a consultation booking journey.',
    },
    {
      image: relatedWork2,
      tag: 'SaaS',
      title: 'OneTap Digital Card',
      desc: 'A leadership and financial education platform presenting programs, audiences and a consultation booking journey.',
    },
    {
      image: relatedWork3,
      tag: 'Professional Services',
      title: 'The PMB Consulting',
      desc: 'A professional digital presence for a consulting practice covering business mentorship, formation, branding and growth services.',
    },
  ],
};

export default function WorkVanTravelPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
