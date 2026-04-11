export const runtime = 'edge'

export async function POST(req: Request, context: any) {
  try {
    // ✅ Parse request body
    const body = await req.json()

    const { fullName, email, phone, serviceType, condition } = body

    // ✅ Basic validation
    if (!fullName || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      )
    }

    // ✅ Get DB from Cloudflare context (CORRECT WAY)
    const db = context?.env?.DB

    if (!db) {
      return new Response(JSON.stringify({ error: 'Database not connected' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // ✅ Create table if not exists (safe fallback)
    await db
      .prepare(
        `
      CREATE TABLE IF NOT EXISTS quotes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullName TEXT,
        email TEXT,
        phone TEXT NOT NULL,
        serviceType TEXT,
        condition TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `,
      )
      .run()

    // ✅ Insert data
    const result = await db
      .prepare(
        `
        INSERT INTO quotes 
        (fullName, email, phone, serviceType, condition)
        VALUES (?, ?, ?, ?, ?)
      `,
      )
      .bind(fullName, email || '', phone, serviceType || '', condition || '')
      .run()

    // ✅ Success response with inserted ID
    return new Response(
      JSON.stringify({
        success: true,
        id: result.meta?.last_row_id || null,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
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
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
