import firebase from "firebase/compat/app";

import "firebase/compat/firestore";
import "firebase/compat/auth";

import {createUserWithEmailAndPassword} from "firebase/auth";

const config = {
  apiKey: "AIzaSyA1EuyrP3hqHu9EjIqd5p9SC8IpYLSOd7Q",
  authDomain: "crwn-db-52f08.firebaseapp.com",
  projectId: "crwn-db-52f08",
  storageBucket: "crwn-db-52f08.appspot.com",
  messagingSenderId: "400235070326",
  appId: "1:400235070326:web:dfca7805f50d9634c53057",
  measurementId: "G-2YVPC0SQFS",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnap = await userRef.get();

  if (!userSnap.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating user: " + error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}