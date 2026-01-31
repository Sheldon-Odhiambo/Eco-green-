import React, { useEffect, useRef } from 'react';

export const Impact: React.FC = () => {
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

  const stats = [
    { label: 'Youth Employed', value: '50+', icon: 'fa-user-graduate', color: 'text-green-600' },
    { label: 'Trees Planted', value: '1,200', icon: 'fa-tree', color: 'text-emerald-600' },
    { label: 'Areas Cleaned', value: '85', icon: 'fa-broom', color: 'text-blue-600' },
    { label: 'Mental Health Sessions', value: '200+', icon: 'fa-heart', color: 'text-purple-600' },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal-on-scroll">
            <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              Our Track Record
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Real Impact for <br/>
              <span className="text-green-600">Real People.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              Insight is the ability to see the potential in what others consider waste. At ECO-GREEN, we don't just clean streets; we build careers and nurture the mental resilience of our youth.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className={`${stat.color} mb-4 text-2xl group-hover:scale-110 transition-transform`}>
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="relative p-12 bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl group">
              {/* Background accent */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-all"></div>
              
              <div className="relative z-10">
                <i className="fas fa-quote-left text-green-500 text-5xl mb-8 opacity-50"></i>
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-100 italic leading-snug mb-8">
                  "The youth demographic is often seen as a challenge to be solved, but we see them as the solution to be harnessed. Kaloleni is growing because we dared to believe in the potential of our own hands."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center font-black text-white mr-4 shadow-lg border-2 border-white/20">
                    MZ
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Marty the small town zebra</div>
                    <div className="text-green-400 text-sm italic font-bold tracking-tight">a youth who grew in kaloleni</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};