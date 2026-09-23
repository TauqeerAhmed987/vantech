import { useTranslation } from 'react-i18next';
import WorkCaseStudyTemplate, {
  type WorkCaseStudyCapability,
  type WorkCaseStudyRelatedItem,
  type WorkCaseStudyStat,
} from '../../components/WorkCaseStudyTemplate/WorkCaseStudyTemplate';
import { createPlaceholderWorkData } from '../../data/workPlaceholder';
import heroScreenshot from '../../assets/images/work-power-mindset-breakthrough/figma/browser-mockup.png';
import relatedWorkPMB from '../../assets/images/work-van-travel/figma/related-work-3.png';
import relatedWorkSolidRock from '../../assets/images/work-van-travel/figma/related-work-1.png';
import relatedWorkOneTap from '../../assets/images/work-van-travel/figma/related-work-2.png';

// Hero section content from Figma node 2306:542, middle sections from node
// 2306:543, related work from node 2306:544 (closing CTA copy matches the
// template's default, which already mirrors this node's content exactly).
export default function WorkPowerMindsetBreakthroughPage() {
  const { t } = useTranslation('workPowerMindset');

  const stats = t('stats', { returnObjects: true }) as WorkCaseStudyStat[];
  const capabilityItems = t('capabilities.items', { returnObjects: true }) as Array<{ title: string }>;
  const relatedWork = t('relatedWork', { returnObjects: true }) as Array<{
    tag: string;
    title: string;
    desc: string;
  }>;

  const data = {
    ...createPlaceholderWorkData('Power Mindset Breakthrough'),
    hero: {
      badges: t('hero.badges', { returnObjects: true }) as string[],
      titleLines: t('hero.titleLines', { returnObjects: true }) as string[],
      description: t('hero.description'),
      screenshot: heroScreenshot,
      screenshotAlt: t('hero.screenshotAlt'),
    },
    liveUrl: 'https://powermindsetbreakthrough.com/',
    liveUrlLabel: 'powermindsetbreakthrough.com',
    stats,
    detail: {
      overviewDesc: t('detail.overviewDesc'),
      challengeDesc: t('detail.challengeDesc'),
      builtDesc: t('detail.builtDesc'),
    },
    sidebar: {
      techTags: ['React', 'Type Script', 'Tailwind CSS'],
      serviceTags: t('sidebar.serviceTags', { returnObjects: true }) as string[],
    },
    capabilities: {
      // Left empty in the source content — not routed through t() because an
      // empty translation value resolves to the i18next key itself (see
      // i18n.ts's returnEmptyString: false), which would render as text.
      desc: '',
      items: capabilityItems.map((item, i): WorkCaseStudyCapability => ({
        number: String(i + 1).padStart(2, '0'),
        title: item.title,
      })),
    },
    flow: {
      heading: 'Business workflow',
      steps: t('flow.steps', { returnObjects: true }) as string[],
      caption: t('flow.caption'),
    },
    diagram: {
      badgeLines: t('diagram.badgeLines', { returnObjects: true }) as string[],
      pills: t('diagram.pills', { returnObjects: true }) as string[],
    },
    outcomes: t('outcomes', { returnObjects: true }) as string[],
    relatedWork: relatedWork.map((item, i): WorkCaseStudyRelatedItem => ({
      image: [relatedWorkPMB, relatedWorkSolidRock, relatedWorkOneTap][i],
      tag: item.tag,
      title: item.title,
      desc: item.desc,
      href: ['/pmb-consulting', '/solid-rock-leadership-development', '/onetap-digital-card'][i],
    })),
  };

  return <WorkCaseStudyTemplate data={data} />;
}
