import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email, 'Message:', message);
    alert('Message sent!');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
