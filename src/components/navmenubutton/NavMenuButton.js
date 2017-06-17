import React, { Component } from 'react';
import './NavMenuButton.css'

class NavMenuButton extends Component {
  render() {
    return (
      <div className="nav-menu-button">
        <span className="nav-menu-button-title">{this.props.titleText}</span>
      </div>
    )
  }
}

export default NavMenuButton