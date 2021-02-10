import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import PackageCard from '../Packages/PackagesCard';
//import PackageData from '../../data/PackageData';

import { objOne, objTwo, objThree, objFour } from '../../data/PackageData';
// styles
import './Packages.css';

const Packages = () => {
  return (
    <>
      <section className="box-content box-4" id="packages">
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

          <Carousel className="carrousel">
            <Carousel.Item style={{ width: '240px' }}>
              <PackageCard {...objOne} />
            </Carousel.Item>

            <Carousel.Item style={{ width: '240px' }}>
              <PackageCard {...objTwo} />
            </Carousel.Item>

            <Carousel.Item style={{ width: '240px' }}>
              <PackageCard {...objThree} />
            </Carousel.Item>

            <Carousel.Item style={{ width: '240px' }}>
              <PackageCard {...objFour} />
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Packages;
