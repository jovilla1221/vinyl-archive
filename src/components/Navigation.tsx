import React from 'react'
import { Album } from '../data/albums'
import { useStore } from '../store'

export const Navigation = ({ isMobile }: { isMobile: boolean }) => {
  const { isPlayerOpen } = useStore.getState()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="text-2xl font-bold text-white tracking-tighter">VINYL ARCHIVE</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 pointer-events-auto">
          <a href="#" className="text-off-white text-sm hover:text-white transition-colors">MUSIC</a>
          <a href="#" className="text-off-white text-sm hover:text-white transition-colors">COLLECTION</a>
          <a href="#" className="text-off-white text-sm hover:text-white transition-colors">ABOUT</a>
        </div>
        
        <div className="flex items-center gap-4 pointer-events-auto">
          <a href="#" className="relative">
            <svg className="w-5 h-5 text-off-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="stroke-2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-off-white text-sm">Sound</span>
          </a>
          {isMobile && (
            <svg
              className="w-6 h-6 text-off-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path className="stroke-2" strokeLinecap="round" strokeLinejoin="round" d="M10 7l5 5m0 0l-5 5m5-5H3" />
            </svg>
          )}
        </div>
      </div>
    </nav>
  )
}