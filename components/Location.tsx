import React from 'react';
import { IMAGES } from '../constants';

const Location: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-[1200px] mx-auto" id="location">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 w-full">
          <div className="rounded-xl overflow-hidden grayscale border-4 border-white/10 aspect-square lg:aspect-video relative group">
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 pointer-events-none"></div>
            <img 
              className="w-full h-full object-cover" 
              src={IMAGES.mapLocation}
              alt="Map location of Urban Eats" 
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-primary text-sm font-black uppercase tracking-[0.4em] mb-4">Find Us</h2>
          <h3 className="text-5xl font-black uppercase italic tracking-tighter mb-8 leading-none text-white">
            Concrete Jungle <br/> Headquarters
          </h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
              <div>
                <p className="font-black uppercase tracking-widest text-white">Address</p>
                <p className="text-slate-400">1248 Industrial Ave, <br/>Brooklyn, NY 11201</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
              <div>
                <p className="font-black uppercase tracking-widest text-white">Hours</p>
                <p className="text-slate-400">Tue – Thu: 4PM - 12AM<br/>Fri – Sun: 12PM - 2AM</p>
              </div>
            </div>
          </div>
          <button 
            onClick={() => alert("Maps integration coming soon to your area.")}
            className="mt-10 bg-white text-background-dark px-10 py-5 rounded-lg font-black uppercase tracking-widest text-lg hover:bg-mustard transition-colors shadow-lg"
          >
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Location;