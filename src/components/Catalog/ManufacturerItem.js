import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import {Link} from "react-router-dom";

class ManufacturerItem extends Component {
  render() {
    const {icon, title, _id} = this.props.manufactItem;
    return (
        <Link to={`/manufacturer=${_id}`}><img src={icon} alt={`${title}.jpg`} width="215" height="215"/></Link>
    )
  }
}

ManufacturerItem.propTypes = {
  manufactItem: PropTypes.object.isRequired
}


export default ManufacturerItem;
