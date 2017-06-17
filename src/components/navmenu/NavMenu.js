import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'
import './NavMenu.css'

class NavMenu extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(evt) {
    console.log(evt)
  }
  render() {
    return (
      <Navbar inverse collapseOnSelect onSelect={this.handleClick}>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {this.props.menuButtons.map(function(item, index) {
              return(
                <IndexLinkContainer to={item.text} activeClassName="active">
                  <NavItem eventKey={index} href="#">{item.text}
                    <img className="navbar-menu-icon" src={item.icon} />
                  </NavItem>
                </IndexLinkContainer>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavMenu