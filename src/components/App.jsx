import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleAddContact = element => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...element, id: nanoid() }],
    }));
  };

  render() {
    return (
      <>
        <h1>PhoneBook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <ContactList />
      </>
    );
  }
}
