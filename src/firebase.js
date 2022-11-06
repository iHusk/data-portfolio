// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsgQWJ2A27KWMuZXc57xK88uhZGBgP9Pc",
  authDomain: "portfolio-38362.firebaseapp.com",
  projectId: "portfolio-38362",
  storageBucket: "portfolio-38362.appspot.com",
  messagingSenderId: "903254655892",
  appId: "1:903254655892:web:8177fba51f5b7fcc940581",
  measurementId: "G-11GXRTX913"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);