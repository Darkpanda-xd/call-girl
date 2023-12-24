import React, { useRef, useState, useContext } from 'react';
import './contact.style.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
  
  
  const [done, setDone] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lf5oy2s', 'template_ig4jyko', form.current, '56fRIkPCI4Ur8uzdH')
      .then((result) => {
    
        setDone(true);
      }, (error) => {
        console.log(error);
      });
  };
  return (
    <div className="contact-form" id= 'contact'>
        
      <div className="w-left">

          <span>Get in touch</span>
          <span>Contact Us</span>
          
        
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="user_name" className="user" />
          <input type="email" placeholder="Email" className="user" name="user_email" required />
          <textarea name="message" className="user" placeholder="message" />
          <input type="submit" value="Send" className="btn" />
          <span className={`${done ? 'valid' : done}`}>
            {' '}
            {done && 'Thanks for contacting me'}
          </span>
          
        </form>
      </div>

    </div>
  );
};

export default Contact;
