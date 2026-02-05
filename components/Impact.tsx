
import React, { useEffect, useRef } from 'react';
import { Stat } from '../types';

export const Impact: React.FC = () => {
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

  const stats: Stat[] = [
    { label: 'Youth Employed', value: '50+', icon: 'fa-user-graduate', color: 'text-emerald-600' },
    { label: 'Trees Planted', value: '1,200', icon: 'fa-tree', color: 'text-emerald-600' },
    { label: 'Areas Cleaned', value: '85+', icon: 'fa-broom', color: 'text-blue-600' },
    { label: 'Health Sessions', value: '200+', icon: 'fa-heart-pulse', color: 'text-purple-600' },
  ];

  return (
    <section id="impact" className="py-32 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-on-scroll">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest mb-8">
              Track Record
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 tracking-tighter leading-none">
              Real Impact for <br/>
              <span className="text-emerald-600">Real People.</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              At ECO-GREEN, we don't just clean streets; we build careers and nurture the mental resilience of our youth.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all group">
                  <div className={`${stat.color} mb-6 text-3xl group-hover:scale-110 transition-transform`}>
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-on-scroll [transition-delay:300ms]">
            <div className="relative p-16 bg-gray-900 rounded-[4rem] overflow-hidden shadow-2xl group">
              <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all" />
              <div className="relative z-10">
                <i className="fas fa-quote-left text-emerald-500 text-6xl mb-12 opacity-30"></i>
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-100 italic leading-snug mb-12">
                  "The youth demographic is often seen as a challenge, but we see them as the solution. Kaloleni is growing because we dared to believe in the potential of our own hands."
                </blockquote>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center font-black text-white text-xl shadow-xl border-4 border-white/10">
                    MZ
                  </div>
                  <div>
                    <div className="font-bold text-white text-xl">Marty the small town zebra</div>
                    <div className="text-emerald-400 text-sm font-black uppercase tracking-widest">Kaloleni Youth Representative</div>
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
