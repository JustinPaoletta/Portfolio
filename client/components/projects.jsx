import React from 'react';
import styles from '../../public/component-styles/projects-branch.css';

class Projects extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {

    return(
      <div>

        <div className="projectLine1"></div>
        <div className="projectLine1Turn"></div>
        <div className="projectL1TSocket"></div>

        <div className="projectLine2"></div>
        <div className="projectSocketMain"></div>
        <div className="projectLine2Turn"></div>
        <div className="projectL2TSocket"></div>

        <div className="projectDatabit"></div>

        <div className="projects">
          <p>PROJECTS</p>
        </div>

      </div>
    )

  }
}

export default Projects;
