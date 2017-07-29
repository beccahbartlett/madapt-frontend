import React, { Component } from 'react'
import axios from 'axios'
import Links from '../links/Links'
import Video from '../video/Video'
import Tabs from 'react-responsive-tabs'
import 'react-responsive-tabs/styles.css'
import './ContentPageContainer.css'

class ContentPageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.getData(),
      lang: 'en'
    }
    this.getTabs = this.getTabs.bind(this)
  }
  
  getData() {
    // get data from JSON
    axios.get(this.props.filePath)
      .then(res => {
        this.setState({
          data: res.data
        })
      })
  }
  
  getTabs() {
    var lang = this.state.lang
    var data = this.state.data.tab
    return data.map(item => ({
      tabClassName: 'tab',
      panelClassName: 'panel',
      title: item.title[lang],
      getContent: () => {
        return (
          <div>
            <div className='tabContent' dangerouslySetInnerHTML={{__html: item.text[lang]}} />
            {item.video && <Video url={item.video} />}
            <div className='tabLinks'>
              {item.links && <Links links={item.links} />}
            </div>
          </div>
        )
      },
    }));
  }

  render() {
    var lang = this.state.lang
    var data = this.state.data
    return (
      <div className="wrapper">
        <h1 className="content-page-title">{data && data.title[lang]}</h1>
        {data && data.summary[lang]}
        {data && data.topLevelVideo && <Video url={data.topLevelVideo} />}
        {data && data.tab && <Tabs items={this.getTabs()} />}
      </div>
    )
  }
}

export default ContentPageContainer