import React, { Component } from 'react';
import { fetchManufacturers } from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SortingForm from '../SortingForm/index';
import PropTypes from 'prop-types';

class Manufacturers extends Component {
  componentDidMount() {
    this.props.fetchManufacturers();
  }

  submit = (e) => {
    this.props.fetchManufacturers(e.value);
  }

  render() {
    return (
      <ul className="manufacturers-catalog">
        <SortingForm handleSubmit={this.submit} />
        {this.props.manufacturers.map(manufacturer => (
          <li key={manufacturer._id}>
            <Link to={`/manufacturer=${manufacturer._id}`}><img src={manufacturer.icon} alt={manufacturer.title} /></Link>
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
  manufacturers: state.manufacturers.items,
});

export default connect(mapStateToProps, { fetchManufacturers })(Manufacturers);