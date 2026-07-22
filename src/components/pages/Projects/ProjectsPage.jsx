/* src/components/pages/Projects/ProjectsPage.jsx */

import { memo, useState, useMemo } from 'react';
import ProjectsHero from './ProjectsHero';
import ProjectsFilter from './ProjectsFilter';
import ProjectsGrid from './ProjectsGrid';
import CTA from '@/components/pages/Home/CTA';
import { PROJECTS_GRID_DATA } from './constants';

/**
 * ProjectsPage Orchestrator Component.
 * Composes Projects page sections (Hero, ProjectsFilter, and ProjectsGrid) with active filter state management.
 *
 * @component ProjectsPage
 */
const ProjectsPage = memo(() => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return PROJECTS_GRID_DATA;
    }
    return PROJECTS_GRID_DATA.filter((project) =>
      project.filterCategories.includes(activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  return (
    <div data-testid="projects-page">
      <ProjectsHero />
      <ProjectsFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ProjectsGrid projects={filteredProjects} />
      <CTA variant="about" />
    </div>
  );
});

ProjectsPage.displayName = 'ProjectsPage';

export default ProjectsPage;
