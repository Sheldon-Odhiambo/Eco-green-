
import React, { useEffect, useRef } from 'react';
import { Service } from '../types';

export const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      title: "Landscaping & Beautification",
      description: "Transforming spaces into green sanctuaries. Professional lawn mowing, garden design, and maintenance.",
      icon: "fa-leaf",
      image: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80&w=1000" 
    },
    {
      title: "Garbage Collection Services",
      description: "Reliable waste management and recycling initiatives for households and local businesses.",
      icon: "fa-trash-can",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Home Cleaning Services",
      description: "Deep cleaning and sanitation with youthful energy and meticulous attention to detail.",
      icon: "fa-broom",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const handleBook = (title: string) => {
    const phone = "254710907876";
    const message = encodeURIComponent(`Hello ECO-GREEN, I would like to book the ${title} team. Please provide more details on how to proceed.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <section id="services" className="py-32 bg-gray-50 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 reveal-on-scroll">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">
            Our <span className="text-shimmer">Excellence</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Professional, reliable services delivered with a modern touch and ECO-GREEN spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="reveal-on-scroll bg-white rounded-[3rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group flex flex-col h-full border border-gray-100"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative h-72 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-10">
                   <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-xl group-hover:rotate-12 transition-transform">
                      <i className={`fas ${service.icon} text-2xl`}></i>
                   </div>
                </div>
              </div>
              <div className="p-12 flex-grow">
                <h3 className="text-2xl font-black text-gray-900 mb-6 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
              <div className="px-12 pb-12">
                <button 
                  onClick={() => handleBook(service.title)}
                  className="w-full py-5 bg-gray-900 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-600/20 active:scale-95 flex items-center justify-center group"
                >
                  Book via WhatsApp
                  <i className="fab fa-whatsapp ml-3 text-lg group-hover:scale-110 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
