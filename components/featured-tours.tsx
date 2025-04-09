"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Sample tour data - this would come from your CMS or database in a real application
const tours = [
  {
    id: 1,
    title: "Bangkok & Ayutthaya Heritage Tour",
    description: "Explore the vibrant capital and ancient ruins of Thailand's former capital.",
    image: "/placeholder.svg?height=600&width=800",
    duration: "5 days",
    groupSize: "2-12 people",
    location: "Bangkok & Ayutthaya",
    startingDate: "Available year-round",
    price: 799,
    featured: true,
    popular: true,
  },
  {
    id: 2,
    title: "Chiang Mai Cultural Immersion",
    description: "Experience the rich culture and stunning mountains of Northern Thailand.",
    image: "/placeholder.svg?height=600&width=800",
    duration: "7 days",
    groupSize: "2-10 people",
    location: "Chiang Mai",
    startingDate: "Available year-round",
    price: 1099,
    featured: true,
    popular: true,
  },
  {
    id: 3,
    title: "Southern Thailand Island Hopping",
    description: "Discover the pristine beaches and crystal waters of Thailand's southern islands.",
    image: "/placeholder.svg?height=600&width=800",
    duration: "8 days",
    groupSize: "2-8 people",
    location: "Phuket, Krabi, Phi Phi Islands",
    startingDate: "October - May",
    price: 1299,
    featured: true,
    popular: true,
  },
]

export default function FeaturedTours() {
  const [hoveredTour, setHoveredTour] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {tours.map((tour) => (
        <Card
          key={tour.id}
          className="overflow-hidden border-none shadow-lg transition-all duration-300 hover:shadow-xl"
          onMouseEnter={() => setHoveredTour(tour.id)}
          onMouseLeave={() => setHoveredTour(null)}
        >
          <div className="relative h-64">
            <Image
              src={tour.image || "/placeholder.svg"}
              alt={tour.title}
              fill
              className={`object-cover transition-transform duration-700 ${
                hoveredTour === tour.id ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {tour.featured && <Badge className="bg-amber-500 hover:bg-amber-600">Featured</Badge>}
              {tour.popular && (
                <Badge variant="outline" className="bg-white/70 text-black hover:bg-white">
                  Popular
                </Badge>
              )}
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
            <p className="text-muted-foreground mb-4">{tour.description}</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 text-amber-500" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center text-sm">
                <Users className="h-4 w-4 mr-2 text-amber-500" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-2 text-amber-500" />
                <span>{tour.startingDate}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 pt-0 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">${tour.price}</span>
              <span className="text-muted-foreground text-sm"> / per person</span>
            </div>
            <Button asChild>
              <Link href={`/tours/${tour.id}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
