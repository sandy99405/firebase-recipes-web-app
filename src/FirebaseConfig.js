import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const config ={
  apiKey: "AIzaSyCY9WKHDsTD3LyBKnkHdT6KQT-4cfp0hJs",
  authDomain: "fir-recipes-50008.firebaseapp.com",
  projectId: "fir-recipes-50008",
  storageBucket: "fir-recipes-50008.appspot.com",
  messagingSenderId: "339168283721",
  appId: "1:339168283721:web:22947844e92dc1fbc60398",
  measurementId: "G-74DTP580S1"
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const db = getFirestore(app);