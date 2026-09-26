import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import footerBg from '../assets/images/footer-bg.webp';
import footerDecor from '../assets/images/footer-top-start.png';
import logo from '../assets/images/logo.webp';
import { useReveal } from '../hooks/useReveal';
import { type SupportedLanguage } from '../i18n/i18n';
import { localizePath, stripLocale } from '../i18n/localizedPath';

function useFooterLinks() {
  const { t } = useTranslation();
  const companyLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.aboutUs'), href: '/about' },
    { label: t('nav.partnerProgram'), href: '/partners' },
    { label: t('nav.work'), href: '/work' },
    { label: t('nav.faq'), href: '#faq' },
    { label: t('nav.contact'), href: '/contact' },
  ];
  const servicesLinksA = [
    { label: t('nav.aiAgents'), href: '/ai-agents' },
    { label: t('nav.aiAutomations'), href: '/ai-automation' },
    { label: t('nav.modelDevelopment'), href: '/model-development' },
    { label: t('nav.autopilot'), href: '/automation-suite' },
    { label: t('nav.mvpDevelopment'), href: '/product-development' },
  ];
  const servicesLinksB = [
    { label: t('nav.webApplications'), href: '/web-applications' },
    { label: t('nav.mobileApplications'), href: '/mobile-application' },
    { label: t('nav.saasDevelopment'), href: '/saas-development' },
    { label: t('nav.customSoftware'), href: '/custom-development' },
    { label: t('nav.ecommerce'), href: '/ecommerce-development' },
  ];
  const legalLinks = [
    { label: t('footer.legalCenter'), href: '/legal' },
    { label: t('footer.cookies'), href: '/cookie-policy' },
    { label: t('footer.accessibility'), href: '/accessibility' },
    { label: t('footer.aiUsage'), href: '/ai-usage' },
  ];
  return { companyLinks, servicesLinksA, servicesLinksB, legalLinks };
}

export default function Footer() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language as SupportedLanguage) || 'en';
  const basePath = stripLocale(location.pathname);
  const isHome = basePath === '/';
  const { companyLinks, servicesLinksA, servicesLinksB, legalLinks } = useFooterLinks();
  const brand = useReveal('left');
  const companyCol = useReveal('right');
  const servicesCol = useReveal('right');
  const legalCol = useReveal('right');

  return (
    <footer className="site-footer">
      <img src={footerBg} alt="" className="site-footer__bg" loading="lazy" />

      <div className="container">
        <div className="footer-card">
          <img src={footerDecor} alt="" className="footer-card__decor" loading="lazy" />

          <div className="footer-card__top">
            <div className={`footer-brand ${brand.className}`} ref={brand.ref}>
              <img src={logo} alt="Van Tech Systems" className="footer-brand__logo" />
              <p className="footer-brand__tagline">{t('footer.tagline')}</p>
              <p className="footer-brand__desc">{t('footer.desc')}</p>
              <div className="footer-brand__contact">
                <div>
                  <span className="footer-brand__contact-label">
                    <span className="footer-brand__bracket">[</span> {t('footer.callUs')}{' '}
                    <span className="footer-brand__bracket">]</span>
                  </span>
                  <a href="tel:+19034763762" className="footer-brand__contact-value">+1-903-4763762</a>
                </div>
                <div>
                  <span className="footer-brand__contact-label">
                    <span className="footer-brand__bracket">[</span> {t('footer.mailUs')}{' '}
                    <span className="footer-brand__bracket">]</span>
                  </span>
                  <a href="mailto:hello@vantechsystems.tech" className="footer-brand__contact-value">hello@vantechsystems.tech</a>
                </div>
              </div>
            </div>

            <div className={`footer-links ${companyCol.className}`} ref={companyCol.ref}>
              <h4 className="footer-links__title gradient-text">{t('footer.company')}</h4>
              <ul>
                {companyLinks.map((l) => {
                  const href =
                    l.href === '#home'
                      ? localizePath('/', currentLang)
                      : l.href.startsWith('#')
                        ? !isHome
                          ? `${localizePath('/', currentLang)}${l.href}`
                          : l.href
                        : localizePath(l.href, currentLang);
                  return (
                    <li key={l.label}>
                      <a href={href}>{l.label}</a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div
              className={`footer-links footer-links--services ${servicesCol.className}`}
              ref={servicesCol.ref}
            >
              <h4 className="footer-links__title gradient-text">{t('footer.services')}</h4>
              <div className="footer-links__columns">
                <ul>
                  {servicesLinksA.map((l) => (
                    <li key={l.label}>
                      <a href={localizePath(l.href, currentLang)}>{l.label}</a>
                    </li>
                  ))}
                </ul>
                <ul>
                  {servicesLinksB.map((l) => (
                    <li key={l.label}>
                      <a href={localizePath(l.href, currentLang)}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`footer-links ${legalCol.className}`} ref={legalCol.ref}>
              <h4 className="footer-links__title gradient-text">{t('footer.legal')}</h4>
              <ul>
                {legalLinks.map((l) => (
                  <li key={l.label}>
                    <a href={localizePath(l.href, currentLang)}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-card__bottom">
            <p>{t('footer.copyright')}</p>
            <div className="footer-card__bottom-links">
              <a href={localizePath('/privacy-policy', currentLang)}>{t('footer.privacyPolicy')}</a>
              <a href={localizePath('/terms-of-service', currentLang)}>{t('footer.termsOfServices')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
