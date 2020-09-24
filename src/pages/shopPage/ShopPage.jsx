import React from 'react';
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsOverviewContainer from "../../components/collectionsOverview/CollectionsOverviewContainer";
import { fetchCollectionsStartAsync } from "../../redux/shop/shopActions"
import CollectionPageContainer from '../collectionPage/CollectionPageContainer';

class ShopPage extends React.Component {

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionsLoaded } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);