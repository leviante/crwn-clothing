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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log(collectionRef);

  const batch  = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc(); //adds uid to created documentRefs, if the arg is empty
    batch.set(newDocRef, obj);
  });

  return await batch.commit() //fire off the batch request, returns a promise, thus async await
}

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(
    doc => {
      const {title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()), //pass a string and make it usable by URL
        id: doc.id,
        title,
        items,
      }
    }
  );

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}

//saga update - new util function
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  }) 
}

firebase.initializeApp(config);

//required code for Google authentication

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account" //fire off google popup whenever we want for auth sign in
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;