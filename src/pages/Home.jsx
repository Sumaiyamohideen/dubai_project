/* src/pages/Home.jsx */
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import Services from '../components/sections/Services';
import About from '../components/sections/About';

export default function Home() {
  return (
    <div data-testid="page-home">
      <Hero />
      <StatsBar />
      <Services />
      <About />
    </div>
  );
}


