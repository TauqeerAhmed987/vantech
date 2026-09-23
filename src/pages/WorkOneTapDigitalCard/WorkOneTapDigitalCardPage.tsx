import { useTranslation } from 'react-i18next';
import WorkCaseStudyTemplate, {
  type WorkCaseStudyCapability,
  type WorkCaseStudyRelatedItem,
  type WorkCaseStudyStat,
} from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-onetap-digital-card/figma/browser-mockup.webp';
import relatedWorkPMB from '../../assets/images/work-van-travel/figma/related-work-3.webp';
import relatedWorkMightyOak from '../../assets/images/work-van-travel/figma/related-work-mighty-oak.webp';
import relatedWorkSolidRock from '../../assets/images/work-van-travel/figma/related-work-1.webp';

// Hero content from Figma node 2319:550, middle sections from node
// 2319:551, related work from node 2319:552 (closing CTA matches the
// template's default, which already mirrors that node's content exactly).
export default function WorkOneTapDigitalCardPage() {
  const { t } = useTranslation('workOnetapCard');

  const relatedWorkImages = [relatedWorkPMB, relatedWorkMightyOak, relatedWorkSolidRock];
  const relatedWorkTranslated = t('relatedWork', { returnObjects: true }) as Omit<
    WorkCaseStudyRelatedItem,
    'image'
  >[];

  const data = {
    ...createPlaceholderWorkData('OneTap Digital Card'),
    hero: {
      badges: t('hero.badges', { returnObjects: true }) as string[],
      badgesMerged: true,
      titleLines: t('hero.titleLines', { returnObjects: true }) as string[],
      titleOneLineOnMobile: true,
      description: t('hero.description'),
      screenshot: heroScreenshot,
      screenshotAlt: t('hero.screenshotAlt'),
    },
    liveUrl: 'https://www.onetapdigitalcard.com/',
    liveUrlLabel: 'www.onetapdigitalcard.com',
    stats: t('stats', { returnObjects: true }) as WorkCaseStudyStat[],
    detail: {
      overviewDesc: t('detail.overviewDesc'),
      challengeDesc: t('detail.challengeDesc'),
      builtDesc: t('detail.builtDesc'),
    },
    sidebar: {
      techTags: ['React', 'Type Script', 'Supabase', 'LLM APIs'],
      serviceTags: t('sidebar.serviceTags', { returnObjects: true }) as string[],
    },
    capabilities: {
      desc: '',
      items: t('capabilities.items', { returnObjects: true }) as WorkCaseStudyCapability[],
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
    relatedWork: relatedWorkTranslated.map((item, index) => ({
      ...item,
      image: relatedWorkImages[index],
    })),
  };

  return <WorkCaseStudyTemplate data={data} pageClassName="wvt-page--onetap four-boxfull" />;
}
