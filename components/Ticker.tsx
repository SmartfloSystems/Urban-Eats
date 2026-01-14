import React from 'react';

const Ticker: React.FC = () => {
  const text = "Fresh Ingredients Delivered Daily • Local Sourcing • Urban Flavors • Craft Spirits • Live Beats • Fresh Ingredients Delivered Daily • Local Sourcing • Urban Flavors • Craft Spirits • Live Beats";
  
  return (
    <div className="bg-primary py-6 border-y-4 border-background-dark ticker-wrap relative z-20 overflow-hidden">
      <div className="ticker-content flex items-center gap-12">
        <p className="text-white text-4xl font-black uppercase tracking-tighter italic">{text}</p>
        <p className="text-white text-4xl font-black uppercase tracking-tighter italic">{text}</p>
      </div>
    </div>
  );
};

export default Ticker;