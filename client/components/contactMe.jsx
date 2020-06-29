import React, { useState } from 'react';
import axios from 'axios';
import Linkedin from '../../public/linkedin.png';
import GitHub from '../../public/github.png';
import Medium from '../../public/medium.png';
import Twitter from '../../public/twitter.png';
import Hamburger from '../../public/hamburger.png';
import '../../public/component-styles/contactMe.css';

function ContactForm({ clickIt }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);
  const [success, setSuccess] = useState(false);

  function sendMail() {
    axios.post('/mail', {
      from: email,
      to: 'justinpaoletta@gmail.com',
      subject: subject,
      text: message,
    })
      .then((results) => {
        console.log(results);
        setSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  let hamBurgerMenu;

  if (mobileMenu === true) {
    hamBurgerMenu = (
      <div className="fademobile">
        <div className="hamburgerLinks">
          <div className="mobilemenu">
            <p onClick={() => { clickIt(''); }} className="shift">Home ----------</p>
            <p className="shift">---------- About</p>
            <p className="shift">Projects ----------</p>
            <p className="shift">---------- Blog</p>
          </div>
        </div>
      </div>
    );
  }

  let myForm = (
    <div>
      <form className="ContactForm" onSubmit={(e) => { setName(''); setEmail(''); setSubject(''); setMessage(''); e.preventDefault(); sendMail(); }}>
        <input type="text" maxLength="32" name="first_name" pattern="[A-Za-z]{2,32}" placeholder="Name" value={name} required onChange={(e) => { setName(e.target.value); }} />
        <input type="email" required placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        <input type="text" maxLength="32" name="subject" pattern="^.{2,32}$" placeholder="Subject" value={subject} required onChange={(e) => { setSubject(e.target.value); }} />
        <textarea type="text" maxLength="2000" name="message" pattern="^.{2,2000}$" placeholder="Message ..." value={message} required onChange={(e) => { setMessage(e.target.value); }} />
        <input className="sendEmail" type="submit" />
      </form>
    </div>
  );

  if (success === true) {
    myForm = (
      <div className="thanks">
        <p>Thank You For Reaching Out!</p>
        <p>Please Check Your Inbox</p>
      </div>
    );
  }

  return (
    <div>
      <div className="hamburger">
        <img className="icon" src={Hamburger} alt="" onClick={() => { if (mobileMenu === false) { setMobileMenu(true) } else { setMobileMenu(false) }}} />
      </div>
      {hamBurgerMenu}
      <div className="navigate">
        <p />
        <p onClick={() => { clickIt(''); }}>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Blog</p>
      </div>
      <h1 className="contactHeader">LET&apos;S CONNECT</h1>
      <div className="contactMessage">
        <p>Have a Coding Question...</p>
        <p>Looking to add Talent to your Team?</p>
        <p>Drop me a Line</p>
      </div>
      <div className="FormContainer">
        <p />
        {myForm}
        <p />
      </div>
      <p className="imSocial">Follow Me</p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/justin-paoletta/"><img src={Linkedin} alt="" /></a>
        <a href="https://github.com/JustinPaoletta"><img src={GitHub} alt="" /></a>
        <a href="https://medium.com/@justinpaoletta_dev"><img src={Medium} alt="" /></a>
        <a href="https://twitter.com/jpaoletta_dev"><img src={Twitter} alt="" /></a>
      </div>
    </div>
  );
}

export default ContactForm;
