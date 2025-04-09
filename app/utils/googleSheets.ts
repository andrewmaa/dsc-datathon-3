import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

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

export async function appendToSheet(data: Record<string, any>) {
  try {
    console.log('Initializing Google Sheets connection...')
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID!, serviceAccountAuth)
    
    console.log('Loading document info...')
    await doc.loadInfo()
    console.log('Document loaded:', doc.title)

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0]
    console.log('Using sheet:', sheet.title)

    // First, set the header row
    console.log('Setting header row with keys:', Object.keys(data))
    await sheet.setHeaderRow(Object.keys(data))

    // Then append the new row
    console.log('Appending new row with data:', data)
    await sheet.addRow(data)
    console.log('Row appended successfully')

    return { success: true }
  } catch (error) {
    console.error('Detailed Google Sheets error:', error)
    throw error
  }
} 