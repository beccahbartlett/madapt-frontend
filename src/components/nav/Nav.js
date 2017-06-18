import React, { Component } from 'react';
import './Nav.css';
import NavMenu from '../navmenu/NavMenu';
import NavSearch from '../navsearch/NavSearch';
import { NavLink } from 'react-router-dom';
// import icons for Webpack
import iconLocation from '../../images/icons/location.png';
import iconPopular from '../../images/icons/popular-topics.png';
import iconRelationships from '../../images/icons/relationships.png';
import iconChild from '../../images/icons/child.png';
import iconBrain from '../../images/icons/brain.png';
import iconFemale from '../../images/icons/female.png';
import iconMale from '../../images/icons/male.png';
import iconViolence from '../../images/icons/violence.png';
import iconFamily from '../../images/icons/family-planning.png';
import iconLifecycle from '../../images/icons/lifecycle.png';
import iconHealthcare from '../../images/icons/health-care-system.png';
import iconReproductive from '../../images/icons/reproductive.png';

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuItems: [
        {
          icon: iconLocation,
          text: 'Access',
          url: '#'
        },
        {
          icon: iconFamily,
          text: 'Family Planning',
          url: '/family-planning'
        },
        {
          icon: iconChild,
          text: 'Pregnancy and Newborn',
          url: '#'
        },
        {
          icon: iconReproductive,
          text: 'Sexual Health',
          url: 'sexual-health'
        },
        {
          icon: iconLifecycle,
          text: 'Family Health',
          url: '/teen-health'
        },
        {
          icon: iconViolence,
          text: 'Violence',
          url: '/violence'
        }
      ]
    }
  }

  render() {
    return (
      <div className="nav">
        <NavLink exact activeClassName='active' to='/'>
          <div className="nav-header">
            <h1 className="nav-header-title">
              <img src={require('../../images/mAdaptLogo.png')} />
              [ mAdapt ]
            </h1>
          </div>
        </NavLink>
        <NavMenu menuButtons={this.state.menuItems}/>
      </div>
    )
  }
}

export default Nav
