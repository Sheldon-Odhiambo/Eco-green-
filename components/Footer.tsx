
import React, { useState, useEffect } from 'react';

const FOOTER_IMAGES = [
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=2072',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80&w=2071',
  'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&q=80&w=2070'
];

export const Footer: React.FC = () => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setImgIdx((p) => (p + 1) % FOOTER_IMAGES.length), 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="relative text-white py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {FOOTER_IMAGES.map((img, idx) => (
          <div 
            key={img} 
            className={`absolute inset-0 bg-cover bg-center bg-fixed transition-opacity duration-[3000ms] ${idx === imgIdx ? 'opacity-100' : 'opacity-0'}`} 
            style={{ backgroundImage: `url('${img}')` }} 
          />
        ))}
        <div className="absolute inset-0 bg-gray-900/95 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
               <img 
                src="/assets/klogo.png" 
                alt="Eco-Green Logo" 
                className="h-16 w-auto mr-4 brightness-110"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
               <h3 className="text-4xl font-black tracking-tighter">ECO-GREEN</h3>
            </div>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-10">
              Empowering youth through employment, capacity building, and mental health advocacy. Together, we are the pulse of Kaloleni.
            </p>
            <div className="flex gap-4">
              {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((social) => (
                <a key={social} href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-all group">
                   <i className={`fab fa-${social} text-xl group-hover:scale-110 transition-transform`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-emerald-500 mb-8">Navigation</h4>
            <ul className="space-y-5 text-gray-400 font-bold">
              <li><a href="#home" className="hover:text-white transition-colors flex items-center gap-3"><i className="fas fa-chevron-right text-[10px] text-emerald-500"></i> Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors flex items-center gap-3"><i className="fas fa-chevron-right text-[10px] text-emerald-500"></i> About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors flex items-center gap-3"><i className="fas fa-chevron-right text-[10px] text-emerald-500"></i> Services</a></li>
              <li><a href="#impact" className="hover:text-white transition-colors flex items-center gap-3"><i className="fas fa-chevron-right text-[10px] text-emerald-500"></i> Our Impact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase tracking-widest text-emerald-500 mb-8">Newsletter</h4>
            <p className="text-gray-400 mb-8">Join our community mailing list for the latest updates.</p>
            <div className="flex">
               <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-l-2xl px-6 py-4 w-full focus:outline-none focus:border-emerald-500 transition-all" />
               <button className="bg-emerald-600 px-6 py-4 rounded-r-2xl hover:bg-emerald-500 transition-colors"><i className="fas fa-paper-plane"></i></button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-bold">
          <p>© {new Date().getFullYear()} ECO-GREEN Youth Group. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-6 md:mt-0">
             <span>Created with</span>
             <i className="fas fa-heart text-red-500 animate-pulse"></i>
             <span>for Kaloleni</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
