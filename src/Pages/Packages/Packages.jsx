import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PackageCard from '../Packages/PackagesCard';
import { objOne, objTwo, objThree, objFour, objFive, objSix } from '../../data/PackageData';

// styles
import './Packages.css';

const Packages = () => {
  return (
    <>
      <section className="box-content box-4 section-bg" id="packages">
        <div className="container">
          <Row className="heading">
            <Col lg={12}>
              <h2>Packages</h2>
              <hr className="line-1" />
              <div className="intro">
                We offer fair prices.We aren’t cheapest, but we won’t ruin your wallet either.
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <PackageCard {...objOne} />
            </Col>

            <Col md={4}>
              <PackageCard {...objTwo} />
            </Col>

            <Col md={4}>
              <PackageCard {...objThree} />
            </Col>

            <Col md={4}>
              <PackageCard {...objFour} />
            </Col>

            <Col md={4}>
              <PackageCard {...objFive} />
            </Col>

            <Col md={4}>
              <PackageCard {...objSix} />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Packages;
