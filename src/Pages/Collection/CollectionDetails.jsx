import React from 'react';
import { Link } from 'react-router-dom';
// style
import './Collection.css';

const CollectionDetails = (props) => {
  return (
    <div className="ch-grid">
      <div className="ch-item" style={{ backgroundImage: `url(${props.imgSrc})` }}>
        <div className="ch-info">
          <h3 className="">{props.h3}</h3>
          <p>{props.p}</p>
          <Link to={props.link} style={{ color: 'white' }}>
            More Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollectionDetails;
