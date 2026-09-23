import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useParams, Navigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from './i18n/i18n';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy-loaded so each route ships its own chunk instead of all pages
// bundling into one multi-MB file every visitor downloads up front.
const HomePage = lazy(() => import('./pages/Home/HomePage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const PartnersPage = lazy(() => import('./pages/Partners/PartnersPage'));
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'));
const AIAgentsPage = lazy(() => import('./pages/AIAgents/AIAgentsPage'));
const AIAutomationPage = lazy(() => import('./pages/AIAutomation/AIAutomationPage'));
const AutoPilotPage = lazy(() => import('./pages/AutoPilot/AutoPilotPage'));
const ModelDevelopmentPage = lazy(() => import('./pages/ModelDevelopment/ModelDevelopmentPage'));
const MVPDevelopmentPage = lazy(() => import('./pages/MVPDevelopment/MVPDevelopmentPage'));
const WebApplicationsPage = lazy(() => import('./pages/WebApplications/WebApplicationsPage'));
const MobileApplicationPage = lazy(() => import('./pages/MobileApplication/MobileApplicationPage'));
const SaasDevelopmentPage = lazy(() => import('./pages/SaasDevelopment/SaasDevelopmentPage'));
const CustomDevelopmentPage = lazy(() => import('./pages/CustomDevelopment/CustomDevelopmentPage'));
const EcommerceDevelopmentPage = lazy(() => import('./pages/EcommerceDevelopment/EcommerceDevelopmentPage'));
const WorkVanTravelPage = lazy(() => import('./pages/WorkVanTravel/WorkVanTravelPage'));
const WorkMainPage = lazy(() => import('./pages/WorkMain/WorkMainPage'));
const WorkPowerMindsetBreakthroughPage = lazy(() => import('./pages/WorkPowerMindsetBreakthrough/WorkPowerMindsetBreakthroughPage'));
const WorkVanTravelBusinessTwoPage = lazy(() => import('./pages/WorkVanTravelBusinessTwo/WorkVanTravelBusinessTwoPage'));
const WorkOneTapDigitalCardPage = lazy(() => import('./pages/WorkOneTapDigitalCard/WorkOneTapDigitalCardPage'));
const WorkPMBConsultingPage = lazy(() => import('./pages/WorkPMBConsulting/WorkPMBConsultingPage'));
const WorkMightyOakLegacyPage = lazy(() => import('./pages/WorkMightyOakLegacy/WorkMightyOakLegacyPage'));
const WorkSolidRockLeadershipPage = lazy(() => import('./pages/WorkSolidRockLeadership/WorkSolidRockLeadershipPage'));
const WorkBuketiFinancialConsultingPage = lazy(() => import('./pages/WorkBuketiFinancialConsulting/WorkBuketiFinancialConsultingPage'));
const WorkLelofitPage = lazy(() => import('./pages/WorkLelofit/WorkLelofitPage'));
const WorkAllAccessTripPage = lazy(() => import('./pages/WorkAllAccessTrip/WorkAllAccessTripPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicy/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfService/TermsOfServicePage'));
const LegalPage = lazy(() => import('./pages/Legal/LegalPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicy/CookiePolicyPage'));
const AccessibilityPage = lazy(() => import('./pages/Accessibility/AccessibilityPage'));
const AIUsagePage = lazy(() => import('./pages/AIUsage/AIUsagePage'));

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
      <Suspense fallback={null}>
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
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
