import React from 'react';
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from '../../components/collectionPreview/CollectionPreview';
import { selectShopCollections } from '../../redux/shop/shopSelectors';

const ShopPage = ({collections}) =>{  
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollections
});

export default connect(mapStateToProps) (ShopPage);