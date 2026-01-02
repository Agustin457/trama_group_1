import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#1c3225] text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">

          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 border border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-sans tracking-[0.2em] font-light">
                TRAMA GROUP
              </span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-sm">
              Desarrollando el futuro del real estate de lujo en América Latina. Excelencia, innovación y diseño atemporal.
            </p>
          </div>

          {/* Navigation & Offices */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12 pt-2">
            {/* Navigation links */}
            <div>
              <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">{t('footer.nav_title', 'Navegar')}</h3>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home', 'Inicio')}</Link></li>
                <li><Link to="/nosotros" className="hover:text-white transition-colors">{t('nav.about', 'Nosotros')}</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">{t('nav.work', 'Proyectos')}</Link></li>
                <li><Link to="/filosofia" className="hover:text-white transition-colors">{t('nav.philosophy', 'Filosofía')}</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact', 'Contacto')}</Link></li>
              </ul>
            </div>

            {/* Offices */}
            <div>
              <h4 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-8">OFICINAS</h4>
              <ul className="space-y-6">
                <li>
                  <p className="text-white text-sm mb-1">Buenos Aires</p>
                  <p className="text-neutral-500 text-sm">Av. Alvear 1890, Recoleta</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-neutral-600 text-xs tracking-wider">
              © 2024 Trama Group. TODOS LOS DERECHOS RESERVADOS.
            </p>

            <div className="flex gap-6">
              <a href="https://www.instagram.com/grupo.trama/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="https://www.linkedin.com/company/trama-group/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="https://www.facebook.com/tramagroup/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="https://twitter.com/tramagroup" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
