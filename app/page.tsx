import Image from "next/image"
import Link from "next/link"
import HotelCarousel from "@/components/HotelCarousel"
import Gallery from "@/components/Gallery"
import { Mail, Phone } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <Image src="/1.jpeg" alt="Kumbh Mela" layout="fill" objectFit="cover" quality={100} priority />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Support Kumbh Mela</h1>
          <p className="text-xl mb-3">Join us in preserving and celebrating this sacred tradition</p>
          <p className="text-xl mb-8">DONATION FOR 11 THALI</p> <br />
          <Link
            href="https://razorpay.me/@vrindavangardenpratapandbhagw?amount=9oVI%2BF1Ke1S3A1yDpcZhrw%3D%3D"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-xl transition duration-300"
            target="_blank"
          >
            Donate Now
          </Link>
        </div>
      </section>

      {/* About Kumbh Mela */}
      <section className="w-full py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">About Kumbh Mela</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Kumbh Mela is one of the largest peaceful gatherings in the world, where millions of Hindu pilgrims come
            together to bathe in sacred rivers. Your donation helps support this ancient tradition and ensures its
            continuity for future generations.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Kumbh Mela Donation Gallery</h2>
        <Gallery />
      </section>

      {/* Sponsors */}
      <section className="w-full py-16 bg-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Generous Sponsors</h2>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <p className="font-semibold text-gray-800">
                VRINDAVAN GARDEN AND GUEST HOUSE,<br />
                JHALWA CHAURAHA ,
                PRAYAGRAJ,<br />
                UTTAR PRADESH,
                211012<br />
                <div className="flex justify-center items-center gap-4 mt-2">
                  <span className="flex items-center gap-1">
                    <Phone size={18} /> +91 9336006955, +91 8707817272
                  </span>
                  
                  </div>
                  <div className="flex justify-center items-center gap-4 mt-2">
                  <span className="flex items-center gap-1">
                    <Mail size={18} /> babagroup2020@gmail.com
                  </span>
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

