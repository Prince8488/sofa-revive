'use client'

import { useState, useEffect } from 'react'
import QuoteModal from './QuoteModal'

export default function LandingPopupTrigger() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    // Triggers the popup to open after 5000ms (5 seconds)
    const timer = setTimeout(() => {
      setIsModalOpen(true)
    }, 3000)

    // Clean up the timer if the component unmounts before the delay finishes
    return () => clearTimeout(timer)
  }, [])

  return (
    <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  )
}
