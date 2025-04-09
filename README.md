# DSC Datathon Registration

A Next.js application for DSC Datathon registration with Google Sheets integration.

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file with the following variables:
   ```
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account-email@project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="your-private-key"
   GOOGLE_SHEET_ID=your-sheet-id
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Configure the following environment variables in Vercel:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
6. Click "Deploy"

## Environment Variables

- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: The email address of your Google Cloud service account
- `GOOGLE_PRIVATE_KEY`: The private key for your Google Cloud service account
- `GOOGLE_SHEET_ID`: The ID of your Google Sheet (found in the URL)

## Google Sheets Setup

1. Create a Google Cloud Project
2. Enable the Google Sheets API
3. Create a service account and download the credentials
4. Create a Google Sheet and share it with the service account email
5. Copy the Sheet ID from the URL

## Troubleshooting

If you encounter issues with Google Sheets integration:
1. Verify that the service account has editor access to the sheet
2. Check that all environment variables are correctly set
3. Ensure the private key is properly formatted in the environment variables

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
