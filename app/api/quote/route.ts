export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { fullName, email, phone, serviceType, condition } = body

    if (!fullName || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 },
      )
    }

    const db = (globalThis as any).DB

    // ✅ Create table if not exists (safe)
    await db.exec(`
      CREATE TABLE IF NOT EXISTS quotes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullName TEXT,
        email TEXT,
        phone TEXT NOT NULL,
        serviceType TEXT,
        condition TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `)

    // ✅ Insert data
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

    return new Response(
      JSON.stringify({
        success: true,
        data: result,
      }),
      { status: 200 },
    )
  } catch (error: any) {
    console.error('API Error:', error)

    return new Response(
      JSON.stringify({
        error: 'Failed to save data',
        details: error?.message || error,
      }),
      { status: 500 },
    )
  }
}
