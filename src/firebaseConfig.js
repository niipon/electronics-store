// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxIWPtGqlXDi-vTp6bRe8tdV3HB418uvk",
  authDomain: "magazin-b907b.firebaseapp.com",
  projectId: "magazin-b907b",
  storageBucket: "magazin-b907b.firebasestorage.app",
  messagingSenderId: "738701857652",
  appId: "1:738701857652:web:598d3f4890053390ef5221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);