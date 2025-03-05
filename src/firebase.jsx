
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1kB7ylewuwlf0vYeuGUI5jrpJ-532Xug",
  authDomain: "timetablegenerator-ca71c.firebaseapp.com",
  projectId: "timetablegenerator-ca71c",
  storageBucket: "timetablegenerator-ca71c.firebasestorage.app",
  messagingSenderId: "228834738888",
  appId: "1:228834738888:web:1bc79a77ba7f75bc631bfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);