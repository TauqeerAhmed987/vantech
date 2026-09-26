import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/logo.webp';
import arrowDownSvg from '../assets/icons/dashicons-arrow-left-alt2.svg?raw';
import Icon from './Icon';
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from '../i18n/i18n';
import { localizePath, stripLocale } from '../i18n/localizedPath';

const LANGUAGE_LABELS: Record<SupportedLanguage, string> = { en: 'EN', fr: 'FR', es: 'ES', pt: 'PT' };

function useNavLinks() {
  const { t } = useTranslation();
  return [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.aboutUs'), href: '/about' },
    {
      label: t('nav.services'),
      href: '#services',
      dropdown: [
        { label: t('nav.aiAgents'), href: '/ai-agents' },
        { label: t('nav.aiAutomations'), href: '/ai-automation' },
        { label: t('nav.modelDevelopment'), href: '/model-development' },
        { label: t('nav.autopilot'), href: '/automation-suite' },
        { label: t('nav.mvpDevelopment'), href: '/product-development' },
        { label: t('nav.webApplications'), href: '/web-applications' },
        { label: t('nav.mobileApplications'), href: '/mobile-application' },
        { label: t('nav.saasDevelopment'), href: '/saas-development' },
        { label: t('nav.customSoftware'), href: '/custom-development' },
        { label: t('nav.ecommerce'), href: '/ecommerce-development' },
      ],
    },
    { label: t('nav.partnerProgram'), href: '/partners' },
    {
      label: t('nav.work'),
      href: '/work',
      dropdown: [
        { label: t('nav.powerMindsetBreakthrough'), href: '/power-mindset-breakthrough' },
        { label: t('nav.vanTravelBusiness'), href: '/van-travel-business' },
        { label: t('nav.vanTravelBusinessTwo'), href: '/van-travel-business-two' },
        { label: t('nav.onetapDigitalCard'), href: '/onetap-digital-card' },
        { label: t('nav.pmbConsulting'), href: '/pmb-consulting' },
        { label: t('nav.mightyOakLegacy'), href: '/mighty-oak-legacy' },
        { label: t('nav.solidRockLeadership'), href: '/solid-rock-leadership-development' },
        { label: t('nav.buketiFinancial'), href: '/buketi-insurance-services' },
        { label: t('nav.lelofit'), href: '/lelofit' },
        { label: t('nav.allAccessTrip'), href: '/all-access-trip' },
        { label: t('nav.avocatConnectRdc'), href: '/avocat-connect-rdc' },
      ],
    },
    { label: t('nav.faq'), href: '#faq', samePage: true },
    { label: t('nav.contact'), href: '/contact' },
  ];
}

const MOBILE_NAV_QUERY = '(max-width: 980px)';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const navLinks = useNavLinks();
  const currentLang = (i18n.language as SupportedLanguage) || 'en';
  const basePath = stripLocale(location.pathname);
  const isHome = basePath === '/';

  const switchLanguage = (lang: SupportedLanguage) => {
    closeMenu();
    navigate(localizePath(basePath, lang) + location.search + location.hash);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar">
          <a
            href={localizePath('/', currentLang)}
            className="navbar__logo"
            onClick={(e) => {
              e.preventDefault();
              closeMenu();
              if (isHome) {
                document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                navigate(localizePath('/', currentLang));
              }
            }}
          >
            <img src={logo} alt="Van Tech Systems" width={113} height={54} />
          </a>

          <div
            className={`navbar__backdrop${isMenuOpen ? ' is-open' : ''}`}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <nav className={`navbar__nav${isMenuOpen ? ' is-open' : ''}`}>
            <ul className="navbar__links">
              {navLinks.map((link) => {
                const isHomeLink = link.href === '#home';
                const href = isHomeLink
                  ? localizePath('/', currentLang)
                  : link.href.startsWith('#')
                    ? !isHome && !link.samePage
                      ? `${localizePath('/', currentLang)}${link.href}`
                      : link.href
                    : localizePath(link.href, currentLang);
                const isOpen = openDropdown === link.label;
                return (
                <li
                  key={link.label}
                  className={`${link.dropdown ? 'has-dropdown' : ''}${isOpen ? ' is-dropdown-open' : ''}`}
                >
                  <a
                    href={href}
                    className="navbar__link"
                    onClick={(e) => {
                      if (link.dropdown && window.matchMedia(MOBILE_NAV_QUERY).matches) {
                        e.preventDefault();
                        setOpenDropdown((prev) => (prev === link.label ? null : link.label));
                        return;
                      }
                      if (isHomeLink) {
                        e.preventDefault();
                        closeMenu();
                        if (isHome) {
                          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          navigate(href);
                        }
                        return;
                      }
                      closeMenu();
                    }}
                  >
                    {link.label}
                    {link.dropdown && (
                      <Icon svg={arrowDownSvg} className="navbar__link-arrow" />
                    )}
                  </a>

                  {link.dropdown && (
                    <div className="navbar__dropdown-wrap">
                      <ul className="navbar__dropdown">
                        {link.dropdown.map((item) => {
                          const itemLabel = typeof item === 'string' ? item : item.label;
                          const itemHref = typeof item === 'string' ? '#' : localizePath(item.href, currentLang);
                          return (
                            <li key={itemLabel}>
                              <a href={itemHref} onClick={closeMenu}>
                                {itemLabel}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
                );
              })}
            </ul>

            <ul className="navbar__langs navbar__langs--mobile">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <li
                  key={lang}
                  className={lang === currentLang ? 'is-active' : ''}
                  onClick={() => switchLanguage(lang)}
                >
                  {LANGUAGE_LABELS[lang]}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="navbar__cta navbar__cta--mobile"
              onClick={closeMenu}
            >
              {t('startAProject')}
            </a>
          </nav>

          <div className="navbar__actions">
            <ul className="navbar__langs">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <li
                  key={lang}
                  className={lang === currentLang ? 'is-active' : ''}
                  onClick={() => switchLanguage(lang)}
                >
                  {LANGUAGE_LABELS[lang]}
                </li>
              ))}
            </ul>
            <a href="#contact" className="navbar__cta navbar__cta--desktop">
              {t('startAProject')}
            </a>
            <button
              type="button"
              className={`navbar__toggle${isMenuOpen ? ' is-open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => {
                setIsMenuOpen((open) => !open);
                setOpenDropdown(null);
              }}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
