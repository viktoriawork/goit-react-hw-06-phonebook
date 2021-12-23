import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import action from './redux/phoneBook/phoneBookActions';

class App extends Component {
  state = {};

  componentDidMount() {
    const contactsStorage = localStorage.getItem('contacts');
    if (contactsStorage) {
      this.props.storageContact(JSON.parse(contactsStorage));
    }
  }

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = {
  storageContact: action.storageContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
