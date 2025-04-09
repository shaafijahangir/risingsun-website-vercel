import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, MapPin, Phone, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FeaturedTours from "@/components/featured-tours"
import TestimonialSlider from "@/components/testimonial-slider"
import HeroCarousel from "@/components/hero-carousel"
import InquiryForm from "@/components/inquiry-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <HeroCarousel />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
          <Badge className="mb-4 bg-amber-500 hover:bg-amber-600 text-white">35+ Years of Excellence</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Rising Sun Travel Agency</h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Your gateway to authentic Thai experiences with exclusive prices and local expertise since 1988
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-white border-none">
              <Link href="/plan">
                Get Your Custom Itinerary <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 text-white hover:bg-white/30 border-white">
              <Link href="/tours">Explore Our Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Thailand's Premier Travel Agency</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Rising Sun Travel Agency offers exclusive prices and insider access to Thailand's most breathtaking
              destinations. With over three decades of experience, we craft unforgettable journeys tailored to your
              dreams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Exclusive Prices</h3>
                <p className="text-muted-foreground">
                  Enjoy special rates on flights, hotels, and attractions unavailable to the general public.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                    <path d="M13 13h4" />
                    <path d="M13 17h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Premium Accommodations</h3>
                <p className="text-muted-foreground">
                  From luxury resorts to authentic homestays, we secure the best places to stay across Thailand.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Seamless Transportation</h3>
                <p className="text-muted-foreground">
                  Comfortable and reliable transportation throughout your entire Thai adventure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-600"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Our guides share insider knowledge and access to hidden gems most tourists never discover.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 px-4 md:px-6 bg-amber-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Get Your Custom Itinerary</Badge>
              <h2 className="text-3xl font-bold mb-4">Your Dream Thai Adventure Awaits</h2>
              <p className="text-lg mb-6">
                Tell us what you're looking for, and within 24 hours, we'll create a personalized itinerary with a
                detailed budget. No commitment required – just the perfect plan for your Thai adventure.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3 mt-0.5">
                    <Calendar className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">24-Hour Turnaround</h3>
                    <p className="text-muted-foreground">
                      Submit your inquiry today, receive your custom plan tomorrow
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3 mt-0.5">
                    <Users className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Personalized Experience</h3>
                    <p className="text-muted-foreground">
                      Every itinerary is tailored to your specific interests and budget
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-3 mt-0.5">
                    <Star className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">Exclusive Access</h3>
                    <p className="text-muted-foreground">Benefit from our special rates and insider connections</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <InquiryForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Tour Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most sought-after experiences, carefully crafted to showcase the best of Thailand.
            </p>
          </div>
          <FeaturedTours />
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/tours">View All Tours</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4">Why Choose Rising Sun</Badge>
              <h2 className="text-3xl font-bold mb-6">35+ Years of Creating Unforgettable Thai Experiences</h2>
              <p className="text-muted-foreground mb-6">
                Since 1988, Rising Sun Travel Agency has been helping travelers discover the authentic beauty of
                Thailand. Our deep local knowledge, exclusive partnerships, and attention to detail set us apart.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="mr-4 bg-amber-100 p-2 rounded-full">
                    <Users className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Local Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Our guides are locals with deep cultural knowledge and insights.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-amber-100 p-2 rounded-full">
                    <Star className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Exclusive Pricing</h3>
                    <p className="text-sm text-muted-foreground">Special rates you won't find anywhere else.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-amber-100 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Flexible Planning</h3>
                    <p className="text-sm text-muted-foreground">
                      Customize your itinerary to create your perfect Thai adventure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-amber-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">24/7 Support</h3>
                    <p className="text-sm text-muted-foreground">
                      We're always available to assist you throughout your journey.
                    </p>
                  </div>
                </div>
              </div>
              <Button className="mt-8" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden order-1 lg:order-2">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Thai cultural experience"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 bg-amber-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl font-bold mb-4">What Our Travelers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from travelers who have experienced the magic of Thailand with our expert guidance.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-16 px-4 md:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Destinations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore Thailand's most breathtaking locations with our expert guides.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Bangkok", image: "/placeholder.svg?height=600&width=800" },
              { name: "Chiang Mai", image: "/placeholder.svg?height=600&width=800" },
              { name: "Phuket", image: "/placeholder.svg?height=600&width=800" },
              { name: "Krabi", image: "/placeholder.svg?height=600&width=800" },
              { name: "Pattaya", image: "/placeholder.svg?height=600&width=800" },
              { name: "Chon Buri", image: "/placeholder.svg?height=600&width=800" },
            ].map((destination, index) => (
              <Link href={`/destinations/${destination.name.toLowerCase().replace(" ", "-")}`} key={index}>
                <div className="relative h-64 rounded-lg overflow-hidden group">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 transition-all duration-300 group-hover:bg-opacity-50">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-white mr-2" />
                      <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-amber-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Thailand?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let us help you plan your perfect Thai adventure. Contact us today to start your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              <Link href="/plan">
                Get Your Custom Itinerary <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
