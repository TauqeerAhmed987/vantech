import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import arrowDownSvg from '../assets/icons/dashicons-arrow-left-alt2.svg?raw';
import Icon from './Icon';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '/about' },
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'AI Agents', href: '/ai-agents' },
      { label: 'AI Automations', href: '/ai-automation' },
      { label: 'Model Development', href: '/model-development' },
      { label: 'Autopilot', href: '/auto-pilot' },
      { label: 'MVP Development', href: '/mvp-development' },
      { label: 'Web Applications', href: '/web-applications' },
      { label: 'Mobile Applications', href: '/mobile-application' },
      { label: 'SaaS Development', href: '/saas-development' },
      { label: 'Custom Software', href: '/custom-development' },
      { label: 'Ecommerce', href: '/ecommerce-development' },
    ],
  },
  { label: 'Partner Program', href: '/partners' },
  {
    label: 'Work',
    href: '/work',
    dropdown: [
      { label: 'Power Mindset Breakthrough', href: '/power-mindset-breakthrough' },
      { label: 'Van Travel Business', href: '/van-travel-business' },
      { label: 'Van Travel Business Two', href: '/van-travel-business-two' },
      { label: 'OneTap Digital Card', href: '/onetap-digital-card' },
      { label: 'The PMB Consulting', href: '/pmb-consulting' },
      { label: 'Mighty Oak Legacy', href: '/mighty-oak-legacy' },
      { label: 'Solid Rock Leadership', href: '/solid-rock-leadership-development' },
      { label: 'Buketi Financial & Consulting', href: '/buketi-insurance-services' },
      { label: 'Lelofit', href: '/lelofit' },
      { label: 'All Access Trip', href: '/all-access-trip' },
    ],
  },
  { label: 'Faq', href: '#faq', samePage: true },
  { label: 'Contact', href: '/contact' },
];

const languages = ['EN', 'FR', 'ES', 'PT'];

const MOBILE_NAV_QUERY = '(max-width: 980px)';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="navbar">
          <a href={isHome ? '#home' : '/'} className="navbar__logo">
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
                const href =
                  link.href.startsWith('#') && !isHome && !link.samePage
                    ? `/${link.href}`
                    : link.href;
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
                          const itemHref = typeof item === 'string' ? '#' : item.href;
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
              {languages.map((lang, i) => (
                <li key={lang} className={i === 0 ? 'is-active' : ''}>
                  {lang}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="navbar__cta navbar__cta--mobile"
              onClick={closeMenu}
            >
              Start a Project
            </a>
          </nav>

          <div className="navbar__actions">
            <ul className="navbar__langs">
              {languages.map((lang, i) => (
                <li key={lang} className={i === 0 ? 'is-active' : ''}>
                  {lang}
                </li>
              ))}
            </ul>
            <a href="#contact" className="navbar__cta navbar__cta--desktop">
              Start a Project
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
