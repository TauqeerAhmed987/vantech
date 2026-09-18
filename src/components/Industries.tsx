import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';
import arrowRightSvg from '../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import orbGlowSoft from '../assets/images/industries-glow-soft.png';
import healthcareSvg from '../assets/icons/healthcare.svg?raw';
import dentalSvg from '../assets/icons/dental.svg?raw';
import legalSvg from '../assets/icons/legal.svg?raw';
import insuranceSvg from '../assets/icons/insurance.svg?raw';
import ecommerceSvg from '../assets/icons/ecommerce.svg?raw';
import retailSvg from '../assets/icons/retail.svg?raw';
import educationSvg from '../assets/icons/education.svg?raw';
import accountingSvg from '../assets/icons/accounting.svg?raw';
import realEstateSvg from '../assets/icons/real-estate.svg?raw';
import homeServicesSvg from '../assets/icons/home-services.svg?raw';
import travelSvg from '../assets/icons/material-symbols-travel-rounded.svg?raw';
import financeSvg from '../assets/icons/material-symbols-finance-sharp.svg?raw';

const row1 = [
  { label: 'Healthcare', svg: healthcareSvg },
  { label: 'Dental', svg: dentalSvg },
  { label: 'Legal', svg: legalSvg },
  { label: 'Insurance', svg: insuranceSvg },
  { label: 'E-Commerce', svg: ecommerceSvg },
  { label: 'Retail', svg: retailSvg },
];

const row2 = [
  { label: 'Education', svg: educationSvg },
  { label: 'Accounting', svg: accountingSvg },
  { label: 'Real Estate', svg: realEstateSvg },
  { label: 'Home Services', svg: homeServicesSvg },
  { label: 'Travel & Immigration', svg: travelSvg },
  { label: 'Finance', svg: financeSvg },
];

function Pill({ label, svg }: { label: string; svg: string }) {
  return (
    <div className="industry-pill">
      <Icon svg={svg} />
      <span>{label}</span>
    </div>
  );
}

export default function Industries() {
  const head = useReveal('up');

  return (
    <section className="industries section">
      <div className="industries__glow-wrap">
        <img src={orbGlowSoft} alt="" className="industries__glow industries__glow--soft" />
      </div>

      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">Industries</span>
          <h2 className="section-title">
            Context matters as
            <br />
            much as code.
          </h2>
        </div>
      </div>

      <div className="industries__rows">
        <div className="industries__row-mask">
          <div className="industries__row industries__row--left">
            {[...row1, ...row1].map((item, i) => (
              <Pill key={`${item.label}-${i}`} {...item} />
            ))}
          </div>
        </div>
        <div className="industries__row-mask">
          <div className="industries__row industries__row--right">
            {[...row2, ...row2].map((item, i) => (
              <Pill key={`${item.label}-${i}`} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="industries__cta">
          <a href="#contact" className="btn btn-outline-gradient">
            Get Started
            <Icon svg={arrowRightSvg} className="btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
