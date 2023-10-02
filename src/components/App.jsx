import { Component } from "react";

import { nanoid } from 'nanoid/non-secure';

import { FormComponent } from "./Form";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: '',
  }

  addContact = (name, number) => {
    const names = this.state.contacts.map(contact => contact.name);

    if (names.find(currentName => (name === currentName))) {
      alert(`${name} is already in contacts`)
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, {
          id: nanoid(),
          name: name,
          number: number,
        }],
      }));
    }
  }

  handleFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  deleteContact = (id) => {
    const otherContacts = this.state.contacts.filter(contact => (contact.id !== id));

    this.setState(prevState => ({contacts: otherContacts}));
  }

  render() {
    return(
      <div className="app">
        <h1 className="app-title">Phonebook</h1>

        <FormComponent addContact={this.addContact} />

        <h2 className="title">Contacts</h2>

        <Filter getNewFilter={this.handleFilter} />

        <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} filter={this.state.filter} />
      </div>
    );
  }
};
