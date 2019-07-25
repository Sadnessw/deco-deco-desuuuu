import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ManufacturerItem from './ManufacturerItem';

class Catalog extends Component {
  render() {
    return (
        <ul className="manufacturers-catalog">
          {this.props.manufacturers.map(manufactItem => (
            <li key={manufactItem._id} className="manufacturer-item">
              <ManufacturerItem manufactItem={manufactItem} />
            </li>
          ))}
        </ul>
    )
  }
}

Catalog.propTypes = {
  manufacturers: PropTypes.array.isRequired,
}

export default Catalog;
