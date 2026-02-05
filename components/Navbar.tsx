
import React, { useState, useEffect } from 'react';
import { NavLink } from '../types';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[60] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="flex items-center">
                    <img
                      src="/assets/klogo.png"   // or /images/logo.png
                      alt="Eco-Green Youth Group"
                      className="h-16 w-auto object-contain"
                    />
                  </div>
              <div className="flex flex-col">
                <span className={`text-xl font-black leading-none tracking-tight transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                  ECO-GREEN
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500">Youth Group</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all group relative ${
                    isScrolled ? 'text-gray-600 hover:text-emerald-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-4"></span>
                </a>
              ))}
              <a 
                href="#contact" 
                className="ml-4 px-6 py-2.5 bg-emerald-600 text-white text-sm font-black uppercase tracking-widest rounded-full hover:bg-emerald-500 shadow-lg hover:shadow-emerald-500/20 transition-all transform active:scale-95"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-2xl transition-all ${
                isScrolled ? 'bg-gray-100 text-gray-900' : 'bg-white/10 text-white backdrop-blur-md'
              }`}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars-staggered'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-[70] transition-all duration-700 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-12">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors"
          >
            <i className="fas fa-times text-2xl"></i>
          </button>
          
          <div className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-4xl font-black text-gray-900 hover:text-emerald-600 transition-colors tracking-tighter"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-12 border-t border-gray-100 w-2/3 flex flex-col items-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-6 text-center">Contact Us</p>
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center"><i className="fab fa-whatsapp text-xl"></i></a>
              <a href="#" className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center"><i className="fab fa-facebook-f text-xl"></i></a>
              <a href="#" className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center"><i className="fab fa-instagram text-xl"></i></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
