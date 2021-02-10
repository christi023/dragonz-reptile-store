import React from 'react';
import { Link } from 'react-router-dom';
//import Card from 'react-bootstrap/Card';
//import Col from 'react-bootstrap/Col';

// style
import './Packages.css';

const PackagesCard = (props) => {
  return (
    <div className="item">
      <div className="box-entry">
        <div className="box-entry-inner">
          <img src={props.imgSrc} className="img-responsive" alt="" />
          <div className="entry-details">
            <div className="entry-des">
              <h3>{props.h3}</h3>
              <span></span>
              <p className="card-text">{props.p}</p>
            </div>
            <div className="entry-bottom clearfix">
              <p className="card-price">
                <span>$</span>
                {props.price}/
              </p>
              <Link to={props.link} className="btn btn-primary">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;
