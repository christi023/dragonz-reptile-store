import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { objOne, objTwo, objThree } from '../../data/WelcomeData';
import WelcomeCard from './WelcomeCard';

// style
import './Welcome.css';

const Welcome = () => {
  return (
    <>
      <div id="page-content" className="index-page">
        <section id="welcome" className="box-content box-1">
          <div className="container">
            <div className="white-table">
              <Row className="heading">
                <Col lg={12}>
                  <h2>Welcome</h2>
                  <hr className="line-1" />
                  <div className="intro">LOOKING FOR AN EXOTIC PET?</div>
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  We specialize in the exotic, hard to find reptiles, spiders, hermit crabs and
                  animals that you'd have a tough time finding anywhere. Take a minute and let us
                  know... we'll take a look around for you!
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <WelcomeCard {...objOne} />
                </Col>
                <Col md={4}>
                  <WelcomeCard {...objTwo} />
                </Col>
                <Col md={4}>
                  <WelcomeCard {...objThree} />
                </Col>
              </Row>
            </div>
          </div>
        </section>

        <section id="nav-news" className="box-content box-2 box-style">
          <div className="container">
            <Row>
              <Col lg={12}>
                <i className="fas fa-quote-left"></i>
                <h4>
                  We are building a world class facility, which will give our animals natural
                  holding cages complete with real grass, trees, vines and water ponds.
                </h4>
                <i className="fas fa-quote-right"></i>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
};

export default Welcome;
