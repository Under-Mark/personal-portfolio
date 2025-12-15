import { useState, useEffect } from 'react';
export default function NameDivider(props) {
  const items = [
    'Software Developer',
    'Virtual Assistant',
    'Customer Support',
    'Graphic Design'
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
    <div className="w-full px-8 py-6 overflow-hidden border-orange-500 bg-blue-950 border-y-2">
      <div className="flex items-center justify-center max-w-6xl mx-auto space-x-8 ">
        
        {/* Decorative line */}
        <div className="flex-1 hidden h-px md:block bg-gradient-to-r from-transparent via-orange-500 to-orange-500"></div>
        
        {/* Star decoration */}
        <div className="text-2xl text-orange-500">✦</div>
        
        {/* Animated Text */}
        <div className="min-w-[300px] md:min-w-[450px] text-center">
          <span 
            className={`font-heading text-2xl md:text-3xl font-bold text-orange-500 tracking-wide inline-block transition-all duration-500 ${
              isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {items[currentIndex]}
          </span>
        </div>
        
       
        <div className="text-2xl text-orange-500">✦</div>
        
   
        <div className="flex-1 hidden h-px md:block bg-gradient-to-l from-transparent via-orange-500 to-orange-500"></div>
      </div>
    </div>
  );
}