import WorkCaseStudyTemplate from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-van-travel-business-two/figma/browser-mockup.png';

// Hero content from Figma node 2316:547, middle sections from node 2316:548,
// related work + closing from node 2316:549 (closing CTA matches the
// template's default, which already mirrors that node's content exactly).
// This page's real content is the "AI FNA" design — the page/route name
// stays "Van Travel Business Two" per instruction.
const data = {
  ...createPlaceholderWorkData('Van Travel Business Two'),
  hero: {
    badges: ['Ai', 'Travel & Immigration'],
    badgesMerged: true,
    titleLines: ['AI FNA'],
    description:
      'An AI-assisted financial needs analysis tool that turns client data into advisor-ready recommendations.',
    screenshot: heroScreenshot,
    screenshotAlt: 'AI FNA platform screenshot',
  },
  liveUrl: 'https://vantechsystems.tech/work/ai-fna',
  stats: [
    { label: 'Project type', value: 'Ai' },
    { label: 'Capabilities', value: 'AI Engineering • Custom Software' },
    { label: 'Industry', value: 'Insurance' },
    { label: 'Status', value: 'Live' },
  ],
  detail: {
    overviewDesc:
      'AI FNA digitises financial needs analysis for advisors. We built guided data capture, an AI scoring and recommendation layer, and exportable client-ready reports.',
    challengeDesc:
      'Financial needs analysis was a manual, inconsistent interview, which made intake slow and the resulting recommendations hard to compare.',
    builtDesc:
      'We built an AI-assisted needs analysis that guides the client through structured questions, computes a needs profile and hands the advisor a consistent, reviewable output.',
  },
  sidebar: {
    techTags: ['React', 'Type Script', 'Supabase', 'LLM APIs'],
    serviceTags: ['AI Engineering', 'Custom Software'],
  },
  capabilities: {
    desc: '',
    items: [
      { number: '01', title: 'Guided financial needs interview' },
      { number: '02', title: 'Structured needs profile calculation' },
      { number: '03', title: 'Advisor-facing summary output' },
      { number: '04', title: 'Consistent question set across clients' },
      { number: '05', title: 'Secure handling of client inputs' },
    ],
  },
  flow: {
    heading: 'Business workflow',
    steps: ['Questionnaire', 'Analysis', 'Summary', 'Advisor'],
    caption: 'Conceptual system view',
  },
  diagram: {
    badgeLines: ['Conceptual', 'system view'],
    pills: ['Client', 'Guided intake', 'AI analysis', 'Advisor workspace'],
  },
  outcomes: [
    'Intake is consistent across every client',
    'Advisors receive a comparable profile each time',
    'Analysis time per client drops significantly',
  ],
};

export default function WorkVanTravelBusinessTwoPage() {
  return <WorkCaseStudyTemplate data={data} />;
}
