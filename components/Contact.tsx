import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Cleaning',
    address: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const phoneNumber = "254700000000";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello ECO-GREEN Youth Group, I would like to book your " + formData.service + " team. My address is: " + formData.address)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', service: 'Cleaning', address: '', message: '' });
      }, 7000);
    }, 1500);
  };

  return (
    <section className="py-24 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="reveal-on-scroll">
            <h2 id="contact-heading" className="text-5xl font-black text-gray-900 mb-8 tracking-tighter">
              Book Our <span className="text-green-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Ready to transform your space? Fill out the form with your <span className="font-bold text-gray-900">address and contact details</span>. Our ECO-GREEN team will reach out to you via your provided address to schedule the work.
            </p>

            <div className="space-y-6 mb-10">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-gray-50 rounded-[2rem] border-2 border-green-50 hover:border-green-500 hover:shadow-xl transition-all group"
                aria-label="Send us an instant message on WhatsApp"
              >
                <div className="bg-green-500 text-white p-4 rounded-2xl mr-4 group-hover:rotate-12 transition-transform shadow-lg" aria-hidden="true">
                  <i className="fab fa-whatsapp text-3xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Instant Booking via WhatsApp</h4>
                  <p className="text-gray-600 text-sm">The fastest way to get our team to your door.</p>
                </div>
              </a>

              <div className="flex items-start p-6 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-sm">
                <div className="bg-blue-600 text-white p-4 rounded-2xl mr-6 shadow-lg" aria-hidden="true">
                  <i className="fas fa-map-marker-alt text-2xl w-6 text-center"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Physical Location</h4>
                  <p className="text-gray-600">Kaloleni Community Center, Kaloleni C HUB, Nairobi</p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-gray-50 rounded-[2rem] border border-gray-100 shadow-sm">
                <div className="bg-purple-600 text-white p-4 rounded-2xl mr-6 shadow-lg" aria-hidden="true">
                  <i className="fas fa-envelope text-2xl w-6 text-center"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Inquiry Email</h4>
                  <p className="text-gray-600">marty.zebra@kalolenicbo.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal-on-scroll bg-gray-900 p-10 md:p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-white" style={{ transitionDelay: '0.2s' }}>
            {submitted && (
              <div 
                className="absolute inset-0 bg-green-600 z-30 flex flex-col items-center justify-center text-white p-12 text-center animate-fade-in-up"
                role="alert"
                aria-live="polite"
              >
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-8 animate-bounce">
                  <i className="fas fa-check text-5xl" aria-hidden="true"></i>
                </div>
                <h3 className="text-4xl font-black mb-4 tracking-tighter">Booking Received!</h3>
                <p className="text-xl opacity-90 mb-8">Thank you, {formData.name}. We have noted your address at <span className="font-bold underline">{formData.address}</span> and will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-10 py-4 bg-white text-green-600 rounded-full font-black uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl"
                >
                  Done
                </button>
              </div>
            )}

            <h3 className="text-3xl font-black mb-8 tracking-tight flex items-center">
              Request Service
              <span className="ml-4 w-12 h-1 bg-green-500 rounded-full"></span>
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Full Name</label>
                  <input 
                    id="name"
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all text-white placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Contact Email</label>
                  <input 
                    id="email"
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    placeholder="name@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all text-white placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Service Required</label>
                <select 
                  id="service"
                  value={formData.service}
                  onChange={e => setFormData({...formData, service: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:border-green-500 outline-none transition-all text-white appearance-none cursor-pointer"
                >
                  <option className="bg-gray-900">Landscaping & Beautification</option>
                  <option className="bg-gray-900">Garbage Collection</option>
                  <option className="bg-gray-900">Home Cleaning</option>
                  <option className="bg-gray-900">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Physical Address</label>
                <input 
                  id="address"
                  type="text" 
                  required
                  value={formData.address}
                  onChange={e => setFormData({...formData, address: e.target.value})}
                  placeholder="Street, Estate or Landmark"
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:border-green-500 outline-none transition-all text-white placeholder:text-gray-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={2}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="Special instructions..."
                  className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 focus:border-green-500 outline-none transition-all text-white placeholder:text-gray-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-green-600 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-green-500 transition-all shadow-xl hover:shadow-green-500/20 flex items-center justify-center transform active:scale-95"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-circle-notch fa-spin mr-3 text-xl"></i> Processing...
                  </>
                ) : (
                  'Confirm Booking'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};