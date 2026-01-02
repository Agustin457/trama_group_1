import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text color logic: 
  // - On Home: White at top, Black on scroll/menu
  // - Other pages: Always Black
  const isDarkText = !isHomePage || isScrolled || isMenuOpen;

  const textColorClass = isDarkText ? 'text-luxury-black' : 'text-white';
  const borderColorClass = isDarkText ? 'border-luxury-black' : 'border-white';
  // Use solid white bg on other pages or when scrolled/menu open on Home
  const bgClass = (!isHomePage || isScrolled || isMenuOpen) ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${bgClass}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/assets/images/logo.avif" alt="Trama Group" className="w-14 h-14 object-contain" />
          <span className={`text-2xl font-sans tracking-[0.2em] font-light ${textColorClass}`}>
            TRAMA GROUP
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-xs font-sans font-medium tracking-widest ${isDarkText ? 'text-luxury-black/80 hover:text-luxury-gold' : 'text-white/80 hover:text-white'} transition-colors duration-300 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] ${isDarkText ? 'after:bg-luxury-gold' : 'after:bg-white'} after:transition-all after:duration-300 hover:after:w-full`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">

          <button
            className={`md:hidden ${textColorClass}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-luxury-black/5 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-8 gap-6 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-serif italic text-luxury-black/80 hover:text-luxury-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;