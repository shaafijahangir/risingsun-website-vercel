"use client"

import type React from "react"

import { useState } from "react"
import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-lg mb-2">Thank You!</h3>
          <p>
            We've received your inquiry and will create your personalized itinerary within 24 hours. Check your email
            soon!
          </p>
        </div>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Get Your Free Personalized Itinerary</h3>
      <p className="text-muted-foreground mb-6">
        Fill out this quick form, and we'll send you a custom itinerary with pricing within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name*</Label>
            <Input id="first-name" required placeholder="Your first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name*</Label>
            <Input id="last-name" required placeholder="Your last name" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address*</Label>
          <Input id="email" type="email" required placeholder="your.email@example.com" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="travel-date">When do you plan to visit?*</Label>
            <div className="relative">
              <Input id="travel-date" type="month" required />
              <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Trip Duration*</Label>
            <Select required>
              <SelectTrigger id="duration">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3">1-3 days</SelectItem>
                <SelectItem value="4-7">4-7 days</SelectItem>
                <SelectItem value="8-14">8-14 days</SelectItem>
                <SelectItem value="15+">15+ days</SelectItem>
                <SelectItem value="not-sure">Not sure yet</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="travelers">Number of Travelers*</Label>
          <Select required>
            <SelectTrigger id="travelers">
              <SelectValue placeholder="Select number" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "person" : "people"}
                </SelectItem>
              ))}
              <SelectItem value="10+">More than 10</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="interests">What are you most interested in?*</Label>
          <Select required>
            <SelectTrigger id="interests">
              <SelectValue placeholder="Select interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beaches">Beaches & Islands</SelectItem>
              <SelectItem value="culture">Cultural Experiences</SelectItem>
              <SelectItem value="food">Food & Cuisine</SelectItem>
              <SelectItem value="adventure">Adventure Activities</SelectItem>
              <SelectItem value="nature">Nature & Wildlife</SelectItem>
              <SelectItem value="luxury">Luxury Experiences</SelectItem>
              <SelectItem value="family">Family-Friendly Activities</SelectItem>
              <SelectItem value="mix">Mix of Everything</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Approximate Budget per Person</Label>
          <Select>
            <SelectTrigger id="budget">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy ($500-$1000)</SelectItem>
              <SelectItem value="standard">Standard ($1000-$2000)</SelectItem>
              <SelectItem value="premium">Premium ($2000-$3500)</SelectItem>
              <SelectItem value="luxury">Luxury ($3500+)</SelectItem>
              <SelectItem value="not-sure">Not sure yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Details</Label>
          <Textarea
            id="message"
            placeholder="Tell us more about what you're looking for in your Thai adventure..."
            className="min-h-[100px]"
          />
        </div>

        <Button type="submit" className="w-full">
          Get My Free Itinerary
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          By submitting this form, you'll receive your personalized itinerary within 24 hours. No obligation to book.
        </p>
      </form>
    </div>
  )
}
