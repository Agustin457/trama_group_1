import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, CheckCircle } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = PROJECTS.find(p => p.slug === slug);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Image */}
            <div className="h-[60vh] md:h-[70vh] relative">
                <div className="absolute inset-0 bg-black/20" />
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end pb-20 container mx-auto px-6">
                    <span className="text-white bg-green-700 w-fit px-4 py-1 text-xs font-bold tracking-widest uppercase mb-4">
                        {project.status}
                    </span>
                    <h1 className="text-4xl md:text-7xl font-serif text-white mb-2">{project.title}</h1>
                    <div className="flex items-center gap-2 text-white/90">
                        <MapPin className="w-4 h-4" />
                        <p className="text-sm tracking-wide uppercase">{project.location}</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-sm text-luxury-gray hover:text-luxury-black mb-12 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    VOLVER A PROYECTOS
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-serif text-luxury-black mb-6">Sobre el Proyecto</h2>
                        <div className="prose prose-lg text-luxury-gray font-light">
                            <p className="text-xl leading-relaxed mb-6">{project.description}</p>
                            {/* Placeholder content for extended description */}
                            <p>
                                Este desarrollo representa la culminación de nuestra visión arquitectónica, integrando materiales de primera calidad con un diseño sostenible.
                                Cada espacio ha sido concebido para maximizar la luz natural y ofrecer una experiencia de vida inigualable.
                            </p>
                            <p>
                                Desde los acabados artesanales hasta las amenidades de vanguardia, cada detalle ha sido cuidadosamente seleccionado para satisfacer los estándares más exigentes.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-12">
                        <div className="bg-luxury-light/30 p-8">
                            <h3 className="text-lg font-serif text-luxury-black mb-6">Detalles</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-xs font-bold uppercase text-luxury-gray">Categoría</span>
                                    <span className="text-luxury-black">{project.category}</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-xs font-bold uppercase text-luxury-gray">Estado</span>
                                    <span className="text-luxury-black font-medium">{project.status}</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-xs font-bold uppercase text-luxury-gray">ID Proyecto</span>
                                    <span className="text-luxury-black">#{project.id.toString().padStart(3, '0')}</span>
                                </li>
                                <li className="flex justify-between border-b border-gray-100 pb-2">
                                    <span className="text-xs font-bold uppercase text-luxury-gray">ID Proyecto</span>
                                    <span className="text-luxury-black">#{project.amenities.toString().padStart(3, '0')}</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-luxury-black text-white p-8 text-center">
                            <h3 className="text-xl font-serif mb-4">¿Interesado?</h3>
                            <p className="text-white/70 mb-6 text-sm">Contáctenos para recibir el brochure digital y planos detallados.</p>
                            <Link
                                to="/contact"
                                className="inline-block w-full bg-white text-luxury-black py-3 text-xs font-bold tracking-widest hover:bg-luxury-gold hover:text-white transition-colors"
                            >
                                SOLICITAR INFORMACIÓN
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
