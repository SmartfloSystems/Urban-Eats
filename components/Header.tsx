import React from 'react';

interface HeaderProps {
  onBookTable: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookTable }) => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-primary p-1.5 rounded">
            <span className="material-symbols-outlined text-white text-3xl">restaurant</span>
          </div>
          <h2 className="text-2xl font-black uppercase tracking-tighter italic text-white">Urban Eats</h2>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a 
            className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-primary transition-colors cursor-pointer" 
            href="#menu"
            onClick={(e) => scrollToSection(e, 'menu')}
          >
            Menu
          </a>
          <a 
            className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-primary transition-colors cursor-pointer" 
            href="#location"
            onClick={(e) => scrollToSection(e, 'location')}
          >
            Location
          </a>
          <button onClick={() => alert("Events coming soon!")} className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-primary transition-colors cursor-pointer">Events</button>
          <button 
            onClick={onBookTable}
            className="bg-primary text-white px-6 py-2 rounded font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20"
          >
            Book a Table
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;