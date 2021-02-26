import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import SingleCharacter from '../containers/SingleCharacter';
import Prueba from '../containers/Prueba';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/prueba" component={Prueba} />
        <Route exact path="/:id" component={SingleCharacter} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
