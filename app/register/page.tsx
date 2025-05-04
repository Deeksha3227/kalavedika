"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

// Define event type
type Event = {
  id: string
  name: string
  isGroupEvent: boolean
  maxParticipants: number | null
}

// Sample events data for initial rendering
const sampleEvents = [
  {
    id: "1",
    name: "Solo Singing (Eastern)",
    isGroupEvent: false,
    maxParticipants: null,
  },
  {
    id: "2",
    name: "Solo Singing (Western)",
    isGroupEvent: false,
    maxParticipants: null,
  },
  {
    id: "3",
    name: "Solo Dance (Eastern)",
    isGroupEvent: false,
    maxParticipants: null,
  },
  {
    id: "4",
    name: "Solo Dance (Western)",
    isGroupEvent: false,
    maxParticipants: null,
  },
  {
    id: "5",
    name: "Group Song (Eastern)",
    isGroupEvent: true,
    maxParticipants: 8,
  },
  {
    id: "6",
    name: "Group Song (Western)",
    isGroupEvent: true,
    maxParticipants: 8,
  },
]

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const preselectedEventId = searchParams.get("eventId")
  const { toast } = useToast()

  const [events, setEvents] = useState<Event[]>(sampleEvents)
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    usn: "",
    email: "",
    eventId: preselectedEventId || "",
    teamName: "",
    teamMembers: "",
  })

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

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

        // If there's a preselected event, find it in the events list
        if (preselectedEventId) {
          const event =
            data.events.find((e: Event) => e.id === preselectedEventId) ||
            sampleEvents.find((e) => e.id === preselectedEventId)
          if (event) {
            setSelectedEvent(event)
          }
        }
      } catch (err) {
        console.error("Error fetching events:", err)
        // Keep using the sample events in case of error
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [preselectedEventId])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleEventChange = (value: string) => {
    setFormData((prev) => ({ ...prev, eventId: value }))
    const event = events.find((e) => e.id === value) || null
    setSelectedEvent(event)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Registration failed")
      }

      // Reset form
      setFormData({
        name: "",
        usn: "",
        email: "",
        eventId: "",
        teamName: "",
        teamMembers: "",
      })

      // Show success message
      toast({
        title: "Registration Successful",
        description: "You have successfully registered for the event.",
      })
    } catch (err: any) {
      toast({
        title: "Registration Failed",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="bg-orange-50">
                <CardTitle>Register for Event</CardTitle>
                <CardDescription>Fill out the form to register for a Kalavedika event</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-orange-600" />
                  </div>
                ) : error ? (
                  <div className="text-center py-8">
                    <p className="text-red-500">{error}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="usn">USN</Label>
                      <Input
                        id="usn"
                        name="usn"
                        value={formData.usn}
                        onChange={handleInputChange}
                        placeholder="Enter your USN"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="event">Select Event</Label>
                      <Select value={formData.eventId} onValueChange={handleEventChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an event" />
                        </SelectTrigger>
                        <SelectContent>
                          {events.map((event) => (
                            <SelectItem key={event.id} value={event.id}>
                              {event.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedEvent?.isGroupEvent && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="teamName">Team Name</Label>
                          <Input
                            id="teamName"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleInputChange}
                            placeholder="Enter your team name"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="teamMembers">
                            Team Members (USNs, comma separated)
                            {selectedEvent.maxParticipants && (
                              <span className="text-xs text-gray-500 ml-1">(Max: {selectedEvent.maxParticipants})</span>
                            )}
                          </Label>
                          <Input
                            id="teamMembers"
                            name="teamMembers"
                            value={formData.teamMembers}
                            onChange={handleInputChange}
                            placeholder="4AL20CS001, 4AL20CS002, ..."
                            required
                          />
                        </div>
                      </>
                    )}
                  </form>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => window.history.back()}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={submitting || loading}
                  className="bg-orange-600 hover:bg-orange-700"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Register"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

    </div>
  )
}
