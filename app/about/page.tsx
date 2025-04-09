import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, CheckCircle, MapPin, Phone, Star, Users, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TestimonialSlider from "@/components/testimonial-slider"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge className="mb-4">About Rising Sun Travel Agency</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">35+ Years of Thai Travel Excellence</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Since 1988, we've been helping travelers discover the authentic beauty of Thailand with exclusive access,
          insider knowledge, and personalized service.
        </p>
      </div>

      {/* Our Story */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="Rising Sun Travel Agency history"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Rising Sun Travel Agency was founded in 1988 by a passionate team of Thai travel enthusiasts who saw the
              need for a travel service that could showcase the authentic beauty of Thailand to international visitors.
            </p>
            <p className="text-lg mb-6">
              What began as a small office in Bangkok has grown into Thailand's premier travel agency with locations
              across the country, including Bangkok, Chiang Mai, Phuket, Krabi, Chon Buri, and Pattaya.
            </p>
            <p className="text-lg mb-6">
              Over our 35+ years in business, we've built strong relationships with hotels, attractions, transportation
              providers, and restaurants throughout Thailand. These partnerships allow us to offer our clients exclusive
              prices and experiences that aren't available to the general public.
            </p>
            <p className="text-lg">
              Today, we continue our founder's mission of creating unforgettable Thai experiences that combine luxury,
              authenticity, and value for travelers from around the world.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 px-4 md:px-6 bg-amber-50 rounded-xl mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rising Sun Travel Agency offers unique advantages that make your Thai adventure truly exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Star className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Exclusive Pricing</h3>
                  <p className="text-muted-foreground">
                    Our long-standing relationships with hotels, attractions, and transportation providers allow us to
                    offer rates that are often 15-30% below market prices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                  <p className="text-muted-foreground">
                    Our team consists of Thai locals who know every hidden gem, cultural nuance, and insider secret to
                    make your experience authentic and memorable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Personalized Service</h3>
                  <p className="text-muted-foreground">
                    We create custom itineraries tailored to your interests, preferences, and budget, ensuring every
                    moment of your trip is exactly what you dreamed of.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    We personally vet every hotel, tour, and experience we recommend, ensuring they meet our high
                    standards for quality, safety, and value.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Nationwide Presence</h3>
                  <p className="text-muted-foreground">
                    With offices in Bangkok, Chiang Mai, Phuket, Krabi, Chon Buri, and Pattaya, we offer on-the-ground
                    support throughout your journey.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Our dedicated support team is available around the clock to assist with any questions or issues that
                    may arise during your trip.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate travel experts behind Rising Sun Travel Agency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Salim Jahangir",
              title: "Founder & CEO",
              image: "/placeholder.svg?height=400&width=400",
              bio: "With over 35 years in the Thai tourism industry, Salim's vision and leadership have made Rising Sun the premier travel agency in Thailand.",
            },
            {
              name: "Somchai Thongchai",
              title: "Head of Operations",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Somchai ensures that every aspect of your journey runs smoothly, from transportation to accommodations and activities.",
            },
            {
              name: "Malai Srisuk",
              title: "Chief Experience Officer",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Malai's deep knowledge of Thai culture and hidden gems helps create unique, authentic experiences for our clients.",
            },
            {
              name: "Priya Patel",
              title: "Customer Relations Manager",
              image: "/placeholder.svg?height=400&width=400",
              bio: "Priya ensures that every client receives personalized attention and that their experience exceeds expectations.",
            },
          ].map((member, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-amber-600 mb-3">{member.title}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 bg-amber-50 rounded-xl mb-20">
        <div className="text-center mb-12">
          <Badge className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from travelers who have experienced the Rising Sun difference.
          </p>
        </div>
        <TestimonialSlider />
      </section>

      {/* Contact Information */}
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to start planning your Thai adventure? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-1">Mobile: +66 87 705 3366</p>
                  <p className="text-muted-foreground">WhatsApp available</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Email Us</h3>
                  <p className="text-muted-foreground">salimjahangir67@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                  <p className="text-muted-foreground">
                    Offices in Bangkok, Chiang Mai, Phuket, Krabi, Chon Buri, and Pattaya
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-8 bg-amber-600 text-white rounded-xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Best of Thailand?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Let us create your perfect Thai adventure with exclusive prices and insider access.
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
