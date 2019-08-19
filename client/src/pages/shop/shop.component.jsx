import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import {connect} from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

// import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionsStart, match }) => {

  
  useEffect(() => {
    fetchCollectionsStart();
  },[fetchCollectionsStart]);  //doing it to avoid the warning, because we are using a prop it says you should watch it, but it's the prop we get from mapDispatch, but hook doesn't know that so we just pass it in to ignore the warning, fetchCollectionsStart actually won't change at all.

  // componentDidMount(){ pre Hooks code

  //   fetchCollectionsStart();

  //   // const { updateCollections } = this.props;
  //   // const collectionRef = firestore.collection("collections");

  //   // // //makes a api call that fetch back the data associated to this collection
  //   // collectionRef.get().then(snapshot => {
  //   //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   //   updateCollections(collectionsMap);
  //   //   this.setState({
  //   //     loading:false
  //   //   })
  //   // });

  //   //native fetch to grab data
  //   // fetch("https://firestore.googleapis.com/v1/projects/crwn-db-e1957/databases/(default)/documents/collections")
  //   // .then(response => response.json())
  //   // .then(collections => console.log(collections));
    
    
  // }

 
    
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route 
          path={`${match.path}/:collectionId`} component={CollectionPageContainer} 
        />
      </div>
        );
  } 

/*
Nested Routing

we want our collection to dynamically pluck off the right category from our reducer so that it knows which items to render, eg: /hats will get hats from reducer

we need to tell our route that the route name will be a parameter
/hats
/jackets
we want to access this string so that we can get the necessary items
what we do is we start with

<Route path={`${match.path}/`} />

this ${match.path} parameter allows the component to now care about it's place inside the app

because if we hardcoded it we'd have to manually think about where are shop page is inside the app
for every change
and the shop page actually doesnt need to be aware of that, this makes it more flexible if we want to reuse it in another place, that's why we are using match.path
now we can chain on it using :categoryId

:categoryId actually allows us to access this as a parameter on the match object when we're inside of our category page


*/


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
