import React, { useState } from 'react';
import Hamburger from '../../public/hamburger.png';
import '../../public/component-styles/aboutPage.css';

function AboutPage({ clickIt }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  let hamBurgerMenu;

  if (mobileMenu === true) {
    hamBurgerMenu = (
      <div className="fademobile">
        <div className="hamburgerLinks">
          <div className="mobilemenu">
            <p onClick={() => { clickIt(''); }} className="shift">Home ----------</p>
            <p onClick={() => { clickIt('CONTACT'); }} className="shift">---------- Contact</p>
            <p onClick={() => { clickIt('PROJECTS'); }} className="shift">Projects ----------</p>
            <p onClick={() => { clickIt('BLOG'); }} className="shift">---------- Blog</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>

      <div className="hamburger">
        <img className="icon" src={Hamburger} alt="" onClick={() => { if (mobileMenu === false) { setMobileMenu(true) } else { setMobileMenu(false) }}} />
      </div>
      {hamBurgerMenu}
      <div className="navigate">
        <p />
        <p onClick={() => { clickIt(''); }}>Home</p>
        <p onClick={() => { clickIt('CONTACT'); }}>Contact</p>
        <p onClick={() => { clickIt('PROJECTS'); }}>Projects</p>
        <p onClick={() => { clickIt('BLOG'); }}>Blog</p>
      </div>

      <div className="aboutSection">

        <div className="image">
          <img className="ME" src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/15977498_10154223311260382_8903881252913326014_n.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=qaHs86RW-joAX-h3FMz&_nc_ht=scontent.ftpa1-2.fna&oh=116bb57a34384c5432a41c4573be83f2&oe=5F1DFF78" />
        </div>
          
        <div className="headers">
          <h1 className="aboutTitle">Hi I&apos;m Justin Paoletta</h1>
          <br></br>
          <h5><i class="fas fa-code-branch"></i> __ Full-Stack Software Engineer __ <i class="fas fa-laptop-code"></i></h5> <br></br>
          <h5><i class="fas fa-dog"></i> __ Husband & Dog Dad of 2 __ <i class="fas fa-ring"></i></h5> <br></br>
          <h5><i class="fas fa-graduation-cap"></i> __ Lifelong Learner __ <i class="fas fa-atom"></i></h5> <br></br>
          <h5><i class="fas fa-football-ball"></i> __ Die-Hard Saints Fan __ <i class="fas fa-football-ball"></i></h5> 
        </div>

        <div className="summary">
          <p className="indent">
            As a software engineer I see code as a way I can make a concrete contribution to the world.  I love to problem solve and I love to create.  I see code as a way for me to be the artist I always wanted to be,  just with the keyboard as my paintbrush.  Seeing others interact with something I have built brings me a high level of satisfaction, and I strive to create clear, efficient and attractive applications for my users.
          </p>
          <p className="indent">
            I seek out and thrive in environments where I’m intellectually stimulated, and I know that with software development the learning never really ends.
          </p>
          <p className="indent">
            I’d love to bring my passion for learning, and drive for producing quality work to your team to help achieve its goals.
            So if you are looking to add talent to your team please reach out!
          </p>
          <p>
            Frontend: React, Styled Components, jQuery, JavaScript, CSS3, Sass, HTML5
          </p>
          <p>
            Backend: MongoDB, Mongoose, MySQL, PostgreSQL, Express, Node.js
          </p>
          <p>
            Other: Git, npm, Jest, Webpack, Babel, AWS (S3, EC2, Elastic Load Balancing)
          </p>
    
        </div>

      </div>

    </div>
  );
}

export default AboutPage;
