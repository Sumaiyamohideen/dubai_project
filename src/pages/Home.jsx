/* src/pages/Home.jsx */
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import Services from '../components/sections/Services';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';

export default function Home() {
  return (
    <div data-testid="page-home">
      <Hero />
      <StatsBar />
      <Services />
      <About />
      {/* Why Choose Chalachal (Placeholder until implemented) */}
      <Projects />
    </div>
  );
}
