
import React from 'react';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
    {contacts.map((contact, index) => (
      <li className='box' key={index}>
        <button className='bttn' onClick={() => deleteContact(index)}>Delete</button>
        <img className='image' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgwJQivJfNo4UhmKkUX2_56pfOJUD75VXD4KOYxy4Z8BOMkyAG-UOVfxzFRlRpVlGo-hBGswb40WnpODhJKZFB2T8XsFq9UwHWRXMt29tfTsVeFok1QqbeyEITvLlldrVBpxkFrEVVVotR1CFopHrXaFt-DZrdzr2T70-KsfGO9kl8/s220/03591-102922262-.png' alt='Profile' />
        <div className='textt'>
          <h5>{contact.name}</h5>
          <p>{contact.email}</p>
        </div>
      </li>
    ))}
  </ul>
  );
};

export default ContactList;
