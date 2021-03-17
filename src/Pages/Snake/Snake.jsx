import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import snake from '../../assets/milkSnake.jpg';

//import './Blog.css';
const Snake = () => {
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
                      <Link to="">REPTILES: SINALOAN MILKSNAKE</Link>
                    </h2>
                    <span className="cat-links">
                      <Link to="">LAMPROPELTIS TRIANGULUM</Link>
                    </span>
                  </div>
                  <div className="post-thumbnail-wrap">
                    <img src={snake} alt="" />
                  </div>

                  <div className="entry-content">
                    <p>
                      The Sinaloan milk snake is not venomous, but its bright colors act as a false
                      advertisement to potential predators. Many milk snake subspecies, including
                      the Sinaloan milk snake, exhibit aposematic mimicry—their color patterns
                      resemble those of the venomous copperhead or coral snake.
                    </p>
                    <h2>Habits and Lifestyle</h2>
                    <p>
                      Sinaloan milk snakes are found in Mexico in the states of Sonora, Sinaloa and
                      Chihuahua. They inhabit dry, arid and rocky semi-desert regions. During the
                      day, they rest beneath loose rocks, in rock crevices or underneath cactus
                      plants.
                    </p>
                    <h2>Diet and Nutrition</h2>
                    <p>
                      Sinaloan milk snakes are opportunistic eaters, consuming anything available,
                      including reptile eggs, lizards, snakes, amphibians, birds and small mammals,
                      such as rodents. These snakes subdue their prey by constriction.
                    </p>
                    <h2>Mating Habits</h2>
                    <p>
                      These snakes breed from May to June. They may use chemical cues to during
                      mating season, and they exhibit courtship behaviors. Males contact females
                      with their head, flick their tongues and jerk their bodies to initiate
                      courtship.
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

export default Snake;
