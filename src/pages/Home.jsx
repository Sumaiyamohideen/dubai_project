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

export default function Home() {
  return (
    <div data-testid="page-home">
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
