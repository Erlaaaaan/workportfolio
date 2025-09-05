// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuPxfvNf6zGDpIeCeKyPjsSyPE9tN1RKc",
  authDomain: "erlan-portfolio.firebaseapp.com",
  projectId: "erlan-portfolio",
  storageBucket: "erlan-portfolio.firebasestorage.app",
  messagingSenderId: "60209247134",
  appId: "1:60209247134:web:9594ee0d56608c0fdcdc8f",
  measurementId: "G-HDV3HDVTZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };







// # NEXT_PUBLIC_PORTFOLIO_FIREBASE_API_KEY="AIzaSyAuPxfvNf6zGDpIeCeKyPjsSyPE9tN1RKc",
// # NEXT_PUBLIC_PORTFOLIO_FIREBASE_AUTH_DOMAIN="erlan-portfolio.firebaseapp.com",
// # NEXT_PUBLIC_PORTFOLIO_FIREBASE_PROJECT_ID="erlan-portfolio",
// # NEXT_PUBLIC_PORTFOLIO_FIREBASE_STORAGE_BUCKET="erlan-portfolio.firebasestorage.app",
// # NEXT_PUBLIC_PORTFOLIO_FIREBASE_MESSAGING_SENDER_ID="60209247134",
// # NEXT_PUBLIC_PORTFOLIO_FIREBASE_APP_ID="1:60209247134:web:9594ee0d56608c0fdcdc8f",
// # NEXT_PUBLIC_PORTFOLIO_FIREBASE_MEASUREMENT_ID="G-HDV3HDVTZR"
