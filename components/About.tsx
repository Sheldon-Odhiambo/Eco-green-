import React, { useEffect, useRef } from 'react';

export const About: React.FC = () => {
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

  const goals = [
    { id: 1, title: 'Youth Employment', description: 'Creating direct job opportunities within our community initiatives.', icon: 'fa-briefcase' },
    { id: 2, title: 'Local Capacity', description: 'Training and mentoring youth to take up leadership and technical roles.', icon: 'fa-users-cog' },
    { id: 3, title: 'Mental Health', description: 'Advocating for well-being and rehabilitation as mental health champions.', icon: 'fa-heartbeat' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="about-heading" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 id="about-heading" className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our <span className="text-green-600 font-black">Story</span>
          </h2>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            ECO-GREEN Youth Group is more than just a CBO; we are a movement dedicated to the restoration of our community and the empowerment of its people.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Text Content Column */}
          <div className="space-y-12">
            <div className="reveal-on-scroll">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-eye text-green-600 mr-4"></i> Vision
              </h3>
              <p className="text-2xl text-gray-700 italic border-l-8 border-green-600 pl-8 leading-relaxed bg-green-50/50 py-8 rounded-r-[2.5rem] transform hover:scale-[1.02] transition-transform duration-300 shadow-sm">
                "To provide a proper <span className="font-bold text-green-800 underline decoration-green-300">empowerment hub</span> full of possibilities and growth for the youthful demographic."
              </p>
            </div>

            <div className="reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="fas fa-bullseye text-blue-600 mr-4"></i> Mission
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-500">
                To provide and uncover <span className="text-green-700 font-semibold underline decoration-green-400 decoration-2">endless opportunities</span> to harness the ever present youthful potential.
              </p>
            </div>

            <div className="reveal-on-scroll bg-gray-900 p-10 rounded-[3rem] shadow-2xl border border-gray-800 group" style={{ transitionDelay: '0.4s' }}>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                Core Objectives
                <i className="fas fa-star ml-3 text-yellow-400 animate-pulse"></i>
              </h3>
              <div className="space-y-8" role="list">
                {goals.map((goal) => (
                  <div key={goal.id} className="flex items-start group/item" role="listitem">
                    <div className="bg-white/10 p-4 rounded-2xl mr-6 shadow-sm group-hover/item:bg-green-600 group-hover/item:text-white transition-all duration-300 transform group-hover/item:rotate-12" aria-hidden="true">
                      <i className={`fas ${goal.icon} text-green-400 group-hover/item:text-white text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover/item:text-green-400 transition-colors">{goal.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Visual Column - Insightful Images */}
          <div className="space-y-8 h-full">
            <div className="reveal-on-scroll relative group rounded-[3rem] overflow-hidden shadow-2xl min-h-[500px]" style={{ transitionDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
                alt="Youth working together" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=1200';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
                <div className="bg-green-500 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full w-fit mb-4">The Future is Green</div>
                <h4 className="text-white font-extrabold text-4xl leading-tight">Insightful Growth for a Cleaner Kaloleni.</h4>
                <p className="text-gray-300 mt-4 text-lg">Every plant we put in the ground represents a youth employed and a community beautified.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 reveal-on-scroll" style={{ transitionDelay: '0.5s' }}>
              <div className="relative group rounded-[2rem] overflow-hidden shadow-xl h-48 border-4 border-white bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80&w=600" 
                  alt="Landscaping work" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-green-600/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-white font-black uppercase tracking-widest text-sm text-center px-2">Beautification Hub</p>
                </div>
              </div>
              <div className="relative group rounded-[2rem] overflow-hidden shadow-xl h-48 border-4 border-white bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=600" 
                  alt="Community Meeting" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-blue-600/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <p className="text-white font-black uppercase tracking-widest text-sm text-center px-2">Stronger Together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};