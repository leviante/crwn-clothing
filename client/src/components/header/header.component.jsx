import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

//saga update - import necessary actions
import { SignOutStart } from "../../redux/user/user.actions";

// import "./header.styles.scss";
//import styled-components
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

//REDUX UPDATE: We actually want header component to get it's currentUser prop from reducer, NOT FROM APP.JS

/* 
To do that, first we need to import "connect" from "react-redux"

Connect() is a higher-order component that lets us modify our component to have access to things related to redux



*/
const Header = ({ currentUser, hidden, SignOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer className="options">
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/shop">
          CONTACT
        </OptionLink>

        {currentUser ? (
          <OptionLink as="div" onClick={SignOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

//createStructuredSelector will get the state in background, no need to pass anything.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

//saga update
const mapDispatchToProps = dispatch => ({
  SignOutStart: () => dispatch(SignOutStart())
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
