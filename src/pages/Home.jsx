/* src/pages/Home.jsx */
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import WhyChoose from '../components/sections/WhyChoose';
import Projects from '../components/sections/Projects';
import Sectors from '../components/sections/Sectors';
import Testimonials from '../components/sections/Testimonials';
import Emirates from '../components/sections/Emirates';
import FAQ from '../components/sections/FAQ';

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
    </div>
  );
}
