import React, { Component } from 'react';
import { getProductInfo } from '../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductInfo extends Component {
  componentDidMount() {
    this.props.getProductInfo(this.props.match.params.id);
  }

  render() {
    const { taste, categories, manufacturer, imageLink, name } = this.props.info;
    return (
      <div>
        <Link to={`/manufacturer=${manufacturer._id}`}>Products</Link><br />
        <img src={imageLink} alt={name}/>
        {categories.length !== 0 ? <p>Category: {categories[0].title}</p> : null}
        {categories.length === 2 ? <p>Subcategory: {categories[1].title}</p> : null}
        {taste.length !== 0 ? <p>Taste: {taste[0].title}</p> : null}
        {manufacturer.length !== 0 ? <p>Manufacturer: {manufacturer.title}</p> : null}
      </div>
    )
  }
}

ProductInfo.propTypes = {
  getProductInfo: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  info: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  info: state.info.info
});

export default connect(mapStateToProps, { getProductInfo })(ProductInfo);