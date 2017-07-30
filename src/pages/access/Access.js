import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import HealthSystemIcon from '../../images/icons/access/health-system-overview.png'
import AustralianNormIcon from '../../images/icons/access/australian-norms.png'
import MedicareCentrelinkIcon from '../../images/icons/access/medicare-centrelink.png'
import ResponsibilitiesIcon from '../../images/icons/access/responsibilities.png'
import DisabilityAccessIcon from '../../images/icons/access/disability-access.png'
import PrivatePublicIcon from '../../images/icons/access/private-public.png'

class Access extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: HealthSystemIcon,
          theme: '1',
          titleText: 'Health System Overview',
          linkUrl: '/access/health-system-overview'
        },
        {
          imgSrc: AustralianNormIcon,
          theme: '1',
          titleText: 'Australian norms',
          linkUrl: '/access/australian-norms'
        },
        {
          imgSrc: MedicareCentrelinkIcon,
          theme: '1',
          titleText: 'Medicare and Centrelink',
          linkUrl: '#'
        },
        {
          imgSrc: ResponsibilitiesIcon,
          theme: '1',
          titleText: 'Your Rights and Responsibilities',
          linkUrl: '#'
        },
        {
          imgSrc: DisabilityAccessIcon,
          theme: '1',
          titleText: 'Disability Access',
          linkUrl: '#'
        },
        {
          imgSrc: PrivatePublicIcon,
          theme: '1',
          titleText: 'Private vs. Public Health Services',
          linkUrl: '#'
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

export default Access
