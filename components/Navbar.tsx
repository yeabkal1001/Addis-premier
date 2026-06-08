'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className="fixed top-0 inset-x-0 z-[100] px-6 md:px-12 lg:px-16 pt-6">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer flex items-center h-10 sm:h-12 w-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo (2).png" alt="Addis Premier Logo" className="h-full w-auto object-contain drop-shadow-md" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#camp-details" className="text-sm text-white hover:text-gray-300 transition-colors">Details</a>
          <a href="#activities" className="text-sm text-white hover:text-gray-300 transition-colors">Activities</a>
          <a href="#program-options" className="text-sm text-white hover:text-gray-300 transition-colors">Options</a>
        </div>

        {/* Desktop Register Button */}
        <div className="hidden md:block">
          <button
            onClick={() => window.dispatchEvent(new Event('open-register'))}
            className="inline-block bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Register Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 mx-0 liquid-glass rounded-xl overflow-hidden flex flex-col">
          <a
            href="#camp-details"
            onClick={closeMenu}
            className="px-6 py-4 text-sm text-white border-b border-white/10 hover:bg-white/10 transition-colors"
          >
            Details
          </a>
          <a
            href="#activities"
            onClick={closeMenu}
            className="px-6 py-4 text-sm text-white border-b border-white/10 hover:bg-white/10 transition-colors"
          >
            Activities
          </a>
          <a
            href="#program-options"
            onClick={closeMenu}
            className="px-6 py-4 text-sm text-white border-b border-white/10 hover:bg-white/10 transition-colors"
          >
            Options
          </a>
          <button
            onClick={() => { closeMenu(); window.dispatchEvent(new Event('open-register')); }}
            className="mx-4 my-4 bg-white text-black py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Register Now
          </button>
        </div>
      )}
    </div>
  );
}
