import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center group" aria-label="Eco-Green Home">
              <img 
                src="logo.png" 
                alt="Eco-Green Youth Group Logo" 
                className="h-12 w-auto mr-3 transition-transform group-hover:scale-110 drop-shadow-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex items-center">
                    <img
                      src="/assets/klogo.png"   // or /images/logo.png
                      alt="Eco-Green Youth Group"
                      className="h-16 w-auto object-contain"
                    />
                    
                    
                  </div>

            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-1 py-2 text-sm font-bold uppercase tracking-widest transition-all group ${
                    isScrolled ? 'text-gray-600 hover:text-green-600' : 'text-white hover:text-green-400'
                  }`}
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full`}></span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-xl transition-colors ${
                isScrolled ? 'text-gray-900 bg-gray-100' : 'text-white bg-white/10'
              } hover:bg-green-500 hover:text-white focus:outline-none`}
              aria-label={isMobileMenuOpen ? "Close main menu" : "Open main menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-[60] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-8 right-8 text-3xl text-gray-400 hover:text-red-500 transition-colors"
          >
            <i className="fas fa-times"></i>
          </button>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-4xl font-black text-gray-900 hover:text-green-600 transition-colors tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8">
             <img src="logo.png" alt="Logo" className="h-16 w-auto opacity-50" />
          </div>
        </div>
      </div>
    </nav>
  );
};