import React from 'react';
// import axios from 'axios';
import WiresConnectorsTips from './wct';
import Statement from './statement';
import Projects from './projects';
import Contact from './contact';
import About from './about';
import Blog from './blog';
import ContactForm from './contactMe';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: '',
    };
    this.changeModule = this.changeModule.bind(this);
  }

  changeModule(display) {
    this.setState({
      clicked: display,
    });
  }

  render() {
    let display;
    if (this.state.clicked === '') {
      display = (
        <div className="motherBoard">
          <div className="chip">
            <WiresConnectorsTips />
            <Statement />
            <Projects />
            <Contact clickIt={this.changeModule} />
            <About />
            <Blog />
          </div>
        </div>
      );
    }
    if (this.state.clicked === 'CONTACT') {
      display = <ContactForm clickIt={this.changeModule} />;
    }
    return (
      <div>
        {display}
      </div>

    );
  }
}

export default App;
