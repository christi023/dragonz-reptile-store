import React from 'react';
// styles
import './About.css';

const AboutCard = (props) => {
  return (
    <>
      <div className="box-icon">
        <div className="box-icon-image">
          <i className="fas fa-check"></i>
        </div>
        <div className="box-icon-aside">
          <div className="box-icon-title">
            <h3>{props.h3}</h3>
          </div>
          <div className="box-icon-text">
            <p>{props.p}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
