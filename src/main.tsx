import React from 'react'
import { createRoot } from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import App from './App'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MotionConfig transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
      <App />
    </MotionConfig>
  </React.StrictMode>
)