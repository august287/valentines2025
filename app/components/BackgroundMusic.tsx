"use client"
import { useState, useRef, useEffect } from 'react'

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audioElement = audioRef.current
    if (audioElement) {
      // Set initial volume
      audioElement.volume = 0.5
      
      // Add event listener for when the page receives interaction
      const handleInteraction = () => {
        audioElement.play().catch(error => {
          console.log("Playback failed:", error)
        })
        // Remove the event listener after first interaction
        document.removeEventListener('click', handleInteraction)
      }

      document.addEventListener('click', handleInteraction)

      // Try to play immediately (might work in some browsers)
      audioElement.play().catch(() => {
        console.log("Waiting for user interaction...")
      })

      return () => {
        document.removeEventListener('click', handleInteraction)
      }
    }
  }, [])

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={toggleMute}
        className="bg-[#FFEEB2] border-2 border-[#8B4513] rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
      >
        {isMuted ? (
          <span className="text-2xl">🔇</span>
        ) : (
          <span className="text-2xl">🔊</span>
        )}
      </button>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="./bgsound.mp3"
      />
    </div>
  )
} 