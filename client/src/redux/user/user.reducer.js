//A function that gets two props -> currentState and action

/* 

Regarding actions

just an object that has a type and payload property

type = just the name that tells us what specific action this is.

It will be specific so we are going to write a bunch of actions
Can name them whatever we want

We want to make sure that our reducers are aware of what specific type of action that's coming through

payload = Not necessary, can be anything. Very flexible, can be used to change state

*/
import userActionTypes from "../user/user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case userActionTypes.SIGN_IN_SUCCESS:
    case userActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error:null //if user successfully logged in, clear any previous errors
      };
      
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null
      };

    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

//Bring this to root reducer

export default userReducer;
