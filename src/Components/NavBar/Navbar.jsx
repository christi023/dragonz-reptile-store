import React from 'react';
import { navData } from '../../data/NavData';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Navbar, Nav, Container } from 'react-bootstrap';
// styles
import './Navbar.css';

export default function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="dark" expand="lg" collapseOnSelect className="navbar-fixed-top">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ maxHeight: '110px', marginTop: '-15px' }}
                className="hidden-xs"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navData.map((item, i) => (
                <Link to={item.links} key={i} className="nav-menu-links">
                  {item.title}
                </Link>
              ))}
              <br />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
