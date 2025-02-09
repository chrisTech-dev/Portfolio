import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs.sendForm('service_3pooak4', 'template_h0hvb8c', form.current, 'Fsy8x4NS2KC67KN9a')
      .then((result) => {
        e.target.reset()
        alert('Message sent successfully!');
        console.log(result.text);
      }, (error) => {
        alert('Failed to send message, please try again.');
        console.log(error.text);
      });
  };

  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="your_name" required />
        
        <label htmlFor="email">Email</label>
        <input type="email" name="your_email" required />
        
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" required />
        
        <label htmlFor="message">Message</label>
        <textarea name="message" id="" cols="20" rows="10" placeholder='Type your message here' required></textarea>
        
        <button className='btn-bt'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
