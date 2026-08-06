/* src/pages/Contact.jsx */

import ContactPage from '../components/pages/Contact';
import SEO from '@/components/common/SEO/SEO';

export default function Contact() {
  return (
    <div data-testid="page-contact">
      <SEO
  title="Contact Chalachal Technical Services"
  description="Contact Chalachal Technical Services LLC for professional technical and maintenance services across the UAE. Request a free quote by phone, WhatsApp or email."
  canonical=""
  image=""
  keywords="contact technical services UAE, maintenance company UAE, Chalachal Technical Services contact"
/>
      <ContactPage />
    </div>
  );
}
