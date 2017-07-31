import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
// import images
import imgHeader from '../../images/shifraLogo.png';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NavLink exact activeClassName='active' to='/'>
          <div className="nav-header">
            <h1 className="nav-header-title">
              <button onClick={this.props.toggleLanguage} className="language-btn">{this.props.lang.toUpperCase()}</button>
              <img className="image-banner" src={imgHeader} alt="Header Image" />
            </h1>
          </div>
        </NavLink>
      </div>
    )
  }
}

export default Nav