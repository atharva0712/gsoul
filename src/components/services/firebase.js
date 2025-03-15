import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1kB7ylewuwlf0vYeuGUI5jrpJ-532Xug",
  authDomain: "timetablegenerator-ca71c.firebaseapp.com",
  projectId: "timetablegenerator-ca71c",
  storageBucket: "timetablegenerator-ca71c.appspot.com",
  messagingSenderId: "228834738888",
  appId: "1:228834738888:web:1bc79a77ba7f75bc631bfd"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
