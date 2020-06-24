import React from 'react';
import axios from 'axios';
import WiresConnectorsTips from './wct.jsx';
import Statement from './statement.jsx';
import Projects from './projects.jsx';
import Contact from './contact.jsx';
import About from './about.jsx';
import Blog from './blog.jsx';
 
class App extends React.Component {
   constructor(props) {
     super(props)
     this.state = {

     }
   }

   render() {

     return(
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
     )

   }
}

export default App;
