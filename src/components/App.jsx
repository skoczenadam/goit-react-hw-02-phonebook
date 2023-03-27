import React, { Component} from 'react';
import { nanoid } from 'nanoid';
import { LoginForm } from './loginForm/LoginForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleFilterChange = filterValue => {
    this.setState({
      filter: filterValue,
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, contacts, number } = this.state;
  
    const isContactExists = contacts.some(contact => contact.name === name);
    if (isContactExists) {
    alert(`${name} już istnieje w książce telefonicznej!`);
    return;
    }
    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    this.setState({
      contacts: [...contacts, newContact],
      name: '',
      number: '',
    });
  };

  handleDeleteContact = contactId => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== contactId);
    this.setState({
      contacts: updatedContacts,
    });
  }


  render() {
    const { contacts, name, number, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <LoginForm onHandleSubmit={this.handleSubmit} name={name} number={number} onHandleChange={this.handleChange} />
        <h1>Contacts</h1>
        <Filter onHandleFilterChange={this.handleFilterChange} />
        <ContactList newContact={contacts} filter={filter} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}