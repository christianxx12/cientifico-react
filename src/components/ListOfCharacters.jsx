import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import getData from '../services/getData';

import '../assets/styles/components/Characters.css';

function ListOfCharacters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getData().then(fetchCharacters => setCharacters(fetchCharacters.response));
  }, []);

  return characters.map(singleCharacter => (
    <article className="Characters-item" key={singleCharacter.id}>
      <Link to={`/${singleCharacter.id}`}>
        <img src={singleCharacter.image} alt={singleCharacter.name} />
        <h2>{singleCharacter.name}</h2>
      </Link>
    </article>
  ));
}

export default ListOfCharacters;
