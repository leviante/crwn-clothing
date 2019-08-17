//a component
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

//this is perfectly fine but it is a bit harder to read
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview));

//To fix it, use compose from "redux"
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner  
)(CollectionsOverview);

export default CollectionsOverviewContainer;