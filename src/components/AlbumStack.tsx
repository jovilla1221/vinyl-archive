import { Album } from '../data/albums'
import { useStore } from '../store'

export const AlbumStack = ({
  albums,
  onAlbumClick,
  isMobile,
  dimmed = false
}: {
  albums: Album[]
  onAlbumClick: (album: Album) => void
  isMobile: boolean
  dimmed?: boolean
}) => {
  const { selectedAlbum } = useStore()

  return (
    <div className={dimmed ? 'pointer-events-none opacity-70' : ''}>
      {albums.map((album) => {
        const isSelected = selectedAlbum?.id === album.id
        const scale = isSelected ? 1.3 : 1
        const zIndex = isSelected ? 10 : 0
        
        return (
          <AlbumCard3D
            key={album.id}
            album={album}
            scale={scale}
            zIndex={zIndex}
            onClick={() => onAlbumClick(album)}
            isMobile={isMobile}
          />
        )
      })}
    </div>
  )
}