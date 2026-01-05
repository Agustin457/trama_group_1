import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Financiacion: React.FC = () => {
  return (
    <section>
      <div className="bg-white">
        <div className="bg-[#cbcb0a] text-white py-20 px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Consulta por nuestras opciones de financiacion</h1>
            <Link
              to="/contact"
              className="inline-block bg-luxury-black text-white px-10 py-4 text-xs font-bold tracking-widest hover:bg-luxury-gold active:bg-luxury-gold transition-colors duration-300">
              CONTACTANOS PARA MAS INFORMACION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financiacion;