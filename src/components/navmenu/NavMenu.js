import React, { Component } from 'react';
import NavMenuButton from '../navmenubutton/NavMenuButton'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import './NavMenu.css'

class NavMenu extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavMenu