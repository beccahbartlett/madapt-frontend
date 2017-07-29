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
      <CardGrid type="access">
        <Card
          imgSrc={HealthSystemIcon}
          theme="1"
          titleText="Health System Overview"
          linkUrl="/access/health-system-overview/" />
        <Card
          imgSrc={AustralianNormIcon}
          theme="1"
          titleText="Australian norms"
          linkUrl="/access/australian-norms/" />
        <Card
          imgSrc={MedicareCentrelinkIcon}
          theme="1"
          titleText="Medicare and Centrelink"
          linkUrl="#" />
        <Card
          imgSrc={ResponsibilitiesIcon}
          theme="1"
          titleText="Your Rights and Responsibilities"
          linkUrl="#" />
        <Card
          imgSrc={DisabilityAccessIcon}
          theme="1"
          titleText="Disability Access"
          linkUrl="#" />
        <Card
          imgSrc={PrivatePublicIcon}
          theme="1"
          titleText="Private vs. Public Health Services"
          linkUrl="#" />
      </CardGrid>
    )
  }
}

export default Access
