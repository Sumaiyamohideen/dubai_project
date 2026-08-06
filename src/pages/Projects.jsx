/* src/pages/Projects.jsx */

import ProjectsPage from '../components/pages/Projects';
import SEO from '@/components/common/SEO/SEO';

export default function Projects() {
  return (
    <div data-testid="page-projects">
      <SEO
  title="Technical Services Projects in UAE"
  description="Explore technical, maintenance, electrical, plumbing, painting and installation projects completed by Chalachal Technical Services LLC across the UAE."
  canonical=""
  image=""
  keywords="technical projects UAE, maintenance projects UAE, Chalachal projects, technical services projects"
/>
      <ProjectsPage />
    </div>
  );
}

