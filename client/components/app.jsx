import React from 'react';
import axios from 'axios';
 
class App extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
   }
 }
 render() {
   return(
     <div>
      <div className="motherBoard">
        <div className="chip">
          <div className="statement">
            <p>Hello, I'm</p>
            <p><strong className="name">Justin Paoletta</strong></p>
            <p>A Full Stack</p>
            <p>Software Engineer</p>
          </div>
          <div className="line1"></div>
          <div className="line1turn"></div>
          <div className="databit1"></div>
          <div className="connector"></div>
          <div className="connector2"></div>
          <div className="projects">
            <p>PROJECTS</p>
          </div>
          <div className="socket"></div>
          <div className="line2"></div>
          <div className="line2turn"></div>
          <div className="line2Aturn"></div>
          <div className="socket2A"></div>
          <div className="line2Bturn"></div>
          <div className="socket2B"></div>
          </div>
       </div>
     </div>
   )
 }
}

export default App;
