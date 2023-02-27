import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGNEVCkm3eXl82HLSt7QJjahB2EKEY0Ls",
  authDomain: "crown-clothing-db-eea6a.firebaseapp.com",
  projectId: "crown-clothing-db-eea6a",
  storageBucket: "crown-clothing-db-eea6a.appspot.com",
  messagingSenderId: "893228915231",
  appId: "1:893228915231:web:0d5bf63bad45e95aced32a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot.exists());
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName: displayName,
        email: email,
        createdAt: createdAt,
      });
    } catch (error) {
      console.log("Error Creating the user", error.message);
    }
  }

  return userDocRef;
};
