
import React, { useState, useEffect } from 'react';

const FOOTER_IMAGES = [
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=2072', // African landscape
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=2071', // African nature
  'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80&w=2070'  // Sunset landscape
];

export const Footer: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % FOOTER_IMAGES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative text-white py-16 overflow-hidden" aria-label="Site footer">
      {/* Fixed Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {FOOTER_IMAGES.map((image, index) => (
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
            aria-label={`Footer background scene ${index + 1}`}
          />
        ))}
        {/* Deep dark overlay to ensure readability */}
        <div className="absolute inset-0 bg-gray-900/95 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/assets/klogo.png" 
                alt="Eco-Green Logo" 
                className="h-16 w-auto mr-4 brightness-110"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <h3 className="text-3xl font-bold text-green-400 drop-shadow-sm">Eco Green </h3>
            </div>
            <p className="text-gray-300 max-w-sm mb-8 leading-relaxed text-lg">
              Empowering youth through employment, capacity building, and mental health advocacy. Under the <span className="text-green-400 font-semibold">Eco-Green Youth Group</span> banner.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: 'fa-facebook-f', href: 'https://facebook.com/kalolenicbo', color: 'hover:bg-blue-600', label: 'Facebook' },
                { icon: 'fa-twitter', href: 'https://twitter.com/kalolenicbo', color: 'hover:bg-blue-400', label: 'Twitter' },
                { icon: 'fa-instagram', href: 'https://instagram.com/kalolenicbo', color: 'hover:bg-pink-600', label: 'Instagram' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`} 
                  aria-label={`Follow us on ${social.label}`}
                >
                  <i className={`fab ${social.icon} text-xl`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
          
          <div aria-label="Footer navigation">
            <h4 className="text-xl font-bold mb-6 border-b border-green-500/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#home" className="hover:text-green-400 transition-colors flex items-center" aria-label="Go to Home section"><i className="fas fa-chevron-right text-[10px] mr-2 text-green-500"></i> Home</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors flex items-center" aria-label="Go to About section"><i className="fas fa-chevron-right text-[10px] mr-2 text-green-500"></i> Our Vision</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors flex items-center" aria-label="Go to Services section"><i className="fas fa-chevron-right text-[10px] mr-2 text-green-500"></i> Services</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors flex items-center" aria-label="Go to Contact section"><i className="fas fa-chevron-right text-[10px] mr-2 text-green-500"></i> Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-green-500/30 pb-2 inline-block">Support Us</h4>
            <p className="text-gray-300 mb-6">Subscribe for updates on our latest youth initiatives.</p>
            <div className="flex">
              <label htmlFor="footer-newsletter" className="sr-only">Email Address for Newsletter</label>
              <input 
                id="footer-newsletter"
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-l-xl px-4 py-3 w-full focus:ring-2 focus:ring-green-500 outline-none placeholder:text-gray-500"
                aria-label="Enter your email to subscribe"
              />
              <button 
                className="bg-green-600 px-6 py-3 rounded-r-xl hover:bg-green-700 transition-colors flex items-center justify-center"
                aria-label="Subscribe to newsletter"
              >
                <i className="fas fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Kaloleni Community Based Organisation. Empowering Dreams.</p>
          <div className="flex items-center space-x-1 italic font-medium text-gray-300">
            <span>made with</span> 
            <i className="fas fa-heart text-red-500 animate-pulse mx-1" aria-hidden="true"></i> 
            <span>by</span> 
            <span className="text-white font-bold ml-1 hover:text-green-400 transition-colors cursor-default">Sheldon Ouma </span>
            <span className="text-[10px] text-gray-500 uppercase font-black ml-2 tracking-tighter"> </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
