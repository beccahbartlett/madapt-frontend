import React, { Component } from 'react';
import NavMenuButton from '../navmenubutton/NavMenuButton'
import './NavMenu.css'

class NavMenu extends Component {
  render() {
    return (
      <div className="nav-menu">
        <NavMenuButton
          titleText="Clinics"
          iconUrl=""/>
        <NavMenuButton
          titleText="Popular Topics"
          iconUrl=""/>
        <NavMenuButton
          titleText="Relationships"
          iconUrl=""/>
        <NavMenuButton
          titleText="Family Planning"
          iconUrl=""/>
        <NavMenuButton
          titleText="Health Care System"
          iconUrl=""/>
        <NavMenuButton
          titleText="Reproductive Health"
          iconUrl=""/>
      </div>
    )
  }
}

export default NavMenu