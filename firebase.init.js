// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBomsRNfz6LGfzjZkCazT7dsaIC8uoV3zw",
  authDomain: "eduverse-99ccf.firebaseapp.com",
  projectId: "eduverse-99ccf",
  storageBucket: "eduverse-99ccf.firebasestorage.app",
  messagingSenderId: "420249765579",
  appId: "1:420249765579:web:95339581cad964d1a5fd4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
