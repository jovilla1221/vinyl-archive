import React from 'react'
import { Album } from '../data/albums'

export const TrackList = ({ album }: { album: Album }) => {
  return (
    <div className="fixed bottom-24 left-0 right-0 bg-charcoal/80 backdrop-blur-xl border-t border-white/10 z-40 p-4 max-h-64 overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-white font-bold text-sm mb-3">TRACKLIST</h3>
        {album.tracks.map((track, index) => (
          <div
            key={track.id}
            className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
          >
            <div className="flex items-center gap-3">
              <span className="text-white/30 text-sm font-mono w-6 text-center">{index + 1}</span>
              <div>
                <p className="text-white text-sm">{track.title}</p>
                <p className="text-off-white text-xs">Track {index + 1}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-off-white text-xs font-mono">{track.duration}</span>
              <button className="text-white/30 hover:text-white transition-colors p-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path className="stroke-2" strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M19 12H5" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}