
import React, { useEffect, useRef } from 'react';

export const CommunityHeart: React.FC = () => {
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

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="reveal-on-scroll">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              The Heart of Kaloleni
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
              Driven by Youth, <br/>
              <span className="text-blue-600">Defined by Impact.</span>
            </h2>
            <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
              <p>
                ECO-GREEN isn't just a service provider; it's the heartbeat of our youth. Founded in the very streets we now beautify, we represent the transition from "potential" to "power."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-blue-50">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="font-bold text-gray-800">Cleaner Streets</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-blue-50">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="font-bold text-gray-800">Safer Public Hubs</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-blue-50">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="font-bold text-gray-800">Youth Mentorship</span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-white rounded-2xl shadow-sm border border-blue-50">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span className="font-bold text-gray-800">Local Pride</span>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-green-500/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

              <div className="relative p-12 bg-white rounded-[4rem] shadow-2xl border border-gray-100 text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-blue-500"></div>
                
                <i className="fas fa-quote-right text-gray-100 text-9xl absolute top-10 right-10 z-0"></i>
                
                <div className="relative z-10">
                  <blockquote className="text-3xl font-medium text-gray-800 italic leading-snug mb-10">
                    "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has."
                  </blockquote>
                  
                  <div className="w-16 h-1 bg-green-500 mx-auto mb-6"></div>
                  
                  <cite className="not-italic">
                    <div className="font-black text-gray-900 text-xl tracking-tight uppercase">Margaret Mead</div>
                    <div className="text-gray-500 font-bold text-sm tracking-widest mt-1">Cultural Anthropologist</div>
                  </cite>

                  <div className="mt-12 flex items-center justify-center pt-8 border-t border-gray-50">
                    <div className="text-left">
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Presented by</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-white mr-3 font-black text-xs">MZ</div>
                        <div>
                          <div className="font-black text-gray-900">Marty the small town zebra</div>
                          <div className="text-green-600 text-[10px] font-bold uppercase">A youth who grew in Kaloleni</div>
                        </div>
                      </div>
                    </div>
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
