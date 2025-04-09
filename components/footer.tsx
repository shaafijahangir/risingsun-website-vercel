import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4">Rising Sun Travel Agency</h3>
            <p className="text-gray-400 mb-4">
              Creating authentic Thai experiences since 1988. Let us guide you through the wonders of Thailand.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-400 hover:text-white">
                  Tours & Packages
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-gray-400 hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">
                  Travel Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/plan" className="text-gray-400 hover:text-white">
                  Plan Your Trip
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">Nana Soi-3, Bangkok, Thailand</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+66 87 705 3366 (WhatsApp available)</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <span className="text-gray-400">salimjahangir67@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for travel tips, new tours, and special offers.
            </p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700 text-white" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rising Sun Travel Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
