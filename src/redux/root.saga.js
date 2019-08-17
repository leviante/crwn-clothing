import { all, call } from "redux-saga/effects";

import { shopSagas } from "./shop/shop.sagas";

import {userSagas} from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga(){
    yield all([
        call(userSagas),
        call(cartSagas),
        call(shopSagas)
    ]);
};

/* 
all takes an array of sagas
instead of yielding every saga back to back, we initialize all of them at once and listen all the actions.

*/