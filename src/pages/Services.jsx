/* src/pages/Services.jsx */

import ServicesPage from '../components/pages/Services';
import SEO from '@/components/common/SEO/SEO';

export default function Services() {
  return (
    <div data-testid="page-services">
      <SEO
  title="Technical & Maintenance Services in UAE"
  description="Professional electrical, plumbing, painting, carpentry, welding, floor tiling, aluminium, glass and maintenance services across the UAE."
  canonical=""
  image=""
  keywords="technical services UAE, maintenance services UAE, electrical services UAE, plumbing services UAE, carpentry services UAE, painting services UAE"
/>
      <ServicesPage />
    </div>
  );
}
