'use client'

import { useState } from 'react'
import Spline from '@splinetool/react-spline'

export default function SplineScene() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFading, setIsFading] = useState(false)

  return (
    <>
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 pointer-events-none ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ display: isLoading ? 'flex' : 'none' }}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
          <p className="text-white font-mono text-sm uppercase">Loading scene...</p>
        </div>
      </div>
      
      {/* Spline background */}
      <div className="absolute inset-0 z-0">
        <Spline 
          scene="/spline/scene.splinecode" 
          className="w-full h-full" 
          onLoad={() => {
            setIsFading(true)
            setTimeout(() => setIsLoading(false), 1000)
          }}
        />
      </div>
    </>
  )
} 