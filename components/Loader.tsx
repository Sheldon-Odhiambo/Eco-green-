
import React from 'react';

interface LoaderProps {
  isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div className={`loader-container ${!isLoading ? 'loader-hidden' : ''}`} aria-hidden={!isLoading}>
      <div className="relative flex items-center justify-center mb-8">
        <div className="absolute w-40 h-40 border-4 border-emerald-50 border-t-emerald-500 rounded-full animate-spin"></div>
        <div className="absolute w-32 h-32 bg-emerald-50 rounded-full animate-pulse-soft"></div>
        <div className="relative z-10 flex items-center justify-center">
          <img 
            src="/assets/klogo.png" 
            alt="Eco-Green Logo" 
            className="w-20 h-20 object-contain animate-float"/>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-xl font-black text-gray-900 tracking-[0.3em] uppercase">
          ECO-GREEN
        </h2>
        <div className="mt-4 flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-emerald-600 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce [animation-delay:200ms]"></div>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:400ms]"></div>
        </div>
        <p className="mt-6 text-gray-400 text-xs font-bold uppercase tracking-widest">Empowering Kaloleni Youth</p>
      </div>
    </div>
  );
};
