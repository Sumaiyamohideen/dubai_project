/* src/pages/Home.jsx */
import Hero from '../components/pages/Home/Hero';
import StatsBar from '../components/pages/Home/StatsBar';
import Services from '../components/pages/Home/Services';
import About from '../components/pages/Home/About';
import WhyChoose from '../components/pages/Home/WhyChoose';
import Projects from '../components/pages/Home/Projects';
import Sectors from '../components/pages/Home/Sectors';
import Testimonials from '../components/pages/Home/Testimonials';
import Emirates from '../components/pages/Home/Emirates';
import FAQ from '../components/pages/Home/FAQ';
import CTA from '../components/pages/Home/CTA';
import SEO from '@/components/common/SEO/SEO';

export default function Home() {
  return (
    <div data-testid="page-home"> 
     <SEO
        title="Technical Services & Maintenance in UAE"
        description="Chalachal Technical Services LLC provides professional electrical, plumbing, painting, carpentry, tiling, aluminium, glass and maintenance services across the UAE."
        canonical=""
        image=""
        keywords="technical services UAE, maintenance services UAE, electrical services UAE, plumbing services UAE, painting services UAE, carpentry services UAE"
      /> 
      <Hero />
      <StatsBar />
      <Services />
      <About />
      <WhyChoose />
      <Projects />
      <Sectors />
      <Testimonials />
      <Emirates />
      <FAQ />
      <CTA />
    </div>
  );
}
