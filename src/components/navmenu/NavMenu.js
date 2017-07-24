import React, { Component } from 'react';

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
     <div></div>
   
    )
  }
}

export default NavMenu
