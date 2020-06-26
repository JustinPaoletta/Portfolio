import React, { useState } from 'react';
import Linkedin from '../../public/linkedin.png';
import GitHub from '../../public/github.png';
import Medium from '../../public/medium.png';
import Twitter from '../../public/twitter.png';

function ContactForm({ clickIt }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <div className="navigate">
        <p />
        <p onClick={() => { clickIt(''); }}>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Blog</p>
      </div>
      <h1 className="contactHeader">LET&apos;S CONNECT</h1>
      <div className="contactMessage">
        <h3>Have a Coding Question...</h3>
        <h3>Looking to add Talent to your Team?</h3>
        <h3>Drop me a Line </h3>
      </div>
      <form className="ContactForm" onSubmit={(e) => { e.preventDefault(); console.log(name, email, subject, message); }}>
        <input placeholder="Name" value={name} onChange={(e) => { setName(e.target.value); }} />
        <input placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        <input placeholder="Subject" value={subject} onChange={(e) => { setSubject(e.target.value); }} />
        <textarea placeholder="Message ..." value={message} onChange={(e) => { setMessage(e.target.value); }} />
        <input type="submit" />
      </form>
      <p className="imSocial">I&apos;m Social</p>
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
