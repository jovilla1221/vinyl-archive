import create from 'zustand'
import { Album } from '../data/albums'

export type Store = {
  selectedAlbum: Album | null
  setSelectedAlbum: (album: Album | null) => void
  isPlayerOpen: boolean
  setIsPlayerOpen: (open: boolean) => void
  isVinylVisible: boolean
  setIsVinylVisible: (visible: boolean) => void
}

export const useStore = create<Store>((set) => ({
  selectedAlbum: null,
  setSelectedAlbum: (album) => set({ selectedAlbum: album }),
  isPlayerOpen: false,
  setIsPlayerOpen: (open) => set({ isPlayerOpen: open }),
  isVinylVisible: false,
  setIsVinylVisible: (visible) => set({ isVinylVisible: visible }),
}))