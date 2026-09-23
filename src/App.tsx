import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from './i18n/i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import PartnersPage from './pages/Partners/PartnersPage';
import ContactPage from './pages/Contact/ContactPage';
import AIAgentsPage from './pages/AIAgents/AIAgentsPage';
import AIAutomationPage from './pages/AIAutomation/AIAutomationPage';
import AutoPilotPage from './pages/AutoPilot/AutoPilotPage';
import ModelDevelopmentPage from './pages/ModelDevelopment/ModelDevelopmentPage';
import MVPDevelopmentPage from './pages/MVPDevelopment/MVPDevelopmentPage';
import WebApplicationsPage from './pages/WebApplications/WebApplicationsPage';
import MobileApplicationPage from './pages/MobileApplication/MobileApplicationPage';
import SaasDevelopmentPage from './pages/SaasDevelopment/SaasDevelopmentPage';
import CustomDevelopmentPage from './pages/CustomDevelopment/CustomDevelopmentPage';
import EcommerceDevelopmentPage from './pages/EcommerceDevelopment/EcommerceDevelopmentPage';
import WorkVanTravelPage from './pages/WorkVanTravel/WorkVanTravelPage';
import WorkMainPage from './pages/WorkMain/WorkMainPage';
import WorkPowerMindsetBreakthroughPage from './pages/WorkPowerMindsetBreakthrough/WorkPowerMindsetBreakthroughPage';
import WorkVanTravelBusinessTwoPage from './pages/WorkVanTravelBusinessTwo/WorkVanTravelBusinessTwoPage';
import WorkOneTapDigitalCardPage from './pages/WorkOneTapDigitalCard/WorkOneTapDigitalCardPage';
import WorkPMBConsultingPage from './pages/WorkPMBConsulting/WorkPMBConsultingPage';
import WorkMightyOakLegacyPage from './pages/WorkMightyOakLegacy/WorkMightyOakLegacyPage';
import WorkSolidRockLeadershipPage from './pages/WorkSolidRockLeadership/WorkSolidRockLeadershipPage';
import WorkBuketiFinancialConsultingPage from './pages/WorkBuketiFinancialConsulting/WorkBuketiFinancialConsultingPage';
import WorkLelofitPage from './pages/WorkLelofit/WorkLelofitPage';
import WorkAllAccessTripPage from './pages/WorkAllAccessTrip/WorkAllAccessTripPage';
import PrivacyPolicyPage from './pages/PrivacyPolicy/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfService/TermsOfServicePage';
import LegalPage from './pages/Legal/LegalPage';
import CookiePolicyPage from './pages/CookiePolicy/CookiePolicyPage';
import AccessibilityPage from './pages/Accessibility/AccessibilityPage';
import AIUsagePage from './pages/AIUsage/AIUsagePage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
}

const pageRoutes: { path: string; element: React.ReactNode }[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/ai-agents', element: <AIAgentsPage /> },
  { path: '/ai-automation', element: <AIAutomationPage /> },
  { path: '/auto-pilot', element: <AutoPilotPage /> },
  { path: '/model-development', element: <ModelDevelopmentPage /> },
  { path: '/mvp-development', element: <MVPDevelopmentPage /> },
  { path: '/web-applications', element: <WebApplicationsPage /> },
  { path: '/mobile-application', element: <MobileApplicationPage /> },
  { path: '/saas-development', element: <SaasDevelopmentPage /> },
  { path: '/custom-development', element: <CustomDevelopmentPage /> },
  { path: '/ecommerce-development', element: <EcommerceDevelopmentPage /> },
  { path: '/work', element: <WorkMainPage /> },
  { path: '/van-travel-business', element: <WorkVanTravelPage /> },
  { path: '/power-mindset-breakthrough', element: <WorkPowerMindsetBreakthroughPage /> },
  { path: '/van-travel-business-two', element: <WorkVanTravelBusinessTwoPage /> },
  { path: '/onetap-digital-card', element: <WorkOneTapDigitalCardPage /> },
  { path: '/pmb-consulting', element: <WorkPMBConsultingPage /> },
  { path: '/mighty-oak-legacy', element: <WorkMightyOakLegacyPage /> },
  { path: '/solid-rock-leadership-development', element: <WorkSolidRockLeadershipPage /> },
  { path: '/buketi-insurance-services', element: <WorkBuketiFinancialConsultingPage /> },
  { path: '/lelofit', element: <WorkLelofitPage /> },
  { path: '/all-access-trip', element: <WorkAllAccessTripPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/privacy-policy', element: <PrivacyPolicyPage /> },
  { path: '/terms-of-service', element: <TermsOfServicePage /> },
  { path: '/legal', element: <LegalPage /> },
  { path: '/cookie-policy', element: <CookiePolicyPage /> },
  { path: '/accessibility', element: <AccessibilityPage /> },
  { path: '/ai-usage', element: <AIUsagePage /> },
];

const LOCALE_PARAMS = SUPPORTED_LANGUAGES.filter((l) => l !== 'en');

/** Sets the English (default, unprefixed) locale for everything nested under it. */
function EnglishFrame() {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage('en');
  }, [i18n]);
  return <Outlet />;
}

/** Reads :lang from the URL, switches i18next to it, or bounces back to / if it's not one we support. */
function LocaleFrame() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const isSupported = lang !== undefined && (LOCALE_PARAMS as string[]).includes(lang);

  useEffect(() => {
    if (isSupported && lang) {
      i18n.changeLanguage(lang);
    }
  }, [isSupported, lang, i18n]);

  if (!isSupported) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route element={<EnglishFrame />}>
          {pageRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Route>
        <Route path="/:lang" element={<LocaleFrame />}>
          {pageRoutes.map((r) =>
            r.path === '/' ? (
              <Route key={r.path} index element={r.element} />
            ) : (
              <Route key={r.path} path={r.path.slice(1)} element={r.element} />
            )
          )}
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
