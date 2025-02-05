"use client"
import Image from "next/image"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const HotelCarousel = () => {
  const hotelImages = [
    { src: "/placeholder.svg?height=400&width=600", alt: "Vrindavan Garden Pratap 1" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Vrindavan Garden Pratap 2" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Bhagvati Guest House 1" },
    { src: "/placeholder.svg?height=400&width=600", alt: "Bhagvati Guest House 2" },
  ]

  return (
    <div className="max-w-3xl mx-auto">
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {hotelImages.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default HotelCarousel

