import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Maximize2, Search } from 'lucide-react';
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

const ProjectsPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('ALL');

    const filteredProjects = useMemo(() => {
        return PROJECTS.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.location.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesStatus = statusFilter === 'ALL' || project.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [searchTerm, statusFilter]);

    const uniqueStatuses = ['ALL', ...Array.from(new Set(PROJECTS.map(p => p.status)))];

    return (
        <div className="min-h-screen bg-white pt-24">
            <div className="bg-[#1c3225] text-white py-20 px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl md:text-5xl font-serif mb-6">Nuestros Proyectos</h1>
                    <p className="text-white/60 font-light text-lg max-w-2xl mx-auto">
                        Descubra nuestra colección exclusiva de desarrollos inmobiliarios.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-16">
                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-6 mb-16 justify-between items-center bg-gray-50 p-6 rounded-sm">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Buscar por nombre o ubicación..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-luxury-gold text-sm"
                        />
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">Filtrar por:</span>
                        {uniqueStatuses.map(status => (
                            <button
                                key={status}
                                onClick={() => setStatusFilter(status)}
                                className={`text-xs font-bold tracking-widest px-4 py-2 uppercase transition-all whitespace-nowrap ${statusFilter === status ? 'bg-luxury-black text-white' : 'text-luxury-gray hover:text-luxury-black bg-white border border-gray-100'}`}
                            >
                                {status === 'ALL' ? 'Todos' : status}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-luxury-gray text-lg">No se encontraron proyectos que coincidan con su búsqueda.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
