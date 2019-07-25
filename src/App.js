import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Manufacturers from './components/Catalog/Manufacturers';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Route exact path='/' render={() => (
          <React.Fragment>
            <Manufacturers />
          </React.Fragment>
        )} />

      </div>
    </Router>
  );
}

export default App;
