import { NextResponse } from "next/server"

// Static sample data
const sampleAchievements = [
  {
    id: "1",
    eventId: "sample-event-1",
    position: "RUNNER UP",
    year: 2025,
    teamName: null,
    usn: null,
    name: "OVERALL RUNNER UP",
    imageurl: '/VTU.jpeg',
    event: {
      id: "sample-event-1",
      name: "Belagavi",
    },
  },
  {
    id: "2",
    eventId: "sample-event-2",
    position: "OVERALL CHAMPIONSHIP",
    year: 2025,
    teamName: null,
    usn: null,
    name: "OVERALL CHAMPIONSHIP",
    imageUrl: null,
    event: {
      id: "sample-event-2",
      name: "Madva",
    },
  },
  {
    id: "3",
    eventId: "sample-event-3",
    position: "OVERALL CHAMPIONSHIP",
    year: 2025,
    teamName: null,
    usn: null,
    name: "OVERALL CHAMPIONSHIP",
    imageUrl: null,
    event: {
      id: "sample-event-3",
      name: "St.Joseph",
    },
  },
  {
    id: "4",
    eventId: "sample-event-4",
    position: "OVERALL CHAMPIONSHIP",
    year: 2025,
    teamName: null,
    usn: null,
    name: "OVERALL CHAMPIONSHIP",
    imageUrl: null,
    event: {
      id: "sample-event-4",
      name: "Sri Devi",
    },
  },
  
]


export async function GET() {
  // Return static sample data
  return NextResponse.json({ achievements: sampleAchievements })
}
