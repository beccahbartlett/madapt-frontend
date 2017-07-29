import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './MyNav.css'

import iconLocation from '../../images/icons/location.png'
import iconChild from '../../images/icons/child.png';
import iconViolence from '../../images/icons/violence.png';
import iconFamily from '../../images/icons/family-planning.png';
import iconLifecycle from '../../images/icons/lifecycle.png';
import iconReproductive from '../../images/icons/reproductive.png';

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
          <Link to="/access">
            <div className="item item-1">
              <img className="icon" src={iconLocation} alt="Access"/>
              <div>{this.props.arabic ? "Access" : "تسجيل الدخول"}</div>
            </div>
          </Link>

          <Link to="/family-planning">
            <div className="item item-2">
              <img className="icon" src={iconFamily} alt="Family planning"/>
              <div>{this.props.arabic ? "Family Planning" : "نظيم الأسرة"}</div>
            </div>
          </Link>

          <Link to="/pregnancy-newborn">
            <div className="item item-3">
              <img className="icon" src={iconChild} alt="Pregnancy newborn"/>
              <div>{this.props.arabic ? "Pregnancy Newborn" : "الحمل وحديثي الولادة"}</div>
            </div>
          </Link>

          <Link to="/sexual-health">
            <div className="item item-4">
              <img className="icon" src={iconReproductive} alt="Sexual health"/>
              <div>{this.props.arabic ? "Sexual Health" : "الحياة الجنسية"}</div>
            </div>
          </Link>

          <Link to="/family-health">
            <div className="item item-5">
              <img className="icon" src={iconLifecycle} alt="Family health"/>
              <div>{this.props.arabic ? "Family Health" : "صحة المجتمع والعائلة"}</div>
            </div>
          </Link>

          <Link to="/violence">
            <div className="item item-6">
              <img className="icon" src={iconViolence} alt="Violence"/>
              <div>{this.props.arabic ? "Clinic Locations" : "Clinic arabic"}</div>
            </div>
          </Link>               
        </div>


        {this.state.menu && 
        <div className="mobile-menu">
          <Link to="/access">
            <div className="mobile-item item-1">
              <img className="icon" src={iconLocation} alt="Access"/>
              <div>{this.props.arabic ? "Access" : "تسجيل الدخول"}</div>
            </div>
          </Link>

          <Link to="/family-planning">
            <div className="mobile-item item-2">
              <img className="icon" src={iconFamily} alt="Family planning"/>
              <div>{this.props.arabic ? "Family Planning" : "نظيم الأسرة"}</div>
            </div>
          </Link>

          <Link to="/pregnancy-newborn">
            <div className="mobile-item item-3">
              <img className="icon" src={iconChild} alt="Pregnancy newborn"/>
              <div>{this.props.arabic ? "Pregnancy Newborn" : "الحمل وحديثي الولادة"}</div>
            </div>
          </Link>

          <Link to="/sexual-health">
            <div className="mobile-item item-4">
              <img className="icon" src={iconReproductive} alt="Sexual health"/>
              <div>{this.props.arabic ? "Sexual Health" : "الحياة الجنسية"}</div>
            </div>
          </Link>

          <Link to="/family-health">
            <div className="mobile-item item-5">
              <img className="icon" src={iconLifecycle} alt="Family health"/>
              <div>{this.props.arabic ? "Family Health" : "صحة المجتمع والعائلة"}</div>
            </div>
          </Link>

          <Link to="/violence">
            <div className="mobile-item item-6">
              <img className="icon" src={iconViolence} alt="Violence"/>
              <div>{this.props.arabic ? "Clinic Locations" : "Clinic arabic"}</div>
            </div>
          </Link>               
        </div>}
      </div>
    )
  }
}

export default MyNav
