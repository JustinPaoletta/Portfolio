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
          <div className="wire"></div>
          <div className="wire2"></div>
          <div className="wire3"></div>
          <div className="wire4"></div>
          <div className="wire5"></div>
          <div className="tip"></div>
          <div className="tip2"></div>
          <div className="tip3"></div>
          <div className="tip4"></div>
          <div className="tip5"></div>
          <div className="statement">
            <p>Hello, I'm</p>
            <p><strong className="name">Justin Paoletta</strong></p>
            <p>A Full Stack</p>
            <p>Software Engineer</p>
          </div>
          <div className="socket1A"></div>
          <div className="socket1B"></div>
          <div className="line1"></div>
          <div className="line1turn"></div>
          <div className="line1Aturn"></div>
          <div className="line1Bturn"></div>
          <div className="databit1"></div>
          <div className="connector"></div>
          <div className="connector2"></div>
          <div className="projects">
            <p>PROJECTS</p>
          </div>
          <div className="socket"></div>
          <div className="databit4"></div>
          <div className="line2"></div>
          <div className="line2turn"></div>
          <div className="line2Aturn"></div>
          <div className="socket2A"></div>
          <div className="line2Bturn"></div>
          <div className="socket2B"></div>
          <div className="line2Cturn"></div>
          <div className="socket2C"></div>
          <div className="contact">
            <p>CONTACT</p>
          </div>
          <div className="line3"></div>
          <div className="line3turn"></div>
          <div className="line3Aturn"></div>
          <div className="socket3"></div>
          <div className="socket3A"></div>
          <div className="about">
            <p>ABOUT</p>
          </div>
          <div className="databit2"></div>
          <div className="connector3"></div>
          <div className="connector4"></div>
          <div className="connector5"></div>
          <div className="connector6"></div>
          <div className="connector7"></div>
          <div className="connector8"></div>
          <div className="connector9"></div>
          <div className="connector10"></div>
          <div className="connector11"></div>
          <div className="connector12"></div>
          <div className="line4"></div>
          <div className="line4turn"></div>
          <div className="line4Aturn"></div>
          <div className="socket4A"></div>
          <div className="line4Bturn"></div>
          <div className="databit3"></div>
          <div className="line4Cturn"></div>
          <div className="line4Dturn"></div>
          <div className="socket4C"></div>
          <div className="socket4D"></div>
          <div className="blog">
            <p>BLOG</p>
          </div>
          </div>
       </div>
     </div>
   )
 }
}

export default App;
