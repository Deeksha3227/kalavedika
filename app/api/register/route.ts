import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, usn, email, eventId, teamName, teamMembers } = body

    // Validate required fields
    if (!name || !usn || !email || !eventId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Return success response with mock data
    return NextResponse.json({
      success: true,
      message: "Registration successful",
      data: {
        id: "mock-registration-" + Date.now(),
        name,
        usn,
        email,
        eventId,
        teamName: teamName || null,
        teamMembers: teamMembers || null,
        status: "PENDING",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    })
  } catch (error) {
    console.error("Error registering:", error)
    return NextResponse.json({ error: "Failed to register" }, { status: 500 })
  }
}
