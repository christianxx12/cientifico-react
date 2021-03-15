import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import getData from '../services/getData';

import '../assets/styles/components/SingleCharacter.css';

function SingleCharacter(props) {
  const id = props.match.params.id;

  const [data, setData] = useState([]);

  useEffect(() => {
    getData(id).then(result => {
      setData(result.response);
    });
  }, [id]);

  console.log(data);

  return data.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <React.Fragment>
      <Header />
      <div className="Characters-inner">
        <article className="Characters-card">
          <img src={data.image} alt={data.name} />
          <h2>{data.name}</h2>
        </article>
        <article className="Characters-card">
          <h3>
            Episodes: <span>{data.episode.length}</span>
          </h3>
          <h3>
            Status: <span>{data.status}</span>
          </h3>
          <h3>
            Species: <span>{data.species}</span>
          </h3>
          <h3>
            Gender: <span>{data.gender}</span>
          </h3>
          <h3>
            Origin: <span>{data.origin.name}</span>
          </h3>
          <h3>
            Last Location: <span>{data.location.name}</span>
          </h3>
        </article>
      </div>
    </React.Fragment>
  );
}

export default SingleCharacter;
