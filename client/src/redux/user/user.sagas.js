import {takeLatest, put, all, call} from "redux-saga/effects";

//import actions
import userActionTypes from "./user.types";

import { SignInSuccess, SignInFailure, SignOutFailure, SignOutSuccess, SignUpFailure, SignUpSuccess } from "./user.actions";

//import google stuff from firebase, also auth too because we want the object back when user signs in or signs out
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";

//called saga for google sign in
export function* signInWithGoogle() {
    //since it's an async, we want to catch errors
    try{
        //we need userRef.user thus destructuring
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        yield put(SignInFailure(error));
    }
}

//called saga for email sign in
// don't forget, if we catch actions with takeLatest, we can also get their payload
export function* signInWithEmail({payload: {email, password}}) {

    try{
        //same return value like google sign in, userRef.user is what we need
        const { user } = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    }catch(error){
        put(SignInFailure(error));
    }
}

//called saga for checking user session
export function* isUserAuthenticated(){
    try{   
        const userAuth = yield getCurrentUser();

        //if there's no user (userAuth would be null), do nothing
        if (!userAuth) return;
        //else, get the snapshot
        yield getSnapshotFromUserAuth(userAuth);

    }catch(error){
        yield put(SignInFailure(error));
    }
}

//called saga for sign out
export function* signOut() {
    try{
        yield auth.signOut();
        yield put(SignOutSuccess());
    }catch(error){
        yield put(SignOutFailure(error));
    }
}

//called saga for sign up
export function* SignUp({ payload: {email, password, displayName}}){
    console.log(email);
    try{
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
          );
        //to store it in db and get the user in redux store
        const userRef = yield call(createUserProfileDocument, user, {displayName});
        
        const userSnapshot = yield userRef.get();
        yield put(SignUpSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }));
        
    }catch(error){
        yield put(SignUpFailure(error));
    }
}


//common function that is used for both google and email sign in
export function* getSnapshotFromUserAuth(userAuth) {
    try{
        const userRef = yield call(createUserProfileDocument, userAuth);

    //get snapshot from userRef and use data and custom props to create a user object to store in redux state
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
    })); 
    
    }catch(error){
        yield put(SignInFailure(error));
    }
}


//google sign in main saga
export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

//email sign in main saga
export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

//user session persistance main saga
export function* onCheckUserSession(){
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

//sign out main saga
export function* onSignOutStart(){
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

//sign up main saga
export function* onSignUpStart(){
    yield takeLatest(userActionTypes.SIGN_UP_START, SignUp);
}


//the exported saga that we will use in our root saga
//combining all the sagas that we write in here
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart)
    ]);
    }

