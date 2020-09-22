import React from "react";
import { Link } from "react-router-dom";
import CollectionItem from "../collectionItem/CollectionItem";
import "./CollectionsPreview.scss";

const CollectionsPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <Link to={`/shop/${title.toLowerCase()}`}>
      <span className="view-all">Click <span className="spec">HERE</span> to view all {title}</span>
    </Link>
    
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionsPreview;