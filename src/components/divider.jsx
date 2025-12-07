import { useState, useEffect } from 'react';

export default function NameDivider() {
  const items = [
    'Mark Christopher B. Sarmiento',
    'Virtual Assistant'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [items.length]);
  
  return (
    <div className="w-full bg-blue-950 border-y-2 border-orange-500 py-6 px-8 overflow-hidden my-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center space-x-8 ">
        
        {/* Decorative line */}
        <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-transparent via-orange-500 to-orange-500"></div>
        
        {/* Star decoration */}
        <div className="text-orange-500 text-2xl">✦</div>
        
        {/* Animated Text */}
        <div className="min-w-[300px] md:min-w-[450px] text-center">
          <span 
            className={`font-heading text-2xl md:text-3xl font-bold ${
              currentIndex === 0 ? 'text-white' : 'text-orange-400'
            } tracking-wide inline-block transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {items[currentIndex]}
          </span>
        </div>
        
       
        <div className="text-orange-500 text-2xl">✦</div>
        
   
        <div className="hidden md:block flex-1 h-px bg-gradient-to-l from-transparent via-orange-500 to-orange-500"></div>
      </div>
    </div>
  );
}