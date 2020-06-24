import React from 'react';
// import axios from 'axios';
import WiresConnectorsTips from './wct';
import Statement from './statement';
import Projects from './projects';
import Contact from './contact';
import About from './about';
import Blog from './blog';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="motherBoard">
        <div className="chip">
          <WiresConnectorsTips />
          <Statement />
          <Projects />
          <Contact />
          <About />
          <Blog />
        </div>
      </div>
    );
  }
}

export default App;
