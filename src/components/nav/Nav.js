import React, { Component } from 'react';
import './Nav.css'
import NavMenu from '../navmenu/NavMenu'
// import icons for Webpack
import iconLocation from '../../images/icons/location.png'
import iconPopular from '../../images/icons/popular-topics.png'
import iconRelationships from '../../images/icons/relationships.png'
import iconFamily from '../../images/icons/family-planning.png'
import iconHealthcare from '../../images/icons/health-care-system.png'
import iconReproductive from '../../images/icons/reproductive.png'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: [
        {
          icon: iconLocation,
          text: 'Clinics'
        },
        {
          icon: iconPopular,
          text: 'Popular Topics'
        },
        {
          icon: iconRelationships,
          text: 'Relationships'
        },
        {
          icon: iconFamily,
          text: 'Family Planning'
        },
        {
          icon: iconHealthcare,
          text: 'Health Care System'
        },
        {
          icon: iconReproductive,
          text: 'Reproductive Health'
        }
      ]
    }
  }

  render() {
    return (
      <div className="nav">
        <div className="nav-header">
          <h1 className="nav-header-title">mAdapt</h1>
        </div>
        <div className="nav-search"></div>
        <NavMenu menuButtons={this.state.menuItems}/>
      </div>
    )
  }
}

export default Nav