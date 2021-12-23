import React from 'react';
import { connect } from 'react-redux';
import ContactListStyled from './ContactListStyled';
import contactsActions from '../../redux/phoneBook/phoneBookActions';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactListStyled>
      {contacts.map(contact => {
        const { id, name, number } = contact;

        return (
          <li className="item" key={id}>
            <p className="name">{name}:</p>
            <p className="number">{number}</p>
            <button
              className="delBtn"
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ContactListStyled>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapstateToProps = state => {
  return {
    contacts: getVisibleContacts(state.contacts.items, state.contacts.filter),
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapstateToProps, mapDispatchToProps)(ContactList);
