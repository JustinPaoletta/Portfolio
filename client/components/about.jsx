import React from 'react';
import styles from '../../public/component-styles/about-branch.css';

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>

        <div className="aboutLine1"></div>
        <div className="aboutLine1Turn"></div>
        <div className="aboutLine1ATurn"></div>
        <div className="aboutSocketMain"></div>
        <div className="aboutL1ASocket"></div>

        <div className="aboutDatabit"></div>

        <div className="about">
          <p>ABOUT</p>
        </div>

      </div>
    )
  }
}

export default About;
