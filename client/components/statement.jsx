import React from 'react';

class Statement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="statement">
        <p>Hello, I&apos;m</p>
        <p><strong className="name">Justin Paoletta</strong></p>
        <p>A Full Stack</p>
        <p>Software Engineer</p>
      </div>
    );
  }
}

export default Statement;
