import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { StyledMain, StyledContainer, StyledSection } from 'style/GlobalStyle';
import { StyledTitle, StyledWrapper, StyledSmollTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact => {
    const { contacts } = this.state;
    const isContactExist = contacts.some(
      contact => contact.name === newContact.name
    );

    if (isContactExist) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      }));
    }
  };

  handleFilterChange = event => {
    console.log(this.state.filter);
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredItems = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  render() {
    const filteredContacts = this.getFilteredItems();

    return (
      <StyledMain>
        <StyledSection>
          <StyledContainer>
            <StyledWrapper>
              <StyledTitle>PhoneBook</StyledTitle>
              <ContactForm onAddContact={this.handleAddContact} />

              <Filter
                value={this.state.filter}
                onFilterChange={this.handleFilterChange}
              />

              <StyledSmollTitle>Contacts</StyledSmollTitle>
              <ContactList
                contacts={filteredContacts}
                onFilterChange={this.handleFilterChange}
                onDeletContact={this.handleDeleteContact}
              />
            </StyledWrapper>
          </StyledContainer>
        </StyledSection>
      </StyledMain>
    );
  }
}
