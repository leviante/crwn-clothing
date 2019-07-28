//Relevant actions that will effect currentUser state and userReducer

//actions are functions that return objects

import { userActionTypes } from "./user.types";

export const setCurrentUser = user => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
  };
};
