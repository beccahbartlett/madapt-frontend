import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './Contraception.css'

var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;


class Contraception extends Component {
  render() {
    return (
      <div>
      SubCategory
      <h1>Contraception</h1>
      <p>Diagrams will accompany written information to make it clearer. These diagrams can be photographs, illustration or medical diagrams.</p>
      <div>Find a clinic</div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Zx8zbTMTncs" frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
}
export default Contraception
