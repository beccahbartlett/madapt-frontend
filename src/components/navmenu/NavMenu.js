import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import './NavMenu.css'
import iconLocation from '../../images/icons/location.png'

class NavMenu extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link
              <img src={iconLocation} />
            </NavItem>
            <NavItem eventKey={2} href="#">Link
              <img src={iconLocation} />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavMenu