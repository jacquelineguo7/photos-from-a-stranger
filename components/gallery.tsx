import Image from "next/image"

export const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-12%20at%2014.48.12-EENLGRRAk42erXmYFsIK0sqYDLTx0n.png",
    height: 800,
    width: 600,
  },
  { src: "/placeholder.svg?height=300&width=200", height: 300, width: 200 },
  { src: "/placeholder.svg?height=250&width=250", height: 250, width: 250 },
  { src: "/placeholder.svg?height=400&width=300", height: 400, width: 300 },
  { src: "/placeholder.svg?height=200&width=350", height: 200, width: 350 },
  { src: "/placeholder.svg?height=300&width=200", height: 300, width: 200 },
  { src: "/placeholder.svg?height=250&width=250", height: 250, width: 250 },
  { src: "/placeholder.svg?height=350&width=300", height: 350, width: 300 },
  { src: "/placeholder.svg?height=200&width=300", height: 200, width: 300 },
]

interface GalleryProps {
  onImageClick: (index: number) => void
}

export default function Gallery({ onImageClick }: GalleryProps) {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            style={{
              paddingBottom: `${(image.height / image.width) * 100}%`,
            }}
            onClick={() => onImageClick(index)}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

