import React, { Component } from 'react';
import './MyNav.css'

class MyNav extends Component {
  state = {
    menu: true,
  };

  showMenu() {
    this.setState({menu: !this.state.menu});
  };
  render() {
    return (
      <div>
        <button onClick={() => this.showMenu()} className="toggleMenu">Menu =</button>

        <div className="menu">
          <a className="item item-1" href="#">Access</a>
          <a className="item item-2" href="#">Family Planning</a>
          <a className="item item-3" href="#">Pregnancy & Newborn</a>
          <a className="item item-4" href="#">Sexual Health</a>
          <a className="item item-5" href="#">Family Health</a>
          <a className="item item-6" href="#">Violence</a>
        </div>


        {this.state.menu && 
        <div className="mobile-menu">
          <a className="mobile-item item-1" href="#">Access</a>
          <a className="mobile-item item-2" href="#">Family Planning</a>
          <a className="mobile-item item-3" href="#">Pregnancy & Newborn</a>
          <a className="mobile-item item-4" href="#">Sexual Health</a>
          <a className="mobile-item item-5" href="#">Family Health</a>
          <a className="mobile-item item-6" href="#">Violence</a>
        </div>}
      </div>
    )
  }
}

export default MyNav
