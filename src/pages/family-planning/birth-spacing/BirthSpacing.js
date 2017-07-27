import React, { Component } from 'react';
import Tabs from 'react-responsive-tabs';
import Iframe from 'react-iframe'
import 'react-responsive-tabs/styles.css'
import ContentPageContainer from '../../../components/content-page-container/ContentPageContainer'
// import data from '../../../Content/birth-spacing.json';

class BirthSpacing extends Component {
  render() {
    return (
      <ContentPageContainer
        filePath='/Content/birth-spacing.json'
        />
    )
  }
}
export default BirthSpacing
