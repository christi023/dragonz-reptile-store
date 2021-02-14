import React from 'react';
import { Link } from 'react-router-dom';
// style
import './Collection.css';

const CollectionDetails = (props) => {
  return (
    <div className="ch-grid">
      <img src={props.imgSrc} className="ch-item" alt="" />
      <div className="ch-info">
        <h3 className="shake">{props.h3}</h3>
        <p>{props.p}</p>
        <Link to={props.link}>More Details</Link>
      </div>
    </div>
  );
};

export default CollectionDetails;
