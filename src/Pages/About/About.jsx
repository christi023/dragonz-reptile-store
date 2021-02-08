import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { objOne, objTwo, objThree } from '../../data/AboutData';
import AboutCard from '../../Pages/About/AboutCard';
import aboutImg from '../../assets/expert.png';
// styles
import './About.css';

const About = () => {
  return (
    <section className="box-content box-5 box-style-3" id="about">
      <div className="container">
        <Row className="heading">
          <Col lg={12}>
            <h2>Why Choose Us</h2>
            <hr className="line-1" />
            <div className="intro">
              Chameleon is the most trusted, reasonable online store to shop for reptiles. We have
              more than 800 EXOTIC REPTILES for sale!
            </div>
          </Col>
        </Row>
        <div className="box-item">
          <Row>
            <Col md={5}>
              <div className="why-choose-us">
                <AboutCard {...objOne} />
                <AboutCard {...objTwo} />
                <AboutCard {...objThree} />
              </div>
            </Col>

            <Col md={7}>
              <div className="pet">
                <img src={aboutImg} className="" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default About;
