import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const config ={
  apiKey: Process.env.REACT_APP_API_KEY, 
  authDomain: Process.env.REACT_APP_AUTH_DOMAIN, 
  projectId: Process.env.REACT_APP_PROJECT_ID, 
  storageBucket: Process.env.REACT_APP_STORAGE_BUCKET, 
  messagingSenderId: Process.env.REACT_APP_MESSAGING_SENDER_ID, 
  appId: Process.env.REACT_APP_APP_ID, 
  measurementId: Process.env.REACT_MEASUREMENT_ID,
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const db = getFirestore(app);