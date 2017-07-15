import React, { Component } from 'react';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css'
import data from '../../../Content/postnatal.json';
import Iframe from 'react-iframe'

class Postnatal extends Component {
  constructor(props) {
    super(props)
    this.getTabs = this.getTabs.bind(this)
  }
  componentDidMount() {
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
