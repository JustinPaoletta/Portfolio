import React from 'react';
import '../../public/component-styles/projects-branch.css';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>

        <div className="projectLine1" />
        <div className="projectLine1Turn" />
        <div className="projectL1TSocket" />

        <div className="projectLine2" />
        <div className="projectSocketMain" />
        <div className="projectLine2Turn" />
        <div className="projectL2TSocket" />

        <div className="projectDatabit" />

        <div className="projects">
        <p onClick={(e) => this.props.clickIt(e.target.innerText)}>PROJECTS</p>
        </div>

      </div>
    );
  }
}

export default Projects;
