import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCARUgJRRKslUregkkrjVPbkHOIu_Lm3vg",
  authDomain: "clothingdb-7eb20.firebaseapp.com",
  databaseURL: "https://clothingdb-7eb20.firebaseio.com",
  projectId: "clothingdb-7eb20",
  storageBucket: "clothingdb-7eb20.appspot.com",
  messagingSenderId: "875647951341",
  appId: "1:875647951341:web:2c9b3dd801a14777b047e4",
  measurementId: "G-S3FMN64YJ3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
