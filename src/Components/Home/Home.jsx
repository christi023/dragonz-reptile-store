import React from 'react';
// assets
import BackImg from '../../assets/bg.jpg';
// Components
import Carrousel from '../Carrousel/Carrousel';
import Welcome from '../Welcome/Welcome';
import Footer from '../Footer/Footer';
// Pages
import About from '../../Pages/About/About';
import Packages from '../../Pages/Packages/Packages';
import Collection from '../../Pages/Collection/Collection';
import Contact from '../../Pages/Contact/Contact';

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
      <About />
      <Packages />
      <Collection />
      <Contact />
      <br />
      <Footer />
    </>
  );
};

export default Home;
