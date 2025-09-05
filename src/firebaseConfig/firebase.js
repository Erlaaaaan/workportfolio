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