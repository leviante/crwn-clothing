import React from "react";

import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({match}) => {
  return (
    <div className="shop">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
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

export default ShopPage;
