import React from "react";
import { connect } from "react-redux";


import { addItem } from "../../redux/cart/cart.actions";


//import styled-components
import { CollectionItemContainer, CollectionFooterContainer, PriceSpan, NameSpan, ImageDiv, CustomCollectionItemButton } from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <ImageDiv imageUrl={imageUrl}/>
      <CollectionFooterContainer>
        <NameSpan>{name}</NameSpan>
        <PriceSpan>{price}</PriceSpan>
      </CollectionFooterContainer>
      <CustomCollectionItemButton onClick={() => addItem(item)} inverted>
        {" "}
        Add to cart
      </CustomCollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
