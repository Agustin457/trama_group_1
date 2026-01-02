import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import TeamSection from '../components/TeamSection';
import Image from '../public/assets/images/datos_inv.avif';

const Nosotros: React.FC = () => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <>
            <section className="py-10 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10" ref={ref}>
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h1 className={`text-4xl md:text-6xl font-serif text-luxury-black mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Nuestra Oferta
                        </h1>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <img src={Image} alt="datos_inversiones" className="w-full h-auto rounded-lg shadow-lg" />
                        </div>
                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <h3 className="text-2xl font-serif text-luxury-black mb-6">Porcentual de utilidad en las distintas etapas de inversión</h3>
                            <p className="text-lg text-luxury-gray font-light leading-relaxed mb-6">
                                Fundada con la visión de redefinir el lujo en Latinoamérica, Trama Group se ha consolidado como un referente en el desarrollo inmobiliario de alta gama. Nuestra pasión por el detalle y el compromiso con la calidad nos impulsa a crear espacios que no solo habitan, sino que inspiran.
                            </p>
                            <p className="text-lg text-luxury-gray font-light leading-relaxed mb-12">
                                Con Grupo Trama tenés la posibilidad de

                                invertir en proyectos inmobiliarios desde el
                                pozo, generando una rentabilidad en dólares
                                de hasta el 38% del valor del inmueble.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Nosotros;
