import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json()
    const { fullName, email, phone, serviceType, condition } = formData

    // Get the D1 database binding
    const db = (process.env as unknown as CloudflareEnv).DB

    // Prepare and execute the SQL statement
    const stmt = db.prepare(
      'INSERT INTO quotes (fullName, email, phone, serviceType, condition) VALUES (?, ?, ?, ?, ?)',
    )
    await stmt.bind(fullName, email, phone, serviceType, condition).run()

    return NextResponse.json(
      { message: 'Quote request received successfully!' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { message: 'Error processing quote request' },
      { status: 500 },
    )
  }
}
