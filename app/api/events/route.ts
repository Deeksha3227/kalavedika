import { NextResponse } from "next/server"

// Static sample data
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
  {
    id: "7",
    name: "Group Dance (Eastern)",
    description: "Group dance competition for eastern styles",
    categoryId: "4",
    isGroupEvent: true,
    maxParticipants: 10,
    category: {
      id: "4",
      name: "Group Dance",
      description: "Group dance competition",
    },
  },
  {
    id: "8",
    name: "Group Dance (Western)",
    description: "Group dance competition for western styles",
    categoryId: "4",
    isGroupEvent: true,
    maxParticipants: 10,
    category: {
      id: "4",
      name: "Group Dance",
      description: "Group dance competition",
    },
  },
  {
    id: "9",
    name: "Yakshagana",
    description: "Traditional Yakshagana performance competition",
    categoryId: "5",
    isGroupEvent: true,
    maxParticipants: 15,
    category: {
      id: "5",
      name: "Yakshagana",
      description: "Traditional Yakshagana performance",
    },
  },
  {
    id: "10",
    name: "Reel Making",
    description: "Create engaging short video reels",
    categoryId: "6",
    isGroupEvent: false,
    maxParticipants: null,
    category: {
      id: "6",
      name: "Digital",
      description: "Digital competitions like reel making",
    },
  },
  {
    id: "11",
    name: "Rangoli",
    description: "Traditional Indian art form of making designs on floor",
    categoryId: "7",
    isGroupEvent: false,
    maxParticipants: null,
    category: {
      id: "7",
      name: "Art",
      description: "Art competitions including rangoli, pencil sketch, etc.",
    },
  },
  {
    id: "12",
    name: "Pencil Sketch",
    description: "Artistic pencil sketching competition",
    categoryId: "7",
    isGroupEvent: false,
    maxParticipants: null,
    category: {
      id: "7",
      name: "Art",
      description: "Art competitions including rangoli, pencil sketch, etc.",
    },
  },
]

export async function GET() {
  // Return static sample data
  return NextResponse.json({ events: sampleEvents })
}
