import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavMenu.css'

import iconAccess from '../../images/icons/access/access.png'
import iconFamilyPlanning from '../../images/icons/familyplanning/family-planning.png';
import iconPregnancy from '../../images/icons/pregnancynewborn/pregnancy-newborn.png';
import iconSexualHealth from '../../images/icons/sexualhealth/sexual-health.png';
import iconFamilyHealth from '../../images/icons/familyhealth/family-health.png';
import iconClinics from '../../images/icons/extraicons/findahealthservice.png';

class NavMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: true,
      menuItems: [
        {
          icon: iconAccess,
          name: 'Access',
          url: '/access'
        },
        {
          icon: iconFamilyPlanning,
          name: 'Family Planning',
          url: '/family-planning'
        },
        {
          icon: iconPregnancy,
          name: 'Pregnancy and Newborn',
          url: '/pregnancy-newborn'
        },
        {
          icon: iconSexualHealth,
          name: 'Sexual Health',
          url: '/sexual-health'
        },
        {
          icon: iconFamilyHealth,
          name: 'Family and Social Health',
          url: '/family-health'
        },
        {
          icon: iconClinics,
          name: 'Clinic Locations',
          url: '/clinics'
        },
      ]
    }
    this.showMenu = this.showMenu.bind(this)
  }

  showMenu() {
    this.setState({menu: !this.state.menu});
  }

  render() {
    return (
      <div>
        <button onClick={() => this.showMenu()} className="toggleMenu">{this.state.menu ? '-' : '+'}</button>
        <div className="menu">
          {this.state.menuItems.map((item, index) => {
            return (
              <Link to={item.url}>
                <div className={`item item-${index + 1}`}>
                  <img className="icon" src={item.icon} alt="Access"/>
                  <div className="item-text"><p>{item.name}</p></div>
                </div>
              </Link>
            )
          })}            
        </div>

        {this.state.menu && 
          <div className="mobile-menu">
             {this.state.menuItems.map((item, index) => {
              return (
                <Link to={item.url}>
                  <div className={`mobile-item item-${index + 1}`}>
                    <img className="icon" src={item.icon} alt="Access"/>
                    <div className="item-text"><p>{item.name}</p></div>
                  </div>
                </Link>
              )
            })} 
        </div>}
      </div>
    )
  }
}

export default NavMenu