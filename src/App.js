import React, { Component } from 'react';
import ApiService from './components/API/ApiService';
import Manufacturers from './components/Catalog/Manufacturers';
import './App.css';

class App extends Component {
  state = {
    manufacturers: []
  }
  async componentDidMount() {
    const resolve = await ApiService.manufacturersAPI('?sort=1');
    this.setState({ manufacturers: resolve.data.filter(manufactItem => manufactItem.icon) });
  }

  render() {
    return (
      <div className="App">
        <Manufacturers manufacturers={this.state.manufacturers} />
      </div>
    );
  }
}

export default App;
