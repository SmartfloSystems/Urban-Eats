import React from 'react';

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto animate-fade-in">
      <div className="min-h-screen p-6 md:p-12 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-16 sticky top-0 bg-black/50 backdrop-blur-md py-4 z-10 -mx-4 px-4">
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">Full Menu</h2>
          <button 
            onClick={onClose}
            className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors font-bold uppercase tracking-widest text-sm"
          >
            <span>Close</span>
            <span className="material-symbols-outlined group-hover:rotate-90 transition-transform">close</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Section 1 */}
          <div className="space-y-12">
            <div>
              <h3 className="text-primary text-xl font-black uppercase tracking-[0.3em] mb-8 border-b-2 border-primary/30 pb-4 inline-block">Small Plates</h3>
              <div className="space-y-8">
                <MenuItem title="Truffle Street Corn" price="12" desc="Charred corn, black truffle aioli, cotija, chili dust." />
                <MenuItem title="Pork Belly Burnt Ends" price="16" desc="Slow-smoked, soy-ginger glaze, pickled chilies, sesame." />
                <MenuItem title="Crispy Cauli-Wings" price="14" desc="Tempura cauliflower, gochujang glaze, sesame, scallion ranch." />
              </div>
            </div>

            <div>
              <h3 className="text-primary text-xl font-black uppercase tracking-[0.3em] mb-8 border-b-2 border-primary/30 pb-4 inline-block">The Big Stuff</h3>
              <div className="space-y-8">
                <MenuItem title="The Wagyu Gold" price="28" desc="A5 Wagyu patty, truffle cheddar, caramelized onion jam, gold leaf bun." />
                <MenuItem title="Nashville Hot Chicken" price="22" desc="Crispy thigh, cayenne glaze, dill pickles, slaw, brioche." />
                <MenuItem title="Urban Ribeye" price="42" desc="14oz bone-in ribeye, espresso rub, garlic confit butter." />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-12">
            <div>
              <h3 className="text-mustard text-xl font-black uppercase tracking-[0.3em] mb-8 border-b-2 border-mustard/30 pb-4 inline-block">Liquid Courage</h3>
              <div className="space-y-8">
                <MenuItem title="Smoked Old Fashioned" price="18" desc="Rye, maple, walnut bitters, applewood smoke." />
                <MenuItem title="Neon Gin Fizz" price="16" desc="Empress gin, yuzu, egg white, soda, edible glitter." />
                <MenuItem title="Spicy Mezcalita" price="17" desc="Mezcal, grilled pineapple, jalapeño, tajin rim." />
                <MenuItem title="Local Drafts" price="9" desc="Rotating selection of Brooklyn's finest ales and lagers." />
              </div>
            </div>

            <div>
              <h3 className="text-white text-xl font-black uppercase tracking-[0.3em] mb-8 border-b-2 border-white/30 pb-4 inline-block">Sweets</h3>
              <div className="space-y-8">
                <MenuItem title="Bourbon Bread Pudding" price="12" desc="Brioche, salted caramel, vanilla bean gelato." />
                <MenuItem title="Midnight Chocolate Cake" price="14" desc="Dark chocolate ganache, espresso crumble, sea salt." />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
            <p className="text-slate-500 uppercase tracking-widest text-sm font-bold">Menu items subject to availability and seasonal whims.</p>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ title, price, desc }: { title: string, price: string, desc: string }) => (
  <div className="group cursor-default">
    <div className="flex justify-between items-baseline mb-2 border-b border-white/10 pb-2 group-hover:border-primary/50 transition-colors">
      <h4 className="text-2xl font-black uppercase italic tracking-tight text-white group-hover:text-primary transition-colors">{title}</h4>
      <span className="text-xl font-bold text-slate-300">${price}</span>
    </div>
    <p className="text-slate-400 font-medium text-lg leading-relaxed">{desc}</p>
  </div>
);

export default MenuOverlay;