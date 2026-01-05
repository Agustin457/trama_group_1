import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Teams from '../components/TeamSection';
import Oferta from '../components/Oferta';
import Financiacion from '../components/Financiacion';

function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Oferta />
            <Financiacion />
            <Teams />
            

            {/* Call to Action Section */}
            <section className="py-24 bg-luxury-light text-luxury-black text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-serif mb-8">¿Listo para invertir en lo extraordinario?</h2>
                    <Link
                        to="/contact"
                        className="inline-block bg-luxury-black text-white px-10 py-4 text-xs font-bold tracking-widest hover:bg-luxury-gold active:bg-luxury-gold transition-colors duration-300"
                    >
                        CONCERTAR UNA CITA
                    </Link>
                </div>
            </section>
        </>
    );
}

export default Home;
