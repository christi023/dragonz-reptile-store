import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
// assets
import grass from '../../assets/grass-background.png';
import chameleon from '../../assets/black-reptile.png';
// styles
import './Footer.css';

export default function Footer() {
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
              <Col md={6} lg={4} className="footer-newsletter">
                <div className="heading">
                  <h4>Our Newsletter</h4>
                  <div className="content">
                    <p>You can unsubscribe at any time.</p>
                    <div className="subscribe-form">
                      <Form action="" method="post">
                        <input type="email" name="email" placeholder="Your Email" />
                        <input type="submit" value="Subscribe" />
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
    </footer>
  );
}
