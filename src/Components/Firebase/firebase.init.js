// Danger Ahead !!!!

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMWTIM2KIvCcySxtrLJ7bt3iG21susYcY",
  authDomain: "fir-auth-integration-f2f18.firebaseapp.com",
  projectId: "fir-auth-integration-f2f18",
  storageBucket: "fir-auth-integration-f2f18.firebasestorage.app",
  messagingSenderId: "642383509255",
  appId: "1:642383509255:web:5324f67c68476e82e777a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)