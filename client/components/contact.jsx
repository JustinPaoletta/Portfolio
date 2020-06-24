import React from 'react';
import styles from '../../public/component-styles/contact-branch.css';

class Contact extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>

        <div className="contactLine1"></div>
        <div className="contactLine2"></div>
        <div className="contactLine2ATurn"></div>
        <div className="contactL2ATSocket"></div>
        <div className="contactLine2BTurn"></div>
        <div className="contactL2BTSocket"></div>
        <div className="contactLine2CTurn"></div>
        <div className="contactSocketMain"></div>

        <div className="contactDatabit"></div>

        <div className="contact">
          <p>CONTACT</p>
        </div>

      </div>
    )
  }
}

export default Contact;
