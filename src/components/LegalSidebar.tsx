import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Accessibility Statement', href: '/accessibility' },
  { label: 'AI Usage Policy', href: '/ai-usage' },
];

export default function LegalSidebar() {
  const { pathname } = useLocation();

  return (
    <nav className="legal-sidebar" aria-label="Legal pages">
      <Link to="/legal" className="legal-sidebar__back">
        &larr; Legal center
      </Link>
      <ul className="legal-sidebar__list">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              to={l.href}
              className={`legal-sidebar__link${pathname === l.href ? ' legal-sidebar__link--active' : ''}`}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
