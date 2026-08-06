/* src/pages/About.jsx */

import AboutPage from '../components/pages/About';
import SEO from '@/components/common/SEO/SEO';

export default function About() {
  return (
    <div data-testid="page-about">
      <SEO
  title="About Chalachal Technical Services"
  description="Learn about Chalachal Technical Services LLC, a licensed technical services and maintenance company providing professional solutions across all seven Emirates of the UAE."
  canonical=""
  image=""
  keywords="Chalachal Technical Services, technical services company UAE, maintenance company UAE, UAE technical services"
/>
      <AboutPage />
    </div>
  );
}
