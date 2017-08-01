import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import HealthyRelationshipsIcon from '../../images/icons/sexualhealth/healthy-relationships.png'
import SafeSexIcon from '../../images/icons/sexualhealth/safe-sex.png'
import StisIcon from '../../images/icons/sexualhealth/stis.png'
import SexualityIcon from '../../images/icons/sexualhealth/sexuality.png'

class SexualHealth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: HealthyRelationshipsIcon,
          theme: '4',
          titleText: 'Healthy Relationships',
          linkUrl: '/sexual-health/healthy-relationships'
        },
        {
          imgSrc: SafeSexIcon,
          theme: '4',
          titleText: 'Safe sex',
          linkUrl: '/sexual-health/safe-sex'
        },
        {
          imgSrc: StisIcon,
          theme: '4',
          titleText: "STI's/ HIV",
          linkUrl: '/sexual-health/sti'
        },
        {
          imgSrc: SexualityIcon,
          theme: '4',
          titleText: 'Sexuality',
          linkUrl: '/sexual-health/sexuality'
        }
      ]
    }
  }
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <GridPageContainer cards={this.state.cards} />
    )
  }
}

export default SexualHealth