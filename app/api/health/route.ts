import { NextResponse } from 'next/server'

export const runtime = 'edge'

export async function GET() {
  try {
    return NextResponse.json(
      {
        status: 'healthy',
        service: 'SofaRevive',
        environment: process.env.NODE_ENV || 'production',
        timestamp: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store',
        },
      },
    )
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      {
        status: 500,
      },
    )
  }
}
