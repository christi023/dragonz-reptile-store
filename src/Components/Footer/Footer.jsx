import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
// assets
import grass from '../../assets/grass-background.png';
import chameleon from '../../assets/black-reptile.png';
// styles
import './Footer.css';

export default function Footer() {
  // state
  const [setData] = useState({
    email: '',
  });

  const InputEvent = () => {
    setData((preVal) => {
      return {
        ...preVal,
      };
    });
  };
  // form submit method
  const formSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for subscribing to our weekly newsletter.');
  };

  return (
    <footer>
      <div className="grass">
        <img src={grass} alt="" />
      </div>
      <div className="chameleon">
        <img src={chameleon} alt="" />
      </div>
      <div className="top-footer">
        <div className="container">
          <Row>
            <Col md={6} style={{ borderRight: '1px solid #ddd' }}>
              <p>Please connect and follow us via Social Media.</p>
            </Col>
            <Col md={6}>
              <div className="list-inline">
                <Link to="/" className="twitter">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/" className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="/" className="instagram">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="/" className="youtube">
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link to="/" className="linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className="wrap-footer">
        <div className="container">
          <div className="wrap-footer-bg">
            <Row>
              <Col lg={4} md={6}></Col>

              <Col lg={2} md={6} className="footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About us</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <Link to="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </Col>

              <Col lg={2} md={6} className="footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <Link to="/">Support</Link>
                  </li>
                  <li>
                    <Link to="/">Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/">Careers</Link>
                  </li>
                  <li>
                    <Link to="/">Investors</Link>
                  </li>
                  <li>
                    <Link to="/">Sponsorships</Link>
                  </li>
                </ul>
              </Col>

              <Col md={6} lg={4} className="footer-newsletter">
                <div className="heading">
                  <h4>Our Newsletter</h4>
                  <div className="content">
                    <p>You can unsubscribe at any time.</p>
                    <div className="subscribe-form">
                      <Form action="post" method="post" onSubmit={formSubmit}>
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          onChange={InputEvent}
                        />
                        <button type="submit" value="">
                          Subscribe
                        </button>
                      </Form>
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="copyright">
          © 2021 Copyright. | All Rights Reserved | Terms and Conditions
        </div>
      </div>
    </footer>
  );
}
