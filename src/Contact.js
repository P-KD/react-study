import React, { Component } from 'react';
 
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';
 
class Contact extends Component {
  state = {
    keyword : '',
    selectedKey : -1,
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

  _nameClick = (key) => {
    this.setState({
      selectedKey : key
    });
  }
  render(){
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (contact) => contact.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) > -1
        
      );
      return data.map(
        (contact, i) => (<ContactInfo contact={contact} key={i} onClick={() => this._nameClick(i)}/>)
        
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
        <ContactDetail
          isSelected = {this.state.selectedKey !== -1}
          contact = {this.state.contactData[this.state.selectedKey]}/>
      </div>
    )
  }
}
 
export default Contact;