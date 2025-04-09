import Image from "next/image"
import { Calendar, CheckCircle, Clock, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function PlanPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Your Dream Thai Adventure Starts Here</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Tell us what you're looking for, and within 24 hours, we'll create a personalized itinerary just for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Personalized Thailand Experience"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Why Choose Our Personalized Planning Service?</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">24-Hour Turnaround</h3>
                    <p className="text-muted-foreground">
                      Submit your preferences today, and within 24 hours, you'll receive a custom itinerary tailored
                      just for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Local Expertise</h3>
                    <p className="text-muted-foreground">
                      With 35+ years of experience, we know Thailand's hidden gems that most tourists never discover.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Completely Customizable</h3>
                    <p className="text-muted-foreground">
                      Your initial itinerary is just the starting point. We'll refine it together until it's perfect for
                      you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">No Obligation</h3>
                    <p className="text-muted-foreground">
                      Receive your custom itinerary with no commitment required. We're confident you'll love what we
                      create.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-2 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold">The Process is Simple</h3>
                    <ol className="mt-2 space-y-2 text-muted-foreground">
                      <li>1. Fill out the form with your travel preferences</li>
                      <li>2. Receive your personalized itinerary within 24 hours</li>
                      <li>3. Schedule a call to refine the details together</li>
                      <li>4. Finalize your dream trip and let us handle the rest</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-6">
            <h3 className="text-xl font-bold">What Our Travelers Say</h3>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Customer" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="flex mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-amber-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-muted-foreground mb-2">
                      "I was amazed at how quickly they created the perfect itinerary for us. They included activities
                      we didn't even know existed but were exactly what we were looking for!"
                    </p>
                    <p className="font-semibold">Sarah & Michael, Australia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Customer" fill className="object-cover" />
                  </div>
                  <div>
                    <div className="flex mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-amber-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="italic text-muted-foreground mb-2">
                      "The personalized itinerary service saved us countless hours of research. Our trip was perfectly
                      balanced with cultural experiences, adventure, and relaxation."
                    </p>
                    <p className="font-semibold">David, United States</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="sticky top-24">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Create Your Dream Thai Experience</h2>
              <p className="text-muted-foreground mb-6">
                Fill out this form, and within 24 hours, our travel experts will craft a personalized itinerary just for
                you.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name" className="text-base">
                      First Name*
                    </Label>
                    <Input id="first-name" required placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name" className="text-base">
                      Last Name*
                    </Label>
                    <Input id="last-name" required placeholder="Your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base">
                    Email Address*
                  </Label>
                  <Input id="email" type="email" required placeholder="your.email@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base">
                    Phone Number
                  </Label>
                  <Input id="phone" placeholder="Include country code" />
                  <p className="text-xs text-muted-foreground">For WhatsApp/call if you prefer</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-base">When are you planning to travel?*</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="arrival-date" className="text-sm">
                        Approximate Arrival
                      </Label>
                      <div className="relative">
                        <Input id="arrival-date" type="date" />
                        <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="departure-date" className="text-sm">
                        Approximate Departure
                      </Label>
                      <div className="relative">
                        <Input id="departure-date" type="date" />
                        <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">Don't worry if dates aren't fixed yet</p>
                </div>

                <div className="space-y-3">
                  <Label className="text-base">How many people will be traveling?*</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="adults" className="text-sm">
                        Adults
                      </Label>
                      <Select defaultValue="2">
                        <SelectTrigger id="adults">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                          <SelectItem value="10+">10+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="children" className="text-sm">
                        Children
                      </Label>
                      <Select defaultValue="0">
                        <SelectTrigger id="children">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                          <SelectItem value="7+">7+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Label className="text-base">What type of accommodation do you prefer?</Label>
                  <RadioGroup defaultValue="mid-range">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="budget" id="budget" />
                      <Label htmlFor="budget">Budget-friendly</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mid-range" id="mid-range" />
                      <Label htmlFor="mid-range">Mid-range</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="luxury" id="luxury" />
                      <Label htmlFor="luxury">Luxury</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mixed" id="mixed" />
                      <Label htmlFor="mixed">Mix of options</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label className="text-base">What interests you most about Thailand? (Select all that apply)</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Beaches & Islands",
                      "Cultural Experiences",
                      "Food & Cuisine",
                      "Adventure Activities",
                      "Wildlife & Nature",
                      "Historical Sites",
                      "Wellness & Spa",
                      "Shopping",
                      "Nightlife",
                      "Local Festivals",
                    ].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox id={`interest-${interest.toLowerCase().replace(/\s+/g, "-")}`} />
                        <Label htmlFor={`interest-${interest.toLowerCase().replace(/\s+/g, "-")}`}>{interest}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="destinations" className="text-base">
                    Any specific destinations in Thailand you want to visit?
                  </Label>
                  <Textarea
                    id="destinations"
                    placeholder="E.g., Bangkok, Chiang Mai, Phuket, etc."
                    className="min-h-[80px]"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="special-requests" className="text-base">
                    Any special requests or additional information?
                  </Label>
                  <Textarea
                    id="special-requests"
                    placeholder="Tell us about any special requirements, interests, or questions you have."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="terms" required />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor="terms" className="text-sm font-normal leading-snug text-muted-foreground">
                      I agree to receive my personalized itinerary via email. We respect your privacy and will never
                      share your information.
                    </Label>
                  </div>
                </div>

                <Button type="submit" className="w-full text-base py-6" size="lg">
                  Get My Free Personalized Itinerary
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  <MapPin className="inline-block h-3 w-3 mr-1" />
                  Your dream Thai adventure is just 24 hours away
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
