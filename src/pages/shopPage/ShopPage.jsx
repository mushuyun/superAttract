import React, { Component } from 'react';
import { Route } from "react-router-dom";

import CollectionsOverview from '../../components/collectionsOverview/CollectionsOverview';
import CollectionPage from "../collectionPage/CollectionPage";

const ShopPage = ({match}) =>{  
  console.log(match);
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} /> 
        
      </div>
    );
};


export default ShopPage;