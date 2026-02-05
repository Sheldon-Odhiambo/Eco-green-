
import React, { useState, useEffect, useRef } from 'react';
import { FormData } from '../types';

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    service: 'Landscaping & Beautification',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll('.reveal-on-scroll');
    elements?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const primaryPhone = "0710907876";
  const secondaryPhone = "0723558064";
  const whatsappNumber = "254710907876";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Hello ECO-GREEN, I would like to book ${form.service}. My address is ${form.address}.`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 8000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="reveal-on-scroll">
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 tracking-tighter">
              Get in <span className="text-emerald-600">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              We are available via WhatsApp or phone. Whether you need a quote or have a community inquiry, our team is ready to help.
            </p>

            <div className="space-y-6 mb-12">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center p-8 bg-emerald-50 rounded-[2.5rem] border-2 border-transparent hover:border-emerald-500 hover:shadow-xl transition-all group">
                <div className="bg-emerald-500 text-white p-5 rounded-2xl mr-6 group-hover:rotate-12 transition-transform shadow-lg">
                  <i className="fab fa-whatsapp text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-xl">WhatsApp Booking</h4>
                  <p className="text-emerald-700 font-bold">{primaryPhone}</p>
                </div>
              </a>

              <div className="flex items-start p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-blue-200 transition-colors">
                <div className="bg-blue-600 text-white p-5 rounded-2xl mr-6 shadow-lg">
                  <i className="fas fa-phone-volume text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-black text-gray-900 mb-1">Call Our Team</h4>
                  <p className="text-gray-600 font-bold">{primaryPhone}</p>
                  <p className="text-gray-600 font-bold">{secondaryPhone}</p>
                </div>
              </div>
              
              <div className="flex items-start p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                <div className="bg-purple-600 text-white p-5 rounded-2xl mr-6 shadow-lg">
                  <i className="fas fa-envelope text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-black text-gray-900">Inquiry Email</h4>
                  <p className="text-gray-500 font-medium">hello@kalolenicbo.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll bg-gray-900 p-12 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden text-white transition-all duration-700 [transition-delay:200ms]">
            {submitted && (
              <div className="absolute inset-0 bg-emerald-600 z-30 flex flex-col items-center justify-center p-12 text-center animate-fade-in">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
                  <i className="fas fa-check text-5xl"></i>
                </div>
                <h3 className="text-4xl font-black mb-4 tracking-tighter">Request Sent!</h3>
                <p className="text-lg opacity-90 mb-10">We've received your inquiry and will be in touch shortly.</p>
                <button onClick={() => setSubmitted(false)} className="px-12 py-4 bg-white text-emerald-600 rounded-full font-black uppercase tracking-widest hover:bg-gray-100 transition-all">Done</button>
              </div>
            )}

            <h3 className="text-3xl font-black mb-12 flex items-center gap-4">
              Write to Us
              <span className="w-12 h-1 bg-emerald-500 rounded-full"></span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-gray-500">Name</label>
                  <input id="name" required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="John Doe" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email</label>
                  <input id="email" required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="john@example.com" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-700 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-[10px] font-black uppercase tracking-widest text-gray-500">Service</label>
                <select id="service" value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-all appearance-none cursor-pointer text-white">
                  <option className="bg-gray-900" value="Landscaping & Beautification">Landscaping & Beautification</option>
                  <option className="bg-gray-900" value="Garbage Collection">Garbage Collection</option>
                  <option className="bg-gray-900" value="Home Cleaning">Home Cleaning</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="text-[10px] font-black uppercase tracking-widest text-gray-500">Address/Location</label>
                <input id="address" required type="text" value={form.address} onChange={e => setForm({...form, address: e.target.value})} placeholder="Area in Kaloleni" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-700 text-white" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-gray-500">Message</label>
                <textarea id="message" rows={3} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Any specific requirements?" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-700 resize-none text-white"></textarea>
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-5 bg-emerald-600 text-white font-black uppercase tracking-widest rounded-xl hover:bg-emerald-500 transition-all shadow-xl active:scale-95 flex items-center justify-center">
                {isSubmitting ? <i className="fas fa-circle-notch fa-spin"></i> : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
