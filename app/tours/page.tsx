import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, Filter, MapPin, Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

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
    category: "Cultural",
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
    category: "Cultural",
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
    category: "Beach",
  },
  {
    id: 4,
    title: "Khao Sok National Park Adventure",
    description: "Explore one of the world's oldest rainforests and stunning limestone formations.",
    image: "/placeholder.svg?height=600&width=800",
    duration: "4 days",
    groupSize: "2-10 people",
    location: "Khao Sok National Park",
    startingDate: "Year-round",
    price: 699,
    featured: false,
    popular: false,
    category: "Adventure",
  },
  {
    id: 5,
    title: "Thai Culinary Journey",
    description: "Learn the secrets of Thai cuisine with cooking classes and food tours.",
    image: "/placeholder.svg?height=600&width=800",
    duration: "6 days",
    groupSize: "2-8 people",
    location: "Bangkok, Chiang Mai",
    startingDate: "Year-round",
    price: 899,
    featured: false,
    popular: true,
    category: "Food",
  },
  {
    id: 6,
    title: "Elephant Sanctuary & Wildlife Experience",
    description: "Ethical wildlife encounters and conservation education in Northern Thailand.",
    image: "/placeholder.svg?height=600&width=800",
    duration: "5 days",
    groupSize: "2-8 people",
    location: "Chiang Mai, Chiang Rai",
    startingDate: "Year-round",
    price: 999,
    featured: false,
    popular: true,
    category: "Wildlife",
  },
]

export default function ToursPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Tour Packages</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our carefully crafted tour packages designed to showcase the best of Thailand's culture, nature, and
          cuisine.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-1/4">
          <div className="sticky top-24 space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Filters</h2>
                <Button variant="ghost" size="sm">
                  Reset
                </Button>
              </div>
              <div className="relative mb-6">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search tours..." className="pl-8" />
              </div>
              <Separator className="my-6" />
            </div>

            <div>
              <h3 className="font-semibold mb-3">Tour Categories</h3>
              <div className="space-y-2">
                {["Cultural", "Beach", "Adventure", "Food", "Wildlife"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={`category-${category.toLowerCase()}`} />
                    <Label htmlFor={`category-${category.toLowerCase()}`}>{category}</Label>
                  </div>
                ))}
              </div>
              <Separator className="my-6" />
            </div>

            <div>
              <h3 className="font-semibold mb-3">Duration</h3>
              <div className="space-y-2">
                {["1-3 days", "4-7 days", "8-14 days", "15+ days"].map((duration) => (
                  <div key={duration} className="flex items-center space-x-2">
                    <Checkbox id={`duration-${duration.split(" ")[0]}`} />
                    <Label htmlFor={`duration-${duration.split(" ")[0]}`}>{duration}</Label>
                  </div>
                ))}
              </div>
              <Separator className="my-6" />
            </div>

            <div>
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="space-y-2">
                {["Under $500", "$500 - $1000", "$1000 - $1500", "$1500+"].map((price) => (
                  <div key={price} className="flex items-center space-x-2">
                    <Checkbox id={`price-${price.split("$")[1]?.split(" ")[0] || "under500"}`} />
                    <Label htmlFor={`price-${price.split("$")[1]?.split(" ")[0] || "under500"}`}>{price}</Label>
                  </div>
                ))}
              </div>
              <Separator className="my-6 lg:hidden" />
            </div>

            <Button className="w-full lg:flex hidden">
              <Filter className="mr-2 h-4 w-4" /> Apply Filters
            </Button>
          </div>
        </div>

        {/* Tour Listings */}
        <div className="lg:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden border-none shadow-lg">
                <div className="relative h-48">
                  <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
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
                  <Badge variant="outline" className="mb-2">
                    {tour.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{tour.description}</p>
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
        </div>
      </div>
    </div>
  )
}
