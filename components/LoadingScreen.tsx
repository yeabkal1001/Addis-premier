'use client';

import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onReady }: { onReady: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const complete = () => {
    setProgress(100);
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(onReady, 700);
    }, 400);
  };

  useEffect(() => {
    (window as any).__loadingScreenComplete = complete;

    // Animate bar 0 → 90%
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) { clearInterval(interval); return 90; }
        return prev + Math.random() * 8;
      });
    }, 150);

    // Fallback: never stay stuck beyond 4s
    const fallback = setTimeout(() => complete(), 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white transition-opacity duration-700"
      style={{ opacity: fadeOut ? 0 : 1, pointerEvents: fadeOut ? 'none' : 'all' }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo — white background is invisible against white screen, colours show perfectly */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo (2).png"
          alt="Addis Premier"
          className="h-24 w-auto object-contain"
        />

        {/* Tagline */}
        <p
          className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-medium"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Play · Learn · Grow
        </p>

        {/* Progress bar — dark on white */}
        <div className="w-48 h-[2px] bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gray-800 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
