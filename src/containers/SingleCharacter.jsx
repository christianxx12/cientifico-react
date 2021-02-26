import React from 'react';
import Header from '../components/Header';
import getData from '../services/getData';

function SingleCharacter() {
  getData('1').then(results => console.log(results));

  return (
    <React.Fragment>
      <Header />
      <h1>Aqui va la informacion del character</h1>
    </React.Fragment>
  );
}

export default SingleCharacter;
