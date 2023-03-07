// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { db } from "./firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUh4voiVsyuwxPmZz6KIuOsVMELL4X8Gw",
  authDomain: "info-nav-86206.firebaseapp.com",
  projectId: "info-nav-86206",
  storageBucket: "info-nav-86206.appspot.com",
  messagingSenderId: "74060280128",
  appId: "1:74060280128:web:e553eb45e803a88cdb4aa5",
  measurementId: "G-C6F12EEQR1"
};

// Initialize Firebase
export const auth = getAuth();
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);