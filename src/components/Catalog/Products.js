import React, { Component } from 'react';
import { fetchProducts } from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Products extends Component {
  componentDidMount() {
    const params = {manufacturer: this.props.match.params.id}
    this.props.fetchProducts(params);
  }

  render() {
    return (
      <ul className="products-catalog">
        {this.props.products.result.map(product => (
          <li key={product._id} className="product-item">
            <Link to={`/product/${product._id}`}><img src={product.imageLink} alt={product.name} width="215" height="215" /></Link>
          </li>
        ))}
      </ul>
    )
  }
}

Products.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  products: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
  products: state.products.products
});


export default connect(mapStateToProps, { fetchProducts })(Products);