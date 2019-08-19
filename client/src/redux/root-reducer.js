//Base reducer object that represents all of the state of our application

//Will end up being the actual code that combines all of our other states together.

import { combineReducers } from "redux";

//import persistReducer to persist the reducer
import {persistReducer} from "redux-persist";
//also import the type of the storage
import storage from "redux-persist/lib/storage";
// importing storage from persist is like importing localStorage


import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

//define a new persist config, represents possible configurations we want
//used by redux-persist
const persistConfig = {
  key: "root", //at what point in our reducer that we want to start storing everything, we want to start storing at our root level
  storage, //pass the imported storage to use as storage
  whitelist: ["cart"] //an array containing the string names of any of the reducers that we want to store
  //normally we have two but the user is handled by firebase auth, thus we just want to persist the cart
}

//combineReducers takes all the reducers and returns a one big giant object that has all the reducer object values stored as keys
const rootReducer = combineReducers({
  user: userReducer, //returns an object from userReducer that represents the state of user
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

//export the modified version of reducer which has persistance capabilities by redux persist based on the persistConfig object
export default persistReducer(persistConfig, rootReducer);

