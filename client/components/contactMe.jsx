import React, { useState } from 'react';
import axios from 'axios';
import Linkedin from '../../public/linkedin.png';
import GitHub from '../../public/github.png';
import Medium from '../../public/medium.png';
import Twitter from '../../public/twitter.png';
import Hamburger from '../../public/hamburger.png';

function ContactForm({ clickIt }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [mobileMenu, setMobileMenu] = useState(false);

  function sendMail() {
    axios.post('/mail', {
      from: email,
      to: 'justinpaoletta@gmail.com',
      subject: subject,
      text: message,
    });
  }

  let hamBurgerMenu;

  if (mobileMenu === true) {
    hamBurgerMenu = (
      <div className="fademobile">
        <div className="hamburgerLinks">
          <div className="mobilemenu">
            <p className="shiftLeft">Home ----------</p>
            <p className="shiftRight">---------- About</p>
            <p className="shiftLeft">Projects ----------</p>
            <p className="shiftRight">---------- Blog</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contactPage">
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
        <form className="ContactForm" onSubmit={(e) => { e.preventDefault(); sendMail(); console.log(name, email, subject, message); }}>
          <input placeholder="Name" value={name} onChange={(e) => { setName(e.target.value); }} />
          <input placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
          <input placeholder="Subject" value={subject} onChange={(e) => { setSubject(e.target.value); }} />
          <textarea placeholder="Message ..." value={message} onChange={(e) => { setMessage(e.target.value); }} />
          <input className="sendEmail" type="submit" />
        </form>
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
