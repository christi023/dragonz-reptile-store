import React from 'react';
import { navData } from '../../data/NavData';
import { Link } from 'react-router-dom';
import img from '../../assets/logo.png';

// styles
import './Navbar.css';

export default function Navbar() {
  return (
    <div className="nav">
      <Link to="/">
        <img src={img} alt="" />
      </Link>
      <div className="menu-bars"></div>
      <div className="nav-menu">
        {navData.map((item, i) => (
          <Link to={item.links} key={i} className="nav-menu-links">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
