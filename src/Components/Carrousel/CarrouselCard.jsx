import React from 'react';
import { Link } from 'react-router-dom';
// style
import './Carrousel.css';

const CarrouselCard = (props) => {
  return (
    <>
      <div className="cd-item">
        <div className="ch-grid">
          <img src={props.img} className="ch-item" alt="" />
        </div>

        <ul className="cd-item-info">
          <h2 className="shake">{props.h2}</h2>
        </ul>
      </div>
      <p>{props.p}</p>
      <Link to="/" className="btn btn-1">
        {props.button}
      </Link>
    </>
  );
};

export default CarrouselCard;
