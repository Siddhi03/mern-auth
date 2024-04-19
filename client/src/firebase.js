// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-c4c84.firebaseapp.com",
  projectId: "mern-auth-c4c84",
  storageBucket: "mern-auth-c4c84.appspot.com",
  messagingSenderId: "108845338266",
  appId: "1:108845338266:web:1650e730e3bcdf4c935923"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);