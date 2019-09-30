import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';



class ProductItem extends Component {

  render() {
    const { imageLink, name, _id} = this.props.productItem;
    return (
      <Link to={`/product/${_id}`}><img src={imageLink} alt={`${name}.jpg`} width="215" height="215" /></Link>
    )
  }
}

ProductItem.propTypes = {
  productItem: PropTypes.object.isRequired
}


export default ProductItem;
