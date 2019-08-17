import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"

import {store, persistor} from "./redux/store";


import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

//provider is a component we get from react-redux
/*
This provider is a component that we want to wrap around the entire application because WE WANT EVERYTHING INSIDE TO HAVE ACCESS TO THIS STORE OBJECT THAT WE GET FROM REDUX
This provider is a component that is a parent of everything in our application.
As a parent it allows us to get access to all of the things related to the store that we're going to put all of the actual code we want to store on our redux state.

It's have to be the parent of everything. !!!

Now we have to write down the redux store
Create a folder named redux that will contain everything related to redux

Write down the root-reducer first,

then write the user-reducer because that reducer will store the state of out current user.


----


after creating the store we need to pass it into the provider so that provider can pass necessary states to the components that need those information

after passing it to store we need to create actions that will trigger the reducers to change the state hence re-render the neccessary components

.
.
.

*/
