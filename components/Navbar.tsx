import React from 'react';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-[100] px-6 md:px-12 lg:px-16 pt-6">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer flex items-center h-10 sm:h-12 w-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo (2).png" alt="Addis Premier Logo" className="h-full w-auto object-contain drop-shadow-md" />
        </div>
        
        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#camp-details" className="text-sm text-white hover:text-gray-300 transition-colors">Details</a>
          <a href="#activities" className="text-sm text-white hover:text-gray-300 transition-colors">Activities</a>
          <a href="#program-options" className="text-sm text-white hover:text-gray-300 transition-colors">Options</a>
        </div>

        {/* Register Button */}
        <div className="hidden md:block">
          <button onClick={() => window.dispatchEvent(new Event('open-register'))} className="inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer">
            Register Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white hover:text-gray-300 transition-colors">
          <Menu size={24} />
        </button>
      </nav>
    </div>
  );
}
