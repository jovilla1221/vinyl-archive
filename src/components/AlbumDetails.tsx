import React from 'react'
import { Album } from '../data/albums'

export const AlbumDetails = ({ album }: { album: Album }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 p-6 pointer-events-auto">
      <div className="max-w-4xl mx-auto h-full overflow-y-auto">
        <div className="flex flex-col h-full gap-6">
          {/* Album cover */}
          <div className="relative h-32 w-full rounded-2xl overflow-hidden mb-6">
            <img
              src={`/images/${album.cover}`}
              alt={album.artist}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Details section */}
          <div className="flex items-start gap-6 flex-1">
            <div className="w-20">
              <img
                src={`/images/${album.cover}`}
                alt={album.artist}
                className="w-full h-20 rounded-2xl object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">{album.artist}</h2>
              <p className="text-off-white text-sm mb-4">{album.album}</p>
              <p className="text-off-white text-xs mb-4">{album.year} · {album.genre}</p>

              {/* Tracks count */}
              <p className="text-white/50 text-sm">Contains {album.tracks.length} tracks</p>

              {/* Action buttons */}
              <div className="mt-4 flex gap-3">
                <button className="flex-1 py-2 px-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-sm">
                  Play
                </button>
                <button className="flex-1 py-2 px-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-sm">
                  Add to Queue
                </button>
              </div>
            </div>
          </div>

          {/* Track listing sidebar */}
          <div className="mt-6 h-64 border-t border-white/5">
            <h4 className="text-off-white text-xs uppercase mb-3">All Tracks</h4>
            {album.tracks.map((track, i) => (
              <div
                key={track.id}
                className="flex items-center justify-between py-1 text-off-white text-xs border-b border-white/5 last:border-0"
              >
                <span>{i + 1}. {track.title}</span>
                <span>{track.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}