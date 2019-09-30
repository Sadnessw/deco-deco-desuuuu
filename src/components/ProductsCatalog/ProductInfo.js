import React, { Component } from 'react';
import ApiService from '../API/ApiService';
import { Link } from 'react-router-dom';
import BtnStyle from '../Styles/BtnStyle';

export class ProductInfo extends Component {
  state = {
    categories: [],
    taste: [],
    manufacturer: [],
    name: ''
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { categories, taste, manufacturer, imageLink, name } = (await ApiService.productInfoAPI(id)).data;
    this.setState({
      categories,
      taste,
      manufacturer,
      imageLink,
      name
    })
  }

  render() {
    const { taste, categories, manufacturer, imageLink, name } = this.state;
    return (
      <React.Fragment>
        <Link style={BtnStyle.get} to={`/manufacturer=${manufacturer._id}`}>Products</Link><br />
        <div className="product-info-border">
          <div className="product-info">
            <p className="product-title">{name}</p>
            <img src={imageLink} alt={name} className="product-image" />
            <div className="info-block">
              {categories.length !== 0 ? <p className="info-title"><span>Category:</span> <span className="info">{categories[0].title}</span></p> : null}
              {categories.length === 2 ? <p className="info-title"><span>Subcategory:</span> <span className="info">{categories[1].title}</span></p> : null}
              {taste.length !== 0 ? <p className="info-title"><span>Taste:</span> <span className="info">{taste[0].title}</span></p> : null}
              {manufacturer.length !== 0 ? <p className="info-title"><span>Manufacturer:</span> <span className="info">{manufacturer.title}</span></p> : null}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ProductInfo;

