import React from 'react';

const WelcomeCard = (props) => {
  return (
    <video className="img-responsive w-100" src={props.src} autoPlay loop muted alt="First slide" />
  );
};

export default WelcomeCard;
