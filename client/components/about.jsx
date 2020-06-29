import React from 'react';
import '../../public/component-styles/about-branch.css';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>

        <div className="aboutLine1" />
        <div className="aboutLine1Turn" />
        <div className="aboutLine1ATurn" />
        <div className="aboutSocketMain" />
        <div className="aboutL1ASocket" />

        <div className="aboutDatabit" />

        <div className="about">
          <p onClick={(e) => this.props.clickIt(e.target.innerText)}>ABOUT</p>
        </div>

      </div>
    );
  }
}

export default About;
