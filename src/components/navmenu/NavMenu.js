import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import './NavMenu.css'
import iconLocation from '../../images/icons/location.png'
import iconPopular from '../../images/icons/popular-topics.png'
import iconRelationships from '../../images/icons/relationships.png'
import iconFamily from '../../images/icons/family-planning.png'
import iconHealthcare from '../../images/icons/health-care-system.png'
import iconReproductive from '../../images/icons/reproductive.png'

class NavMenu extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Clinics
              <img src={iconLocation} />
            </NavItem>
            <NavItem eventKey={2} href="#">Popular Topics
              <img src={iconPopular} />
            </NavItem>
            <NavItem eventKey={3} href="#">Relationships
              <img src={iconRelationships} />
            </NavItem>
            <NavItem eventKey={4} href="#">Family Planning
              <img src={iconFamily} />
            </NavItem>
            <NavItem eventKey={5} href="#">Health Care System
              <img src={iconHealthcare} />
            </NavItem>
            <NavItem eventKey={6} href="#">Reproductive Health
              <img src={iconReproductive} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavMenu