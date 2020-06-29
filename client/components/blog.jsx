import React from 'react';
import '../../public/component-styles/blog-branch.css';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>

        <div className="blogLine1" />
        <div className="blogLine1Turn" />
        <div className="blogLine1ATurn" />
        <div className="blogLine1BTurn" />
        <div className="blogSocketMain" />

        <div className="blogLine1Branch1" />
        <div className="blogLine1Branch2" />
        <div className="blogL1B1Socket" />
        <div className="blogL1B2Socket" />

        <div className="blogDatabit" />

        <div className="blog">
        <p onClick={(e) => this.props.clickIt(e.target.innerText)}>BLOG</p>
        </div>

      </div>
    );
  }
}

export default Blog;
