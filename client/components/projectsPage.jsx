import React, { useState } from 'react';
import Hamburger from '../../public/hamburger.png';

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
      <p>PROJECTS</p>
    </div>
  );
}

export default ProjectsPage;
