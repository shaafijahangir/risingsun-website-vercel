"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-amber-600">ThaiJourney</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-amber-600">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-amber-600">
            About Us
          </Link>
          <Link href="/tours" className="text-sm font-medium transition-colors hover:text-amber-600">
            Tours
          </Link>
          <Link href="/destinations" className="text-sm font-medium transition-colors hover:text-amber-600">
            Destinations
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-amber-600">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-amber-600">
            Contact
          </Link>
          <Link href="/plan" className="text-sm font-medium transition-colors hover:text-amber-600">
            Plan Your Trip
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/contact">Inquire Now</Link>
          </Button>
          <Button asChild>
            <Link href="/tours">Book a Tour</Link>
          </Button>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 py-6">
              <Link
                href="/"
                className="text-lg font-medium transition-colors hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium transition-colors hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/tours"
                className="text-lg font-medium transition-colors hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                Tours
              </Link>
              <Link
                href="/destinations"
                className="text-lg font-medium transition-colors hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                Destinations
              </Link>
              <Link
                href="/blog"
                className="text-lg font-medium transition-colors hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium transition-colors hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/plan"
                className="text-lg font-medium transition-colors hover:text-amber-600"
                onClick={() => setIsOpen(false)}
              >
                Plan Your Trip
              </Link>
              <div className="flex flex-col gap-2 mt-4">
                <Button asChild variant="outline">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Inquire Now
                  </Link>
                </Button>
                <Button asChild>
                  <Link href="/tours" onClick={() => setIsOpen(false)}>
                    Book a Tour
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
