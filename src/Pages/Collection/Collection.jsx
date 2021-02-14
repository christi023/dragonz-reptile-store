import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  objOne,
  objTwo,
  objThree,
  objFour,
  objFive,
  objSix,
  objSeven,
  objEight,
} from '../../data/CollectionData';
import CollectionDetails from '../../Pages/Collection/CollectionDetails';

// style
import './Collection.css';

const Collection = () => {
  return (
    <>
      <section className="box-content box-3 box-style" id="nav-collection">
        <div className="container">
          <Row className="heading">
            <Col lg={12}>
              <h2>Reptile Collection</h2>
              <hr className="line-1" />
              <div className="intro">
                Properly acclimating wild animals back into a natural environment will increase the
                overall health of our animals before we ship them to our customers.
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <CollectionDetails {...objOne} />
            </Col>
            <Col md={3}>
              <CollectionDetails {...objTwo} />
            </Col>
            <Col md={3}>
              <CollectionDetails {...objThree} />
            </Col>
            <Col md={3}>
              <CollectionDetails {...objFour} />
            </Col>
          </Row>

          <Row>
            <Col md={3}>
              <CollectionDetails {...objFive} />
            </Col>
            <Col md={3}>
              <CollectionDetails {...objSix} />
            </Col>
            <Col md={3}>
              <CollectionDetails {...objSeven} />
            </Col>
            <Col md={3}>
              <CollectionDetails {...objEight} />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Collection;
