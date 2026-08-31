import React from 'react'
import { Album } from '../data/albums'

export const MusicPlayer = ({ album }: { album: Album }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-charcoal/80 backdrop-blur-xl border-t border-white/10 z-40 p-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-1/3">
          <img
            src={`/images/${album.cover}`}
            alt={album.artist}
            className="w-16 h-16 rounded-lg object-cover shadow-lg"
          />
          <div>
            <p className="text-off-white text-xs">PLAYING FROM</p>
            <p className="font-bold text-white text-sm">{album.album}</p>
            <p className="text-off-white text-xs">{album.artist}</p>
          </div>
        </div>

        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-4">
            <button className="text-white/50 hover:text-white transition-colors p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path className="stroke-2" strokeLinecap="round" strokeLinejoin="round" d="M19 12H5" />
              </svg>
            </button>
            <button className="text-white/50 hover:text-white transition-colors p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
            <button className="text-white/50 hover:text-white transition-colors p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path className="stroke-2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2 w-full max-w-xs">
            <span className="text-off-white text-xs">0:00</span>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white/50 rounded-full" style={{ width: '35%' }} />
            </div>
            <span className="text-off-white text-xs">3:42</span>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 w-1/3">
          <button className="text-white/50 hover:text-white transition-colors p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="stroke-2" strokeLinecap="round" strokeLinejoin="round" d="M8 19a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h2zM16 5a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2V7a2 2 0 012-2h2z" />
            </svg>
          </button>
          <button className="text-white/50 hover:text-white transition-colors p-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="stroke-2" strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline className="stroke-2" points="14 2 14 8 20 8" />
              <line className="stroke-2" x1="16" y1="13" x2="8" y2="13" />
              <line className="stroke-2" x1="16" y1="17" x2="8" y2="17" />
              <polyline className="stroke-2" points="10 9 9 9 8 9" />
            </svg>
          </button>
          <div className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-1">
            <svg className="w-4 h-4 text-off-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="stroke-2" strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 12l5 7M18 13l-5 7-5-7M3 12l18-7" />
            </svg>
            <input
              type="range"
              min="0"
              max="100"
              value="50"
              className="w-24 h-1 bg-transparent appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}