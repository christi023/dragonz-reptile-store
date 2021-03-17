import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import agama from '../../assets/agama.jpeg';

const Agama = () => {
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
                      <Link to="">REPTILES: COMMON AGAMA LIZARD</Link>
                    </h2>
                    <span className="cat-links">
                      <Link to="">Agama Agama</Link>
                    </span>
                  </div>
                  <div className="post-thumbnail-wrap">
                    <img src={agama} alt="" />
                  </div>

                  <div className="entry-content">
                    <p>
                      An agama lizard, Agama agama, is a colorful lizard that is native to eastern
                      Africa and is typically found in Kenya and Ethiopia.They may also sometimes
                      have olive-green heads. Dominant males give the rainbow lizards their name.
                    </p>
                    <h2>Habits and Lifestyle</h2>
                    <p>
                      Agama lizards are sometimes referred to as rainbow lizards because of the
                      bright shades of color on their bodies.
                    </p>
                    <h2>Diet and Nutrition</h2>
                    <p>
                      These types of lizards are insectivores, meaning that their diet primarily
                      consists of different types of insects. When they are in the wild, the agama
                      lizard dines on ants, termites, grasshoppers, and beetles as the primary
                      staples in their diet.
                    </p>
                    <h2>Population</h2>
                    <br />
                    <h4>ECOLOGICAL NICHE</h4>
                    <p>
                      To maintain a healthy environment, enclosures require daytime temperatures of
                      at least 90° F (about 32° C) with a cooling area of 80° F (about 26° C). Night
                      temperatures are cooler and should average around 76° F (about 24° C)
                      throughout the enclosure.
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

export default Agama;
