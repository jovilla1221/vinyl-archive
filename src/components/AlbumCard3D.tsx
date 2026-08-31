import React from 'react'
import { Album } from '../data/albums'

export const AlbumCard3D = ({
  album,
  scale,
  zIndex,
  onClick,
  isMobile
}: {
  album: Album
  scale: number
  zIndex: number
  onClick: () => void
  isMobile: boolean
}) => {
  if (isMobile) {
    return (
      <div
        className="cursor-pointer group hover:scale-105 transition-transform duration-300 w-full mb-4"
        onClick={onClick}
      >
        <div className="relative rounded-xl overflow-hidden bg-charcoal group-hover:shadow-xl group-hover:transition-shadow duration-300">
          <img
            src={`/images/${album.cover}`}
            alt={album.artist}
            className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-bold text-white text-sm">{album.artist}</h3>
            <p className="text-off-white text-xs mt-1">{album.album}</p>
            <p className="text-off-white text-xs mt-0.5">{album.year}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="cursor-pointer group inline-block"
      style={{ transform: `scale(${scale})` }}
      onClick={onClick}
    >
      <div
        className="group relative rounded-2xl overflow-hidden bg-charcoal shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:transition-shadow duration-300 preserve-3d"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative h-[400px] w-[300px]">
          <div className="absolute inset-0 backface-hidden">
            <img
              src={`/images/${album.cover}`}
              alt={album.artist}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ transform: 'rotateY(0deg)' }}
            />
          </div>
          
          <div className="absolute inset-0 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
            <div className="p-6 flex flex-col">
              <h3 className="font-bold text-white mb-2">{album.artist}</h3>
              <p className="text-off-white text-sm mb-1">{album.album}</p>
              <p className="text-off-white text-xs">{album.year} · {album.genre}</p>
            </div>
          </div>
        </div>
        
        <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-white/5" style={{ transform: 'rotateY(90deg)', transformOrigin: 'right' }} />
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/5" style={{ transform: 'rotateY(-90deg)', transformOrigin: 'left' }} />
      </div>
    </div>
  )
}