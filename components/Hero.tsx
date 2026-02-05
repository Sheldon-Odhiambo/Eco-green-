
import React, { useState, useEffect, useCallback } from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=2070',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=2070'
];

const PHRASES = [
  "Sowing seeds of change in Kaloleni.",
  "Your potential is our purpose.",
  "Building a greener, cleaner tomorrow.",
  "Empowering youth through initiative.",
  "Mental health advocacy champions."
];

export const Hero: React.FC = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % IMAGES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIdx];
    const typingSpeed = isDeleting ? 40 : 80;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        if (text.length + 1 === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setPhraseIdx((prev) => (prev + 1) % PHRASES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIdx]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        {IMAGES.map((img, idx) => (
          <div
            key={img}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
              idx === currentImg ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url('${img}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-md">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-emerald-400 text-xs font-black uppercase tracking-[0.2em]">Based in Kaloleni</span>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-none tracking-tighter">
          <span className="block drop-shadow-2xl">ECO-GREEN</span>
          <span className="text-emerald-400 animate-neon inline-block mt-4">YOUTH GROUP</span>
        </h1>
        
        <div className="h-12 mb-16">
          <p className="text-xl md:text-3xl text-gray-200 font-medium drop-shadow-md typewriter-cursor">
            {text}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#services"
            className="px-10 py-5 bg-emerald-600 text-white font-black rounded-2xl hover:bg-emerald-500 transition-all shadow-2xl hover:shadow-emerald-600/20 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center group"
          >
            Explore Services
            <i className="fas fa-arrow-right ml-3 group-hover:translate-x-2 transition-transform"></i>
          </a>
          <a
            href="#about"
            className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white font-black rounded-2xl hover:bg-white hover:text-gray-900 transition-all shadow-xl transform hover:-translate-y-1 active:scale-95"
          >
            Our Mission
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
