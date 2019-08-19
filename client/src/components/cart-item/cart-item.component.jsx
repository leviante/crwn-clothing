import React from "react";

//import styled components
import {CartItemContainer, StyledImg, ItemDetailsContainer, NameSpan } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <StyledImg src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameSpan>{name}</NameSpan>
        <span>{quantity} x {price}</span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartItem;
