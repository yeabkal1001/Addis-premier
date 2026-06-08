'use client';

import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onReady }: { onReady: () => void }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate fast loading ticks so the bar feels responsive from the start
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90; // Hold at 90% until the video canplay fires
        }
        return prev + Math.random() * 8;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Called by the parent once the video is ready
  const complete = () => {
    setProgress(100);
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(onReady, 700); // Wait for fade-out CSS transition
    }, 400);
  };

  // Expose `complete` so parent can call it
  useEffect(() => {
    (window as any).__loadingScreenComplete = complete;
  });

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black transition-opacity duration-700"
      style={{ opacity: fadeOut ? 0 : 1, pointerEvents: fadeOut ? 'none' : 'all' }}
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-8">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo (2).png"
          alt="Addis Premier"
          className="h-20 w-auto object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />

        {/* Tag line */}
        <p
          className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-medium"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Play · Learn · Grow
        </p>

        {/* Progress bar */}
        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
