import React from 'react';
import { Globe, Phone, Trophy } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="register" className="w-full bg-black border-t border-white/10 relative overflow-hidden z-10 pt-20">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24">
          
          {/* Left section: Registration */}
          <div className="flex-1">
            <h3 className="text-white font-normal text-4xl uppercase tracking-widest mb-2 font-['Anton'] drop-shadow-md">
              Register Now!
            </h3>
            <p className="text-gray-400 font-bold text-sm tracking-widest uppercase mb-8">SPACES LIMITED!</p>
            
            <div className="space-y-6">
              <a href="https://www.premieryouthacademy.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Globe size={20} strokeWidth={2} />
                </div>
                <span className="font-medium tracking-wide">www.premieryouthacademy.com</span>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center">
                  <Phone size={20} strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="tel:+251965434311" className="font-medium hover:text-white transition-colors tracking-wide">+251 96 543 4311</a>
                  <a href="tel:+251942526496" className="font-medium hover:text-white transition-colors tracking-wide">+251 94 252 6496</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right section: Slogan */}
          <div className="flex-1 flex flex-col items-start md:items-end md:text-right border-t border-white/10 md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-12">
            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              <Trophy size={32} strokeWidth={2} />
            </div>
            <h3 className="text-white/90 font-normal text-4xl md:text-5xl uppercase tracking-tight font-['Anton'] mb-1">
              Develop Skills.
            </h3>
            <h3 className="text-white/90 font-normal text-4xl md:text-5xl uppercase tracking-tight font-['Anton'] mb-1">
              Build Confidence.
            </h3>
            <h3 className="text-white/90 font-normal text-4xl md:text-5xl uppercase tracking-tight font-['Anton']">
              Make Memories.
            </h3>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mt-20 mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Addis Premier. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span className="hover:text-white transition-colors cursor-pointer">Play.</span>
            <span className="hover:text-white transition-colors cursor-pointer">Learn.</span>
            <span className="hover:text-white transition-colors cursor-pointer">Grow.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
