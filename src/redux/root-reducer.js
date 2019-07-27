//Base reducer object that represents all of the state of our application

//Will end up being the actual code that combines all of our other states together.

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer //returns an object from userReducer that represents the state of user
});

//combineReducers takes all the reducers and returns a one big giant object that has all the reducer object values stored as keys
