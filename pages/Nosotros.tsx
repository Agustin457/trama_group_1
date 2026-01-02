import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import TeamSection from '../components/TeamSection';
import Image from '../public/assets/images/equipoo.png';

const Nosotros: React.FC = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <>
            <section className="py-10 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10" ref={ref}>
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <span className="text-luxury-gold text-xs font-bold tracking-[0.2em] mb-6 block fade-in">SOBRE NOSOTROS</span>
                        <h1 className={`text-4xl md:text-6xl font-serif text-luxury-black mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Liderando la vanguardia inmobiliaria
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <img src={Image} alt="Nuestro equipo" className="w-full h-[600px] object-cover" />
                        </div>
                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h3 className="text-2xl font-serif text-luxury-black mb-6">Como somos</h3>
                            <p className="text-lg text-luxury-gray font-light leading-relaxed mb-6">
                                Diferentes, creativos y comprometidos.

                                Contamos con un equipo de profesionales interdiciplinarios, arquitectos, ingenieros, abogados, contadores y especialistas en inversiones, que permiten llevar a cabo la realización de varios proyectos de manera simultánea, involucrándonos en cada uno de ellos.
                            </p>
                            <p className="text-lg text-luxury-gray font-light leading-relaxed mb-12">
                                Trabajamos con los arquitectos y diseñadores más renombrados del mundo para asegurar que cada proyecto sea una obra maestra única, respetando el entorno y enriqueciendo la comunidad.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <TeamSection />
        </>
    );
};

export default Nosotros;
