import React, { Component } from 'react';
import { getProductInfo } from '../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BtnStyle from '../Styles/BtnStyle';

class ProductInfo extends Component {
  componentDidMount() {
    this.props.getProductInfo(this.props.match.params.id);
  }

  render() {
    const { taste, categories, manufacturer, imageLink, name } = this.props.info;
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