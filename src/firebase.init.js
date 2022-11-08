// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9bqeMRguCDBtlx7zLpq4lArUf7cAHpvg",
  authDomain: "emran-portfolio.firebaseapp.com",
  projectId: "emran-portfolio",
  storageBucket: "emran-portfolio.appspot.com",
  messagingSenderId: "566715277051",
  appId: "1:566715277051:web:e631d28c4a4c8894189a5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;