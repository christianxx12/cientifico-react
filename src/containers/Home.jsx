import React from 'react';
import Characters from '../components/Characters';
import Header from '../components/Header';

import '../assets/styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <Header />
      <Characters />
    </div>
  );
}

export default Home;
