import React, { Component } from 'react';
import './Nav.css'
import NavMenu from '../navmenu/NavMenu'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-header">
          <h1 className="nav-header-title">mAdapt</h1>
        </div>
        <div className="nav-search"></div>
        <NavMenu />
      </div>
    )
  }
}

export default Nav