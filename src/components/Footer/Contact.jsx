import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  max-width: 400px; /* Reduce the maximum form width */
  margin: 0 auto; /* Center the form horizontally */
  padding: 1rem; /* Add some padding to the form */

  .form-group {
    margin-bottom: 1rem;
  }
  label {
    font-size: 1.2rem; /* Reduce the font size of labels */
  }
  input,
  textarea {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem; /* Reduce the padding */
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: 0.5p;
    border-radius: 8px;
    margin-top: 0.5rem;
  }
  textarea {
    min-height: 100px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: rgb(13, 11, 18);
    color: white;
    font-size: 1rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 0.5rem 1rem; /* Reduce the padding */
    border-radius: 12px;
    cursor: pointer;
  }
`;
const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isMessageValid, setIsMessageValid] = useState(false);
  
    const handleNameChange = (e) => {
      const newName = e.target.value;
      setName(newName);
      setIsNameValid(nameRegex.test(newName));
    };
  
    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
      setEmail(newEmail);
      setIsEmailValid(emailRegex.test(newEmail));
    };
  
    const handleMessageChange = (e) => {
      const newMessage = e.target.value;
      setMessage(newMessage);
      setIsMessageValid(newMessage.length > 10); // Validate message length
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
  
      if (isSubmitDisabled) {
        alert('Please fill in all fields and ensure the message has more than 10 words.');
      } else {
        emailjs.init('nitinmagdum333@gmail.com'); // Replace with your user ID
  
        const emailData = {
          to_email: 'recipient@example.com', // Replace with the recipient's email address
          from_name: name,
          from_email: email,
          message: message,
        };
  
        emailjs
          .send('service_rqsiejm', 'template_fn27fra', emailData) // Replace with your service and template IDs
          .then((response) => {
            alert('Form submitted successfully!');
            setName('');
            setEmail('');
            setMessage('');
            setIsNameValid(false);
            setIsEmailValid(false);
            setIsMessageValid(false);
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email.');
          });
      }
    };
  
    const isSubmitDisabled = !(isNameValid && isEmailValid && isMessageValid);
  
    return (
      <>
        <FormStyle onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Your Name
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Your Email
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your message
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
              />
            </label>
          </div>
          <button type="submit" disabled={isSubmitDisabled}>
            Send
          </button>
        </FormStyle>
      </>
    );
  }