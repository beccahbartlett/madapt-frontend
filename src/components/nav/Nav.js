import React, { Component } from 'react';
import './Nav.css'
import NavMenu from '../navmenu/NavMenu'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-header"></div>
        <div className="nav-search"></div>
        <NavMenu />
      </div>
    )
  }
}

export default Nav