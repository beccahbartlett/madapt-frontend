import React, { Component } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
// import images
import imgHeader from '../../images/shifraLogo.png';

class Nav extends Component {
  componentDidMount() {
    this.button.addEventListener('click', e => e.preventDefault())
  }
  // remove it in componendWilluNmount
  render() {
    const lang = this.props.lang
    return (
      <div className="nav">
        <NavLink exact activeClassName='active' to='/'>
          <div className="nav-header">
            <h1 className="nav-header-title">
              <button disabled={lang === 'en'} ref={ref => this.button = ref} onClick={this.props.toggleLanguage} className="language-btn lang-en">English</button>
              <button disabled={lang === 'ar'} ref={ref => this.button = ref} onClick={this.props.toggleLanguage} className="language-btn lang-ar">عربى</button>
              <img className="image-banner" src={imgHeader} alt="Header Image" />
            </h1>
          </div>
        </NavLink>
      </div>
    )
  }
}

export default Nav