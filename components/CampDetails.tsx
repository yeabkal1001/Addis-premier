import React from 'react';
import { MapPin, Clock, CalendarDays, Users } from 'lucide-react';

export default function CampDetails() {
  return (
    <section id="camp-details" className="w-full max-w-6xl mx-auto px-4 py-24 sm:px-8 relative z-10 bg-black">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-normal text-white uppercase tracking-tight mb-4 text-center font-['Anton'] drop-shadow-lg">
          Event Details
        </h2>
        <div className="w-24 h-1 bg-white/20 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Detail Card 1: Location */}
        <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
            <MapPin size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Location</h3>
          <p className="text-lg font-medium text-white tracking-wide">Addis Sports Park</p>
        </div>

        {/* Detail Card 2: Dates */}
        <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
            <CalendarDays size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Dates</h3>
          <p className="text-lg font-medium text-white tracking-wide">13th July &ndash; 14th Aug</p>
          <p className="text-sm font-light text-gray-400 mt-1">Mon &ndash; Fri</p>
        </div>

        {/* Detail Card 3: Time */}
        <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
            <Clock size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Time</h3>
          <p className="text-lg font-medium text-white tracking-wide">9:00 AM &ndash; 12:00 PM</p>
        </div>

        {/* Detail Card 4: Age Group */}
        <div className="liquid-glass rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
          <div className="w-16 h-16 bg-white/5 border border-white/10 text-white rounded-full flex items-center justify-center mb-6 shadow-lg">
            <Users size={28} strokeWidth={1.5} />
          </div>
          <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2">Age Groups</h3>
          <p className="text-lg font-medium text-white tracking-wide">6 &ndash; 15 Years Old</p>
        </div>
      </div>
    </section>
  );
}
