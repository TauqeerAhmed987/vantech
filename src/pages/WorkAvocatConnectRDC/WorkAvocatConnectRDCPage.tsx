import { useTranslation } from 'react-i18next';
import WorkCaseStudyTemplate, {
  type WorkCaseStudyData,
  type WorkCaseStudyStat,
  type WorkCaseStudyCapability,
  type WorkCaseStudyRelatedItem,
} from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import heroScreenshot from '../../assets/images/AvocatConnect-RDC.webp';
import relatedWorkPMB from '../../assets/images/work-van-travel/figma/related-work-3.webp';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';
import relatedWorkPowerMindset from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.webp';

// Figma node 2507:954 (hero/stats/browser-mockup) + parent frame 2506:541
// ("AvocatConnect RDC" case-study page mockup).
export default function WorkAvocatConnectRDCPage() {
  const { t } = useTranslation('workAvocatConnectRdc');

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
    liveUrl: 'https://www.avocatconnectrdc.com/',
    stats,
    detail: {
      overviewDesc: t('detail.overviewDesc'),
      challengeDesc: t('detail.challengeDesc'),
      builtDesc: t('detail.builtDesc'),
    },
    sidebar: {
      techTags: ['React', 'Tailwind CSS', 'TypeScript', 'Cloudflare'],
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
      { image: relatedWorkOneTap, ...relatedWorkText[0] },
      { image: relatedWorkPMB, ...relatedWorkText[1] },
      { image: relatedWorkPowerMindset, ...relatedWorkText[2] },
    ],
  };

  return (
    <WorkCaseStudyTemplate
      data={data}
      pageClassName="wvt-page--solid-rock wvt-page--avocat-connect-rdc four-boxfull"
    />
  );
}
