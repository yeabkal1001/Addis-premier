import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ProgramOptions() {
  return (
    <section id="program-options" className="w-full max-w-5xl mx-auto px-4 py-24 sm:px-8 relative z-10">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-16 text-white relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-[100px] opacity-30 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-normal uppercase tracking-tight mb-6 text-center font-['Anton'] text-white drop-shadow-md">
            Program Options
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl text-base sm:text-lg tracking-wide">
            Choose the best camp schedule that fits your needs. Our programs are designed to provide maximum engagement and skill development in a premium environment.
          </p>

          <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
            {/* Option 1 */}
            <div className="liquid-glass border border-white/20 rounded-3xl p-8 flex-1 hover:border-white/40 hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-white text-black rounded-full p-0.5 shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-wide">5 Day Full Day Camp</h3>
                  <p className="text-gray-400 text-sm font-medium tracking-wide">Monday through Friday<br/>9:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Option 2 */}
            <div className="liquid-glass border border-white/20 rounded-3xl p-8 flex-1 hover:border-white/40 hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-white text-black rounded-full p-0.5 shadow-[0_0_15px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-wide">3 Day Full Day Camp</h3>
                  <p className="text-gray-400 text-sm font-medium tracking-wide">Monday, Wednesday, Friday<br/>9:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
