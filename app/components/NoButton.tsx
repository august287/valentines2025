"use client"

import { useState } from "react"
import TextBubble from "./TextBubble"

export default function NoButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative inline-block">
      {isHovered && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2">
          <TextBubble message="Bawal :P" />
        </div>
      )}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-pink-400 text-white px-8 py-3 rounded-full hover:bg-pink-500 transition-colors font-bold text-lg hover:scale-110 transform-gpu"
      >
        No
      </button>
    </div>
  )
}

