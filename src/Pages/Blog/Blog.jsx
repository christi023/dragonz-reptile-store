import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import boa from '../../assets/rainbow-boa1.jpg';

import './Blog.css';
const Blog = () => {
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
                      <Link to="">REPTILES: RAINBOW BOA</Link>
                    </h2>
                    <span className="cat-links">
                      <Link to="">SLENDER BOA</Link>
                    </span>
                  </div>
                  <div className="post-thumbnail-wrap">
                    <img src={boa} alt="" />
                  </div>

                  <div className="entry-content">
                    <p>
                      The Rainbow boa is a medium-sized non-venomous snake native to Central and
                      South America. It is named for its attractive iridescent/holographic sheen
                      caused by structural coloration. Its skin refracts light and creates a
                      rainbow-colored effect. Rainbow boas are brown or reddish-brown in color with
                      black stripes on the top of the head and large black rings down their back.
                      Females in this species are significantly larger than males.
                    </p>

                    <h2>Distribution</h2>
                    <p>
                      Rainbow boas are found in lower Central America (Costa Rica and Panama), and
                      farther south into South America it occurs east of the Andes roughly reaching
                      northern Argentina (in the provinces: Chaco, Córdoba, Corrientes, Formosa,
                      Salta, Santiago del Estero, and Tucumán). They live in humid forests and can
                      also be found in open savannas.
                    </p>
                    <h2>Habits and Lifestyle</h2>
                    <p>
                      Rainbow boas are solitary creatures. They are nocturnal but may be seen
                      basking during the day when temperatures at night are low. These snakes are
                      mostly terrestrial and search for prey on the forest floor and rocky areas; to
                      locate the prey Rainbow boas use heat-sensing pits on their jaw
                    </p>
                    <h2>Diet and Nutrition</h2>
                    <p>
                      Rainbow boas have a carnivorous diet and feed on warm-blooded vertebrates,
                      rodents, and birds.
                    </p>
                    <h2>Mating Habits</h2>
                    <p>
                      Rainbow boas are polygynous which means that males mate with multiple females.
                      The breeding season usually occurs from November to January. They give birth
                      to live young, as opposed to many other snakes who lay eggs.
                    </p>
                    <h2>Population</h2>
                    <br />
                    <h4>POPULATION THREATS</h4>
                    <p>
                      Because of their beautiful coloring Rainbow snakes are commonly found in the
                      pet trade. Destruction of their native habitat for agriculture, ranching, and
                      development has also significantly decreased the population of this species.
                    </p>

                    <h4>ECOLOGICAL NICHE</h4>
                    <p>
                      Rainbow boas play an important role in the ecosystem they live in. Due to
                      their diet, these snakes help to control populations of small mammals,
                      especially rodents.
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

export default Blog;
