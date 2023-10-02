import { Component } from "react";

import { nanoid } from 'nanoid/non-secure';

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact, filter } = this.props;

    return(
      <ul className="contact-list">
        {contacts.filter(contact => (
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )).map(contact => (
          <li className="contact-element" key={nanoid()}>
            <p>{contact.name}: {contact.number}</p>
            <button className="delete-contact" type="button" onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}