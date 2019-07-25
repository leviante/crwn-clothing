//Pulling firebase utility library
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAH-PcfaVCloQk_wy7AC3zlO6Dgf2AXcl4",
  authDomain: "crwn-db-e1957.firebaseapp.com",
  databaseURL: "https://crwn-db-e1957.firebaseio.com",
  projectId: "crwn-db-e1957",
  storageBucket: "",
  messagingSenderId: "908165205479",
  appId: "1:908165205479:web:b521d97fe033b669"
};

firebase.initializeApp(config);

//required code for Google authentication

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account" //fire off google popup whenever we want for auth sign in
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;