import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kumbh Mela Donation Site",
  description: "Support the Kumbh Mela tradition",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} m-0 p-0`}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white py-4">
          <nav className="container mx-auto px-4 flex items-center justify-center mt-10 bg-black bg-opacity-50 p-4">
            <h1 className="text-2xl font-bold text-center justify-center">Kumbh Mela 2025</h1>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 Kumbh Mela Donation Site. All rights reserved.</p>
            <p>Sponsored by Vrindavan Garden Pratap and Bhagvati Guest House</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

