# Firebase Setup Instructions

## Problem Fixed
The form was getting a 400 error because Firebase environment variables were not configured. The app was trying to use undefined values for Firebase configuration.

## Solution Applied
1. Added fallback values for Firebase configuration
2. Added configuration validation function
3. Added better error handling and logging
4. Added pre-submission validation

## How to Set Up Firebase

### Step 1: Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "workportfolio")
4. Follow the setup wizard

### Step 2: Enable Firestore Database
1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location for your database

### Step 3: Get Your Firebase Configuration
1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select the web icon (</>)
4. Register your app with a nickname
5. Copy the Firebase configuration object

### Step 4: Create Environment Variables File
Create a `.env.local` file in your project root with the following content:

```env
# Firebase Configuration
NEXT_PUBLIC_PORTFOLIO_FIREBASE_API_KEY=your_actual_api_key_here
NEXT_PUBLIC_PORTFOLIO_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_PORTFOLIO_FIREBASE_PROJECT_ID=your_actual_project_id
NEXT_PUBLIC_PORTFOLIO_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_PORTFOLIO_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
NEXT_PUBLIC_PORTFOLIO_FIREBASE_APP_ID=your_actual_app_id
NEXT_PUBLIC_PORTFOLIO_FIREBASE_MEASUREMENT_ID=your_actual_measurement_id
```

Replace the placeholder values with your actual Firebase configuration values.

### Step 5: Set Up Firestore Security Rules (Optional)
For production, you should set up proper security rules. For now, you can use these test rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contacts/{document} {
      allow read, write: if true; // Allow all reads and writes for testing
    }
  }
}
```

### Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Go to the form page
3. Fill out and submit the form
4. Check the browser console for any errors
5. Check your Firestore database to see if the data was saved

## Troubleshooting

### If you still get a 400 error:
1. Check that all environment variables are set correctly
2. Make sure the `.env.local` file is in the project root
3. Restart your development server after creating the `.env.local` file
4. Check the browser console for specific error messages

### If the form shows "Firebase is not properly configured":
1. Verify all environment variables are set
2. Make sure there are no typos in the variable names
3. Ensure the `.env.local` file is in the correct location

### If data is not appearing in Firestore:
1. Check your Firestore security rules
2. Verify your project ID is correct
3. Check the browser console for any error messages

## Current Status
✅ Firebase configuration validation added
✅ Better error handling implemented
✅ Fallback values for missing environment variables
✅ Pre-submission validation added
⏳ Waiting for you to set up your Firebase project and environment variables
