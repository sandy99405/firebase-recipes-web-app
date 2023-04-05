import  firebase from "firebase/compat/app";
import {auth,googleAuthProvider} from './FirebaseConfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



 const registerUser = async (email,password) => {
        await createUserWithEmailAndPassword(auth,email,password);
};

const loginUser = async (email,password) => {
     await signInWithEmailAndPassword(auth,email,password);
}

const logOutUser = async() => {
     await signOut(auth);
}

const sendPasswordResetEmailu = async (email) =>{
     await sendPasswordResetEmail(auth,email);
}

const loginWithGoogle = async () =>{
    await signInWithPopup(auth,googleAuthProvider); 
}


const subscribeToAuthChanges = (handleAuthChange) =>{
     auth.onAuthStateChanged((user) =>{
        handleAuthChange(user);
    });
}


const FirebaseAuthService = {
        registerUser,
        loginUser,
        logOutUser,
        sendPasswordResetEmailu,
        loginWithGoogle,
        subscribeToAuthChanges
};

export default FirebaseAuthService