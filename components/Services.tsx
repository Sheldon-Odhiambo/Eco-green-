import React, { useEffect, useRef } from 'react';
import { Service } from '../types';

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services: Service[] = [
    {
      title: "Landscaping & Beautification",
      description: "Transforming public and private spaces into green sanctuaries. We handle professional lawn mowing, garden design, and environment maintenance.",
      icon: "fa-leaf",
      image: "https://images.unsplash.com/photo-1557429287-b2e26467fc2b?auto=format&fit=crop&q=80&w=1000" 
    },
    {
      title: "Garbage Collection Services",
      description: "Keeping Kaloleni clean and healthy. Scheduled reliable waste management and recycling initiatives for households and businesses.",
      icon: "fa-trash-alt",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Home Cleaning Services",
      description: "Professional cleaning for your sanctuary. We provide deep cleaning, organizing, and sanitation services with a youthful energy and attention to detail.",
      icon: "fa-broom",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const handleBookClick = (serviceTitle: string) => {
    // Scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Small delay to wait for scroll then focus the address field
      setTimeout(() => {
        const addressField = document.getElementById('address') as HTMLInputElement;
        if (addressField) addressField.focus();
        
        // Optionally update the select field in the form
        const serviceSelect = document.getElementById('service') as HTMLSelectElement;
        if (serviceSelect) {
          // Find closest matching option
          const options = Array.from(serviceSelect.options);
          const match = options.find(opt => opt.text.toLowerCase().includes(serviceTitle.split(' ')[0].toLowerCase()));
          if (match) serviceSelect.value = match.value;
        }
      }, 800);
    }
  };

  return (
    <section className="py-24 bg-gray-50" aria-labelledby="services-heading" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 reveal-on-scroll">
          <h2 id="services-heading" className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-shimmer">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Supporting our youth by providing professional, reliable services to the community with a modern touch and ECO-GREEN spirit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="reveal-on-scroll bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group flex flex-col h-full service-icon-hover"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {service.title.includes("Cleaning") && (
                  <div className="absolute top-4 right-4 z-20">
                    <img 
                      src="cleaning-logo.png" 
                      alt="Cleaning Service Branding" 
                      className="w-16 h-16 object-contain bg-white/90 p-2 rounded-full shadow-lg border border-blue-100 animate-pulse-soft"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                  <div className="bg-white p-4 rounded-2xl shadow-xl transform transition-transform group-hover:rotate-12 group-hover:scale-110" aria-hidden="true">
                    <i className={`fas ${service.icon} text-blue-600 text-2xl`}></i>
                  </div>
                </div>
              </div>
              <div className="p-10 flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-shimmer transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
              <div className="px-10 pb-10">
                <button 
                  onClick={() => handleBookClick(service.title)}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-green-500 transition-all duration-300 group/btn shadow-md hover:shadow-xl"
                  aria-label={`Book our ${service.title} team`}
                >
                  Book Team
                  <i className="fas fa-arrow-right ml-3 text-sm group-hover/btn:translate-x-2 transition-transform" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};