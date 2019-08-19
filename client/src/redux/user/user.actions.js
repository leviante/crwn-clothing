//Relevant actions that will effect currentUser state and userReducer

//actions are functions that return objects

import userActionTypes from "./user.types";

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START
});

export const SignInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user
});

export const SignInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const checkUserSession = () => ({
  type: userActionTypes.CHECK_USER_SESSION
});

export const SignOutStart = () => ({
  type: userActionTypes.SIGN_OUT_START
});
export const SignOutSuccess = () => ({
  type: userActionTypes.SIGN_OUT_SUCCESS
});
export const SignOutFailure = (error) => ({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error
});

//sign up feature - extra challenge
export const SignUpStart = (user) => ({
  type: userActionTypes.SIGN_UP_START,
  payload: user
});

export const SignUpSuccess = (user) => ({
  type: userActionTypes.SIGN_UP_SUCCESS,
  payload: user
});

export const SignUpFailure = (error) => ({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error
});