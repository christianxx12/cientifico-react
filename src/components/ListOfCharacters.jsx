import React, { useState, useEffect } from 'react';
import getData from '../services/getData';

import '../assets/styles/components/Characters.css';

function ListOfCharacters() {
  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    getData().then(characters => setCharacter(characters));
  }, []);

  return characters.map(singleCharacter => (
    <article className="Characters-item" key={singleCharacter.id}>
      <a href={singleCharacter.id}>
        <img src={singleCharacter.image} alt={singleCharacter.name} />
        <h2>{singleCharacter.name}</h2>
      </a>
    </article>
  ));
}

export default ListOfCharacters;
