import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const HERO_IMAGES = [
  "/assets/images/carousel_hero_1.png",
  "/assets/images/modern_cool_00.avif",
  "/assets/images/nordic_calm_00.avif",
];

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Carousel */}
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={img}
            alt={`Luxury Architecture ${index + 1}`}
            className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
      ))}

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 container mx-auto px-6 h-full flex flex-col justify-center transition-all duration-1000 transform `}
      >
        <div className="max-w-4xl">
          <p className="text-white/80 font-sans tracking-[0.3em] text-sm md:text-base mb-6 uppercase">
            Desarrollos Inmobiliarios
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-8">
            Redefiniendo <br />
            <span className="italic font-light">el Horizonte.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-light max-w-xl leading-relaxed">
            Creamos espacios atemporales donde el diseño visionario se encuentra con un estilo de vida sin precedentes.
          </p>

          <div className="mt-12 flex gap-6">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-black text-white rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              Contactanos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/projects"
              className="px-8 py-4 bg-transparent border border-gray-300 rounded-full font-semibold hover:border-black transition-colors"
            >
              Ver trabajos
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ChevronDown className="w-6 h-6" />
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-10 right-10 flex gap-2 z-20">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
