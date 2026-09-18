import OrbSphere from './OrbSphere';
import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    desc: 'A focused conversation to understand your goals, challenges, and the right solution for your business.',
    direction: 'left',
  },
  {
    number: '02',
    title: 'Fixed Scope + Timeline',
    desc: 'We define the scope, timeline, deliverables, and cost upfront—so everyone knows exactly what to expect.',
    direction: 'up',
  },
  {
    number: '03',
    title: 'Build + Launch',
    desc: 'We design, develop, test, and launch your solution. Once complete, everything is handed over to you.',
    direction: 'right',
  },
] as const;

function StepCard({ step }: { step: (typeof steps)[number] }) {
  const reveal = useReveal(step.direction);

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
  const head = useReveal('up');

  return (
    <section className="steps section">
      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">What we build</span>
          <h2 className="section-title">Three Simple Steps. One Clear Price.</h2>
        </div>

        <div className="steps__grid">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
