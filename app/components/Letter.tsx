import React from 'react'
import TextBubble from "./TextBubble"

interface LetterProps {
  isOpen: boolean
  onLetterClick: () => void
}

export default function Letter({ isOpen, onLetterClick }: LetterProps) {
  return (
    <div className="cursor-pointer relative mt-8" onClick={onLetterClick}>
      {/* Text Bubble - only shown when envelope is closed */}
      {!isOpen && (
        <div className="absolute left-[-200px] top-1/2 transform -translate-y-1/2">
          <TextBubble message="Click the envelope! ♡" />
        </div>
      )}

      {/* Container for letter content with reduced height */}
      <div className="relative h-[150px]">
        {/* Envelope */}
        <div className="relative w-64 h-40">
          {/* Back of envelope */}
          <div className="absolute inset-0 bg-[#FFEEB2] border-4 border-[#8B4513] rounded-xl shadow-lg" />

          {/* Letter content */}
          <div
            className={`absolute w-full bg-white rounded-lg transition-all duration-500
                ${isOpen
                ? "opacity-100 bottom-[10%] h-72 z-30"
                : "opacity-0 bottom-[5%] h-0 pointer-events-none z-0"}`}
          >
            <div className="pl-4 pr-4 text-[#8B4513] font-bold text-xl text-center">
              <div>Hi I hope this letter finds you well💕<br></br>
                As we are nearing the second Valentine&apos;s Day that we are together, I&apos;m hoping that we can celebrate
                this one together as well 😗. Will you be my Valentine?🥹🐋




              </div>

            </div>
          </div>

          {/* Heart Seal */}
          {/* Heart Seal */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500
    ${isOpen ? "z-20" : "z-30"}`}>
            <div className="text-[#8B4513] text-2xl">❤️</div>
          </div>

          {/* Envelope flap */}
          <div
            className={`absolute top-0 left-0 right-0 h-1/2 transition-all duration-500 bg-[#FFEEB2]
                ${isOpen ? "rotate-x-180 z-10" : "rotate-x-0 z-20"}`}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <div className="absolute inset-0">
              <div
                className="absolute inset-0 bg-[#FFE58F] rounded-t-xl"
                style={{
                  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                }}
              />
            </div>
            <div
              className="absolute inset-0 bg-[#FFEEB2] rounded-t-xl"
              style={{
                transform: "rotateX(180deg)",
                backfaceVisibility: "hidden",
                clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

