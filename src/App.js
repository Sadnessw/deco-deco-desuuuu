import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ApiService from './components/API/ApiService';
import Manufacturers from './components/Catalog/Manufacturers';
import BtnStyle from './components/Styles/BtnStyle';
import Products from './components/ProductsCatalog/Products';
// import ProductInfo from './components/ProductsCatalog/ProductInfo';

import './App.css';

class App extends Component {
  state = {
    manufacturers: []
  }
  async componentDidMount() {
    const resolve = await ApiService.manufacturersAPI('?sort=1');
    this.setState({ manufacturers: resolve });
  }

  sortByAlph = async (e) => {
    const resolve = await ApiService.manufacturersAPI(`?sort=${e.target.value}`);
    this.setState({ manufacturers: resolve });
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" render={() => (
            <React.Fragment>
              <Manufacturers manufacturers={this.state.manufacturers} sortByAlph={this.sortByAlph} />
            </React.Fragment>
          )} />

          <Route exact path={`/manufacturer=:id`} render={(props) => (
            <React.Fragment>
              <Link to="/" style={BtnStyle.get}>Back to manufacturers</Link>
              <Products {...props} />
            </React.Fragment>
          )} />

          <Route exact path={`/product/:id`} render={() => (
            <React.Fragment>
              <Link to="/" style={BtnStyle.get}>Back to manufacturers</Link>
            </React.Fragment>
          )} />

        </div>
      </Router>
    );
  }
}

export default App;

