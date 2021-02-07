import React from 'react';
import { Row, Col } from 'react-bootstrap';
import video1 from '../../assets/turtle.mp4';
import video2 from '../../assets/snake.mp4';
import video3 from '../../assets/lizard.mp4';
// style
import './Welcome.css';

const Welcome = () => {
  return (
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
                <video
                  className="img-responsive w-100"
                  src={video1}
                  autoPlay
                  loop
                  muted
                  alt="First slide"
                />
              </Col>
              <Col md={4}>
                <video
                  className="img-responsive w-100"
                  src={video2}
                  autoPlay
                  loop
                  muted
                  alt="First slide"
                />
              </Col>
              <Col md={4}>
                <video
                  className="img-responsive w-100"
                  src={video3}
                  autoPlay
                  loop
                  muted
                  alt="First slide"
                />
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
