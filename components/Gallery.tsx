import Image from "next/image"

type GalleryItem = {
  type: "image" | "video"
  src: string
  poster?: string
  alt: string
}

const Gallery = () => {
  const galleryItems: GalleryItem[] = [
    { type: "image", src: "/placeholder1.png", alt: "Kumbh Mela Image 1" },
    { type: "image", src: "/placeholder2.png", alt: "Kumbh Mela Image 2" },
    { type: "image", src: "/placeholder3.png", alt: "Kumbh Mela Image 3" },
    { type: "image", src: "/14.png", alt: "Kumbh Mela Image 4" },
    { type: "image", src: "/placeholder4.png", alt: "Kumbh Mela Image 5" },
    { type: "image", src: "/5.png", poster: "/poster1.jpg", alt: "Kumbh Mela Video 1" },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative aspect-[4/3]">
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-lg object-cover"
                priority={index < 3}
              />
            ) : (
              <video 
                controls 
                poster={item.poster}
                className="w-full h-full object-cover rounded-lg"
                playsInline
              >
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

