import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
export default class ContactDetail extends Component {
    render() {
      const details = (<div>
                          <p>{this.props.contact.name}</p>
                          <p>{this.props.contact.phone}</p>
                       </div>);
      const blank = (<div>Not selected</div>);
      return (
        <div>
          <h2>Detail information</h2>
          {this.props.isSelected ? details:blank}
        </div>
      );
    }
}
 
ContactDetail.defaultProps = {
  isSelected : false,
  contact : {
    name : '',
    phone : ''
  }
}
 
ContactDetail.propTypes = {
  isSelected : PropTypes.bool.isRequired,
  contact : PropTypes.object.isRequired
};

