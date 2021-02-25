import React from 'react';

import '../assets/styles/components/Header.css';

function Header() {
  return (
    <div className="Header-main">
      <div className="Header-logo">
        <h1>
          <a href="/">100tifi.co</a>
        </h1>
      </div>
      <div className="Header-nav">
        <a href="#/about/">About</a>
      </div>
    </div>
  );
}

export default Header;
