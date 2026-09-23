import { useTranslation } from 'react-i18next';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';
import arrowRightSvg from '../assets/icons/boxicons-arrow-right-stroke.svg?raw';
import orbGlowSoft from '../assets/images/industries-glow-soft.webp';
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

function Pill({ label, svg }: { label: string; svg: string }) {
  return (
    <div className="industry-pill">
      <Icon svg={svg} />
      <span>{label}</span>
    </div>
  );
}

export default function Industries() {
  const { t } = useTranslation('home');
  const head = useReveal('up');

  const row1 = [
    { label: t('industries.row1.healthcare'), svg: healthcareSvg },
    { label: t('industries.row1.dental'), svg: dentalSvg },
    { label: t('industries.row1.legal'), svg: legalSvg },
    { label: t('industries.row1.insurance'), svg: insuranceSvg },
    { label: t('industries.row1.ecommerce'), svg: ecommerceSvg },
    { label: t('industries.row1.retail'), svg: retailSvg },
  ];

  const row2 = [
    { label: t('industries.row2.education'), svg: educationSvg },
    { label: t('industries.row2.accounting'), svg: accountingSvg },
    { label: t('industries.row2.realEstate'), svg: realEstateSvg },
    { label: t('industries.row2.homeServices'), svg: homeServicesSvg },
    { label: t('industries.row2.travel'), svg: travelSvg },
    { label: t('industries.row2.finance'), svg: financeSvg },
  ];

  return (
    <section className="industries section">
      <div className="industries__glow-wrap">
        <img src={orbGlowSoft} alt="" className="industries__glow industries__glow--soft" />
      </div>

      <div className="container">
        <div className={`section-head ${head.className}`} ref={head.ref}>
          <span className="eyebrow-pill">{t('industries.eyebrow')}</span>
          <h2 className="section-title" dangerouslySetInnerHTML={{ __html: t('industries.title') }} />
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
            {t('industries.cta')}
            <Icon svg={arrowRightSvg} className="btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
