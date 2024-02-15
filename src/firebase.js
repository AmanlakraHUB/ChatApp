import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAy7LXtqOoR1L5Z63ut3QyYbUc7jzOCF8",
  authDomain: "chatapp-dd980.firebaseapp.com",
  projectId: "chatapp-dd980",
  storageBucket: "chatapp-dd980.appspot.com",
  messagingSenderId: "980643158830",
  appId: "1:980643158830:web:b9a60a325f1fc8525a38bf"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
