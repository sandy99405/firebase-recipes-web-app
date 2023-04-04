import {initializeApp} from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import firebase from 'firebase/compat/app'
/* import {getFirestore} from "firebase/firestore"; */


const config ={
  apiKey: process.env.REACT_APP_API_KEY, 
  authDomain: process.env.REACT_APP_AUTH_DOMAIN, 
  projectId: process.env.REACT_APP_PROJECT_ID, 
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET, 
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID, 
  appId: process.env.REACT_APP_APP_ID, 
  measurementId: process.env.REACT_MEASUREMENT_ID,
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}

const app = initializeApp(config);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

/* export const db = getFirestore(app); */