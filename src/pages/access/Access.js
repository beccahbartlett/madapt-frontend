import React, { Component } from 'react';
import CardGrid from '../../components/cardgrid/CardGrid';
import Card from '../../components/card/Card';

import HealthSystemIcon from '../../images/icons/access/health-system-overview.png'
import AustralianNormIcon from '../../images/icons/access/australian-norms.png'
import MedicareCentrelinkIcon from '../../images/icons/access/medicare-centrelink.png'
import ResponsibilitiesIcon from '../../images/icons/access/responsibilities.png'
import DisabilityAccessIcon from '../../images/icons/access/disability-access.png'
import PrivatePublicIcon from '../../images/icons/access/private-public.png'

class Access extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <CardGrid>
        <Card
          imgSrc={HealthSystemIcon}
          titleText="Health System Overview"
          linkUrl="/access/health-system-overview/" />
        <Card
          imgSrc={AustralianNormIcon}
          titleText="Australian norms"
          linkUrl="/access/australian-norms/" />
        <Card
          imgSrc={MedicareCentrelinkIcon}
          titleText="Medicare and Centrelink"
          linkUrl="#" />
        <Card
          imgSrc={ResponsibilitiesIcon}
          titleText="Your Rights and Responsibilities"
          linkUrl="#" />
        <Card
          imgSrc={DisabilityAccessIcon}
          titleText="Disability Access"
          linkUrl="#" />
        <Card
          imgSrc={PrivatePublicIcon}
          titleText="Private vs. Public Health Services"
          linkUrl="#" />
      </CardGrid>
    )
  }
}

export default Access
