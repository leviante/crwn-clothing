//we do this in order to use reselect properly
import { createSelector } from "reselect";

//two types of selectors
/* 
1- Input selector: doesnt use create selector
2- output selector: use input and create selector
*/

//1. input
const selectCart = state => state.cart;
//a function that gets the whole state and returns a slice of it, one layer deep usually

export const selectCartItems = createSelector(
  //takes 2 arg, first is a collection
  [selectCart],
  //a func that return the value we want out of this selector
  cart => cart.cartItems
);
//selectCardItems is a memoi selector now

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.price * cartItem.quantity,
      0
    )
);
