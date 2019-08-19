import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

//How to query
// firestore.collection(users)
//How to get a specific document of a collectior

firestore
  .collection(users) //get this collection
  .doc("M7CF6kU4mKMcfHB54bk2") //grab this id doc
  .collection("cartItems") //grab this inside doc
  .doc("BWg6CRFbmwHoIf33Opnm"); //grab this id doc inside the selected collection

//The other way

firestore.doc("/users/M7CF6kU4mKMcfHB54bk2/cartItems/BWg6CRFbmwHoIf33Opnm"); //if you  want a document

//if you want a nested collection

firestore.collection("/users/M7CF6kU4mKMcfHB54bk2/cartItems/");
