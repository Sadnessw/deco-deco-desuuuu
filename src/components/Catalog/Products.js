import React, { Component } from 'react';
import { fetchProducts } from '../actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts(this.props.match.params.id);
  }

  render() {
    return (
      <ul className="products-catalog">
        {this.props.products.result.map(product => (
          <li key={product._id}>
            <Link to={`/product/${product._id}`}><img src={product.imageLink} alt={product.name}/></Link>
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