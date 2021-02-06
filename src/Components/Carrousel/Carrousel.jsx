import React from 'react';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import CarrouselCard from './CarrouselCard';
import { ObjOne, ObjTwo, ObjThree, ObjFour } from '../../data/CarrouselData';

// style
import './Carrousel.css';

const Carrousel = () => {
  return (
    <header>
      <Col lg={12}>
        <div className="clear-fix">
          <div className="cd-container">
            <Carousel>
              <Carousel.Item>
                <CarrouselCard {...ObjOne} />
              </Carousel.Item>

              <Carousel.Item>
                <CarrouselCard {...ObjTwo} />
              </Carousel.Item>

              <Carousel.Item>
                <CarrouselCard {...ObjThree} />
              </Carousel.Item>

              <Carousel.Item>
                <CarrouselCard {...ObjFour} />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Col>
    </header>
  );
};

export default Carrousel;
