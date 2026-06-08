import React from 'react';
import { ShieldCheck, Code } from 'lucide-react';

export default function Activities() {
  return (
    <section id="activities" className="w-full bg-black py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-white uppercase tracking-tight mb-4 text-center font-['Anton'] drop-shadow-lg">
            Camp Sports & Activities
          </h2>
          <div className="w-24 h-1 bg-white/20 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Activity 1: Football */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center text-center min-h-[400px] justify-center bg-black cursor-pointer">
             {/* Background Image: Bright initially, dims and zooms on hover */}
             <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-30"
              style={{ backgroundImage: "url('/football%20field.jpg')" }}
            />
            {/* Gradient Overlay: Darkens the bottom on hover for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {/* Hidden Content: Fades and slides up on hover */}
            <div className="relative z-10 flex flex-col items-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out px-6">
              <div className="w-44 h-44 mb-6 transition-transform duration-500 hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/soccer.png" alt="Football" className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(34,197,94,0.5)]" />
              </div>
              
              <h3 className="text-4xl font-normal font-['Anton'] text-white uppercase mb-4 tracking-wider">Football</h3>
              <div className="flex items-center gap-2 text-white bg-green-500/20 border border-green-500/30 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <ShieldCheck size={18} />
                <span>FA Certified Coaching</span>
              </div>
            </div>
          </div>

          {/* Activity 2: Basketball */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center text-center min-h-[400px] justify-center bg-black cursor-pointer">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-30"
              style={{ backgroundImage: "url('/basketball%20court.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col items-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out px-6">
              <div className="w-44 h-44 mb-6 transition-transform duration-500 hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/basketball.png" alt="Basketball" className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(255,165,0,0.5)]" />
              </div>
              
              <h3 className="text-4xl font-normal font-['Anton'] text-white uppercase mb-3 tracking-wider">Basketball</h3>
              <p className="text-sm font-medium text-gray-300 tracking-wide max-w-[280px]">Learn team skills and techniques on a professional court.</p>
            </div>
          </div>

          {/* Activity 3: Tennis */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center text-center min-h-[400px] justify-center bg-black cursor-pointer">
             {/* Background Image */}
             <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-30"
              style={{ backgroundImage: "url('/tenis%20field.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out px-6">
              <div className="w-44 h-44 mb-6 transition-transform duration-500 hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/tenis.png" alt="Tennis" className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(59,130,246,0.5)]" />
              </div>
              
              <h3 className="text-4xl font-normal font-['Anton'] text-white uppercase mb-3 tracking-wider">Tennis</h3>
              <p className="text-sm font-medium text-gray-300 tracking-wide max-w-[280px]">Master your serve and volley.</p>
            </div>
          </div>

          {/* Activity 4: Coding */}
          <div className="group relative rounded-3xl overflow-hidden border border-white/10 flex flex-col items-center text-center min-h-[400px] justify-center bg-black cursor-pointer">
             {/* Background Image */}
             <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-30"
              style={{ backgroundImage: "url('/codding%20class.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out px-6">
              <div className="w-44 h-44 mb-6 transition-transform duration-500 hover:scale-110">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/coding.png" alt="Coding" className="w-full h-full object-contain drop-shadow-[0_15px_25px_rgba(168,85,247,0.5)]" />
              </div>
              
              <h3 className="text-4xl font-normal font-['Anton'] text-white uppercase mb-4 tracking-wider">CTI Juniors</h3>
              <div className="flex items-center gap-2 text-white bg-purple-500/20 border border-purple-500/30 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                <Code size={18} />
                <span>Computer coding for kids</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
