import { useTranslation } from 'react-i18next';
import WorkCaseStudyTemplate, {
  type WorkCaseStudyData,
  type WorkCaseStudyStat,
  type WorkCaseStudyCapability,
  type WorkCaseStudyRelatedItem,
} from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';

import browserMockup from '../../assets/images/work-van-travel/figma/browser-mockup.png';
import relatedWork1 from '../../assets/images/work-van-travel/figma/related-work-1.png';
import relatedWork2 from '../../assets/images/work-van-travel/figma/related-work-2.png';
import relatedWork3 from '../../assets/images/work-van-travel/figma/related-work-3.png';

export default function WorkVanTravelPage() {
  const { t } = useTranslation('workVanTravel');

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
      screenshot: browserMockup,
      screenshotAlt: t('hero.screenshotAlt'),
    },
    liveUrl: 'https://vantravelbusiness.com/',
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
      desc: t('capabilities.desc'),
      items: capabilityItems.map((item, index) => ({
        number: String(index + 1).padStart(2, '0'),
        title: item.title,
      })),
    },
    flow: {
      steps: t('flow.steps', { returnObjects: true }) as string[],
      caption: t('flow.caption'),
    },
    diagram: {
      badgeLines: t('diagram.badgeLines', { returnObjects: true }) as string[],
      pills: t('diagram.pills', { returnObjects: true }) as string[],
    },
    outcomes: t('outcomes', { returnObjects: true }) as string[],
    relatedWork: [
      { image: relatedWork1, ...relatedWorkText[0] },
      { image: relatedWork2, ...relatedWorkText[1] },
      { image: relatedWork3, ...relatedWorkText[2] },
    ],
  };

  return <WorkCaseStudyTemplate data={data} pageClassName="wvt-page--solid-rock four-boxfull" />;
}
