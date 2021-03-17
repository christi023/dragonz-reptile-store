import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import python from '../../assets/green-python.jpeg';

const Green = () => {
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
                      <Link to="">REPTILES: GREEN TREE PYTHON</Link>
                    </h2>
                    <span className="cat-links">
                      <Link to="">Klngan (Kalam language of Papua New Guinea)</Link>
                    </span>
                  </div>
                  <div className="post-thumbnail-wrap">
                    <img src={python} alt="" />
                  </div>

                  <div className="entry-content">
                    <p>
                      The Green tree python is a nonvenomous snake native to New Guinea, islands in
                      Indonesia, and Australia. As its name suggests, it is a bright green snake,
                      with females slightly larger and heavier than males.
                    </p>
                    <h2>Habits and Lifestyle</h2>
                    <p>
                      Green tree pythons are arboreal and lead a solitary life. Most of their time
                      is spent up in trees coiled around branches. These snakes have a particular
                      way of resting in the branches of trees; they loop a coil or two over the
                      branches in a saddle position and place their head in the middle.
                    </p>
                    <h2>Diet and Nutrition</h2>
                    <p>
                      Green tree pythons are carnivorous reptiles. Their diet consists mostly of
                      small mammals, such as rodents, and sometimes reptiles, such as geckos and
                      skinks.
                    </p>
                    <h2>Population</h2>
                    <br />
                    <h4>POPULATION THREATS</h4>
                    <p>
                      Green tree pythons are popular among reptile enthusiasts and breeders due to
                      the adult and juvenile colors.
                    </p>

                    <h4>ECOLOGICAL NICHE</h4>
                    <p>
                      Due to their diet habits, Green tree pythons help to control populations of
                      rodents and lizards they prey on.
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

export default Green;
