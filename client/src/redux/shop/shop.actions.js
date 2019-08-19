import ShopActionTypes from "./shop.types";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import shopComponent from "../../pages/shop/shop.component";


// export const updateCollections = (collectionsMap) => ({
//     type: ShopActionTypes.UPDATE_COLLECTIONS,
//     payload: collectionsMap
// })

//All thunks are action creator that returns a function that gets the dispatch
//Instead of writing a function to return an object, we're going to write a function that returns a function that gets dispatch in it so that whenever dispatch is called, it will fire multiple actions.

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START

})

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

//the actual function that we will pass to our components to begin this process
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(fetchCollectionsStart());

        // //makes a api call that fetch back the data associated to this collection
        collectionRef.get().then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
    }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
}