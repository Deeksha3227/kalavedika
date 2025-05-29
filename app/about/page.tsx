"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, ChevronLeft, ChevronRight, Users, Info, Trophy } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"

// Type definitions
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

const sampleAchievements: Achievement[] = [
{
  id: "1",
  eventId: "sample-event-1",
  position: "RUNNER_UP",
  year: 2025,
  teamName: null,
  usn: null,
  name: "OVERALL_RUNNER_UP",
  imageUrl: "/VTU.jpeg",
  event: {
    id: "sample-event-1",
    name: "Belagavi"
  }
}, 

  {
    id: "2",
    eventId: "sample-event-2",
    position: "OVERALL_CHAMPIONSHIP",
    year: 2025,
    teamName: null,
    usn: null,
    name: "OVERALL_CHAMPIONSHIP",
      imageUrl: "/1.jpg",
  event: {
    id: "sample-event-2",
    name: "Madva"
  }
  },
  {
    id: "3",
    eventId: "sample-event-3",
    position: "OVERALL_CHAMPIONSHIP",
    year: 2025,
    teamName: null,
    usn: null,
    name: "OVERALL_CHAMPIONSHIP",
    imageUrl: null,
    event: { id: "sample-event-3", name: "St.Joseph" },
  },
  {
    id: "4",
    eventId: "sample-event-4",
    position: "OVERALL_CHAMPIONSHIP",
    year: 2025,
    teamName: null,
    usn: null,
    name: "OVERALL_CHAMPIONSHIP",
    imageUrl: null,
    event: { id: "sample-event-4", name: "Sri Devi" },
  },
]

const sampleCommitteeMembers: CommitteeMember[] = [
  {
    id: "1",
    name: "Dr Shobhitha Shetty",
    role: "Chief Coordinator",
    email: null,
    phone: null,
    imageUrl: "/shobitha.jpg",
  },
  {
    id: "2",
    name: "Dr Nithesh K",
    role: "Coordinator",
    email: null,
    phone: null,
    imageUrl: "/nithesh.jpg",
  },
  {
    id: "3",
    name: "Association Coordinators",
    role: "Members",
    email: null,
    phone: null,
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
        const res = await fetch("/api/achievements")
        if (res.ok) {
          const data = await res.json()
          if (data.achievements?.length > 0) {
            setAchievements(data.achievements)
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error)
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
    <div className="min-h-screen flex flex-col w-full">
      <main className="flex-1">
        <section className="bg-orange-500 text-white py-12 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl font-bold">About Kalavedika</h1>
              <p className="max-w-[700px]">
                Learn more about our cultural committee, achievements, and the people behind Kalavedika.
              </p>
            </div>
          </div>
        </section>

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
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">Vision of the institute</h2>
                        <p className="text-gray-700 mb-4">
                          “To produce top-quality engineers who are groomed for attaining excellence in their profession and
                          competitive enough to help in the growth of nation and global society.”
                        </p>
                      </div>
                      <div className="bg-orange-100 p-6 rounded-lg">
                        <h3 className="text-xl font-bold text-orange-500 mb-3">Mission of the institute</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="bg-orange-500 text-white rounded-full p-1 mt-0.5">
                              <Award className="h-4 w-4" />
                            </div>
                            <span>
                              To offer affordable high-quality graduate program in engineering with value education and make
                              the students socially responsible.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="bg-orange-500 text-white rounded-full p-1 mt-0.5">
                              <Award className="h-4 w-4" />
                            </div>
                            <span>
                              To support and enhance the institutional environment to attain research excellence in both faculty
                              and students and to inspire them to push the boundaries of knowledge base.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="bg-orange-500 text-white rounded-full p-1 mt-0.5">
                              <Award className="h-4 w-4" />
                            </div>
                            <span>
                              To identify the common areas of interest amongst the individuals for the effective
                              industry-institute partnership in a sustainable way by systematically working together.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="bg-orange-500 text-white rounded-full p-1 mt-0.5">
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
                      <h2 className="text-2xl font-bold text-orange-500">Our Achievements</h2>
                      {!isMobile && (
                        <div className="flex gap-2">
                          <button onClick={() => scrollAchievements("left")}
                                  className="p-2 rounded-full bg-orange-100 hover:bg-orange-200">
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button onClick={() => scrollAchievements("right")}
                                  className="p-2 rounded-full bg-orange-100 hover:bg-orange-200">
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </div>
                      )}
                    </div>

                    <div ref={achievementsRef}
                         className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
                         style={{ scrollbarWidth: "none" }}>
                      {achievements.map((achievement) => (
                        <div key={achievement.id}
                             className="flex-shrink-0 w-90 bg-white rounded-lg shadow-md overflow-hidden border border-orange-100">
                          <div className="h-32 bg-orange-100 flex items-center justify-center">
                            <Trophy className="h-16 w-16 text-orange-500" />
                          </div>
                          <div className="p-4">
                            <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-orange-100 text-orange-500 rounded-full">
                              {achievement.position}
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
                    <h2 className="text-2xl font-bold text-orange-500 mb-6">Our Committee</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {committeeMembers.map((member) => (
                        <div key={member.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden">
                              <div className="h-40 bg-orange-100 flex items-center justify-center overflow-hidden">
                            {member.imageUrl ? (
                              <Image
                                src={member.imageUrl}
                                alt={member.name}
                                width={128}
                                height={128}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <Users className="h-16 w-16 text-orange-500" />
                            )}
                          </div>
                          <div className="p-4 text-center">
                            <h3 className="font-bold mb-1">{member.name}</h3>
                            <p className="text-sm text-orange-500 mb-3">{member.role}</p>
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
    </div>
  )
}