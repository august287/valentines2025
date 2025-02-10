"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'

interface FloatingImage {
  id: number
  x: number
  y: number
  speedX: number
  speedY: number
  size: number
  isDragging: boolean
  imageUrl: string
}

export default function FloatingImages() {
  const [images, setImages] = useState<FloatingImage[]>([])
  const [draggedImage, setDraggedImage] = useState<number | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const imageUrls = [
    '/pompompurin1.png',
    '/pompompurin2.png',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg'
  ]

  useEffect(() => {
    // Create 40 random images
    const newImages: FloatingImage[] = Array.from({ length: 26 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      size: 100,
      isDragging: false,
      imageUrl: imageUrls[Math.floor(Math.random() * imageUrls.length)]
    }))
    setImages(newImages)
  }, [])

  const handleMouseDown = (e: React.MouseEvent, id: number) => {
    const image = images.find(img => img.id === id)
    if (image) {
      setDraggedImage(id)
      setDragOffset({
        x: e.clientX - image.x,
        y: e.clientY - image.y
      })
      setImages(prevImages =>
        prevImages.map(img =>
          img.id === id ? { ...img, isDragging: true } : img
        )
      )
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedImage !== null) {
      setImages(prevImages =>
        prevImages.map(img =>
          img.id === draggedImage
            ? {
                ...img,
                x: e.clientX - dragOffset.x,
                y: e.clientY - dragOffset.y
              }
            : img
        )
      )
    }
  }

  const handleMouseUp = () => {
    if (draggedImage !== null) {
      setImages(prevImages =>
        prevImages.map(img =>
          img.id === draggedImage ? { ...img, isDragging: false } : img
        )
      )
      setDraggedImage(null)
    }
  }

  useEffect(() => {
    const animate = () => {
      setImages(prevImages => 
        prevImages.map(img => {
          if (img.isDragging) return img

          let newX = img.x + img.speedX
          let newY = img.y + img.speedY

          if (newX <= 0 || newX >= window.innerWidth - img.size) {
            img.speedX *= -1
            newX = img.x + img.speedX
          }
          if (newY <= 0 || newY >= window.innerHeight - img.size) {
            img.speedY *= -1
            newY = img.y + img.speedY
          }

          return {
            ...img,
            x: newX,
            y: newY
          }
        })
      )
      requestAnimationFrame(animate)
    }

    const animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <div 
      className="fixed inset-0 z-0"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {images.map(img => (
        <div
          key={img.id}
          className={`absolute cursor-grab 
            ${img.isDragging ? 'opacity-50 cursor-grabbing z-50' : 'hover:opacity-40'}`}
          style={{
            transform: `translate(${img.x}px, ${img.y}px)`,
            width: `${img.size}px`,
            height: `${img.size}px`,
          }}
          onMouseDown={(e) => handleMouseDown(e, img.id)}
        >
          <Image
            src={img.imageUrl}
            alt="Floating Pompompurin"
            width={img.size}
            height={img.size}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  )
} 