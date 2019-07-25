import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ManufacturerItem from './ManufacturerItem';

class Catalog extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <label htmlFor="sorting-id">Sort Alphabetically</label>
          <select onChange={this.props.sortByAlph} id="sorting-id" name="sorting-by-alph">
            <option value="1">Name ascending A-Z</option>
            <option value="-1">Name descending Z-A</option>
          </select>
        </form>
        <ul className="manufacturers-catalog">
          {this.props.manufacturers.map(manufactItem => (
            <li key={manufactItem._id} className="manufacturer-item">
              <ManufacturerItem manufactItem={manufactItem} />
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

Catalog.propTypes = {
  manufacturers: PropTypes.array.isRequired,
  sortByAlph: PropTypes.func.isRequired
}



export default Catalog;
