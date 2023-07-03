// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1BmfM6GY9FQeU237sxzh8vP-8PYuZyw0",
  authDomain: "parentpal-ff1ef.firebaseapp.com",
  databaseURL: "https://parentpal-ff1ef-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "parentpal-ff1ef",
  storageBucket: "parentpal-ff1ef.appspot.com",
  messagingSenderId: "873248385637",
  appId: "1:873248385637:web:1800840e1a880b5427f48c",
};

// Initialize Firebase0
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
export { app, database, db };
