import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password === process.env.LOGIN_PASSWORD) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    return NextResponse.json({ success: false }, { status: 401 })
  } catch {
    return NextResponse.json({ success: false }, { status: 500 })
  }
} 