import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ContactFormStyled from './ContactFormStyled';
import contactsActions from '../../redux/phoneBook/phoneBookActions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = uuidv4();
  phoneId = uuidv4();

  handelInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handelFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const { contacts } = this.props;
    const existContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (existContact) {
      return alert(`Contact "${name}" already exists`);
    }
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactFormStyled>
        <form className="contacts-form" onSubmit={this.handelFormSubmit}>
          <label className="form-label">
            Name
            <input
              className="form-input"
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name can only contains letters, apostrophe, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc."
              required
              onChange={this.handelInputChange}
              autoComplete="off"
            />
          </label>
          <label className="form-label" id={this.phoneId}>
            Number
            <input
              className="form-input"
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number can only contains digits (min 8 digits), spaces, dashes, parentheses and can start with +"
              required
              id={this.phoneId}
              onChange={this.handelInputChange}
              autoComplete="off"
            />
          </label>

          <button className="addBtn" type="submit">
            Add contact
          </button>
        </form>
      </ContactFormStyled>
    );
  }
}

const mapstateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(mapstateToProps, mapDispatchToProps)(ContactForm);
