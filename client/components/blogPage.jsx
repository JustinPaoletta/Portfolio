import React from 'react';
import Hamburger from '../../public/hamburger.png';
import BlogBit from '../../public/blogbit.png';
import '../../public/component-styles/blogPage.css';
import { MediumPosts } from './embed.jsx';

class BlogPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileMenu: false,
      myPosts: '',
      featuredContent: MediumPosts[0][1],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.setState({
      myPosts: MediumPosts,
    })
  }

  handleClick(value) {
    this.setState({
      featuredContent: MediumPosts[value][1],
    })
  }

  render() {
  
    let blogPosts;

    if (this.state.myPosts.length > 0) {
      blogPosts = (
        <div>
          {this.state.myPosts.map((post, index) => {
            return <div key={index} onClick={(e) => { this.handleClick(index);  }} className="posts">{post[0]}</div>
          })}
        </div>
      )
    }

    let hamBurgerMenu;

    if (this.state.mobileMenu === true) {
      hamBurgerMenu = (
        <div className="fademobile">
          <div className="hamburgerLinks">
            <div className="mobilemenu">
              <p onClick={() => { this.props.clickIt(''); }} className="shift">Home ----------</p>
              <p onClick={() => { this.props.clickIt('ABOUT'); }} className="shift">---------- About</p>
              <p onClick={() => { this.props.clickIt('PROJECTS'); }} className="shift">Projects ----------</p>
              <p onClick={() => { this.props.clickIt('CONTACT'); }} className="shift">---------- Contact</p>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="hamburger">
          <img className="icon" src={Hamburger} alt="" onClick={() => { if (this.state.mobileMenu === false) { this.setState({
            mobileMenu: true,
          }) } else { this.setState({
            mobileMenu: false,
          }) }}} />
        </div>
        {hamBurgerMenu}
        <div className="navigate">
          <p />
          <p onClick={() => { this.props.clickIt(''); }}>Home</p>
          <p onClick={() => { this.props.clickIt('ABOUT'); }}>About</p>
          <p onClick={() => { this.props.clickIt('PROJECTS'); }}>Projects</p>
          <p onClick={() => { this.props.clickIt('CONTACT'); }}>Contact</p>
        </div>
        <div className="blogContainer">
          <div className="sidebar">
            <div className="sidebarscroll">
              <h5 className="articles">Browse Articles</h5>
              {blogPosts}
            </div>
          </div>
          <div className="theBlog">
            <div className="latest">
              <h3>Coding With Justin:</h3>
              
            </div>
            <div className="pdfContainer">{this.state.featuredContent}</div>
          </div> 
          <div className="extracontent">
            <img className="blogBit" src={BlogBit} />
          </div>
        </div>
      </div>
    );
  }  
}

export default BlogPage;
