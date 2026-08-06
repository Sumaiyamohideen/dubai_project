/* src/routes/AppRoutes.jsx */
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './paths';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse/TermsOfUse";
import Sitemap from "../pages/Sitemap/Sitemap";

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Services = lazy(() => import('../pages/Services'));
const ServiceDetail = lazy(() => import('../pages/ServiceDetail'));
const Projects = lazy(() => import('../pages/Projects'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

export default function AppRoutes() {
  return (
    <Suspense fallback={null}>
      <Routes>
        {/* Main layout routes containing header, main outlet, and footer */}
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PATHS.ABOUT} element={<About />} />
          <Route path={PATHS.SERVICES} element={<Services />} />
          <Route path={PATHS.SERVICE_DETAIL} element={<ServiceDetail />} />
          <Route path={PATHS.PROJECTS} element={<Projects />} />
          <Route path={PATHS.CONTACT} element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Route>

        {/* Fallback route */}
        <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
