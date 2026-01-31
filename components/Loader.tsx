import React from 'react';

export const Loader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div className={`loader-container ${!isLoading ? 'loader-hidden' : ''}`} aria-hidden={!isLoading}>
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer spinning ring */}
        <div className="absolute w-40 h-40 border-4 border-blue-50 border-t-green-500 rounded-full animate-spin"></div>
        
        {/* Middle pulsing ring */}
        <div className="absolute w-32 h-32 bg-green-50 rounded-full animate-pulse-soft"></div>
        
        {/* Central Logo */}
        <div className="relative z-10">
          <img 
            src="logo.png" 
            alt="Eco-Green Logo" 
            className="w-20 h-20 object-contain animate-float"
            onError={(e) => {
              // Fallback icon if logo isn't loaded
              e.currentTarget.style.display = 'none';
              const icon = document.createElement('i');
              icon.className = 'fas fa-leaf text-green-500 text-4xl';
              e.currentTarget.parentElement?.appendChild(icon);
            }}
          />
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 tracking-widest uppercase">
          Kaloleni <span className="text-green-600">CBO</span>
        </h2>
        <div className="mt-2 flex items-center justify-center space-x-1">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce animation-delay-400"></div>
        </div>
        <p className="mt-4 text-gray-500 text-sm font-medium italic">Eco-Green Youth Group</p>
      </div>
    </div>
  );
};