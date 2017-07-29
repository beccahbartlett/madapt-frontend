import React, { Component } from 'react';
import CardGrid from '../../components/cardgrid/CardGrid';
import Card from '../../components/card/Card';

class Violence extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          theme="6"
          titleText="Types of Violence"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          theme="6"
          titleText="Your Rights and Responsibilities"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          theme="6"
          titleText="Seeking Safety and Assistance"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          theme="6"
          titleText="Shelter and safety"
          linkUrl="#" />
        <Card
          imgSrc="https://image.flaticon.com/icons/png/512/33/33777.png"
          theme="6"
          titleText="Disability Access"
          linkUrl="#" />
      </CardGrid>
    )
  }
}

export default Violence
