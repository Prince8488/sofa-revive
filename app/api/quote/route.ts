export const runtime = 'edge'

export async function POST(req: Request, context: any) {
  try {
    // ✅ Parse request body (ONLY once)
    const body = await req.json()

    const { fullName, email, phone, serviceType, condition } = body

    // ✅ Basic validation
    if (!fullName || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 },
      )
    }

    // ✅ Get D1 database from Cloudflare context
    const db = context.env.DB

    // ✅ Insert into database
    const result = await db
      .prepare(
        `
        INSERT INTO quotes 
        (fullName, email, phone, serviceType, condition)
        VALUES (?, ?, ?, ?, ?)
      `,
      )
      .bind(fullName, email, phone, serviceType || '', condition || '')
      .run()

    // ✅ Success response
    return new Response(
      JSON.stringify({
        success: true,
        data: result,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  } catch (error: any) {
    console.error('API Error:', error)

    return new Response(
      JSON.stringify({
        error: 'Failed to save data',
        details: error?.message || error,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
  }
}
