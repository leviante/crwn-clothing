//Relevant actions that will effect currentUser state and userReducer

//actions are functions that return objects

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    payload: user
  };
};
