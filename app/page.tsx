"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, Phone, Camera, Plane, Hotel, ArrowLeft, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InstallPrompt } from "@/components/install-prompt"
import Image from "next/image"

export default function HolidayItinerary() {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null)

  // Scroll to top when entering detail view
  useEffect(() => {
    if (selectedDestination !== null && typeof window !== 'undefined') {
      window.scrollTo(0, 0)
    }
  }, [selectedDestination])

  const tripSegments = [
    {
      location: "Beverly Hills Hotel",
      address: "9641 Sunset Boulevard, Beverly Hills, CA 90210",
      website: "https://www.dorchestercollection.com/en/los-angeles/the-beverly-hills-hotel/",
      dates: "Thursday, 31 July - Tuesday, 5 August 2025",
      duration: "6 nights",
      type: "luxury-hotel",
      description: "Iconic luxury in the heart of Beverly Hills",
      image: "/images/beverly-hills-hotel.jpg",
      activities: [
        "Rodeo Drive shopping",
        "Hollywood tours",
        "Fine dining experiences",
        "Spa treatments",
        "Pool relaxation",
      ],
      dailyItinerary: [
        {
          date: "Thursday, 31 July 2025",
          day: "Arrival Day",
          schedule: [
            { time: "2:00 PM", title: "Check-in", description: "Arrive and settle into your suite", type: "arrival" },
            { time: "4:00 PM", title: "Welcome Drinks", description: "Cocktails at the Polo Lounge", type: "social" },
            { time: "7:30 PM", title: "Dinner", description: "Fine dining at The Cabana Restaurant", type: "dinner" },
          ],
        },
        {
          date: "Friday, 1 August 2025",
          day: "Beverly Hills Dining",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Continental breakfast at the hotel", type: "breakfast" },
            { time: "10:00 AM", title: "Shopping on Rodeo Drive", description: "Luxury shopping experience on Rodeo Drive", type: "activity" },
            { time: "1:30 PM", title: "Lunch at The Ivy", description: "The Ivy - 113 North Robertson Blvd, West Hollywood • Reservation for 4 people • (310) 274-8303", type: "lunch" },
            { time: "6:00 PM", title: "Dinner at Craig's", description: "Craig's Restaurant - 8826 Melrose Ave, West Hollywood • Confirmed reservation for 4 people • (310) 276-1900", type: "dinner" },
          ],
        },
        {
          date: "Saturday, 2 August 2025",
          day: "Celebrity Homes Tour & Dining",
          schedule: [
            { time: "8:30 AM", title: "Breakfast", description: "Room service breakfast", type: "breakfast" },
            { time: "9:00 AM", title: "Celebrity Homes Tour", description: "Tour Du Jour with Jesse (Concierge) • $440 total (2 hours) • Pick-up at Beverly Hills Hotel • (310) 659-2929", type: "activity" },
            { time: "1:00 PM", title: "Lunch at SUR", description: "SUR Restaurant - 606 North Robertson Blvd, West Hollywood • Reservation for 4 people • (310) 289-2824", type: "lunch" },
            { time: "Afternoon", title: "Free Time", description: "Relax at the hotel or explore Rodeo Drive • Optional Walk of Fame visit", type: "activity" },
            { time: "7:15 PM", title: "Dinner at Spago Beverly Hills", description: "Spago Beverly Hills - 176 N Canon Dr, Beverly Hills • Reservation for 4 people • (310) 385-0880", type: "dinner" },
          ],
        },
        {
          date: "Sunday, 3 August 2025",
          day: "Fine Dining Experience",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Hotel breakfast", type: "breakfast" },
            { time: "Morning", title: "Free Time", description: "Leisure time at the hotel or local exploration", type: "activity" },
            { time: "1:30 PM", title: "Lunch at Laurel Tavern", description: "Laurel Tavern - 11938 Ventura Blvd, Los Angeles • Reservation for 4 people • (818) 506-0777", type: "lunch" },
            { time: "Afternoon", title: "Hollywood Exploration", description: "Continue exploring Hollywood attractions or return to hotel", type: "activity" },
            { time: "7:00 PM", title: "Dinner at Mastro's Penthouse", description: "Mastro's Penthouse - 246 N. Canon, Beverly Hills • Reserved on the Penthouse for 4 people • (310) 888-8782", type: "dinner" },
          ],
        },
        {
          date: "Monday, 4 August 2025",
          day: "Luxury Dining Day",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Hotel breakfast", type: "breakfast" },
            { time: "Morning", title: "Free Time", description: "Spa treatments, pool time, or shopping", type: "activity" },
            { time: "1:00 PM", title: "Lunch at Tower Bar", description: "Tower Bar - 8358 W Sunset Blvd, West Hollywood • Reservation for 4 people • Spoke with Sophia • (323) 654-7100", type: "lunch" },
            { time: "6:00 PM", title: "Dinner at Chateau Marmont", description: "Chateau Marmont - 8221 Sunset Boulevard, Hollywood • Reservation for 4 people • (323) 656-1010", type: "dinner" },
          ],
        },
        {
          date: "Tuesday, 5 August 2025",
          day: "Universal Studios & Farewell",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Early breakfast at the hotel", type: "breakfast" },
            { time: "Park Opening", title: "Universal Studios VIP Tour", description: "Full VIP experience at Universal Studios Hollywood", type: "activity" },
            { time: "7:30 PM", title: "Farewell Dinner at Polo Lounge", description: "Polo Lounge - Beverly Hills Hotel • Final dinner reservation for 4 people • (310) 887-2777", type: "dinner" },
          ],
        },
      ],
    },
    {
      location: "Beach House, Hermosa Beach",
      address: "1300 The Strand, Hermosa Beach, CA 90254",
      website: "https://www.airbnb.com",
      dates: "Wednesday, 6 August 2025",
      duration: "1 night",
      type: "beach",
      description: "Beachfront retreat on The Strand in Hermosa Beach",
      image: "/images/hermosa-beach-house.jpg",
      activities: ["Hermosa Beach walks", "The Strand bike rides", "Beach volleyball", "Manhattan Beach visits"],
      dailyItinerary: [
        {
          date: "Wednesday, 6 August 2025",
          day: "LA Beach Day",
          schedule: [
            { time: "9:00 AM", title: "Breakfast", description: "Beachfront breakfast with ocean views", type: "breakfast" },
            { time: "10:30 AM", title: "Morning Activity", description: "Hermosa Beach walks and The Strand exploration", type: "activity" },
            { time: "1:00 PM", title: "Lunch", description: "Beachfront lunch on The Strand", type: "lunch" },
            { time: "3:00 PM", title: "Afternoon Activity", description: "Santa Monica Pier visit and beach activities", type: "activity" },
            { time: "6:30 PM", title: "Dinner", description: "Sunset dinner overlooking the Pacific", type: "dinner" },
          ],
        },
      ],
    },
    {
      location: "Rosewood Kona",
      address: "72-100 Ka'upulehu Drive, Kailua-Kona, HI 96740",
      website: "https://www.rosewoodhotels.com/en/kona-hawaii",
      dates: "Thursday, 7 August - Monday, 11 August 2025",
      duration: "5 nights",
      type: "luxury-resort",
      description: "Ultra-luxury resort on the Big Island of Hawaii",
      image: "/images/rosewood-kona.jpg",
      activities: [
        "Snorkeling at Kealakekua Bay",
        "Volcano National Park tours",
        "Kona coffee plantation visits",
        "Spa treatments with ocean views",
        "Sunset dining experiences",
      ],
      dailyItinerary: [
        {
          date: "Thursday, 7 August 2025",
          day: "Arrival & Resort Exploration",
          schedule: [
            { time: "3:00 PM", title: "Check-in", description: "Arrive and explore the resort", type: "arrival" },
            { time: "5:00 PM", title: "Welcome Reception", description: "Hawaiian welcome ceremony", type: "social" },
            { time: "7:30 PM", title: "Dinner", description: "Ocean-view dining at Nobu Kona", type: "dinner" },
          ],
        },
        {
          date: "Friday, 8 August 2025",
          day: "Volcano Adventure",
          schedule: [
            { time: "7:00 AM", title: "Breakfast", description: "Early breakfast at the resort", type: "breakfast" },
            { time: "8:30 AM", title: "Morning Activity", description: "Volcano National Park full-day tour", type: "activity" },
            { time: "12:00 PM", title: "Lunch", description: "Picnic lunch at the volcano", type: "lunch" },
            { time: "2:00 PM", title: "Afternoon Activity", description: "Continue volcano exploration", type: "activity" },
            { time: "7:00 PM", title: "Dinner", description: "Return to resort for dinner", type: "dinner" },
          ],
        },
        {
          date: "Saturday, 9 August 2025",
          day: "Ocean & Coffee",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Tropical breakfast buffet", type: "breakfast" },
            { time: "9:30 AM", title: "Morning Activity", description: "Snorkeling at Kealakekua Bay", type: "activity" },
            { time: "1:00 PM", title: "Lunch", description: "Beachside lunch", type: "lunch" },
            { time: "2:30 PM", title: "Afternoon Activity", description: "Kona coffee plantation tour", type: "activity" },
            { time: "7:30 PM", title: "Dinner", description: "Traditional Hawaiian luau", type: "dinner" },
          ],
        },
        {
          date: "Sunday, 10 August 2025",
          day: "Spa & Relaxation",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Resort breakfast", type: "breakfast" },
            { time: "10:00 AM", title: "Spa Treatment", description: "Ocean-view spa treatments", type: "activity" },
            { time: "1:00 PM", title: "Lunch", description: "Poolside lunch", type: "lunch" },
            { time: "3:00 PM", title: "Afternoon Activity", description: "Beach activities and relaxation", type: "activity" },
            { time: "7:00 PM", title: "Dinner", description: "Resort dining experience", type: "dinner" },
          ],
        },
        {
          date: "Monday, 11 August 2025",
          day: "Departure Day",
          schedule: [
            { time: "7:00 AM", title: "Breakfast", description: "Early breakfast", type: "breakfast" },
            { time: "9:00 AM", title: "Check-out", description: "Prepare for departure to Lanai", type: "arrival" },
            { time: "11:00 AM", title: "Final Resort Time", description: "Last moments at the resort", type: "activity" },
          ],
        },
      ],
    },
    {
      location: "Four Seasons Lanai",
      address: "1 Manele Bay Road, Lanai City, HI 96763",
      website: "https://www.fourseasons.com/lanai/",
      dates: "Tuesday, 12 August - Saturday, 16 August 2025",
      duration: "5 nights",
      type: "island-resort",
      description: "Tropical paradise on the private island of Lanai",
      image: "/images/four-seasons-lanai.jpg",
      activities: [
        "Snorkeling and diving",
        "Island exploration",
        "Luau experiences",
        "Beach activities",
        "Hawaiian cultural experiences",
      ],
      dailyItinerary: [
        {
          date: "Tuesday, 12 August 2025",
          day: "Island Arrival",
          schedule: [
            { time: "2:00 PM", title: "Check-in", description: "Ferry arrival and resort check-in", type: "arrival" },
            { time: "4:00 PM", title: "Island Orientation", description: "Resort tour and island overview", type: "social" },
            { time: "7:00 PM", title: "Dinner", description: "Welcome dinner at Nobu Lanai", type: "dinner" },
          ],
        },
        {
          date: "Wednesday, 13 August 2025",
          day: "Island Adventure",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Ocean-view breakfast", type: "breakfast" },
            { time: "9:30 AM", title: "Morning Activity", description: "Island exploration and hiking", type: "activity" },
            { time: "12:30 PM", title: "Lunch", description: "Picnic lunch on secluded beach", type: "lunch" },
            { time: "2:00 PM", title: "Afternoon Activity", description: "Snorkeling and water sports", type: "activity" },
            { time: "7:30 PM", title: "Dinner", description: "Beachside barbecue dinner", type: "dinner" },
          ],
        },
        {
          date: "Thursday, 14 August 2025",
          day: "Water Activities",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Resort breakfast", type: "breakfast" },
            { time: "9:00 AM", title: "Morning Activity", description: "Deep sea fishing excursion", type: "activity" },
            { time: "1:00 PM", title: "Lunch", description: "Fresh catch lunch", type: "lunch" },
            { time: "3:00 PM", title: "Afternoon Activity", description: "Diving and marine exploration", type: "activity" },
            { time: "7:00 PM", title: "Dinner", description: "Resort fine dining", type: "dinner" },
          ],
        },
        {
          date: "Friday, 15 August 2025",
          day: "Cultural Experience",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Traditional Hawaiian breakfast", type: "breakfast" },
            { time: "10:00 AM", title: "Morning Activity", description: "Hawaiian cultural workshop", type: "activity" },
            { time: "1:00 PM", title: "Lunch", description: "Local Hawaiian cuisine", type: "lunch" },
            { time: "3:00 PM", title: "Afternoon Activity", description: "Traditional luau preparation", type: "activity" },
            { time: "6:00 PM", title: "Luau Dinner", description: "Traditional Hawaiian luau experience", type: "dinner" },
          ],
        },
        {
          date: "Saturday, 16 August 2025",
          day: "Departure Day",
          schedule: [
            { time: "7:00 AM", title: "Breakfast", description: "Final breakfast at the resort", type: "breakfast" },
            { time: "9:00 AM", title: "Check-out", description: "Prepare for departure to California", type: "arrival" },
            { time: "11:00 AM", title: "Final Island Time", description: "Last moments on Lanai", type: "activity" },
          ],
        },
      ],
    },
    {
      location: "Ritz Carlton Santa Barbara",
      address: "8301 Hollister Avenue, Goleta, CA 93117",
      website: "https://www.ritzcarlton.com/en/hotels/california/santa-barbara",
      dates: "Sunday, 17 August - Tuesday, 19 August 2025",
      duration: "3 nights",
      type: "coastal-luxury",
      description: "Elegant coastal California luxury",
      image: "/images/ritz-carlton-santa-barbara.jpg",
      activities: ["Wine country tours", "Beach club access", "Coastal drives", "Fine dining", "Spa treatments"],
      dailyItinerary: [
        {
          date: "Sunday, 17 August 2025",
          day: "Coastal Arrival",
          schedule: [
            { time: "3:00 PM", title: "Check-in", description: "Arrive at the coastal resort", type: "arrival" },
            { time: "5:00 PM", title: "Beach Club", description: "Afternoon at the beach club", type: "social" },
            { time: "7:30 PM", title: "Dinner", description: "Farm-to-table dining", type: "dinner" },
          ],
        },
        {
          date: "Monday, 18 August 2025",
          day: "Wine Country",
          schedule: [
            { time: "8:30 AM", title: "Breakfast", description: "California breakfast", type: "breakfast" },
            { time: "10:00 AM", title: "Morning Activity", description: "Santa Barbara wine country tour", type: "activity" },
            { time: "1:00 PM", title: "Lunch", description: "Winery lunch with tastings", type: "lunch" },
            { time: "3:00 PM", title: "Afternoon Activity", description: "Continue wine tasting tour", type: "activity" },
            { time: "7:00 PM", title: "Dinner", description: "Fine dining at the resort", type: "dinner" },
          ],
        },
        {
          date: "Tuesday, 19 August 2025",
          day: "Beach & Spa",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Resort breakfast", type: "breakfast" },
            { time: "10:00 AM", title: "Spa Treatment", description: "Coastal spa experience", type: "activity" },
            { time: "1:00 PM", title: "Lunch", description: "Beach club lunch", type: "lunch" },
            { time: "3:00 PM", title: "Afternoon Activity", description: "Beach activities and relaxation", type: "activity" },
            { time: "7:00 PM", title: "Dinner", description: "Final dinner at the resort", type: "dinner" },
          ],
        },
      ],
    },
    {
      location: "Yosemite National Park",
      address: "Yosemite National Park, CA",
      website: "https://www.nps.gov/yose/planyourvisit/lodging.htm",
      dates: "Wednesday, 20 August - Friday, 22 August 2025",
      duration: "3 nights",
      type: "nature-lodge",
      description: "Mountain wilderness adventure in Yosemite",
      image: "/images/yosemite.jpg",
      activities: [
        "Hiking and nature walks",
        "Wildlife viewing",
        "Photography tours",
        "Campfire experiences",
        "National park exploration",
      ],
      dailyItinerary: [
        {
          date: "Wednesday, 20 August 2025",
          day: "Mountain Arrival",
          schedule: [
            { time: "2:00 PM", title: "Check-in", description: "Arrive at the mountain lodge", type: "arrival" },
            { time: "4:00 PM", title: "Lodge Orientation", description: "Nature walk and lodge tour", type: "social" },
            { time: "7:00 PM", title: "Dinner", description: "Mountain lodge dining", type: "dinner" },
          ],
        },
        {
          date: "Thursday, 21 August 2025",
          day: "Yosemite Exploration",
          schedule: [
            { time: "7:00 AM", title: "Breakfast", description: "Hearty mountain breakfast", type: "breakfast" },
            { time: "8:30 AM", title: "Morning Activity", description: "Yosemite Valley hiking tour", type: "activity" },
            { time: "12:00 PM", title: "Lunch", description: "Trail lunch with views", type: "lunch" },
            { time: "1:30 PM", title: "Afternoon Activity", description: "Photography and wildlife viewing", type: "activity" },
            { time: "7:30 PM", title: "Dinner", description: "Campfire dinner under the stars", type: "dinner" },
          ],
        },
        {
          date: "Friday, 22 August 2025",
          day: "Adventure Day",
          schedule: [
            { time: "6:00 AM", title: "Breakfast", description: "Early breakfast for adventure", type: "breakfast" },
            { time: "7:30 AM", title: "Morning Activity", description: "Rock climbing and rappelling", type: "activity" },
            { time: "12:00 PM", title: "Lunch", description: "Mountain picnic", type: "lunch" },
            { time: "2:00 PM", title: "Afternoon Activity", description: "River rafting and water activities", type: "activity" },
            { time: "7:00 PM", title: "Dinner", description: "Final mountain lodge dinner", type: "dinner" },
          ],
        },
      ],
    },
    {
      location: "Ritz Carlton San Francisco",
      address: "600 Stockton Street, San Francisco, CA 94108",
      website: "https://www.ritzcarlton.com/en/hotels/california/san-francisco",
      dates: "Saturday, 23 August - Sunday, 24 August 2025",
      duration: "2 nights",
      type: "city-luxury",
      description: "Urban sophistication in San Francisco",
      image: "/images/ritz-carlton-san-francisco.jpg",
      activities: ["City sightseeing", "Golden Gate Bridge", "Alcatraz tours", "Fine dining", "Cultural experiences"],
      dailyItinerary: [
        {
          date: "Saturday, 23 August 2025",
          day: "City Arrival",
          schedule: [
            { time: "3:00 PM", title: "Check-in", description: "Arrive in downtown San Francisco", type: "arrival" },
            { time: "5:00 PM", title: "City Views", description: "Cocktails with city skyline views", type: "social" },
            { time: "8:00 PM", title: "Dinner", description: "Michelin-starred dining experience", type: "dinner" },
          ],
        },
        {
          date: "Sunday, 24 August 2025",
          day: "San Francisco Highlights",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Urban breakfast at the hotel", type: "breakfast" },
            { time: "9:30 AM", title: "Morning Activity", description: "Golden Gate Bridge and Alcatraz tour", type: "activity" },
            { time: "1:00 PM", title: "Lunch", description: "Fisherman's Wharf seafood lunch", type: "lunch" },
            { time: "3:00 PM", title: "Afternoon Activity", description: "City exploration and shopping", type: "activity" },
            { time: "7:00 PM", title: "Farewell Dinner", description: "Final celebration dinner", type: "dinner" },
          ],
        },
      ],
    },
  ]

  const getLocationColor = (type: string) => {
    switch (type) {
      case "luxury-hotel":
      case "city-luxury":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "beach":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "luxury-resort":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
      case "island-resort":
        return "bg-cyan-100 text-cyan-800 border-cyan-200"
      case "coastal-luxury":
        return "bg-teal-100 text-teal-800 border-teal-200"
      case "nature-lodge":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getActivityTypeColor = (type: string) => {
    switch (type) {
      case "breakfast":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "lunch":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "dinner":
        return "bg-red-100 text-red-200 border-red-200"
      case "activity":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "social":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "arrival":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getHeaderColor = (type: string) => {
    switch (type) {
      case "luxury-hotel":
        return "bg-gradient-to-r from-pink-600 to-rose-600"
      case "beach":
        return "bg-gradient-to-r from-blue-600 to-cyan-600"
      case "luxury-resort":
        return "bg-gradient-to-r from-emerald-600 to-green-600"
      case "island-resort":
        return "bg-gradient-to-r from-purple-600 to-violet-600"
      case "coastal-luxury":
        return "bg-gradient-to-r from-orange-600 to-amber-600"
      case "nature-lodge":
        return "bg-gradient-to-r from-green-700 to-emerald-700"
      case "city-luxury":
        return "bg-gradient-to-r from-slate-600 to-blue-600"
      default:
        return "bg-gradient-to-r from-amber-600 to-orange-600"
    }
  }

  if (selectedDestination !== null) {
    const destination = tripSegments[selectedDestination]
    
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="bg-white shadow-sm border-b relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={destination.image || "/placeholder.svg"}
              alt={destination.location}
              fill
              className="object-cover opacity-25"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/70"></div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 py-6">
            <Button
              variant="ghost"
              onClick={() => setSelectedDestination(null)}
              className="mb-4 bg-white/80 hover:bg-white/90 backdrop-blur-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Overview
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2 drop-shadow-sm">{destination.location}</h1>
              <p className="text-xl text-gray-700 mb-2 font-semibold drop-shadow-sm">{destination.dates}</p>
              <div className="flex items-center justify-center gap-2 text-base text-gray-600 mb-2">
                <MapPin className="w-5 h-5" />
                <span className="drop-shadow-sm">{destination.address}</span>
              </div>
              <div className="mt-4">
                <Badge className={`${getLocationColor(destination.type)} text-base px-4 py-2 font-semibold shadow-sm`}>
                  {destination.duration} • {destination.type.replace("-", " ")}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 py-8 pb-16">
          <div className="space-y-6">
            {destination.dailyItinerary.map((day, dayIndex) => (
              <Card key={dayIndex} className="overflow-hidden">
                <CardHeader className={`${getHeaderColor(destination.type)} text-white`}>
                  <CardTitle className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold">
                      {day.date}
                    </Badge>
                    <span>{day.day}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {day.schedule.map((item, itemIndex) => (
                      <div key={itemIndex} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-100 text-amber-600">
                              <Clock className="w-4 h-4" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                                  <Badge className={getActivityTypeColor(item.type)}>{item.type}</Badge>
                                </div>
                                <p className="text-gray-600">{item.description}</p>
                              </div>
                              <div className="flex-shrink-0 text-right">
                                <div className="font-semibold text-amber-600">{item.time}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <InstallPrompt />

      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">🇺🇸 American Tour 2025</h1>
            <p className="text-xl text-gray-600 mb-4">July 31 - August 25, 2025 • Multi-Destination Journey</p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>25 Days</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>7 Destinations</span>
              </div>
              <div className="flex items-center gap-1">
                <Plane className="w-4 h-4" />
                <span>Multi-City Tour</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <Card className="mb-8 border-l-4 border-l-amber-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plane className="w-5 h-5" />
              Trip Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Journey Highlights</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• American West Coast luxury experience</li>
                  <li>• Hawaiian island paradise</li>
                  <li>• Yosemite wilderness adventure</li>
                  <li>• California coastal beauty</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Accommodation Types</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Luxury hotels & resorts</li>
                  <li>• Beach house retreat</li>
                  <li>• Mountain wilderness lodge</li>
                  <li>• Urban sophistication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Travel Dates</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Departure: July 31, 2025</li>
                  <li>• Return: August 25, 2025</li>
                  <li>• Total Duration: 25 days</li>
                  <li>• Multiple destinations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Journey Itinerary</h2>

          {tripSegments.map((segment, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader className={`${getHeaderColor(segment.type)} text-white`}>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Hotel className="w-5 h-5" />
                    <span>{segment.location}</span>
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold">
                    {segment.duration}
                  </Badge>
                </CardTitle>
                <CardDescription className="text-white/90">{segment.dates}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                      <Image
                        src={segment.image}
                        alt={segment.location}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Badge className={getLocationColor(segment.type)}>{segment.type.replace("-", " ")}</Badge>
                    </h4>
                    <p className="text-gray-600 mb-3">{segment.description}</p>
                    <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{segment.address}</span>
                    </div>
                    <div className="mb-4">
                      <a
                        href={segment.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-amber-600 hover:text-amber-700 underline"
                      >
                        Visit Website →
                      </a>
                    </div>
                    <Button onClick={() => setSelectedDestination(index)} className="w-full">
                      View Daily Itinerary
                    </Button>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="font-semibold mb-3">Planned Activities</h4>
                    <ul className="space-y-2">
                      {segment.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Important Travel Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Commercial Flights</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Departure:</strong> BA286 from London (July 31)</li>
                  <li>• <strong>Return:</strong> BA001 to London (August 25)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Private Jet Details</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Operator:</strong> Jet Select, LLC (DBA Vista America)</li>
                  <li>• <strong>Aircraft:</strong> Challenger 350</li>
                  <li>• <strong>Multiple segments:</strong> LAX→Kona, Kona→Lanai, Lanai→Santa Barbara</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Flight Information */}
        <div className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Private Jet Flight Details</h2>
          
          {/* Flight 1: LAX to Kona */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5" />
                  <span>Vistajet - Challenger 350</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold">
                  1:30 PM
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Thursday, 7 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Flight Details</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Aircraft:</strong> Challenger 350</li>
                    <li><strong>From:</strong> Los Angeles Int (KLAX)</li>
                    <li><strong>Departure:</strong> 1:30 PM local time</li>
                    <li><strong>To:</strong> Kailua-Kona (PHKO)</li>
                    <li><strong>Arrival:</strong> 4:10 PM local time</li>
                    <li><strong>Operator:</strong> Jet Select, LLC (DBA Vista America, JetSelect Aviation)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Route Information</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Flight Time:</strong> 2 hours 40 minutes</li>
                    <li><strong>Distance:</strong> ~2,500 miles</li>
                    <li><strong>Type:</strong> Private Jet</li>
                    <li><strong>Service:</strong> Luxury private aviation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flight 2: Kona to Lanai */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5" />
                  <span>Vistajet - Challenger 350</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold">
                  12:00 PM
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Tuesday, 12 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Flight Details</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Aircraft:</strong> Challenger 350</li>
                    <li><strong>From:</strong> Kailua-Kona (PHKO)</li>
                    <li><strong>Departure:</strong> 12:00 PM local time</li>
                    <li><strong>To:</strong> Lanai City (PHNY)</li>
                    <li><strong>Arrival:</strong> 12:35 PM local time</li>
                    <li><strong>Operator:</strong> Jet Select, LLC (DBA Vista America, JetSelect Aviation)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Route Information</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Flight Time:</strong> 35 minutes</li>
                    <li><strong>Distance:</strong> ~100 miles</li>
                    <li><strong>Type:</strong> Inter-island Private Jet</li>
                    <li><strong>Service:</strong> Luxury private aviation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flight 3: Lanai to Kona */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5" />
                  <span>Vistajet - Challenger 350</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold">
                  9:00 AM
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Sunday, 17 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Flight Details</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Aircraft:</strong> Challenger 350</li>
                    <li><strong>From:</strong> Lanai City (PHNY)</li>
                    <li><strong>Departure:</strong> 9:00 AM local time</li>
                    <li><strong>To:</strong> Kailua-Kona (PHKO)</li>
                    <li><strong>Arrival:</strong> 9:31 AM local time</li>
                    <li><strong>Operator:</strong> Jet Select, LLC (DBA Vista America, JetSelect Aviation)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Route Information</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Flight Time:</strong> 31 minutes</li>
                    <li><strong>Distance:</strong> ~100 miles</li>
                    <li><strong>Type:</strong> Inter-island Private Jet</li>
                    <li><strong>Service:</strong> Luxury private aviation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flight 4: Kona to Santa Barbara */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5" />
                  <span>Vistajet - Challenger 350</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold">
                  10:40 AM
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Sunday, 17 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Flight Details</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Aircraft:</strong> Challenger 350</li>
                    <li><strong>From:</strong> Kailua-Kona (PHKO)</li>
                    <li><strong>Departure:</strong> 10:40 AM local time</li>
                    <li><strong>To:</strong> Santa Barbara</li>
                    <li><strong>Arrival:</strong> 6:40 PM local time</li>
                    <li><strong>Operator:</strong> Jet Select, LLC (DBA Vista America, JetSelect Aviation)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Route Information</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Flight Time:</strong> 8 hours (with time zone change)</li>
                    <li><strong>Distance:</strong> ~2,500 miles</li>
                    <li><strong>Type:</strong> Private Jet to Mainland</li>
                    <li><strong>Service:</strong> Luxury private aviation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 py-8 border-t">
          <p className="text-gray-600 mb-2">
            Have questions about the itinerary? Contact the trip organizer for details.
          </p>
        </div>
      </div>
    </div>
  )
}
