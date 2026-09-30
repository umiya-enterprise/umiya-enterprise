import { useCallback, useMemo, useState } from 'react';
import { projectCategories, projects } from '../../data/projects';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import CategoryFilter from './CategoryFilter';
import Lightbox from './Lightbox';
import ProjectCard from './ProjectCard';
import './ProjectGallery.css';

const counts = Object.fromEntries(
  projectCategories.map(({ id }) => [id, id === 'all' ? projects.length : projects.filter((p) => p.categories.includes(id)).length]),
);

export default function ProjectGallery() {
  const [active, setActive] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.categories.includes(active))),
    [active],
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const activeLabel = projectCategories.find((c) => c.id === active)?.label;

  return (
    <section id="projects" data-nav="projects" className="section gallery" aria-labelledby="projects-title">
      <div className="container">
        <div className="gallery__head">
          <SectionHeading
            id="projects-title"
            eyebrow="Our Work"
            title="Projects Gallery"
            text="A look at the kind of aluminium and glass work we deliver — windows, sliding doors, office and factory partitions, glass work, shopfronts and facades."
          />
        </div>

        <Reveal className="gallery__filters">
          <CategoryFilter categories={projectCategories} active={active} counts={counts} onChange={setActive} />
        </Reveal>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {activeLabel === 'All' ? '' : activeLabel} projects
        </p>

        <ul className="gallery__grid" key={active}>
          {visible.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setLightboxIndex} />
          ))}
        </ul>

        <Reveal className="gallery__footer">
          <p>Have a similar requirement in mind?</p>
          <Button href="#contact" variant="blue" arrow>
            Start Your Project
          </Button>
        </Reveal>
      </div>

      <Lightbox items={visible} index={lightboxIndex} onClose={closeLightbox} onNavigate={setLightboxIndex} />
    </section>
  );
}
