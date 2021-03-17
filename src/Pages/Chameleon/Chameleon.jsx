import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import chameleon from '../../assets/panther.jpeg';

//import './Blog.css';
const Chameleon = () => {
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
                      <Link to="">REPTILES: PANTHER CHAMELEON</Link>
                    </h2>
                    <span className="cat-links">
                      <Link to="">FURCIFER PARDALIS</Link>
                    </span>
                  </div>
                  <div className="post-thumbnail-wrap">
                    <img src={chameleon} alt="" />
                  </div>

                  <div className="entry-content">
                    <p>
                      The Panther Chameleon is a species of brightly colorful chameleons that are
                      indigenous in the tropical forest areas of the Republic of Madagascar. These
                      rainbow-colored lizards are very common in the pet trade, and their popularity
                      mostly lies in their outstanding pied, dappled skin.
                    </p>
                    <h2>Habits and Lifestyle</h2>
                    <p>
                      The panther chameleons are found much closer to the forest floor than many
                      other chameleons. They commonly dwell in the foliage of small trees in the
                      areas covered by tropical forests.
                    </p>
                    <h2>Diet and Nutrition</h2>
                    <p>
                      Depending upon their range, the panther chameleons will primarily eat diverse
                      type of worms that are available in the wild, as also insects like crickets,
                      grasshoppers, roaches, etc.
                    </p>
                    <h2>Mating Habits</h2>
                    <p>
                      The female panther chameleons can lay five to eight clutches of eggs in her
                      whole lifetime, after which it dies within two to three years.
                    </p>
                    <h2>Population</h2>
                    <br />
                    <h4>POPULATION THREATS</h4>
                    <p>
                      They are called ‘panther’ because they are very aggressive.When threatened,
                      furious or angry, they might emit a hissing sound.
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

export default Chameleon;
