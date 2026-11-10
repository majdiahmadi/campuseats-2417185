import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Collect the config that Vite loads from our .env.local file.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize our web app's connection to the Firebase project.
export const app = initializeApp(firebaseConfig)

// Export Authentication so other files can register, log in, and log out.
export const auth = getAuth(app)