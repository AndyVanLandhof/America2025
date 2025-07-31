"use client"

import { useState } from "react"
import { Calendar, MapPin, Phone, Camera, Plane, Hotel, ArrowLeft, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InstallPrompt } from "@/components/install-prompt"
import Image from "next/image"

export default function HolidayItinerary() {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null)

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
            {
              time: "8:00 AM",
              title: "Breakfast",
              description: "Continental breakfast at the hotel",
              type: "breakfast",
            },
            {
              time: "1:30 PM",
              title: "Lunch at The Ivy",
              description:
                "The Ivy - 113 North Robertson Blvd, West Hollywood • Reservation for 4 people • (310) 274-8303",
              type: "lunch",
            },
            {
              time: "6:00 PM",
              title: "Dinner at Craig's",
              description:
                "Craig's Restaurant - 8826 Melrose Ave, West Hollywood • Confirmed reservation for 4 people • (310) 276-1900",
              type: "dinner",
            },
          ],
        },
        {
          date: "Saturday, 2 August 2025",
          day: "Celebrity Homes Tour & Dining",
          schedule: [
            { time: "8:30 AM", title: "Breakfast", description: "Room service breakfast", type: "breakfast" },
            {
              time: "9:00 AM",
              title: "Celebrity Homes Tour",
              description:
                "Tour Du Jour with Jesse (Concierge) • $440 total (2 hours) • Pick-up at Beverly Hills Hotel • (310) 659-2929",
              type: "activity",
            },
            {
              time: "1:00 PM",
              title: "Lunch at SUR",
              description:
                "SUR Restaurant - 606 North Robertson Blvd, West Hollywood • Reservation for 4 people • (310) 289-2824",
              type: "lunch",
            },
            {
              time: "Afternoon",
              title: "Free Time",
              description: "Relax at the hotel or explore Rodeo Drive • Optional Walk of Fame visit",
              type: "activity",
            },
            {
              time: "9:00 PM",
              title: "Whisky A Go-Go - Live Band",
              description: "Iconic Sunset Strip venue • Live music performance • 8901 Sunset Blvd, West Hollywood",
              type: "activity",
            },
          ],
        },
        {
          date: "Sunday, 3 August 2025",
          day: "Fine Dining Experience",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Hotel breakfast", type: "breakfast" },
            {
              time: "Morning",
              title: "Free Time",
              description: "Leisure time at the hotel or local exploration",
              type: "activity",
            },
            {
              time: "1:30 PM",
              title: "Lunch at Laurel Tavern",
              description:
                "Laurel Tavern - 11938 Ventura Blvd, Los Angeles • Reservation for 4 people • (818) 506-0777",
              type: "lunch",
            },
            {
              time: "Afternoon",
              title: "Hollywood Exploration",
              description: "Continue exploring Hollywood attractions or return to hotel",
              type: "activity",
            },
            {
              time: "7:00 PM",
              title: "Dinner at Mastro's Penthouse",
              description:
                "Mastro's Penthouse - 246 N. Canon, Beverly Hills • Reserved on the Penthouse for 4 people • (310) 888-8782",
              type: "dinner",
            },
          ],
        },
        {
          date: "Monday, 4 August 2025",
          day: "Luxury Dining Day",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Hotel breakfast", type: "breakfast" },
            {
              time: "Morning",
              title: "Free Time",
              description: "Spa treatments, pool time, or shopping",
              type: "activity",
            },
            {
              time: "1:00 PM",
              title: "Lunch at Tower Bar",
              description:
                "Tower Bar - 8358 W Sunset Blvd, West Hollywood • Reservation for 4 people • Spoke with Sophia • (323) 654-7100",
              type: "lunch",
            },
            {
              time: "6:00 PM",
              title: "Dinner at Chateau Marmont",
              description:
                "Chateau Marmont - 8221 Sunset Boulevard, Hollywood • Reservation for 4 people • (323) 656-1010",
              type: "dinner",
            },
          ],
        },
        {
          date: "Tuesday, 5 August 2025",
          day: "Universal Studios & Farewell",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Early breakfast at the hotel", type: "breakfast" },
            {
              time: "Park Opening",
              title: "Universal Studios VIP Tour",
              description: "Full VIP experience at Universal Studios Hollywood",
              type: "activity",
            },
            {
              time: "7:30 PM",
              title: "Farewell Dinner at Polo Lounge",
              description: "Polo Lounge - Beverly Hills Hotel • Final dinner reservation for 4 people • (310) 887-2777",
              type: "dinner",
            },
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
      travelNotes: "Self-Drive to SFO and drop car",
      travelTime: "20 minutes",
      activities: ["Hermosa Beach walks", "The Strand bike rides", "Beach volleyball", "Manhattan Beach visits"],
      dailyItinerary: [
        {
          date: "Wednesday, 6 August 2025",
          day: "LA Beach Day",
          schedule: [
            {
              time: "9:00 AM",
              title: "Breakfast",
              description: "Beachfront breakfast with ocean views",
              type: "breakfast",
            },
            {
              time: "10:30 AM",
              title: "Morning Activity",
              description: "Hermosa Beach walks and The Strand exploration",
              type: "activity",
            },
            {
              time: "1:00 PM",
              title: "Lunch",
              description: "Beachfront lunch on The Strand",
              type: "lunch",
            },
            {
              time: "3:00 PM",
              title: "Afternoon Activity",
              description: "Santa Monica Pier visit and beach activities",
              type: "activity",
            },
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
            {
              time: "8:30 AM",
              title: "Morning Activity",
              description: "Volcano National Park full-day tour",
              type: "activity",
            },
            { time: "12:00 PM", title: "Lunch", description: "Picnic lunch at the volcano", type: "lunch" },
            {
              time: "2:00 PM",
              title: "Afternoon Activity",
              description: "Continue volcano exploration",
              type: "activity",
            },
            { time: "7:00 PM", title: "Dinner", description: "Return to resort for dinner", type: "dinner" },
          ],
        },
        {
          date: "Saturday, 9 August 2025",
          day: "Ocean & Coffee",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Tropical breakfast buffet", type: "breakfast" },
            {
              time: "9:30 AM",
              title: "Morning Activity",
              description: "Snorkeling at Kealakekua Bay",
              type: "activity",
            },
            { time: "1:00 PM", title: "Lunch", description: "Beachside lunch", type: "lunch" },
            {
              time: "2:30 PM",
              title: "Afternoon Activity",
              description: "Kona coffee plantation tour",
              type: "activity",
            },
            { time: "7:30 PM", title: "Dinner", description: "Traditional Hawaiian luau", type: "dinner" },
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
            {
              time: "4:00 PM",
              title: "Island Orientation",
              description: "Resort tour and island overview",
              type: "social",
            },
            { time: "7:00 PM", title: "Dinner", description: "Welcome dinner at Nobu Lanai", type: "dinner" },
          ],
        },
        {
          date: "Wednesday, 13 August 2025",
          day: "Island Adventure",
          schedule: [
            { time: "8:00 AM", title: "Breakfast", description: "Ocean-view breakfast", type: "breakfast" },
            {
              time: "9:30 AM",
              title: "Morning Activity",
              description: "Island exploration and hiking",
              type: "activity",
            },
            { time: "12:30 PM", title: "Lunch", description: "Picnic lunch on secluded beach", type: "lunch" },
            {
              time: "2:00 PM",
              title: "Afternoon Activity",
              description: "Snorkeling and water sports",
              type: "activity",
            },
            { time: "7:30 PM", title: "Dinner", description: "Beachside barbecue dinner", type: "dinner" },
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
            {
              time: "10:00 AM",
              title: "Morning Activity",
              description: "Santa Barbara wine country tour",
              type: "activity",
            },
            { time: "1:00 PM", title: "Lunch", description: "Winery lunch with tastings", type: "lunch" },
            {
              time: "3:00 PM",
              title: "Afternoon Activity",
              description: "Continue wine tasting tour",
              type: "activity",
            },
            { time: "7:00 PM", title: "Dinner", description: "Fine dining at the resort", type: "dinner" },
          ],
        },
      ],
    },
    {
      location: "Dolphin Bay, Pismo Beach",
      address: "Yosemite National Park, CA (Exact address to be confirmed)",
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
            {
              time: "8:30 AM",
              title: "Morning Activity",
              description: "Yosemite Valley hiking tour",
              type: "activity",
            },
            { time: "12:00 PM", title: "Lunch", description: "Trail lunch with views", type: "lunch" },
            {
              time: "1:30 PM",
              title: "Afternoon Activity",
              description: "Photography and wildlife viewing",
              type: "activity",
            },
            { time: "7:30 PM", title: "Dinner", description: "Campfire dinner under the stars", type: "dinner" },
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
            {
              time: "9:30 AM",
              title: "Morning Activity",
              description: "Golden Gate Bridge and Alcatraz tour",
              type: "activity",
            },
            { time: "1:00 PM", title: "Lunch", description: "Fisherman's Wharf seafood lunch", type: "lunch" },
            {
              time: "3:00 PM",
              title: "Afternoon Activity",
              description: "City exploration and shopping",
              type: "activity",
            },
            { time: "7:00 PM", title: "Farewell Dinner", description: "Final celebration dinner", type: "dinner" },
          ],
        },
      ],
    },
  ]

  const travelArrangements = [
    {
      date: "Thursday, 31 July 2025",
      flight: "BA286",
      route: "London Heathrow (LHR) to Los Angeles (LAX)",
      time: "11:40 AM",
      type: "commercial",
      description: "British Airways departure to begin your luxury adventure",
    },
    {
      date: "Thursday, 7 August 2025",
      flight: "Vistajet",
      route: "Los Angeles (LAX) to Big Island, Hawaii",
      time: "1:30 PM",
      type: "private",
      description: "Private jet transfer to Hawaiian paradise",
      travelNotes: "Private jet from LAX to Kona",
      travelTime: "5 hours 30 minutes",
    },
    {
      date: "Tuesday, 12 August 2025",
      flight: "Vistajet",
      route: "Big Island, Hawaii to Lanai, Hawaii",
      time: "9:00 AM",
      type: "private",
      description: "Private jet to Lanai island paradise",
      travelNotes: "Inter-island private jet",
      travelTime: "45 minutes",
    },
    {
      date: "Sunday, 17 August 2025",
      flight: "Vistajet",
      route: "Lanai, Hawaii to Oxnard, California (OXY)",
      time: "9:00 AM",
      type: "private",
      description: "Private jet to California coast",
      travelNotes: "Private jet to mainland California",
      travelTime: "4 hours 45 minutes",
    },
    {
      date: "Monday, 25 August 2025",
      flight: "BA001",
      route: "San Francisco (SFO) to London Heathrow (LHR)",
      time: "4:30 PM",
      type: "commercial",
      description: "British Airways return flight home",
      travelNotes: "Self-Drive to SFO and drop car",
      travelTime: "20 minutes",
    },
  ]

  const getLocationIcon = (type: string) => {
    switch (type) {
      case "luxury-hotel":
      case "luxury-resort":
      case "city-luxury":
      case "coastal-luxury":
        return <Hotel className="w-5 h-5" />
      case "beach":
        return <Camera className="w-5 h-5" />
      case "island-resort":
        return <MapPin className="w-5 h-5" />
      case "nature-lodge":
        return <Camera className="w-5 h-5" />
      default:
        return <MapPin className="w-5 h-5" />
    }
  }

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

  const getTravelColor = (type: string) => {
    switch (type) {
      case "commercial":
        return "bg-indigo-100 text-indigo-800 border-indigo-200"
      case "private":
        return "bg-emerald-100 text-emerald-800 border-emerald-200"
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
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
        {/* Header */}
        <div className="bg-white shadow-sm border-b relative overflow-hidden">
          {/* Background watermark image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={destination.image || "/placeholder.svg"}
              alt={destination.location}
              fill
              className="object-cover opacity-25"
              sizes="100vw"
              priority
            />
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/70"></div>
          </div>

          {/* Content */}
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

        {/* Daily Itinerary */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="space-y-6">
            {destination.dailyItinerary.map((day, dayIndex) => (
              <Card key={dayIndex} className="overflow-hidden">
                <CardHeader className={`${getHeaderColor(destination.type)} text-white`}>
                  <CardTitle className="flex items-center justify-between">
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                    >
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

      {/* Header */}
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

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Trip Overview */}
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

        {/* Chronological Journey */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Journey Itinerary</h2>

          {/* Flight 1: LHR to LAX */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5" />
                  <span>BA286</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  11:40 AM
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Thursday, 31 July 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/british-airways.jpg"
                      alt="British Airways Aircraft"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">commercial flight</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">British Airways departure to begin your luxury adventure</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>London Heathrow (LHR) to Los Angeles (LAX)</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Flight Details</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Flight:</strong> BA286
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Departure:</strong> 11:40 AM on Thursday, 31 July 2025
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Route:</strong> London Heathrow (LHR) to Los Angeles (LAX)
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Type:</strong> Commercial Flight (British Airways)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Beverly Hills Hotel */}
          <Card className="overflow-hidden">
            <CardHeader className={`${getHeaderColor("luxury-hotel")} text-white`}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Hotel className="w-5 h-5" />
                  <span>Beverly Hills Hotel</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  6 nights
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Thursday, 31 July - Tuesday, 5 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/beverly-hills-hotel.jpg"
                      alt="Beverly Hills Hotel"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200">luxury hotel</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">Iconic luxury in the heart of Beverly Hills</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>9641 Sunset Boulevard, Beverly Hills, CA 90210</span>
                  </div>
                  <div className="mb-4">
                    <a
                      href="https://www.dorchestercollection.com/en/los-angeles/the-beverly-hills-hotel/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-700 underline"
                    >
                      Visit Hotel Website →
                    </a>
                  </div>
                  <Button onClick={() => setSelectedDestination(0)} className="w-full">
                    View Daily Itinerary
                  </Button>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Planned Activities</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Rodeo Drive shopping
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Hollywood tours
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Fine dining experiences
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Spa treatments
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Pool relaxation
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Beach House */}
          <Card className="overflow-hidden">
            <CardHeader className={`${getHeaderColor("beach")} text-white`}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5" />
                  <span>Beach House, Hermosa Beach</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  1 night
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Wednesday, 6 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/hermosa-beach-house.jpg"
                      alt="Beach House, Hermosa Beach"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">beach</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">Beachfront retreat on The Strand in Hermosa Beach</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>1300 The Strand, Hermosa Beach, CA 90254</span>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">
                      <strong>Travel Notes:</strong> Self-Drive to SFO and drop car (20 minutes)
                    </p>
                    <a
                      href="https://www.airbnb.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-700 underline"
                    >
                      Visit Website →
                    </a>
                  </div>
                  <Button onClick={() => setSelectedDestination(1)} className="w-full">
                    View Daily Itinerary
                  </Button>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Planned Activities</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Hermosa Beach walks
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      The Strand bike rides
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Beach volleyball
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Manhattan Beach visits
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flight 2: LAX to Big Island */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5" />
                  <span>Vistajet</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  1:30 PM
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Thursday, 7 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/vistajet.jpg"
                      alt="Vistajet Private Aircraft"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">private flight</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">Private jet transfer to Hawaiian paradise</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Los Angeles (LAX) to Big Island, Hawaii</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Flight Details</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Flight:</strong> Vistajet
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Departure:</strong> 1:30 PM on Thursday, 7 August 2025
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Route:</strong> Los Angeles (LAX) to Big Island, Hawaii
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Type:</strong> Private Jet (Vistajet)
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Flight Time:</strong> 5 hours 30 minutes
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Continue with remaining destinations... */}
          {/* I'll continue with the rest of the destinations following the same pattern */}

          {/* Rosewood Kona */}
          <Card className="overflow-hidden">
            <CardHeader className={`${getHeaderColor("luxury-resort")} text-white`}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Hotel className="w-5 h-5" />
                  <span>Rosewood Kona</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  5 nights
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Thursday, 7 August - Monday, 11 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/rosewood-kona.jpg"
                      alt="Rosewood Kona"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">luxury resort</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">Ultra-luxury resort on the Big Island of Hawaii</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>72-100 Ka'upulehu Drive, Kailua-Kona, HI 96740</span>
                  </div>
                  <div className="mb-4">
                    <a
                      href="https://www.rosewoodhotels.com/en/kona-hawaii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-700 underline"
                    >
                      Visit Hotel Website →
                    </a>
                  </div>
                  <Button onClick={() => setSelectedDestination(2)} className="w-full">
                    View Daily Itinerary
                  </Button>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Planned Activities</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Snorkeling at Kealakekua Bay
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Volcano National Park tours
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Kona coffee plantation visits
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Spa treatments with ocean views
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Sunset dining experiences
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flight 3: Big Island to Lanai */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5" />
                  <span>Vistajet</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  9:00 AM
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Tuesday, 12 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/vistajet.jpg"
                      alt="Vistajet Private Aircraft"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">private flight</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">Private jet to Lanai island paradise</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Big Island, Hawaii to Lanai, Hawaii</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Flight Details</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Flight:</strong> Vistajet
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Departure:</strong> 9:00 AM on Tuesday, 12 August 2025
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Route:</strong> Big Island, Hawaii to Lanai, Hawaii
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Type:</strong> Inter-island Private Jet
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Flight Time:</strong> 45 minutes
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Four Seasons Lanai */}
          <Card className="overflow-hidden">
            <CardHeader className={`${getHeaderColor("island-resort")} text-white`}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>Four Seasons Lanai</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  5 nights
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Tuesday, 12 August - Saturday, 16 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/four-seasons-lanai.jpg"
                      alt="Four Seasons Lanai"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">island resort</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">Tropical paradise on the private island of Lanai</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>1 Manele Bay Road, Lanai City, HI 96763</span>
                  </div>
                  <div className="mb-4">
                    <a
                      href="https://www.fourseasons.com/lanai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-700 underline"
                    >
                      Visit Hotel Website →
                    </a>
                  </div>
                  <Button onClick={() => setSelectedDestination(3)} className="w-full">
                    View Daily Itinerary
                  </Button>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Planned Activities</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Snorkeling and diving
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Island exploration
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Luau experiences
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Beach activities
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Hawaiian cultural experiences
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flight 4: Lanai to Oxnard */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5" />
                  <span>Vistajet</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  9:00 AM
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Sunday, 17 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/vistajet.jpg"
                      alt="Vistajet Private Aircraft"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">private flight</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">Private jet to California coast</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Lanai, Hawaii to Oxnard, California (OXY)</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Flight Details</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Flight:</strong> Vistajet
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Departure:</strong> 9:00 AM on Sunday, 17 August 2025
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Route:</strong> Lanai, Hawaii to Oxnard, California (OXY)
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Type:</strong> Private Jet to mainland California
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Flight Time:</strong> 4 hours 45 minutes
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ritz Carlton Santa Barbara */}
          <Card className="overflow-hidden">
            <CardHeader className={`${getHeaderColor("coastal-luxury")} text-white`}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Hotel className="w-5 h-5" />
                  <span>Ritz Carlton Santa Barbara</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  3 nights
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Sunday, 17 August - Tuesday, 19 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/ritz-carlton-santa-barbara.jpg"
                      alt="Ritz Carlton Santa Barbara"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-teal-100 text-teal-800 border-teal-200">coastal luxury</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">Elegant coastal California luxury</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>8301 Hollister Avenue, Goleta, CA 93117</span>
                  </div>
                  <div className="mb-4">
                    <a
                      href="https://www.ritzcarlton.com/en/hotels/california/santa-barbara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-700 underline"
                    >
                      Visit Hotel Website →
                    </a>
                  </div>
                  <Button onClick={() => setSelectedDestination(4)} className="w-full">
                    View Daily Itinerary
                  </Button>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Planned Activities</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Wine country tours
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Beach club access
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Coastal drives
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Fine dining
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Spa treatments
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Glacier Peak Lodge */}
          <Card className="overflow-hidden">
            <CardHeader className={`${getHeaderColor("nature-lodge")} text-white`}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Camera className="w-5 h-5" />
                  <span>Dolphin Bay, Pismo Beach</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  3 nights
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Wednesday, 20 August - Friday, 22 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/yosemite.jpg"
                      alt="Yosemite National Park"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 border-green-200">nature lodge</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">Mountain wilderness adventure in Yosemite</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Yosemite National Park, CA (Exact address to be confirmed)</span>
                  </div>
                  <div className="mb-4">
                    <a
                      href="https://www.nps.gov/yose/planyourvisit/lodging.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-700 underline"
                    >
                      Visit Website →
                    </a>
                  </div>
                  <Button onClick={() => setSelectedDestination(5)} className="w-full">
                    View Daily Itinerary
                  </Button>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Planned Activities</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Hiking and nature walks
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Wildlife viewing
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Photography tours
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Campfire experiences
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      National park exploration
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ritz Carlton San Francisco */}
          <Card className="overflow-hidden">
            <CardHeader className={`${getHeaderColor("city-luxury")} text-white`}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Hotel className="w-5 h-5" />
                  <span>Ritz Carlton San Francisco</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  2 nights
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Saturday, 23 August - Sunday, 24 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/ritz-carlton-san-francisco.jpg"
                      alt="Ritz Carlton San Francisco"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-800 border-purple-200">city luxury</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">Urban sophistication in San Francisco</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>600 Stockton Street, San Francisco, CA 94108</span>
                  </div>
                  <div className="mb-4">
                    <a
                      href="https://www.ritzcarlton.com/en/hotels/california/san-francisco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-amber-600 hover:text-amber-700 underline"
                    >
                      Visit Hotel Website →
                    </a>
                  </div>
                  <Button onClick={() => setSelectedDestination(6)} className="w-full">
                    View Daily Itinerary
                  </Button>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Planned Activities</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      City sightseeing
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Golden Gate Bridge
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Alcatraz tours
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Fine dining
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></div>
                      Cultural experiences
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flight 5: SFO to LHR */}
          <Card className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Plane className="w-5 h-5" />
                  <span>BA001</span>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-white/20 text-white border-white/30 text-lg px-4 py-2 font-semibold"
                >
                  4:30 PM
                </Badge>
              </CardTitle>
              <CardDescription className="text-white/90">Monday, 25 August 2025</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/images/british-airways.jpg"
                      alt="British Airways Aircraft"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Badge className="bg-indigo-100 text-indigo-800 border-indigo-200">commercial flight</Badge>
                  </h4>
                  <p className="text-gray-600 mb-3">British Airways return flight home</p>
                  <div className="flex items-start gap-2 text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>San Francisco (SFO) to London Heathrow (LHR)</span>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold mb-3">Flight Details</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Flight:</strong> BA001
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Departure:</strong> 4:30 PM on Monday, 25 August 2025
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Route:</strong> San Francisco (SFO) to London Heathrow (LHR)
                    </li>
                    <li className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0"></div>
                      <strong>Type:</strong> Commercial Flight (British Airways)
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Travel Information */}
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
                <h4 className="font-semibold mb-3">Flight Details</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>
                    • <strong>Departure:</strong> BA286 from London (July 31)
                  </li>
                  <li>
                    • <strong>Return:</strong> BA001 to London (August 25)
                  </li>
                  <li>
                    • <strong>Private jets:</strong> Multiple Vistajet segments
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Timeline Summary */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Timeline</CardTitle>
            <CardDescription>Your 25-day luxury adventure at a glance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tripSegments.map((segment, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-semibold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{segment.location}</div>
                    <div className="text-sm text-gray-500">{segment.dates}</div>
                  </div>
                  <Badge className={getLocationColor(segment.type)}>{segment.duration}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t">
          <p className="text-gray-600 mb-2">
            Have questions about the itinerary? Contact the trip organizer for details.
          </p>
        </div>
      </div>
    </div>
  )
}
