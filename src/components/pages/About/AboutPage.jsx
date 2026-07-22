/* src/components/pages/About/AboutPage.jsx */

import { memo } from 'react';
import AboutHero from './AboutHero/AboutHero';
import AboutStory from './AboutStory/AboutStory';
import VisionMission from './VisionMission/VisionMission';
import AboutValues from './AboutValues/AboutValues';
import AboutAdvantage from './AboutAdvantage/AboutAdvantage';
import CTA from '../Home/CTA';

/**
 * AboutPage Orchestrator Component.
 * Composes all sections of the About Us page in exact Figma node 731:2285 hierarchy.
 *
 * @component AboutPage
 */
const AboutPage = memo(() => {
  return (
    <div data-testid="about-page">
      <AboutHero />
      <AboutStory />
      <VisionMission />
      <AboutValues />
      <AboutAdvantage />
      <CTA variant="about" />
    </div>
  );
});

AboutPage.displayName = 'AboutPage';

export default AboutPage;
