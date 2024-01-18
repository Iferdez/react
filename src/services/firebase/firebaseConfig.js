
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCtt4C1YKfubnLDKBCOyT3C4c9JT09H6oY",
  authDomain: "tiendasimpsons-ea2c0.firebaseapp.com",
  projectId: "tiendasimpsons-ea2c0",
  storageBucket: "tiendasimpsons-ea2c0.appspot.com",
  messagingSenderId: "379927893437",
  appId: "1:379927893437:web:053abd5d5791c8d3da6ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)