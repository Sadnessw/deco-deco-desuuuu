import React, { Component } from 'react';
import ApiService from '../API/ApiService';
import {Link} from 'react-router-dom';

export class ProductInfo extends Component {
  state = {
    categories: [],
    taste: [],
    manufacturer: []
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { categories, taste, manufacturer, imageLink } = (await ApiService.productInfoAPI(id)).data;
    this.setState({
      categories,
      taste,
      manufacturer,
      imageLink
    })
  }

  render() {
    const { taste, categories, manufacturer, imageLink, name } = this.state;
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

export default ProductInfo;

