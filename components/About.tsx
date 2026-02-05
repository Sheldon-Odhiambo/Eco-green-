
import React, { useEffect, useRef } from 'react';
import { Goal } from '../types';

export const About: React.FC = () => {
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

  const goals: Goal[] = [
    { id: 1, title: 'Youth Employment', description: 'Direct job creation through community-led beautification projects.', icon: 'fa-briefcase' },
    { id: 2, title: 'Local Capacity', description: 'Mentoring youth for leadership roles in technical and environmental sectors.', icon: 'fa-users-gear' },
    { id: 3, title: 'Mental Health', description: 'Champions of rehabilitation and well-being within our community.', icon: 'fa-heart-pulse' },
  ];

  return (
    <section id="about" className="py-32 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 reveal-on-scroll">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter">
            Our <span className="text-emerald-600">Story</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            More than a CBO; we are a movement dedicated to the restoration of Kaloleni and the empowerment of its people.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-16">
            <div className="reveal-on-scroll">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                    <i className="fas fa-eye text-xl"></i>
                 </div>
                 <h3 className="text-3xl font-bold text-gray-900">Vision</h3>
              </div>
              <p className="text-2xl text-gray-700 italic border-l-8 border-emerald-500 pl-8 leading-relaxed bg-emerald-50/50 py-10 rounded-r-[3rem] shadow-sm transform hover:scale-[1.01] transition-transform">
                "To provide a proper <span className="font-bold text-emerald-800 underline decoration-emerald-300">empowerment hub</span> full of possibilities for the youthful demographic."
              </p>
            </div>

            <div className="reveal-on-scroll [transition-delay:200ms]">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                    <i className="fas fa-bullseye text-xl"></i>
                 </div>
                 <h3 className="text-3xl font-bold text-gray-900">Mission</h3>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed bg-gray-50 p-8 rounded-[2.5rem] border-l-4 border-blue-500">
                To uncover <span className="text-emerald-700 font-semibold underline decoration-emerald-400">endless opportunities</span> that harness the ever-present potential of our youth.
              </p>
            </div>

            <div className="reveal-on-scroll bg-gray-900 p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden [transition-delay:400ms]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
              <h3 className="text-3xl font-bold text-white mb-10">Core Objectives</h3>
              <div className="space-y-10">
                {goals.map((goal) => (
                  <div key={goal.id} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                      <i className={`fas ${goal.icon} text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{goal.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="reveal-on-scroll relative group rounded-[4rem] overflow-hidden shadow-2xl [transition-delay:300ms]">
               <img 
                 src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200" 
                 alt="Community unity" 
                 className="w-full h-[650px] object-cover transition-transform duration-1000 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-16">
                 <div className="bg-emerald-500 text-white text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1 rounded-full w-fit mb-6">The Future is Green</div>
                 <h4 className="text-white font-black text-5xl leading-tight mb-6">Growth for a Cleaner Kaloleni.</h4>
                 <p className="text-gray-300 text-lg leading-relaxed">Each initiative we start is a seed of prosperity for our community's future.</p>
               </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl reveal-on-scroll [transition-delay:600ms] hidden lg:block border border-gray-100">
                <div className="flex items-center gap-4">
                   <div className="text-4xl font-black text-emerald-600">10+</div>
                   <div className="text-xs font-bold uppercase tracking-widest text-gray-500">Years of<br/>Impact</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
