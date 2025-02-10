"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Letter from "./components/Letter"
import TextBubble from "./components/TextBubble"
import NoButton from "./components/NoButton"
import BackgroundMusic from "./components/BackgroundMusic"
import FloatingImages from "./components/FloatingImages"

export default function Home() {
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [answer, setAnswer] = useState<string | null>(null)

  const handleLetterClick = () => {
    setIsLetterOpen(true)
  }

  const handleAnswer = (choice: string) => {
    setAnswer(choice)
  }

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url("./bg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <BackgroundMusic />
      <FloatingImages />
      <div className="text-center relative z-10 bg-white/60 p-8 rounded-3xl backdrop-blur-sm min-h-[600px] w-full max-w-2xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-8">Hi Nerd! :D</h1>

        <div className="relative flex flex-col items-center flex-1 w-full">
          {/* Letter Component */}
          <div className="relative z-30 mb-16">
            <Letter isOpen={isLetterOpen} onLetterClick={handleLetterClick} />
          </div>

          {/* Answer Buttons */}
          {isLetterOpen && !answer && (
            <div className="mt-48 z-40 animate-fade-in">
              <div className="space-x-4">
                <button
                  onClick={() => handleAnswer("Yes")}
                  className="bg-yellow-400 text-white px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors font-bold text-lg hover:scale-110 transform-gpu"
                >
                  Yes
                </button>
                <NoButton />
              </div>
            </div>
          )}

          {/* Pompompurin Image, Text Bubble, and Questions Button */}
          <div className="relative w-full mt-16">
            {answer && (
              <>
                {/* Pompompurin Image and Text Bubble */}
                <div
                  className="absolute left-1/2 transform -translate-x-1/2 z-30"
                  style={{
                    bottom: "30px",
                    transition: "all 0.5s ease-out",
                  }}
                >
                  <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-full">
                    <TextBubble message={answer === "Yes" ? "Yay! 💖" : "Absolutely fantastic! 💖💖"} />
                  </div>
                  <Image
                    src="./pompompurin2.png"
                    alt="Pompompurin celebrating"
                    width={300}
                    height={300}
                    className="transform-gpu transition-all duration-500 scale-110 animate-bounce-gentle"
                  />
                </div>

                {/* Questions Button */}
                <div className="relative z-40 animate-fade-in">
                    <div className="flex justify-center mt-4">
                    <Link
                      href="https://forms.gle/RoVRUdDAgySd52x68"
                      className="bg-yellow-400 text-white px-8 py-3 rounded-full hover:bg-yellow-500 
                      transition-all font-bold text-lg hover:scale-110 transform-gpu 
                      flex items-center gap-2 animate-bounce-gentle"
                    >
                      <span className="text-center">I have a few questions before we go! 💌</span>
                    </Link>
                    </div>
                </div>
              </>
            )}
          </div>

          {/* Non-celebrating Pompompurin (visible before answer) */}
          {!answer && (
            <div className="absolute z-20 left-1/2 bottom-0 transform -translate-x-1/2">
              <Image
                src="./pompompurin1.png"
                alt="Pompompurin"
                width={300}
                height={300}
                className="transform-gpu transition-all duration-500 hover:scale-105"
              />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

