import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Teams from '../components/TeamSection';
import Oferta from '../components/Oferta';

function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Oferta />
            <Teams />

            {/* Call to Action Section */}
            <section className="py-24 bg-luxury-light text-luxury-black text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif mb-8">¿Listo para invertir en lo extraordinario?</h2>
                    <button className="bg-luxury-black text-white px-10 py-4 text-xs font-bold tracking-widest hover:bg-luxury-gold transition-colors duration-300">
                        CONCERTAR UNA CITA
                    </button>
                </div>
            </section>
        </>
    );
}

export default Home;
