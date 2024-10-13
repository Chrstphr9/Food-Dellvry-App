// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlIVymEUBDiebCMzhIAajWR3BajRryJa0",
  authDomain: "food-del-app-40dca.firebaseapp.com",
  projectId: "food-del-app-40dca",
  storageBucket: "food-del-app-40dca.appspot.com",
  messagingSenderId: "1087290911436",
  appId: "1:1087290911436:web:d641f341293dbf33c27069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();