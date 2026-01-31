
import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "254700000000"; // Replace with actual KCBO number
  const message = encodeURIComponent("Hello Kaloleni CBO, I would like to inquire about your services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
          Chat with us on WhatsApp
        </span>
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
        
        <i className="fab fa-whatsapp text-3xl relative z-10"></i>
      </a>
    </div>
  );
};
