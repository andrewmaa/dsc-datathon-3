import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { appendToSheet } from '../../utils/googleSheets'

export async function POST(request: NextRequest) {
  try {
    console.log('Received registration request')
    const body = await request.json()
    console.log('Request body:', body)
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'netid', 'year', 'major', 'experienceLevelPython', 'experienceLevelML', 'experienceLevelDeepL', 'skills', 'skillsToGain', 'hasTeammates', 'confirmation']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      console.log('Missing fields:', missingFields)
      return NextResponse.json(
        { message: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      )
    }

    // Add timestamp and format major and skills
    const data = {
      ...body,
      major: body.major.join(', '),
      skills: body.skills.join(', '),
      timestamp: new Date().toISOString(),
    }

    console.log('Attempting to append to sheet with data:', data)
    // Store in Google Sheets
    await appendToSheet(data)
    console.log('Successfully appended to sheet')

    return NextResponse.json(
      { message: 'Registration successful' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Registration error details:', error)
    return NextResponse.json(
      { message: 'Registration failed', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 