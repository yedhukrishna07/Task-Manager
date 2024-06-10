
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import './App.css'

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const newContacts = contacts.filter((_, i) => i !== index);
    setContacts(newContacts);
  };

  return (
    <div className="App">
      <h1 className='name'>Contact Manager</h1>
      <h4>Add Contact</h4>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
      </div>
  );
};

export default App;