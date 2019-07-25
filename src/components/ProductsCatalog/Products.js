import React, { Component } from 'react';
import ApiService from '../API/ApiService';
import ProductItem from './ProductItem';


class Products extends Component {
  state = {
    products: []
  }

  async componentDidMount() {
    const resolve = await ApiService.productsAPI(this.props.match.params.id);
    this.setState({ products: resolve.data.result });
  }


  render() {
    return (
      <React.Fragment>
        <ul className="products-catalog">
          {this.state.products.map(productItem => (
            <li key={productItem._id} className="product-item">
              <ProductItem productItem={productItem} />
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default Products
