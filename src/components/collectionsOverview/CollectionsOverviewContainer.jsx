
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionsFetching } from "../../redux/shop/shopSelectors";
import WithSpinner from "../withSpinner/WithSpinner";
import Collectionsoverview from "./CollectionsOverview";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
});

// The following is working too, but just too hard to read. We will use compose to make a easier to read one
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(Collectionsoverview));

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(Collectionsoverview);

export default CollectionsOverviewContainer;