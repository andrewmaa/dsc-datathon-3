import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

type RegistrationData = {
  name: string
  email: string
  netid: string
  year: string
  major: string
  customMajor?: string
  experienceLevelPython: number
  experienceLevelML: number
  experienceLevelDeepL: number
  skills: string
  skillsToGain: string
  netid1: string
  name1: string
  netid2: string
  name2: string
  netid3: string
  name3: string
  confirmation: string
  timestamp: string
}

type SubmissionData = {
  teamName: string
  dataAgreement: string
  netId1: string
  netId2: string
  netId3: string
  netId4: string
  challenge: string
  githubRepo: string
  youtubeLink: string
  hostedLink: string
  comments: string
  feedback: string
  timestamp: string
}

// Initialize auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

// The ID of your Google Sheet
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID

if (!SPREADSHEET_ID) {
  throw new Error('GOOGLE_SHEET_ID environment variable is not set')
}

if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL) {
  throw new Error('GOOGLE_SERVICE_ACCOUNT_EMAIL environment variable is not set')
}

if (!process.env.GOOGLE_PRIVATE_KEY) {
  throw new Error('GOOGLE_PRIVATE_KEY environment variable is not set')
}

export async function appendToSheet(data: RegistrationData) {
  try {
    console.log('Initializing Google Sheets connection...')
    console.log('Using SPREADSHEET_ID:', SPREADSHEET_ID)
    console.log('Using service account email:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID!, serviceAccountAuth)
    
    console.log('Loading document info...')
    await doc.loadInfo()
    console.log('Document loaded:', doc.title)

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0]
    console.log('Using sheet:', sheet.title)

    // Set the header row with descriptive labels
    const headerRow = [
      'name',
      'email',
      'netid',
      'year',
      'major',
      'customMajor',
      'experienceLevelPython',
      'experienceLevelML',
      'experienceLevelDeepL',
      'skills',
      'skillsToGain',
      'netid1',
      'name1',
      'netid2',
      'name2',
      'netid3',
      'name3',
      'confirmation',
      'timestamp'
    ]
    await sheet.setHeaderRow(headerRow)

    // Convert numeric fields to strings
    const formattedData = {
      ...data,
      experienceLevelPython: data.experienceLevelPython.toString(),
      experienceLevelML: data.experienceLevelML.toString(),
      experienceLevelDeepL: data.experienceLevelDeepL.toString(),
    }

    // Add a console log to verify the data being processed
    console.log('Data to append:', formattedData)

    // Then append the new row
    console.log('Appending new row with data:', formattedData)
    await sheet.addRow(formattedData as Record<string, string>)
    console.log('Row appended successfully')

    return { success: true }
  } catch (error) {
    console.error('Detailed Google Sheets error:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    throw error
  }
}

export async function appendToSubmissionsSheet(data: SubmissionData) {
  try {
    console.log('Initializing Google Sheets connection for submissions...')
    console.log('Using SPREADSHEET_ID:', SPREADSHEET_ID)
    console.log('Using service account email:', process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)
    
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID!, serviceAccountAuth)
    
    console.log('Loading document info...')
    await doc.loadInfo()
    console.log('Document loaded:', doc.title)

    // Get or create the submissions sheet
    let sheet = doc.sheetsByTitle['Submissions']
    if (!sheet) {
      console.log('Creating new Submissions sheet...')
      sheet = await doc.addSheet({ title: 'Submissions', headerValues: [
        'teamName',
        'dataAgreement',
        'netId1',
        'netId2',
        'netId3',
        'netId4',
        'challenge',
        'githubRepo',
        'youtubeLink',
        'hostedLink',
        'comments',
        'feedback',
        'timestamp'
      ]})
    }

    console.log('Using sheet:', sheet.title)

    // Add a console log to verify the data being processed
    console.log('Data to append:', data)

    // Then append the new row
    console.log('Appending new row with data:', data)
    await sheet.addRow(data as Record<string, string>)
    console.log('Row appended successfully')

    return { success: true }
  } catch (error) {
    console.error('Detailed Google Sheets error:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      console.error('Error stack:', error.stack)
    }
    throw error
  }
} 