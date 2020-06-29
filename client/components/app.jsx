import React from 'react';
// import axios from 'axios';
import WiresConnectorsTips from './wct';
import Statement from './statement';
import Projects from './projects';
import Contact from './contact';
import About from './about';
import Blog from './blog';
import ContactForm from './contactMe';
import AboutPage from './aboutPage';
import ProjectsPage from './projectsPage';
import BlogPage from './blogPage';

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
            <Projects clickIt={this.changeModule} />
            <Contact clickIt={this.changeModule} />
            <About clickIt={this.changeModule} />
            <Blog clickIt={this.changeModule} />
          </div>
        </div>
      );
    }

    if (this.state.clicked === 'CONTACT') {
      display = <ContactForm clickIt={this.changeModule} />;
    }

    if (this.state.clicked === 'ABOUT') {
      display = <AboutPage clickIt={this.changeModule} />;
    }

    if (this.state.clicked === 'PROJECTS') {
      display = <ProjectsPage clickIt={this.changeModule} />;
    }

    if (this.state.clicked === 'BLOG') {
      display = <BlogPage clickIt={this.changeModule} />;
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default App;
