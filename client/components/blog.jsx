import React from 'react';

class Blog extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>

        <div className="blogLine1"></div>
        <div className="blogLine1Turn"></div>
        <div className="blogLine1ATurn"></div>
        <div className="blogLine1BTurn"></div>
        <div className="blogSocketMain"></div>

        <div className="blogLine1Branch1"></div>
        <div className="blogLine1Branch2"></div>
        <div className="blogL1B1Socket"></div>
        <div className="blogL1B2Socket"></div>

        <div className="blogDatabit"></div>

        <div className="blog">
          <p>BLOG</p>
        </div>

      </div>
    )
  }
}

export default Blog;
