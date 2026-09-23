import { useTranslation } from 'react-i18next';
import WorkCaseStudyTemplate, {
  type WorkCaseStudyStat,
  type WorkCaseStudyCapability,
  type WorkCaseStudyRelatedItem,
} from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-van-travel-business-two/figma/browser-mockup.png';
import relatedWork1 from '../../assets/images/work-van-travel/figma/related-work-1.png';
import relatedWork2 from '../../assets/images/work-van-travel/figma/related-work-2.png';
import relatedWork3 from '../../assets/images/work-van-travel/figma/related-work-3.png';

// Hero content from Figma node 2316:547, middle sections from node 2316:548,
// related work + closing from node 2316:549 (closing CTA matches the
// template's default, which already mirrors that node's content exactly).
// This page's real content is the "AI FNA" design — the page/route name
// stays "Van Travel Business Two" per instruction.
export default function WorkVanTravelBusinessTwoPage() {
  const { t } = useTranslation('workVanTravelTwo');

  const stats = t('stats', { returnObjects: true }) as WorkCaseStudyStat[];
  const capabilityTitles = t('capabilities.items', { returnObjects: true }) as string[];
  const relatedWorkText = t('relatedWork', { returnObjects: true }) as Array<
    Pick<WorkCaseStudyRelatedItem, 'tag' | 'title' | 'desc'>
  >;
  const relatedWorkImages = [relatedWork1, relatedWork2, relatedWork3];

  const data = {
    ...createPlaceholderWorkData('Van Travel Business Two'),
    hero: {
      badges: t('hero.badges', { returnObjects: true }) as string[],
      badgesMerged: true,
      titleLines: t('hero.titleLines', { returnObjects: true }) as string[],
      description: t('hero.description'),
      screenshot: heroScreenshot,
      screenshotAlt: t('hero.screenshotAlt'),
    },
    liveUrl: 'https://vantechsystems.tech/work/ai-fna',
    stats,
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
      items: capabilityTitles.map((title, i) => ({
        number: String(i + 1).padStart(2, '0'),
        title,
      })) as WorkCaseStudyCapability[],
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
    relatedWork: relatedWorkText.map((item, i) => ({
      ...item,
      image: relatedWorkImages[i],
    })) as WorkCaseStudyRelatedItem[],
  };

  return <WorkCaseStudyTemplate data={data} pageClassName="wvt-page--solid-rock four-boxfull" />;
}
