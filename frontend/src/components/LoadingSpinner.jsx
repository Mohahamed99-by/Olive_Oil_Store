import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-16 h-16 rounded-full border-4 border-green-100 border-t-green-600 animate-spin"></div>
        
        {/* Inner circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-10 h-10 rounded-full border-4 border-green-50 border-t-green-400 animate-spin 
                      [animation-delay:-0.2s]"></div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      w-2 h-2 bg-green-600 rounded-full"></div>
        
        {/* Loading text */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                      text-green-600 font-bold text-sm font-arabic">
          جاري التحميل...
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
