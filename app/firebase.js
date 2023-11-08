// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFmJ4gg3quR31mY1kzYZ3MLr0E7fLdXdU",
  authDomain: "expense-tracker-1c0c3.firebaseapp.com",
  projectId: "expense-tracker-1c0c3",
  storageBucket: "expense-tracker-1c0c3.appspot.com",
  messagingSenderId: "1013822521048",
  appId: "1:1013822521048:web:fe9950dd9cb751715a21ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
