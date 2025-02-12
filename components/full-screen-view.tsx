"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { images } from "./gallery"

interface FullScreenViewProps {
  initialIndex: number
  onClose: () => void
}

export default function FullScreenView({ initialIndex, onClose }: FullScreenViewProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [cursorPosition, setCursorPosition] = useState<"left" | "right" | null>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    },
    [onClose],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [handleKeyDown])

  const handleMouseMove = (e: React.MouseEvent) => {
    const halfWidth = window.innerWidth / 2
    setCursorPosition(e.clientX > halfWidth ? "right" : "left")
  }

  const handleClick = (e: React.MouseEvent) => {
    // Prevent navigation when clicking on the image or close button
    if ((e.target as HTMLElement).closest(".image-container, .close-button")) return

    if (cursorPosition === "left") {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))
    } else if (cursorPosition === "right") {
      setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))
    }
  }

  return (
    <div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <button
        className="close-button absolute top-4 right-4 text-black hover:text-gray-600 transition-colors z-10"
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
      >
        <X size={24} />
      </button>
      <div className="image-container relative w-[40%] h-full flex items-center justify-center">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={`Full screen image ${currentIndex + 1}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div
        className={`absolute inset-0 ${
          cursorPosition === "left"
            ? "cursor-[url('/left-arrow.svg'),_w-resize]"
            : cursorPosition === "right"
              ? "cursor-[url('/right-arrow.svg'),_e-resize]"
              : "cursor-default"
        }`}
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black opacity-50 hover:opacity-100 transition-opacity">
        <ChevronLeft size={48} />
      </div>
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black opacity-50 hover:opacity-100 transition-opacity">
        <ChevronRight size={48} />
      </div>
    </div>
  )
}

