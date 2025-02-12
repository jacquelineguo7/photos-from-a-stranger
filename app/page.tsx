"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Gallery from "@/components/gallery"
import AboutModal from "@/components/about-modal"
import FullScreenView from "@/components/full-screen-view"

export default function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [fullScreenImage, setFullScreenImage] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar onAboutClick={() => setIsAboutOpen(true)} />
      <Gallery onImageClick={setFullScreenImage} />
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      {fullScreenImage !== null && (
        <FullScreenView initialIndex={fullScreenImage} onClose={() => setFullScreenImage(null)} />
      )}
    </main>
  )
}

