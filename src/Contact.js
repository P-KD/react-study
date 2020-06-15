import React, { Component } from 'react';
 
import ContactInfo from './ContactInfo';
 
class Contact extends Component {
  state = {
    keyword : '',
    contactData : [{
      name : 'David',
      phone : '010-1234-5678'
    }, {
      name : 'Albert',
      phone : '010-1234-1234'
    }, {
      name : 'John',
      phone : '010-5678-5678'
    }, {
      name : 'Wade',
      phone : '010-4312-5677'
    },]
  }
  _searchContact = (e) => {
    this.setState({
      keyword : e.target.value
    });
  }
  render(){
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase()
          .indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      );
      return data.map(
        (contact, i) => {
          return (<ContactInfo contact={contact} key={i} />);
        }
      );
    }
    return(
      <div>
        <h1>Contact</h1>
        <input
          name="keyword"
          placeholder="Search"
          value={this.state.keyword} 
          onChange={this._searchContact}
        />
        <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    )
  }
}
 
export default Contact;