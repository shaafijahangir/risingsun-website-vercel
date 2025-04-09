"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

// These would be replaced with actual images of Thailand's attractions
const carouselImages = [
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Beautiful beaches of Phuket",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Grand Palace in Bangkok",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Temples of Chiang Mai",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Limestone cliffs of Krabi",
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Vibrant nightlife of Pattaya",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
