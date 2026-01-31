import React, { useState, useEffect, useCallback, useRef } from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=2070', // People planting - growth & action
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070', // Youth collaboration & unity
  'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=2070', // Seedling in hands - potential & care
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=2070'  // Lush community garden - results of beautification
];

const TYPEWRITER_PHRASES = [
  "Sowing seeds of change in Kaloleni.",
  "Your potential is our purpose.",
  "Building a greener, cleaner tomorrow.",
  "Empowering youth through hard work.",
  "Mental health & rehabilitation champions."
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  
  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  // Parallax Effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 60;
    const y = (clientY - innerHeight / 2) / 60;
    setParallax({ x, y });
  };

  // Typewriter Effect
  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[phraseIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(phrase.substring(0, displayText.length + 1));
        if (displayText.length + 1 === phrase.length) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setDisplayText(phrase.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div 
      className="relative h-screen flex items-center justify-center overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {IMAGES.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2500ms] ease-in-out bg-fixed ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url('${image}')`,
              backgroundAttachment: 'fixed'
            }}
            role="img"
            aria-label={`Insightful community and empowerment scene ${index + 1}`}
          />
        ))}
        {/* Darkening overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-black/90 z-10"></div>
      </div>

      {/* Main Content */}
      <div 
        className="relative z-20 text-center px-4 max-w-5xl mx-auto pointer-events-none parallax-text"
        style={{ transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)` }}
      >
        <div className="mb-4 animate-fade-in-up">
           <span className="px-4 py-1.5 bg-green-500/20 border border-green-500/50 text-green-400 rounded-full text-sm font-bold uppercase tracking-widest backdrop-blur-sm">
             Insightful Empowerment
           </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
          <span className="block animate-fade-in-up">ECO-GREEN</span>
          <span className="text-green-400 animate-neon inline-block mt-2">Youth Group</span>
        </h1>
        
        <div className="h-16 mb-12 flex justify-center items-center">
          <p className="text-2xl md:text-4xl text-gray-200 font-light drop-shadow-lg typewriter-cursor">
            {displayText}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-400 pointer-events-auto">
          <a
            href="#about"
            className="px-12 py-5 bg-white text-gray-900 font-black rounded-full hover:bg-green-500 hover:text-white transition-all shadow-2xl transform hover:scale-105 active:scale-95 flex items-center group/btn"
          >
            Our Mission
            <i className="fas fa-arrow-right ml-3 group-hover/btn:translate-x-2 transition-transform"></i>
          </a>
          <a
            href="#contact"
            className="px-12 py-5 bg-green-600/20 backdrop-blur-md text-white font-black rounded-full hover:bg-green-600 transition-all shadow-xl transform hover:scale-105 active:scale-95 border-2 border-green-500/50"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Manual Controls */}
      <button onClick={prevSlide} className="absolute left-8 z-30 p-4 text-white/50 hover:text-green-400 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hidden md:block" aria-label="Previous slide"><i className="fas fa-chevron-left text-4xl"></i></button>
      <button onClick={nextSlide} className="absolute right-8 z-30 p-4 text-white/50 hover:text-green-400 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 hidden md:block" aria-label="Next slide"><i className="fas fa-chevron-right text-4xl"></i></button>

      {/* Navigation Dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30 flex space-x-4">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-1 transition-all duration-500 rounded-full ${index === currentImageIndex ? 'bg-green-400 w-12' : 'bg-white/30 w-6 hover:bg-white'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Subtext info */}
      <div className="absolute bottom-6 left-8 z-20 text-white/40 text-xs font-medium tracking-tighter uppercase hidden lg:block">
        Kaloleni Community Based Organisation &copy; 2024
      </div>
    </div>
  );
};