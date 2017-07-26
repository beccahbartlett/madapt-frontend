import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'
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
                <IndexLinkContainer to={item.url} activeClassName="active">
                  <NavItem eventKey={index} href="#" className="navitem-text">
                    <img className="navbar-memnu-icon" src={item.icon} alt={item.text} />
                    {item.text}
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
