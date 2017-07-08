import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import Tabs from 'react-responsive-tabs';
import './Postnatal.css'
import 'react-responsive-tabs/styles.css'
import data from '../../../Content/postnatal.json';

var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;

class Postnatal extends Component {
  constructor(props) {
    super(props)
    this.getTabs = this.getTabs.bind(this)
  }
  componentDidMount() {
    console.log(data);
    window.analytics.page();
  }
  getTabs() {
    return data.tab.map(item => ({
      tabClassName: 'tab', // Optional
      panelClassName: 'panel', // Optional
      title: item.title,
      getContent: () => item.text,
    }));
  }
  render() {
    return (
      <div className="wrapper">
        <Tabs items={this.getTabs()} />
      </div>
    )
  }
}
export default Postnatal
