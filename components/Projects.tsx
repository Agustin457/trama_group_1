import React from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Reusing ProjectCard logic but wrapped for the list view
const ProjectCard: React.FC<{ project: typeof PROJECTS[0]; index: number }> = ({ project, index }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <Link
      to={`/projects/${project.slug}`}
      ref={ref}
      className={`group cursor-pointer relative transition-all duration-1000 ease-out block`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${index * 100}ms`
      }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden image-zoom-container mb-6">
        {/* Badge */}
        <div className="absolute top-6 left-6 z-20 bg-green-700 px-4 py-2 shadow-sm">
          <span className="text-[10px] uppercase tracking-widest text-white font-bold">{project.status}</span>
        </div>

        {/* Expand Icon */}
        <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 flex items-center justify-center">
            <Maximize2 className="w-5 h-5 text-white drop-shadow-md" />
          </div>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover image-zoom-img grayscale-0 transition-all duration-700"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      <div className="flex flex-col items-start text-left">
        <p className="text-[10px] font-bold text-luxury-black/60 uppercase tracking-widest mb-3">
          {project.location}
        </p>
        <h3 className="text-2xl font-serif text-luxury-black mb-3 relative inline-block group-hover:text-luxury-gold transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-luxury-gray font-light leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  );
};

const FeaturedProjects: React.FC = () => {
  // Limit to 6 projects for the home page
  const displayedProjects = PROJECTS.slice(0, 6);

  return (
    <div className="bg-white">
      <div className="bg-[#1c3225] text-white py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Nuestros Proyectos</h1>
          <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
            Descubra nuestra colección exclusiva de desarrollos inmobiliarios.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-luxury-gray text-lg">No se encontraron proyectos.</p>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="mt-24 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-4 bg-luxury-black text-white px-8 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-luxury-gold transition-all duration-300 group"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
