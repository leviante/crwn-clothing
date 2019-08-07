import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";


//import styled components
import { CheckoutPageContainer, CheckoutHeaderDiv, HeaderBlockDiv, TotalDiv, TestWarningMsg } from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderDiv>
        <HeaderBlockDiv>
          <span>Product</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Description</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Quantity</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Price</span>
        </HeaderBlockDiv>
        <HeaderBlockDiv>
          <span>Remove</span>
        </HeaderBlockDiv>
      </CheckoutHeaderDiv>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <TotalDiv>
        <span>TOTAL: ${total}</span>
      </TotalDiv>
      <TestWarningMsg>
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </TestWarningMsg>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(
  mapStateToProps,
  null
)(CheckoutPage);
