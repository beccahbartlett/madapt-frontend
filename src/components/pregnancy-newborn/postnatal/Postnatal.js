import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import Tabs from 'react-responsive-tabs';
import './Postnatal.css'
import 'react-responsive-tabs/styles.css'
import data from '../../../Content/postnatal.json';
import Iframe from 'react-iframe'

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
      getContent: () => {
        return (
          <div>
            <div className='tabContent' dangerouslySetInnerHTML={{__html: item.text}} />
            <div className='tabVideo' dangerouslySetInnerHTML={{__html: item.video}} />
          </div>
        )
      },
    }));
  }
  render() {
    return (
      <div className="wrapper">
        {data.summary}
        <div dangerouslySetInnerHTML={{__html: data.topLevelVideo}}/>
        <Tabs items={this.getTabs()} />
      </div>
    )
  }
}
export default Postnatal
