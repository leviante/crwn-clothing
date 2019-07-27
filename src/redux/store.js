/* 
We have created the root reducer but we still need to create redux store.

We do this in another file called store.js

Don't forget to add middleware to store so that when actions get fired or dispatched we can catch them and see them. We can also see the state before and after.

redux logger helps us debug the redux code so much easier

middleware that the store is expecting from redux is going to be an ARRAY - can be seen on redux docs as well

*/

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares)); //gets rootReducer and returnvalue of applyMiddleware(...middlewares);

export default store;
