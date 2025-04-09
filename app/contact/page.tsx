import { Mail, MapPin, Phone, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions about our tours or need help planning your perfect Thai adventure? We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name*</Label>
                <Input id="first-name" required placeholder="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name*</Label>
                <Input id="last-name" required placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email*</Label>
              <Input id="email" type="email" required placeholder="john.doe@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+1 (555) 123-4567" />
              <p className="text-xs text-muted-foreground">For WhatsApp/call if you prefer</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="inquiry-type">What can we help you with?*</Label>
              <Select required>
                <SelectTrigger id="inquiry-type">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="itinerary">Create a personalized itinerary</SelectItem>
                  <SelectItem value="booking">Book a specific tour</SelectItem>
                  <SelectItem value="information">Get more information</SelectItem>
                  <SelectItem value="feedback">Provide feedback</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="travel-date">When are you planning to travel?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input id="travel-date" type="month" placeholder="Select month" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Trip duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-7">1-7 days</SelectItem>
                    <SelectItem value="8-14">8-14 days</SelectItem>
                    <SelectItem value="15-21">15-21 days</SelectItem>
                    <SelectItem value="22+">22+ days</SelectItem>
                    <SelectItem value="not-sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Your Message*</Label>
              <Textarea
                id="message"
                required
                placeholder="Tell us what you're looking for in your Thai adventure..."
                className="min-h-[150px]"
              />
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 mb-4">
              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-3 mt-0.5">
                  <Clock className="h-4 w-4 text-amber-600" />
                </div>
                <p className="text-sm">
                  <span className="font-semibold">24-Hour Response Guarantee:</span> Submit your inquiry today, and our
                  travel experts will create a personalized itinerary for you within 24 hours!
                </p>
              </div>
            </div>
            <Button type="submit" className="w-full py-6" size="lg">
              Send Message & Get Personalized Itinerary
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6 flex items-start">
                  <MapPin className="h-6 w-6 text-amber-500 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Our Office</h3>
                    <p className="text-muted-foreground">123 Sukhumvit Road, Bangkok, Thailand 10110</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start">
                  <Phone className="h-6 w-6 text-amber-500 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+66 2 123 4567</p>
                    <p className="text-muted-foreground">+66 8 1234 5678 (WhatsApp available)</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start">
                  <Mail className="h-6 w-6 text-amber-500 mr-4 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@thaijourney.com</p>
                    <p className="text-muted-foreground">bookings@thaijourney.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-2 text-muted-foreground">
                    <p>All times are in Thailand Standard Time (GMT+7)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
        <div className="h-[400px] w-full rounded-lg overflow-hidden border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5630797611885!2d100.56324707575756!3d13.740622097615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61f0f8e10ac7%3A0x31823cf6c0d8fcd5!2sSukhumvit%20Rd%2C%20Khlong%20Toei%2C%20Bangkok%2C%20Thailand!5e0!3m2!1sen!2sus!4v1682345678901!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
