import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Features from './components/Features';
import Stats from './components/Stats';
import Location from './components/Location';
import Footer from './components/Footer';
import MenuOverlay from './components/MenuOverlay';
import ReservationModal from './components/ReservationModal';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white selection:bg-primary selection:text-white">
      {/* Grainy Texture Overlay */}
      <div className="fixed inset-0 grainy-overlay z-50 pointer-events-none"></div>

      {/* Sticky Call to Action Button */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-black text-xl shadow-2xl transition-transform active:scale-95 flex items-center gap-2 border-2 border-white/10"
        >
          <span className="material-symbols-outlined">menu_book</span>
          VIEW MENU
        </button>
      </div>

      <Header onBookTable={() => setIsReservationOpen(true)} />
      
      <main className="flex-1">
        <Hero onBookTable={() => setIsReservationOpen(true)} onViewMenu={() => setIsMenuOpen(true)} />
        <Ticker />
        <Features />
        <Stats />
        <Location />
      </main>

      <Footer />
      
      {/* Modals */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <ReservationModal isOpen={isReservationOpen} onClose={() => setIsReservationOpen(false)} />
    </div>
  );
};

export default App;