import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="image-container">
        <img alt="" className="image-desktop" src={this.props.srcDesktop} />
        <img alt="" className="image-mobile" src={this.props.srcMobile} />
      </div>
    )
  }
}

export default Image;