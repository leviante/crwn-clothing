import { all, call, takeLatest, put } from "redux-saga/effects";

//import user action types since we are going to listen user sign out action
import userActionTypes from "../user/user.types";

import { clearCart } from "./cart.actions";

//called saga to clear out cart
export function* clearCartOnSignOut() {
    yield put(clearCart());
}

//clear cart main saga, listening sign out actions
export function* onSignOutSuccess(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
};

//the exported saga that will be sent to root saga
export function* cartSagas(){
    yield(all([call(onSignOutSuccess)]))
}