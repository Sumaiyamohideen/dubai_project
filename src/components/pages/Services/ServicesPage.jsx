/* src/components/pages/Services/ServicesPage.jsx */

import { memo } from 'react';
import ServicesHero from './ServicesHero/ServicesHero';
import ServicesGrid from './ServicesGrid/ServicesGrid';
import CTA from '@/components/pages/Home/CTA';

/**
 * ServicesPage Orchestrator Component.
 * Composes Services page sections based on Figma node 731:2414.
 *
 * @component ServicesPage
 */
const ServicesPage = memo(() => {
  return (
    <div data-testid="services-page">
      <ServicesHero />
      <ServicesGrid />
      <CTA variant="about" />
    </div>
  );
});

ServicesPage.displayName = 'ServicesPage';

export default ServicesPage;
