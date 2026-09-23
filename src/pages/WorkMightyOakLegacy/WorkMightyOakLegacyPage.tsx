import { useTranslation } from 'react-i18next';
import WorkCaseStudyTemplate, {
  type WorkCaseStudyData,
  type WorkCaseStudyStat,
  type WorkCaseStudyCapability,
  type WorkCaseStudyRelatedItem,
} from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import heroScreenshot from '../../assets/images/work-mighty-oak-legacy/figma/browser-mockup.webp';
import relatedWorkBuketi from '../../assets/images/work-van-travel/figma/related-work-buketi.webp';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';
// The Figma "Power Mindset Breakthrough" related-work card mistakenly reused
// the Mighty Oak Legacy screenshot again here, so we reuse that page's own
// real hero screenshot instead of the wrong asset (same issue seen on the
// PMB Consulting page).
import relatedWorkPowerMindset from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.webp';

// Hero content from Figma node 2323:556, middle sections from node 2323:557,
// related work from node 2323:558 (closing CTA matches the template's
// default, which already mirrors that node's content exactly).
export default function WorkMightyOakLegacyPage() {
  const { t } = useTranslation('workMightyOak');

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
      titleOneLineOnMobile: true,
      description: t('hero.description'),
      screenshot: heroScreenshot,
      screenshotAlt: t('hero.screenshotAlt'),
    },
    liveUrl: 'https://mightyoaklegacy.com/',
    stats,
    detail: {
      overviewDesc: t('detail.overviewDesc'),
      challengeDesc: t('detail.challengeDesc'),
      builtDesc: t('detail.builtDesc'),
    },
    sidebar: {
      techTags: ['React', 'Type Script', 'Supabase', 'Tailwind CSS'],
      serviceTags: t('sidebar.serviceTags', { returnObjects: true }) as string[],
    },
    capabilities: {
      desc: '',
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
      { image: relatedWorkBuketi, ...relatedWorkText[0] },
      { image: relatedWorkOneTap, ...relatedWorkText[1] },
      { image: relatedWorkPowerMindset, ...relatedWorkText[2] },
    ],
  };

  return <WorkCaseStudyTemplate data={data} pageClassName="wvt-page--mighty-oak four-boxfull" />;
}
