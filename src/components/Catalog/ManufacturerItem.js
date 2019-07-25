import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

class ManufacturerItem extends Component {
  render() {
    const {icon, title} = this.props.manufactItem;
    return (
        <img src={icon} alt={`${title}.jpg`} width="215" height="215"/>
    )
  }
}

ManufacturerItem.propTypes = {
  manufactItem: PropTypes.object.isRequired
}

export default ManufacturerItem;
