import { useTranslation } from 'react-i18next';
import OrbSphere from './OrbSphere';
import { useReveal } from '../hooks/useReveal';

const directions = ['left', 'up', 'right'] as const;

type StepItem = { number: string; title: string; desc: string };

function StepCard({ step, direction }: { step: StepItem; direction: (typeof directions)[number] }) {
  const reveal = useReveal(direction);

  return (
    <div className={`step-card ${reveal.className}`} ref={reveal.ref}>
      <div className="step-card__badge">
        <OrbSphere star={false} spin />
        <span className="step-card__number">{step.number}</span>
      </div>
      <h3 className="step-card__title gradient-text">{step.title}</h3>
      <p className="step-card__desc">{step.desc}</p>
    </div>
  );
}

export default function Steps() {
  const { t } = useTranslation('home');
  const steps = t('steps.items', { returnObjects: true }) as StepItem[];
  const head = useReveal('up');

  return (
    <section className="steps section">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">{t('steps.eyebrow')}</span>
          <h2 className="section-title">{t('steps.title')}</h2>
        </div>

        <div className="steps__grid">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} direction={directions[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
