import React, { useState, useEffect } from 'react'
import { ALBUMS } from './data/albums'
import { AlbumStack } from './components/AlbumStack'
import { VinylPlayer } from './components/VinylPlayer'
import { MusicPlayer } from './components/MusicPlayer'
import { TrackList } from './components/TrackList'
import { AlbumDetails } from './components/AlbumDetails'
import { Navigation } from './components/Navigation'
import { useStore } from './store'

export function App() {
  const [isMobile, setIsMobile] = useState(false)
  const { selectedAlbum, setSelectedAlbum, isPlayerOpen, setIsPlayerOpen, isVinylVisible, setIsVinylVisible } = useStore()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleAlbumClick = (album: typeof ALBUMS[0]) => {
    setSelectedAlbum(album)
    setIsVinylVisible(false)
    setIsPlayerOpen(true)
    setTimeout(() => setIsVinylVisible(true), 400)
  }

  const handleClose = () => {
    setIsVinylVisible(false)
    setTimeout(() => {
      setIsPlayerOpen(false)
      setSelectedAlbum(null)
    }, 600)
  }

  return (
    <div className="relative min-h-screen bg-dark overflow-hidden">
      <div className="bg-grain fixed inset-0 z-0" />
      <div className="vignette" />
      
      <Navigation isMobile={isMobile} />
      
      <main className="relative z-10">
        {!isPlayerOpen ? (
          <AlbumStack 
            albums={ALBUMS} 
            onAlbumClick={handleAlbumClick}
            isMobile={isMobile}
          />
        ) : (
          <>
            <AlbumStack 
              albums={ALBUMS} 
              onAlbumClick={handleAlbumClick}
              isMobile={isMobile}
              dimmed={true}
            />
            <VinylPlayer 
              album={selectedAlbum}
              isVisible={isVinylVisible}
              onClose={handleClose}
            />
          </>
        )}
      </main>

      {isPlayerOpen && selectedAlbum && (
        <>
          <MusicPlayer album={selectedAlbum} />
          <TrackList album={selectedAlbum} />
          <AlbumDetails album={selectedAlbum} />
        </>
      )}

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-xs font-light tracking-wider opacity-0 transition-opacity duration-1000 delay-1000" style={{ opacity: isPlayerOpen ? 1 : 0 }}>
        SELECT AN ALBUM TO PLAY
      </div>
    </div>
  )
}