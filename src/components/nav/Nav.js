import React, { Component } from 'react';
import './Nav.css'
import NavMenu from '../navmenu/NavMenu'
import { NavLink } from 'react-router-dom'
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
          text: 'Clinics',
          url: 'clinic'
        },
        {
          icon: iconPopular,
          text: 'Popular Topics',
          url: '#'
        },
        {
          icon: iconRelationships,
          text: 'Relationships',
          url: '#'
        },
        {
          icon: iconFamily,
          text: 'Family Planning',
          url: '#'
        },
        {
          icon: iconHealthcare,
          text: 'Health Care System',
          url: '#'
        },
        {
          icon: iconReproductive,
          text: 'Reproductive Health',
          url: '#'
        }
      ]
    }
  }

  render() {
    return (
      <div className="nav">
        <NavLink exact activeClassName='active' to='/'>
          <div className="nav-header">
            <h1 className="nav-header-title">mAdapt</h1>
          </div>
        </NavLink>
        <div className="nav-search"></div>
        <NavMenu menuButtons={this.state.menuItems}/>
      </div>
    )
  }
}

export default Nav