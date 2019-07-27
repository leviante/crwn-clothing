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

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

//Bring this to root reducer

export default userReducer;
