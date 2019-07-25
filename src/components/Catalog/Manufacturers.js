import React, { Component } from 'react';
import { fetchManufacturers } from '../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Manufacturers extends Component {
  componentDidMount() {
    this.props.fetchManufacturers();
  }

  render() {
    return (
      <ul className="manufacturers-catalog">>
        {this.props.manufacturers.map(manufacturer => (
        <li key={manufacturer._id}>
          <img src={manufacturer.icon} alt={manufacturer.title} />
        </li>
      ))}
      </ul>
    )
  }
}

Manufacturers.propTypes = {
  fetchManufacturers: PropTypes.func.isRequired,
  manufacturers: PropTypes.array.isRequired
}


const mapStateToProps = state => ({
  manufacturers: state.manufacturers.items
});

export default connect(mapStateToProps, { fetchManufacturers })(Manufacturers);