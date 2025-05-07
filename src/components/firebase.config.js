// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgjQqZBZx1gN130Ke7xLB2VJ8_oqFUp-w",
  authDomain: "bill-s-buddy.firebaseapp.com",
  projectId: "bill-s-buddy",
  storageBucket: "bill-s-buddy.firebasestorage.app",
  messagingSenderId: "743450795825",
  appId: "1:743450795825:web:6efcd3ddd4e796d419da10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);