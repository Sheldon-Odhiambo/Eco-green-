
import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const phone = "254710907876";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent("Hello ECO-GREEN, I'm interested in your services and would like to learn more.")}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl">Message Us</span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
        <i className="fab fa-whatsapp text-3xl relative z-10"></i>
      </a>
    </div>
  );
};
