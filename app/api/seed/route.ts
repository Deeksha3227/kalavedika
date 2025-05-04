import { NextResponse } from "next/server"

export async function GET() {
  // Return mock success response
  return NextResponse.json({
    success: true,
    message: "Database seeding simulation successful",
    data: {
      categories: 7,
      events: 15,
      committeeMembers: 3,
    },
  })
}
