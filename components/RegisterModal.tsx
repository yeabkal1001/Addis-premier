import React from 'react';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative liquid-glass border border-white/20 rounded-3xl p-8 max-w-lg w-full shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors">
          <X size={24} />
        </button>
        <h2 className="text-3xl font-normal font-['Anton'] text-white uppercase mb-6 tracking-wide drop-shadow-md">Register Now</h2>
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all" placeholder="john@example.com" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Age Group</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                <option value="" className="bg-black text-gray-500">Select Age</option>
                <option value="6-9" className="bg-black text-white">6 - 9 Years</option>
                <option value="10-12" className="bg-black text-white">10 - 12 Years</option>
                <option value="13-15" className="bg-black text-white">13 - 15 Years</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Program</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/40 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                <option value="" className="bg-black text-gray-500">Select Program</option>
                <option value="5-day" className="bg-black text-white">5 Day Camp</option>
                <option value="3-day" className="bg-black text-white">3 Day Camp</option>
              </select>
            </div>
          </div>
          <button type="button" onClick={(e) => { e.preventDefault(); alert('Registration Submitted!'); onClose(); }} className="mt-2 w-full bg-white text-black font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:bg-gray-200 transition-colors">
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  );
}
