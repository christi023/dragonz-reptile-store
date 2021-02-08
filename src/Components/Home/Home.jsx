import React from 'react';
// assets
import BackImg from '../../assets/bg.jpg';
// Components
import Carrousel from '../Carrousel/Carrousel';
import Welcome from '../Welcome/Welcome';

// Pages
// style
import './Home.css';

const Home = () => {
  return (
    <>
      <div
        className="home"
        style={{
          backgroundImage: `url(${BackImg})`,
        }}
      >
        <Carrousel />
      </div>
      <Welcome />
    </>
  );
};

export default Home;
