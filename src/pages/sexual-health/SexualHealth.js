import React, { Component } from 'react';
import CardGrid from '../../components/cardgrid/CardGrid';
import Card from '../../components/card/Card';

import HealthyRelationshipsIcon from '../../images/icons/sexualhealth/healthy-relationships.png'
import SafeSexIcon from '../../images/icons/sexualhealth/safe-sex.png'
import StisIcon from '../../images/icons/sexualhealth/stis.png'
import SexualityIcon from '../../images/icons/sexualhealth/sexuality.png'

class SexualHealth extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc={HealthyRelationshipsIcon}
          titleText="Healthy Relationships"
          linkUrl="/sexual-health/healthy-relationships" />
        <Card
          imgSrc={SafeSexIcon}
          titleText="Safe sex"
          linkUrl="/sexual-health/safe-sex" />
        <Card
          imgSrc={StisIcon}
          titleText="STI's/ HIV"
          linkUrl="#" />
        <Card
          imgSrc={SexualityIcon}
          titleText="Sexuality"
          linkUrl="#" />
      </CardGrid>
    )
  }
}

export default SexualHealth
