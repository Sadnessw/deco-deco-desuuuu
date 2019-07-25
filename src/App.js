import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Manufacturers from './components/Catalog/Manufacturers';
import Products from './components/Catalog/Products';

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

        <Route exact path={'/manufacturer=:id'} render={(props) => (
          <React.Fragment>
            <Link to="/">Manufacturers</Link>
            <Products {...props} />
          </React.Fragment>
        )} />

      </div>
    </Router>
  );
}

export default App;
