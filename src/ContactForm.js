
import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      addContact({ name, email });
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <h1></h1>  <label>Name</label>
        <input 
          type="text" 
          placeholder='Enter your name'
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div>
        <label>Email</label>
        <input 
          type="email" 
          placeholder='Enter your Email'
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <button className='bttn1' type="submit">Add</button>
    
    </form>
  );
};

export default ContactForm;
