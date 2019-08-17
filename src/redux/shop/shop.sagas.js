//all saga code related to shop

//import certain effects from sagas that allow us to do different things

/* 
takeEvery: listens every action that has a certain type

*/
import { takeLatest, call, put, all } from "redux-saga/effects";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync(){

    try{
        const collectionRef = firestore.collection("collections");

        //instead of promise style with .then, we use yield to get the value in one take, just like async/await
        const snapshot = yield collectionRef.get();
        
        //create collectionsMap, use another effect called "call"
        const collectionsMap = yield  call(convertCollectionsSnapshotToMap, snapshot);
        //sagas don't use dispatch, instead they use another effect called put(). It's exactly the same as dispatch, but it requires yield in front of it.
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch(error){
        yield put(fetchCollectionsFailure(error.message))
    }
    
    //thunk code (OLD)

    // //makes a api call that fetch back the data associated to this collection
//     collectionRef.get().then(snapshot => {
//     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
//     dispatch(fetchCollectionsSuccess(collectionsMap));
// }).catch(error => dispatch(fetchCollectionsFailure(error.message)));

}

//base saga
export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync);
}

//exported saga for root saga
export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
}