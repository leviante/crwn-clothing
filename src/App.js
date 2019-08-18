import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user.selectors";

import { checkUserSession } from "./redux/user/user.actions";


import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import Header from "./components/header/header.component";


//import firebase stuff

const App = ({ checkUserSession, currentUser }) => {

  useEffect(()=>{
    checkUserSession();
  }, [checkUserSession]); //using array because it's a function we get from mapDispatch

  // componentDidMount() {

    

  //   checkUserSession();

  //   //old observable pattern for user sign in

  //   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
  //   //   if (user) {
  //   //     const userRef = await createUserProfileDocument(user);

  //   //     userRef.onSnapshot(snapShot => {
  //   //       setCurrentUser({
  //   //         id: snapShot.id,
  //   //         ...snapShot.data()
  //   //       });
  //   //     });
  //   //   } else {
  //   //     setCurrentUser(user);
  //   //   }
  //   // });
  // }


    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
