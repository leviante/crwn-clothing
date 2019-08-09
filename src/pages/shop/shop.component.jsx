import React from "react";
import { Route } from "react-router-dom";
import {connect} from "react-redux";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import { updateCollections  } from "../../redux/shop/shop.actions";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  //if all we want to do is to set initial state, you don't need to call constructor and super
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount(){
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({
        loading:false
      })
    });
  }

  render(){

    const {match} = this.props;
    const {loading} = this.state;
    
    return (
      <div className="shop">
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
        <Route 
          path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props}/>} 
        />
      </div>
        );
  } 

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
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
