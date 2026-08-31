import React, { useState, useRef, useEffect } from 'react'
import { Album } from '../data/albums'
import { useStore } from '../store'

export const VinylPlayer = ({
  album,
  isVisible,
  onClose
}: {
  album: Album
  isVisible: boolean
  onClose: () => void
}) => {
  const [isRotating, setIsRotating] = useState(false)
  const vinylRef = useRef<HTMLDivElement>(null)
  const sleeveRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isVisible) {
      setIsRotating(true)
    }
  }, [isVisible])

  const handleClose = () => {
    setIsRotating(false)
    onClose()
  }

  if (!isVisible) return null

  return (
    <div
      ref={sleeveRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      onClick={handleClose}
    >
      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white"
        onClick={handleClose}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path className="stroke-2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        ref={vinylRef}
        className="relative w-64 h-64 rounded-full bg-black shadow-2xl"
      >
        <div className="absolute inset-0.5 rounded-full bg-white/20" />
        
        <div className="absolute inset-0.5 flex items-center justify-center">
          <img
            src={`/images/${album.cover}`}
            alt={album.artist}
            className="relative w-20 h-20 rounded-full object-cover bg-black"
            style={{ transition: 'transform 0.5s ease' }}
          />
          <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs text-white">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="stroke-2" strokeLinecap="round" strokeLinejoin="round" d="M13 16l-4 4L7 19" />
            </svg>
          </div>
        </div>

        <div className="absolute inset-0.5 bg-black opacity-20 blur-sm" />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
        <h3 className="text-white text-lg font-bold mb-1">{album.artist}</h3>
        <p className="text-off-white text-sm">{album.album} ({album.year})</p>
        <p className="text-white text-xs">Now playing</p>
      </div>
    </div>
  )
}