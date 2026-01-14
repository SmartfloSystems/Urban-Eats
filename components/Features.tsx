import React from 'react';
import { IMAGES } from '../constants';

const features = [
  {
    title: "Wagyu Gold",
    price: "$28",
    description: "Sustainably sourced A5 Wagyu, truffle aioli, charred leeks on a brioche bun.",
    image: IMAGES.wagyuGold,
    tagColor: "text-mustard",
    tagText: "$28"
  },
  {
    title: "Urban Taps",
    price: "ROTATING",
    description: "A curated selection of 12 local artisanal brews from micro-distilleries.",
    image: IMAGES.urbanTaps,
    tagColor: "text-mustard",
    tagText: "ROTATING"
  },
  {
    title: "Neon Nights",
    price: "LIVE",
    description: "Experience the city's pulse with live DJ sets and urban jazz every weekend.",
    image: IMAGES.neonNights,
    tagColor: "text-mustard",
    tagText: "LIVE"
  }
];

const Features: React.FC = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-24" id="menu">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div className="max-w-2xl">
          <h2 className="text-mustard text-sm font-black uppercase tracking-[0.4em] mb-4">The Selection</h2>
          <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic text-white">Signature Urban Bites</h3>
        </div>
        <p className="text-slate-400 text-lg max-w-xs">Hand-crafted plates designed to disrupt the culinary status quo.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="group flex flex-col gap-6 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5">
            <div 
              className="aspect-[4/3] w-full bg-center bg-cover rounded-lg overflow-hidden relative"
              style={{ backgroundImage: `url('${feature.image}')` }}
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-2xl font-black uppercase italic tracking-tight text-white">{feature.title}</h4>
                <span className={`font-black ${feature.tagColor}`}>{feature.tagText}</span>
              </div>
              <p className="text-slate-400 font-medium">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;