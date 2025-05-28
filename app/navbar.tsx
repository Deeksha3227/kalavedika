"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full flex justify-between items-center px-4 md:px-8 py-4 bg-white/90 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <Link href="/" className="flex items-center">
        <img src="/aj.svg" alt="AJIET Logo" className="h-15 w-auto" />
      </Link>

      {/* Mobile menu button */}
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Desktop navigation */}
      <ul className="hidden md:flex gap-6 text-base">
        <li>
          <Link href="/" className="text-gray-800 hover:text-orange-600 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/events" className="text-gray-800 hover:text-orange-600 transition-colors">
            Events
          </Link>
        </li>
        <li>
          <Link href="/register" className="text-gray-800 hover:text-orange-600 transition-colors">
            Register
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-800 hover:text-orange-600 transition-colors">
            About
          </Link>
        </li>
      </ul>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col py-2">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
