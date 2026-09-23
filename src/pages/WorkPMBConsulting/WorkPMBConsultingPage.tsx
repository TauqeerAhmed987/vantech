import { useTranslation } from 'react-i18next';
import WorkCaseStudyTemplate, {
  type WorkCaseStudyCapability,
  type WorkCaseStudyRelatedItem,
  type WorkCaseStudyStat,
} from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-pmb-consulting/figma/browser-mockup.webp';
import relatedWorkSolidRock from '../../assets/images/work-van-travel/figma/related-work-1.webp';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';
// The Figma "Power Mindset Breakthrough" related-work card mistakenly reused
// the Mighty Oak Legacy screenshot, so we reuse that page's own real hero
// screenshot instead of the wrong asset.
import relatedWorkPowerMindset from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.webp';

type RelatedWorkTranslation = Omit<WorkCaseStudyRelatedItem, 'image'>;

// Hero content from Figma node 2321:553, middle sections from node 2321:554,
// related work from node 2321:555 (closing CTA matches the template's
// default, which already mirrors that node's content exactly).
export default function WorkPMBConsultingPage() {
  const { t } = useTranslation('workPmbConsulting');

  const relatedWorkImages = [relatedWorkSolidRock, relatedWorkPowerMindset, relatedWorkOneTap];
  const relatedWork = t('relatedWork', { returnObjects: true }) as RelatedWorkTranslation[];

  const data = {
    ...createPlaceholderWorkData('The PMB Consulting'),
    hero: {
      badges: t('hero.badges', { returnObjects: true }) as string[],
      titleLines: t('hero.titleLines', { returnObjects: true }) as string[],
      titleOneLineOnMobile: true,
      description: t('hero.description'),
      screenshot: heroScreenshot,
      screenshotAlt: t('hero.screenshotAlt'),
    },
    liveUrl: 'https://thepmbconsulting.com/',
    liveUrlLabel: 'thepmbconsulting.com',
    stats: t('stats', { returnObjects: true }) as WorkCaseStudyStat[],
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
    relatedWork: relatedWork.map((item, i) => ({
      ...item,
      image: relatedWorkImages[i],
    })),
  };

  return <WorkCaseStudyTemplate data={data} pageClassName="wvt-page--pmb four-boxfull" />;
}
