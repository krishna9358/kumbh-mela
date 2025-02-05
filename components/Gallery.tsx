import Image from "next/image"

const Gallery = () => {
  const galleryItems = [
    { type: "video", src: "/11.mov", poster: "/placeholder.svg?height=300&width=400", alt: "Kumbh Mela Video 1" },
    { type: "video", src: "/12.mov", poster: "/placeholder.svg?height=300&width=400", alt: "Kumbh Mela Video 2" },
    { type: "video", src: "/13.mov", poster: "/placeholder.svg?height=300&width=400", alt: "Kumbh Mela Video 3" },
    { type: "image", src: "/14.jpg", poster: "/placeholder.svg?height=300&width=400", alt: "Kumbh Mela Image" },
    { type: "video", src: "/15.mov", poster: "/placeholder.svg?height=300&width=400", alt: "Kumbh Mela Video 4" },
    { type: "video", src: "/16.mov", poster: "/placeholder.svg?height=300&width=400", alt: "Kumbh Mela Video 5" },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative aspect-w-4 aspect-h-3">
            {item.type === "image" ? (
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt || "Kumbh Mela"}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            ) : (
              <video controls poster={item.poster} className="w-full h-full object-cover rounded-lg">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery

