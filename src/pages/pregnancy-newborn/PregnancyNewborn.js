import React, { Component } from 'react';
import CardGrid from '../../components/cardgrid/CardGrid';
import Card from '../../components/card/Card';

import PregnancyIcon from '../../images/icons/pregnancynewborn/pregnancy-newborn.png'
import BirthIcon from '../../images/icons/pregnancynewborn/birth.png'
import PostnatalIcon from '../../images/icons/pregnancynewborn/postnatal.png'
import NewbornIcon from '../../images/icons/pregnancynewborn/newborn-12months.png'

class PregnancyNewborn extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc={PregnancyIcon}
          theme="3"
          titleText="Pregnancy"
          linkUrl="/pregnancy-newborn/pregnancy" />
        <Card
          imgSrc={BirthIcon}
          theme="3"
          titleText="Birth"
          linkUrl="pregnancy-newborn/birth" />
        <Card
          imgSrc={PostnatalIcon}
          theme="3"
          titleText="Postnatal"
          linkUrl="pregnancy-newborn/postnatal" />
        <Card
          imgSrc={NewbornIcon}
          theme="3"
          titleText="Newborn - 12 months"
          linkUrl="pregnancy-newborn/newborn" />
      </CardGrid>
    )
  }
}

export default PregnancyNewborn
