import React from "react";
import { connect } from "react-redux";

//import styled components
import { CheckoutItemContainer,ImageContainer, NameSpan, PriceSpan, QuantitySpan, Arrow, ValueSpan, RemoveButtonStyle  } from "./checkout-item.styles";

import {
  addItem,
  removeItem,
  clearItemFromCart
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img alt="item" src={imageUrl} />
      </ImageContainer>
      <NameSpan>{name}</NameSpan>
      <QuantitySpan>
        <Arrow onClick={() => removeItem(cartItem)}>
          &#10094;{" "}
        </Arrow>
        <ValueSpan>{quantity}</ValueSpan>
        <Arrow onClick={() => addItem(cartItem)}>
          &#10095;
        </Arrow>
      </QuantitySpan>
      <PriceSpan>{price}</PriceSpan>
      <RemoveButtonStyle onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonStyle>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
