import React from 'react';

const Footer: React.FC = () => {
  const handleLink = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-black py-20 border-t-8 border-primary px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary p-1.5 rounded">
                <span className="material-symbols-outlined text-white text-3xl">restaurant</span>
              </div>
              <h2 className="text-4xl font-black uppercase tracking-tighter italic text-white">Urban Eats</h2>
            </div>
            <p className="text-slate-500 max-w-sm text-lg font-medium">
              Redefining the gastro-pub experience with high-intensity flavors and urban soul.
            </p>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] mb-6 text-primary">Links</h4>
            <ul className="space-y-4 text-slate-400 font-bold uppercase tracking-widest text-sm">
              <li><a className="hover:text-white transition-colors cursor-pointer" onClick={handleLink} href="#">Our Story</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer" onClick={handleLink} href="#">Press Kit</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer" onClick={handleLink} href="#">Careers</a></li>
              <li><a className="hover:text-white transition-colors cursor-pointer" onClick={handleLink} href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] mb-6 text-primary">Socials</h4>
            <div className="flex gap-4">
              {['share', 'play_circle', 'photo_camera'].map((icon) => (
                <a key={icon} onClick={handleLink} className="size-12 rounded-full border-2 border-white/10 flex items-center justify-center hover:border-primary hover:text-primary hover:bg-white/5 transition-all text-white cursor-pointer" href="#">
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-slate-600 font-bold uppercase tracking-[0.2em] text-[10px]">
          <p>© 2024 Urban Eats. Stay Bold.</p>
          <div className="flex gap-8">
            <a className="hover:text-white cursor-pointer" onClick={handleLink} href="#">Privacy Policy</a>
            <a className="hover:text-white cursor-pointer" onClick={handleLink} href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;