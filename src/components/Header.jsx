import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.css';

function Header() {
  return (
    <div className="Header-main wrapper">
      <div className="Header-logo">
        <h1>
          <Link to="/">100tifi.co</Link>
        </h1>
      </div>
      <div className="Header-nav">
        <a href="#/about/">About</a>
      </div>
    </div>
  );
}

export default Header;
