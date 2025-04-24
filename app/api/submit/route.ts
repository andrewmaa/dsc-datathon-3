import { NextResponse } from 'next/server'
import { appendToSubmissionsSheet } from '@/app/utils/googleSheets'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    await appendToSubmissionsSheet(data)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Submission failed:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
} 