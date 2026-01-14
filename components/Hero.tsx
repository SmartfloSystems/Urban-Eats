import React from 'react';
import { IMAGES } from '../constants';

interface HeroProps {
  onBookTable: () => void;
  onViewMenu: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookTable, onViewMenu }) => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden flex items-end px-6 md:px-20 pb-20 mt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: `linear-gradient(to top, rgba(26,26,26,1) 0%, rgba(26,26,26,0.4) 50%, rgba(26,26,26,0.1) 100%), url('${IMAGES.heroBg}')`
        }}
      ></div>

      {/* Floating Social Proof Badge */}
      <div className="absolute top-32 right-12 animate-bounce hidden md:block">
        <div className="bg-mustard text-background-dark p-6 rounded-xl shadow-2xl flex flex-col items-center rotate-6 border-4 border-background-dark">
          <div className="flex gap-1 mb-1 text-background-dark">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="material-symbols-outlined fill-1" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
            ))}
          </div>
          <p className="text-3xl font-black leading-none">4.9 STARS</p>
          <p className="text-[10px] uppercase font-bold tracking-widest mt-1 opacity-80">Top Rated Gastro-Pub</p>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <div className="inline-block bg-primary text-white px-4 py-1 mb-6 text-sm font-black uppercase tracking-[0.3em]">
          Est. 2024 • NYC
        </div>
        <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase mb-6 italic">
          Unapologetically <br/><span className="text-primary italic">Bold Flavors.</span>
        </h1>
        <p className="text-slate-300 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed mb-8">
          The gastro-pub where high-end ingredients meet street-side soul. Prepare your palate for the urban revolution.
        </p>
        <div className="flex flex-wrap gap-4">
          <button 
            onClick={onBookTable}
            className="bg-primary text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest text-lg hover:bg-red-700 transition-colors shadow-lg shadow-primary/30"
          >
            Book Your Table
          </button>
          <button 
            onClick={onViewMenu}
            className="border-2 border-white/20 hover:border-white/50 text-white px-10 py-5 rounded-lg font-black uppercase tracking-widest text-lg transition-colors bg-white/5 backdrop-blur-sm"
          >
            Full Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;