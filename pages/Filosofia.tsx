import React from 'react';
import { STATS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ImageCarousel from '../components/ImageCarousel';

const Filosofia: React.FC = () => {
    const { ref, isVisible } = useScrollReveal(0.2);

    const INDUSTRIAL_IMAGES = [
        "/assets/images/industrial_pop_00.png",
        "/assets/images/industrial_pop_01.avif",
    ];

    const MODERN_IMAGES = [
        "/assets/images/modern_cool_00.avif",
        "/assets/images/modern_cool_01.avif",
        "/assets/images/modern_cool_02.avif",
    ];

    const NORDIC_IMAGES = [
        "/assets/images/nordic_calm_00.avif",
        "/assets/images/nordic_calm_01.avif",
        "/assets/images/nordic_calm_02.avif",
    ];

    return (
        <div className="bg-white">
            {/* Existing Section */}
            <section className="py-32 relative overflow-hidden min-h-screen">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-luxury-light/50 skew-x-12 transform translate-x-1/2 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                        {/* Text Content */}
                        <div
                            ref={ref}
                            className={`lg:col-span-7 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                        >
                            <span className="text-luxury-gold text-xs font-bold tracking-[0.2em] mb-6 block">NUESTRA FILOSOFÍA</span>
                            <h2 className="text-4xl md:text-6xl font-serif text-luxury-black mb-8 leading-tight">
                                Concepto BYOS.<br />
                                <span className="italic text-green-800">Tu espacio pensado y diseñado para vos!</span>
                            </h2>
                            <div className="space-y-6 text-luxury-gray font-light text-lg max-w-2xl">
                                <p>
                                    Tener la posibilidad de definir tu estilo es esencial para crear un espacio único que refleje la manera en la que elegís expresar cada momento de la vida. Todos los desarrollos que emprendemos están pensados para que puedan ser personalizados bajo el concepto BYOS (Be your own Style).
                                </p>
                                <p>
                                    Contamos con un grupo de artistas, arquitectos y diseñadores para que puedan guiarte y ayudarte a encontrar tu propia mirada. Vas a poder elegir aberturas, pisos, revestimientos, paredes, puertas, griferías, cocina, tipos de maderas y hasta armar tu propia paleta de colores!
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-8 mt-16 border-t border-luxury-black/10 pt-10">
                                {STATS.map((stat, idx) => (
                                    <div key={idx}>
                                        <p className="text-3xl md:text-4xl font-serif text-luxury-black mb-2">{stat.value}</p>
                                        <p className="text-[10px] md:text-xs text-luxury-gray tracking-widest uppercase">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="lg:col-span-5 h-[600px] relative">
                            <div className="absolute inset-0 bg-luxury-black/5 transform translate-x-4 translate-y-4" />
                            <img
                                src="https://picsum.photos/600/800?grayscale"
                                alt="Interior Design Detail"
                                className="w-full h-full object-cover relative z-10"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section: Vision & Carousel */}
            <section className="py-24 bg-luxury-light/20 border-t border-luxury-black/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div className="order-2 lg:order-1">
                            <h3 className="text-3xl font-serif text-luxury-black mb-8">Nordic Calm</h3>
                            <div className="space-y-6 text-luxury-gray font-light leading-relaxed">
                                <p>
                                    Elegancia, simpleza, funcionalidad y belleza inmaculada, el estilo Nordic Calm atrapa todas estas percepciones. Propone espacios ordenados, limpios y funcionales.
                                </p>
                                <p>
                                    La paleta de colores que predominan en esta tendencia son los neutros, desde el crudo hasta el blanco más puro, beige, tonos tierra, como así también diferentes tonalidades de madera natural. Si buscás transmitir en tus ambientes, amplitud, sensación de calidez y tranquilidad este es el estilo perfecto.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <div className="bg-white p-4 shadow-xl transition-transform duration-500">
                                <ImageCarousel images={NORDIC_IMAGES} />
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                            <div className="order-1 lg:order-1">
                                <div className="bg-white p-4 shadow-xl transition-transform duration-500">
                                    <ImageCarousel images={INDUSTRIAL_IMAGES} />
                                </div>
                            </div>
                            <div className="order-2 lg:order-2">
                                <h3 className="text-3xl font-serif text-luxury-black mb-8">Industrial Pop</h3>
                                <div className="space-y-6 text-luxury-gray font-light leading-relaxed">
                                    <p>
                                        Ecléctico y atemporal, el estilo Industrial Pop se instala con gran protagonismo en las últimas tendencias de diseño. Es un concepto de ambientación contemporáneo, versátil, descontracturado y funcional.
                                    </p>
                                    <p>
                                        Prevalecen materiales como el hierro, maderas naturales, cemento alisado, ladrillo gris y hormigón. Ambientes integrados o separados con paneles de vidrio repartido o con puertas de madera corredizas con rieles de hierro. Mucho negro, gris, blanco beige y madera para crear un estilo Newyorker.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                            <div className="order-2 lg:order-1">
                                <h3 className="text-3xl font-serif text-luxury-black mb-8">Modern Cool</h3>
                                <div className="space-y-6 text-luxury-gray font-light leading-relaxed">
                                    <p>
                                        Formas simples, líneas rectas y funcionales, materiales como metal, cromo y vidrio, y muebles despojados son la esencia del estilo Modern Cool. Predominan también superficies pulidas, suaves y elegantes, favoreciendo la distribución de las plantas de concepto abierto.
                                    </p>
                                    <p>
                                        Suelen elegirse tonos neutros como el blanco, marrones o tonos grises, así como colores oscuros. Ideal para quienes prefieren habitar un lugar discreto con detalles prácticos y elegantes.
                                    </p>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="bg-white p-4 shadow-xl transition-transform duration-500">
                                    <ImageCarousel images={MODERN_IMAGES} />
                                </div>
                            </div>
                        </div>
                    </div>




                    {/* Centered Quote Block */}
                    <div className="max-w-4xl mx-auto text-center py-20 px-8 relative">
                        <span className="text-6xl text-luxury-gold/20 font-serif absolute top-10 left-0">"</span>
                        <p className="text-2xl md:text-4xl font-serif text-luxury-black leading-tight italic">
                            Crear espacios no es solo construir estructuras, es dar forma a la manera en que vivimos, interactuamos y soñamos.
                        </p>
                        <span className="text-6xl text-luxury-gold/20 font-serif absolute bottom-0 right-0">"</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Filosofia;
