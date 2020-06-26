import React from 'react';
import '../../public/component-styles/contact-branch.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>

        <div className="contactLine1" />
        <div className="contactLine2" />
        <div className="contactLine2ATurn" />
        <div className="contactL2ATSocket" />
        <div className="contactLine2BTurn" />
        <div className="contactL2BTSocket" />
        <div className="contactLine2CTurn" />
        <div className="contactSocketMain" />

        <div className="contactDatabit" />

        <div className="contact">
          <p onClick={(e) => this.props.clickIt(e.target.innerText)}>CONTACT</p>
        </div>

      </div>
    );
  }
}

export default Contact;
