"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Music, Users, Paintbrush, Video, Mic, Palette } from "lucide-react"

// Define event type
type Event = {
  id: string
  name: string
  description: string | null
  categoryId: string
  isGroupEvent: boolean
  maxParticipants: number | null
  category: {
    id: string
    name: string
    description: string | null
  }
}

// Sample events data for initial rendering
const sampleEvents = [
  {
    id: "1",
    name: "Solo Singing (Eastern)",
    description: "Solo singing competition for eastern music",
    categoryId: "1",
    isGroupEvent: false,
    maxParticipants: null,
    category: {
      id: "1",
      name: "Solo Singing",
      description: "Individual singing competition",
    },
  },
  {
    id: "2",
    name: "Solo Singing (Western)",
    description: "Solo singing competition for western music",
    categoryId: "1",
    isGroupEvent: false,
    maxParticipants: null,
    category: {
      id: "1",
      name: "Solo Singing",
      description: "Individual singing competition",
    },
  },
  {
    id: "3",
    name: "Solo Dance (Eastern)",
    description: "Solo dance competition for eastern styles",
    categoryId: "2",
    isGroupEvent: false,
    maxParticipants: null,
    category: {
      id: "2",
      name: "Solo Dance",
      description: "Individual dance competition",
    },
  },
  {
    id: "4",
    name: "Solo Dance (Western)",
    description: "Solo dance competition for western styles",
    categoryId: "2",
    isGroupEvent: false,
    maxParticipants: null,
    category: {
      id: "2",
      name: "Solo Dance",
      description: "Individual dance competition",
    },
  },
  {
    id: "5",
    name: "Group Song (Eastern)",
    description: "Group singing competition for eastern music",
    categoryId: "3",
    isGroupEvent: true,
    maxParticipants: 8,
    category: {
      id: "3",
      name: "Group Song",
      description: "Group singing competition",
    },
  },
  {
    id: "6",
    name: "Group Song (Western)",
    description: "Group singing competition for western music",
    categoryId: "3",
    isGroupEvent: true,
    maxParticipants: 8,
    category: {
      id: "3",
      name: "Group Song",
      description: "Group singing competition",
    },
  },
]

// Helper function to get icon based on category
const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case "Solo Singing":
    case "Group Song":
      return <Mic className="h-6 w-6" />
    case "Solo Dance":
    case "Group Dance":
      return <Users className="h-6 w-6" />
    case "Art":
      return <Palette className="h-6 w-6" />
    case "Digital":
      return <Video className="h-6 w-6" />
    case "Yakshagana":
      return <Music className="h-6 w-6" />
    default:
      return <Paintbrush className="h-6 w-6" />
  }
}

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(sampleEvents)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/events")
        if (!response.ok) {
          throw new Error("Failed to fetch events")
        }
        const data = await response.json()

        // Use the fetched events or fall back to sample events if empty
        if (data.events && data.events.length > 0) {
          setEvents(data.events)
        }
      } catch (err) {
        console.error("Error fetching events:", err)
        // Keep using the sample events in case of error
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  // Get unique categories
  const categories = [...new Set(events.map((event) => event.category.name))]

  // Filter events by category if activeCategory is set
  const filteredEvents = activeCategory ? events.filter((event) => event.category.name === activeCategory) : events

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-orange-600 text-white py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold">Explore Our Events</h1>
              <p className="max-w-[700px]">
                Discover the diverse range of cultural events and competitions at Kalavedika.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-orange-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Button
                variant={activeCategory === null ? "default" : "outline"}
                onClick={() => setActiveCategory(null)}
                className={activeCategory === null ? "bg-orange-600" : ""}
              >
                All Events
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? "bg-orange-600" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            {loading ? (
              <div className="flex justify-center items-center min-h-[300px]">
                <p>Loading events...</p>
              </div>
            ) : error ? (
              <div className="flex justify-center items-center min-h-[300px]">
                <p className="text-red-500">{error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105"
                  >
                    <CardHeader className="bg-orange-100 pb-2">
                      <div className="flex justify-between items-start">
                        <div className="p-2 bg-white rounded-full">{getCategoryIcon(event.category.name)}</div>
                        <Badge variant="outline" className="bg-white">
                          {event.isGroupEvent ? "Group" : "Solo"}
                        </Badge>
                      </div>
                      <CardTitle className="mt-2">{event.name}</CardTitle>
                      <CardDescription>{event.category.name}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <p className="text-sm text-gray-600">
                        {event.description || "Join this exciting event and showcase your talent!"}
                      </p>
                      {event.isGroupEvent && event.maxParticipants && (
                        <p className="text-xs text-gray-500 mt-2">Max participants: {event.maxParticipants}</p>
                      )}
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                        <Link href={`/register?eventId=${event.id}`}>Register Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Notice Board */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto bg-amber-50 p-6 rounded-lg shadow-md border-2 border-amber-200 relative">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white p-2 rounded-full shadow-md">
                <Paintbrush className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">Event Notice Board</h2>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold text-gray-800">Important Dates</h3>
                  <p className="text-sm text-gray-600">Registration Deadline: May 15, 2025</p>
                  <p className="text-sm text-gray-600">Event Dates: June 1-5, 2025</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold text-gray-800">Venue</h3>
                  <p className="text-sm text-gray-600">AJIET Main Auditorium & Cultural Complex</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="font-bold text-gray-800">Rules & Guidelines</h3>
                  <p className="text-sm text-gray-600">
                    All participants must be current AJIET students. Detailed rules for each event will be shared after
                    registration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
