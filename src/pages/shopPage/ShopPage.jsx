import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';
import CollectionsOverviewContainer from "../../components/collectionsOverview/CollectionsOverviewContainer";
// import CollectionPage from "../collectionPage/CollectionPage";
// import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions"
// import WithSpinner from "../../components/withSpinner/WithSpinner"
import { selectIsCollectionsFetching, selectIsCollectionsLoaded } from '../../redux/shop/shopSelectors';
import CollectionPageContainer from '../collectionPage/CollectionPageContainer';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();

    //****The following function moved to Redux******
    // const collectionRef = firestore.collection('collections');

    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      // updateCollections(collectionsMap);
      // this.setState({ loading: false });
  }

  render() {
    const { match, isCollectionsLoaded } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
          // using render instead of component to use funtion for HOC -- HIGH ORDER COMPONENT
          // render={props => (
          //   <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />
          // )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
          // render={props => (
          //   <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          // )}
        />
      </div>
    );
  }

}

// const mapStateToProps = createStructuredSelector ({
//   isCollectionsFetching: selectIsCollectionsFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded
// });
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);