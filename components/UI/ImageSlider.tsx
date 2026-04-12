'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export type ImageProps = {
  src: string
  alt: string
}

interface SliderProps {
  beforeImage: ImageProps
  afterImage: ImageProps
}

export default function ImageSlider({ beforeImage, afterImage }: SliderProps) {
  const [sliderPos, setSliderPos] = useState(50)

  const handleMove = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value))
  }

  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
      {/* After Image (The "New" look) */}
      <Image
        {...afterImage}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Before Image (The "Old" look - Clipped) */}
      <div
        className="absolute inset-0 h-full w-full select-none overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          {...beforeImage}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Labels */}
      <div className="absolute left-4 top-4 rounded-full bg-slate-900/50 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">
        Before
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-gray-800/80 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md">
        After
      </div>

      {/* Control Slider */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={handleMove}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />

      {/* Visual Line & Handle */}
      <div
        className="pointer-events-none absolute bottom-0 top-0 z-10 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)]"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
          <div className="flex gap-1">
            <div className="h-3 w-0.5 bg-slate-300" />
            <div className="h-3 w-0.5 bg-slate-300" />
          </div>
        </div>
      </div>
    </div>
  )
}
