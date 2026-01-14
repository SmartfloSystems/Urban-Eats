import React, { useState } from 'react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep('success');
    }, 500);
  };

  const handleClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-background-dark border border-white/10 p-8 md:p-10 max-w-lg w-full relative shadow-2xl shadow-black/50 rounded-xl">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>

        {step === 'form' ? (
          <>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-2">Secure Your Spot</h2>
            <p className="text-slate-400 mb-8 font-medium">Join the revolution. Tables fill up fast.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Date</label>
                  <input type="date" required className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-primary">Time</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                    <option>10:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-primary">Name</label>
                <input type="text" placeholder="ENTER YOUR NAME" required className="w-full bg-white/5 border border-white/10 rounded p-3 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-bold uppercase" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-primary">Party Size</label>
                <select className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all">
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6+ (Contact Us)</option>
                </select>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-red-600 text-white p-4 rounded font-black uppercase tracking-widest text-lg transition-colors shadow-lg mt-4">
                Confirm Reservation
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-500 mb-6">
              <span className="material-symbols-outlined text-5xl">check</span>
            </div>
            <h2 className="text-3xl font-black uppercase italic tracking-tighter text-white mb-4">You're In.</h2>
            <p className="text-slate-300 text-lg mb-8">Your table is confirmed. Prepare your palate.</p>
            <button 
              onClick={handleClose}
              className="bg-white text-background-dark px-8 py-3 rounded font-black uppercase tracking-widest hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReservationModal;