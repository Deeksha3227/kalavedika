"use client"

import { useState, useEffect, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, ChevronLeft, ChevronRight, Users, Info, Trophy } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

// Define types
type Achievement = {
  id: string
  eventId: string
  position: string
  year: number
  teamName: string | null
  usn: string | null
  name: string
  imageUrl: string | null
  event: {
    id: string
    name: string
  }
}

type CommitteeMember = {
  id: string
  name: string
  role: string
  email: string | null
  phone: string | null
  imageUrl: string | null
}

// Sample achievements data
const sampleAchievements = [
  {
    id: "1",
    eventId: "sample-event-1",
    position: "WINNER",
    year: 2023,
    teamName: "Rhythm Masters",
    usn: null,
    name: "Group Dance Team",
    imageUrl: null,
    event: {
      id: "sample-event-1",
      name: "Group Dance (Western)",
    },
  },
  {
    id: "2",
    eventId: "sample-event-2",
    position: "RUNNER_UP",
    year: 2023,
    teamName: null,
    usn: "4AL20CS045",
    name: "Priya Sharma",
    imageUrl: null,
    event: {
      id: "sample-event-2",
      name: "Solo Singing (Eastern)",
    },
  },
  {
    id: "3",
    eventId: "sample-event-3",
    position: "WINNER",
    year: 2022,
    teamName: null,
    usn: "4AL19CS078",
    name: "Rahul Mehta",
    imageUrl: null,
    event: {
      id: "sample-event-3",
      name: "Rangoli Competition",
    },
  },
]

// Sample committee members data
const sampleCommitteeMembers = [
  {
    id: "1",
    name: "Dr. Arun Kumar",
    role: "Faculty Coordinator",
    email: "arunkumar@ajiet.edu.in",
    phone: "+91 9876543210",
    imageUrl: null,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Student Coordinator",
    email: "priyasharma@ajiet.edu.in",
    phone: "+91 9876543211",
    imageUrl: null,
  },
  {
    id: "3",
    name: "Rahul Mehta",
    role: "Technical Head",
    email: "rahulmehta@ajiet.edu.in",
    phone: "+91 9876543212",
    imageUrl: null,
  },
]

export default function AboutPage() {
  const [achievements, setAchievements] = useState<Achievement[]>(sampleAchievements)
  const [committeeMembers, setCommitteeMembers] = useState<CommitteeMember[]>(sampleCommitteeMembers)
  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState("about")

  const achievementsRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Fetch achievements
        const achievementsRes = await fetch("/api/achievements")
        if (achievementsRes.ok) {
          const achievementsData = await achievementsRes.json()
          if (achievementsData.achievements && achievementsData.achievements.length > 0) {
            setAchievements(achievementsData.achievements)
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        // Keep using sample data in case of error
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const scrollAchievements = (direction: "left" | "right") => {
    if (achievementsRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      achievementsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-orange-600 text-white py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold">About Kalavedika</h1>
              <p className="max-w-[700px]">
                Learn more about our cultural committee, achievements, and the people behind Kalavedika.
              </p>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-8 bg-orange-50">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="about" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  <span>About</span>
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  <span>Achievements</span>
                </TabsTrigger>
                <TabsTrigger value="committee" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Committee</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h2 className="text-2xl font-bold text-orange-700 mb-4">Our Mission</h2>
                        <p className="text-gray-700 mb-4">
                          Kalavedika, the cultural committee of AJIET, aims to nurture and showcase the artistic talents
                          of our students. We provide a platform for creative expression through various cultural events
                          and competitions.
                        </p>
                        <p className="text-gray-700">
                          Our mission is to celebrate the rich cultural diversity of our student community while
                          fostering teamwork, leadership, and creative skills that complement academic excellence.
                        </p>
                      </div>
                      <div className="bg-orange-100 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-700 mb-3">Key Objectives</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="bg-orange-600 text-white rounded-full p-1 mt-0.5">
                              <Award className="h-4 w-4" />
                            </div>
                            <span>Promote cultural awareness and appreciation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="bg-orange-600 text-white rounded-full p-1 mt-0.5">
                              <Award className="h-4 w-4" />
                            </div>
                            <span>Provide opportunities for students to showcase their talents</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="bg-orange-600 text-white rounded-full p-1 mt-0.5">
                              <Award className="h-4 w-4" />
                            </div>
                            <span>Organize cultural events and competitions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="bg-orange-600 text-white rounded-full p-1 mt-0.5">
                              <Award className="h-4 w-4" />
                            </div>
                            <span>Foster teamwork and leadership skills</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-orange-700">Our Achievements</h2>
                      {!isMobile && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => scrollAchievements("left")}
                            className="p-2 rounded-full bg-orange-100 hover:bg-orange-200"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => scrollAchievements("right")}
                            className="p-2 rounded-full bg-orange-100 hover:bg-orange-200"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div
                      ref={achievementsRef}
                      className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
                      style={{ scrollbarWidth: "none" }}
                    >
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className="flex-shrink-0 w-72 bg-white rounded-lg shadow-md overflow-hidden border border-orange-100"
                        >
                          <div className="h-32 bg-orange-100 flex items-center justify-center">
                            <Trophy className="h-16 w-16 text-orange-600" />
                          </div>
                          <div className="p-4">
                            <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-orange-100 text-orange-800 rounded-full">
                              {achievement.position === "WINNER" ? "Winner" : "Runner-up"}
                            </div>
                            <h3 className="font-bold mb-1">{achievement.event.name}</h3>
                            <p className="text-sm text-gray-600 mb-1">{achievement.name}</p>
                            {achievement.teamName && (
                              <p className="text-sm text-gray-600 mb-1">Team: {achievement.teamName}</p>
                            )}
                            <p className="text-xs text-gray-500">Year: {achievement.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="committee" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-orange-700 mb-6">Our Committee</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {committeeMembers.map((member) => (
                        <div
                          key={member.id}
                          className="bg-white rounded-lg shadow-md overflow-hidden border border-orange-100"
                        >
                          <div className="h-32 bg-orange-100 flex items-center justify-center">
                            <Users className="h-16 w-16 text-orange-600" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-bold mb-1">{member.name}</h3>
                            <p className="text-sm text-orange-600 mb-3">{member.role}</p>
                            {member.email && <p className="text-sm text-gray-600 mb-1">Email: {member.email}</p>}
                            {member.phone && <p className="text-sm text-gray-600">Phone: {member.phone}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
