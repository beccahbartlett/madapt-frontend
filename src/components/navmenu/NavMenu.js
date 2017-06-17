import React, { Component } from 'react';
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
            {this.props.menuButtons.map(function(item, index) {
              return(
                <NavItem eventKey={index} href="#">{item.text}
                  <img className="navbar-menu-icon" src={item.icon} />
                </NavItem>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavMenu