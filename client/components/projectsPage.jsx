import React, { useState } from 'react';
import Hamburger from '../../public/hamburger.png';
import Eagle from '../../public/eagleLake.png';
import Xrsize from '../../public/x-rsize.png';
import Natural from '../../public/naturalEats.png';
import Movie from '../../public/movieNight.png';
import Foodie from '../../public/foodie.png';
import ProjectOvernight from '../../public/projectOvernight.png';
import Solaris from '../../public/solaris.png';
import Science from '../../public/scienceClass.png';
import '../../public/component-styles/projectsPage.css';

function ProjectsPage({ clickIt }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  let hamBurgerMenu;

  if (mobileMenu === true) {
    hamBurgerMenu = (
      <div className="fademobile">
        <div className="hamburgerLinks">
          <div className="mobilemenu">
            <p onClick={() => { clickIt(''); }} className="shift">Home ----------</p>
            <p onClick={() => { clickIt('ABOUT'); }} className="shift">---------- About</p>
            <p onClick={() => { clickIt('BLOG'); }} className="shift">Blog ----------</p>
            <p onClick={() => { clickIt('CONTACT'); }} className="shift">---------- Contact</p>
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
        <p onClick={() => { clickIt('ABOUT'); }}>About</p>
        <p onClick={() => { clickIt('BLOG'); }}>Blog</p>
        <p onClick={() => { clickIt('CONTACT'); }}>Contact</p>
      </div>
      <div className="projectsContainer">
        <img className="appLogos logo1" src={Eagle}></img>
        <img className="appLogos logo2" src={Xrsize}></img>
        <img className="appLogos logo3" src={Natural}></img>
        <img className="appLogos logo4" src={Movie}></img>
        <img className="appLogos logo5" src={Foodie}></img>
        <img className="appLogos logo6" src={ProjectOvernight}></img>
        <img className="appLogos logo7" src={Solaris}></img>
        <img className="appLogos logo8" src={Science}></img>
      </div>
    </div>
  );
}

export default ProjectsPage;
