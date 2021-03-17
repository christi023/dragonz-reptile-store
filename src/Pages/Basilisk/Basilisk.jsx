import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import basilisk from '../../assets/basilisk1.jpg';

//import './Blog.css';
const Basilisk = () => {
  return (
    <>
      <div id="page-content">
        <div className="container">
          <Row>
            <div id="main-content">
              <article className="single-post">
                <div className="wrap-post">
                  <div className="entry-header">
                    <h2 className="entry-title">
                      <Link to="">REPTILES: GREEN BASILISK LIZARD</Link>
                    </h2>
                    <span className="cat-links">
                      <Link to="">BASILISCUS PLUMIFRONS</Link>
                    </span>
                  </div>
                  <div className="post-thumbnail-wrap">
                    <img src={basilisk} alt="" />
                  </div>

                  <div className="entry-content">
                    <p>
                      The green basilisk lizard is also called a plumed or double-crested basilisk;
                      but its amazing ability to run on water gives this species its most
                      recognizable moniker: the Jesus Christ lizard.
                    </p>
                    <h2>Habits and Lifestyle</h2>
                    <p>
                      Abundant in the tropical rain forests of Central America, from southern Mexico
                      to Panama, green basilisks spend much of their time in the trees and are never
                      far from a body of water.
                    </p>
                    <h2>Diet and Nutrition</h2>
                    <p>
                      Green basilisks are omnivores, surviving on a diet of plant material, insects,
                      fruit, and small vertebrates.
                    </p>
                    <h2>Mating Habits</h2>
                    <p>
                      Pregnant females prepare a shallow trench where they lay up to 20 eggs. The
                      mother then leaves the eggs to hatch on their own. Hatchlings are born with
                      the ability to run (on land and water), climb, and swim.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Basilisk;
