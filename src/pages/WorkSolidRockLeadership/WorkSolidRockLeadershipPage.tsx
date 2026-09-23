import { useTranslation } from 'react-i18next';
import WorkCaseStudyTemplate, {
  type WorkCaseStudyData,
  type WorkCaseStudyStat,
  type WorkCaseStudyCapability,
  type WorkCaseStudyRelatedItem,
} from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import heroScreenshot from '../../assets/images/work-solid-rock-leadership/figma/browser-mockup.webp';
import relatedWorkPMB from '../../assets/images/work-van-travel/figma/related-work-3.webp';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';
// The Figma "Power Mindset Breakthrough" related-work card mistakenly reused
// the Mighty Oak Legacy screenshot again here (same recurring issue seen on
// the PMB Consulting and Mighty Oak Legacy pages), so we reuse that page's
// own real hero screenshot instead of the wrong asset.
import relatedWorkPowerMindset from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.webp';

// Hero content from Figma node 2325:559, middle sections from node
// 2325:560, related work from node 2325:561 (closing CTA matches the
// template's default, which already mirrors that node's content exactly).
// The hero's "View Live Site" URL in Figma was a copy-paste of OneTap
// Digital Card's domain and the sidebar link text a copy-paste of Van
// Travel Business's domain — neither is this practice's real site, so per
// instruction we use the generic project-enquiry link instead of guessing
// a domain.
export default function WorkSolidRockLeadershipPage() {
  const { t } = useTranslation('workSolidRock');

  const stats = t('stats', { returnObjects: true }) as WorkCaseStudyStat[];
  const capabilityItems = t('capabilities.items', { returnObjects: true }) as Pick<
    WorkCaseStudyCapability,
    'title'
  >[];
  const relatedWorkText = t('relatedWork', { returnObjects: true }) as Pick<
    WorkCaseStudyRelatedItem,
    'tag' | 'title' | 'desc'
  >[];

  const data: WorkCaseStudyData = {
    hero: {
      badges: t('hero.badges', { returnObjects: true }) as string[],
      badgesMerged: true,
      titleLines: t('hero.titleLines', { returnObjects: true }) as string[],
      description: t('hero.description'),
      screenshot: heroScreenshot,
      screenshotAlt: t('hero.screenshotAlt'),
    },
    liveUrl: 'https://vantechsystems.tech/start-a-project',
    stats,
    detail: {
      overviewDesc: t('detail.overviewDesc'),
      challengeDesc: t('detail.challengeDesc'),
      builtDesc: t('detail.builtDesc'),
    },
    sidebar: {
      techTags: ['React', 'Type Script', 'Tailwind CSS', 'Supabase'],
      serviceTags: t('sidebar.serviceTags', { returnObjects: true }) as string[],
    },
    capabilities: {
      desc: t('capabilities.desc'),
      items: capabilityItems.map((item, index) => ({
        number: String(index + 1).padStart(2, '0'),
        title: item.title,
      })),
    },
    flow: {
      heading: t('flow.heading'),
      steps: t('flow.steps', { returnObjects: true }) as string[],
      caption: t('flow.caption'),
    },
    diagram: {
      badgeLines: t('diagram.badgeLines', { returnObjects: true }) as string[],
      pills: t('diagram.pills', { returnObjects: true }) as string[],
    },
    outcomes: t('outcomes', { returnObjects: true }) as string[],
    relatedWork: [
      { image: relatedWorkPMB, ...relatedWorkText[0] },
      { image: relatedWorkPowerMindset, ...relatedWorkText[1] },
      { image: relatedWorkOneTap, ...relatedWorkText[2] },
    ],
  };

  return <WorkCaseStudyTemplate data={data} pageClassName="wvt-page--solid-rock four-boxfull" />;
}
