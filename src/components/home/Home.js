import React, { Component } from 'react';
import './Home.css'

class Home extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <div>Home</div>
    )
  }
}

export default Home