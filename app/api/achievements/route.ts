import { NextResponse } from "next/server"

// Static sample data
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

export async function GET() {
  // Return static sample data
  return NextResponse.json({ achievements: sampleAchievements })
}
