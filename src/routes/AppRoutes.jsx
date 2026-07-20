/* src/routes/AppRoutes.jsx */
import { Routes, Route } from 'react-router-dom';
import { PATHS } from './paths';
import MainLayout from '../components/layout/MainLayout/MainLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Main layout routes containing header, main outlet, and footer */}
      <Route path={PATHS.HOME} element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={PATHS.ABOUT} element={<About />} />
        <Route path={PATHS.SERVICES} element={<Services />} />
        <Route path={PATHS.SERVICE_DETAIL} element={<ServiceDetail />} />
        <Route path={PATHS.PROJECTS} element={<Projects />} />
        <Route path={PATHS.CONTACT} element={<Contact />} />
      </Route>

      {/* Fallback route */}
      <Route path={PATHS.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
}
