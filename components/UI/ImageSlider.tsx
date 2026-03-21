"use client";

import React, { useState } from "react";
import Image from "next/image";

interface SliderProps {
  beforeImage: string;
  afterImage: string;
}

export default function ImageSlider({ beforeImage, afterImage }: SliderProps) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl group">
      {/* After Image (The "New" look) */}
      <Image
        src={afterImage}
        alt="Restored Furniture"
        fill
        className="object-cover"
      />

      {/* Before Image (The "Old" look - Clipped) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden select-none"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt="Original Furniture"
          fill
          className="object-cover"
        />
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-slate-900/50 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
        After
      </div>

      {/* Control Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={handleMove}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
      />

      {/* Visual Line & Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-xl flex items-center justify-center">
          <div className="flex gap-1">
            <div className="w-0.5 h-3 bg-slate-300" />
            <div className="w-0.5 h-3 bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  );
}
