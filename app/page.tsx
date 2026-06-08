'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Calendar, Clock, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import CampDetails from '../components/CampDetails';
import Activities from '../components/Activities';
import ProgramOptions from '../components/ProgramOptions';
import Footer from '../components/Footer';
import RegisterModal from '../components/RegisterModal';
import LoadingScreen from '../components/LoadingScreen';

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsRegisterOpen(true);
    window.addEventListener('open-register', handleOpen);
    return () => window.removeEventListener('open-register', handleOpen);
  }, []);

  const handleVideoReady = () => {
    if ((window as any).__loadingScreenComplete) {
      (window as any).__loadingScreenComplete();
    }
  };

  return (
    <main className="w-full min-h-screen">
      {!isLoaded && <LoadingScreen onReady={() => setIsLoaded(true)} />}
      <Navbar />
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden bg-black" style={{ fontFamily: "'Inter', sans-serif" }}>
        
        {/* Background Video */}
        <video
          ref={videoRef}
          src="/lv_0_20260608120325_001.mp4"
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={handleVideoReady}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        />

        {/* 1. Grain overlay */}
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
            opacity: 0.4,
          }}
          className="absolute inset-0 pointer-events-none z-[1] bg-repeat"
        />

        {/* 2. Giant ghost text */}
        <div
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: 'clamp(50px, 15vw, 200px)',
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: '-0.02em',
            top: '20%',
          }}
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none z-[2] text-white opacity-40 uppercase whitespace-nowrap"
        >
          SUMMER CAMP
        </div>

        {/* 5. Bottom-left Content */}
        <div className="absolute bottom-6 left-4 sm:bottom-20 sm:left-12 z-[60] flex flex-col gap-4 max-w-[650px]">
          <h1 
            style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.02em', lineHeight: 1.05 }}
            className="text-4xl sm:text-[64px] text-white uppercase drop-shadow-2xl"
          >
            5 Week Sports<br />Summer Camp
          </h1>
          
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2">
            {[
              { icon: MapPin, text: 'Addis Sports Park' },
              { icon: Calendar, text: '13th July - 14th Aug' },
              { icon: Clock, text: '9:00 AM - 12:00 PM' },
              { icon: Users, text: '6 - 15 Years Old' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-lg">
                <item.icon size={14} className="text-white/80" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          
          <p className="text-white/80 text-sm sm:text-base font-medium tracking-wide mt-2 max-w-[500px]">
            Play. Learn. Grow. Develop skills, build confidence, make memories.
          </p>
        </div>

        {/* 6. Bottom-right link */}
        <div className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-[60]">
          <button
            onClick={() => window.dispatchEvent(new Event('open-register'))}
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(20px, 4vw, 56px)',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
            className="flex items-center gap-2 text-white uppercase bg-transparent border-none cursor-pointer opacity-95 hover:opacity-100 transition-opacity duration-200"
          >
            <span>REGISTER NOW!</span>
            <ArrowRight className="w-5 h-5 sm:w-8 sm:h-8" strokeWidth={2.25} />
          </button>
        </div>
      </div>

      {/* Landing Page Content Sections */}
      <CampDetails />
      <Activities />
      <ProgramOptions />
      <Footer />
    </main>
  );
}
