import React from "react";
import { connect } from "react-redux";

import {selectCollection} from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

//import styled components
import {CollectionPageContainer, StyledTitle, ItemDiv } from "./collection.styles"

//looks similar to collections preview, just with more items pulled from respective shop data
const CollectionPage = ({collection}) => {
//using match.params.collectionId, we want to select the appropriate data from the redux state and show the correct collection
const {title, items} = collection;

    return (
    <CollectionPageContainer>
        <StyledTitle>{ title }</StyledTitle>
        <ItemDiv>
        {
            items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
        </ItemDiv>
    </CollectionPageContainer>
    );
}

const mapStateToProps = (state,ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);