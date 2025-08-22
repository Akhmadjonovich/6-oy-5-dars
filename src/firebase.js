// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrI6e4yxIAko-p42I2kTMCRoJ7JRLNKjM",
  authDomain: "axromarket.firebaseapp.com",
  projectId: "axromarket",
  storageBucket: "axromarket.firebasestorage.app",
  messagingSenderId: "730838976590",
  appId: "1:730838976590:web:0392c0f68c2d2543125b1f",
  measurementId: "G-X6X406R5KK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
