import React, { Component } from 'react';
import GridPageContainer from '../../components/grid-page-container/GridPageContainer'
import HealthSystemIcon from '../../images/icons/access/health-system-overview.png'
import AustralianNormIcon from '../../images/icons/access/australian-norms.png'
import MedicareCentrelinkIcon from '../../images/icons/access/medicare-centrelink.png'
import ResponsibilitiesIcon from '../../images/icons/access/responsibilities.png'
import DisabilityAccessIcon from '../../images/icons/access/disability-access.png'
import PrivatePublicIcon from '../../images/icons/access/private-public.png'

class HealthcareAustralia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [
        {
          imgSrc: HealthSystemIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Health System Overview',
            'ar': 'النظام الصحي'
          },
          linkUrl: '/healthcare-australia/health-system-overview'
        },
        {
          imgSrc: AustralianNormIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Australian norms',
            'ar': 'المعايير الاسترالية'
          },
          linkUrl: '/healthcare-australia/australian-norms'
        },
        {
          imgSrc: MedicareCentrelinkIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Medicare and Centrelink',
            'ar': 'مديكير وسنترلنك' 
          },
          linkUrl: '/healthcare-australia/medicare-centrelink'
        },
        {
          imgSrc: ResponsibilitiesIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Your Rights and Responsibilities',
            'ar': 'الحقوق والواجبات' 
          },
          linkUrl: '/healthcare-australia/rights-responsibilities'
        },
        {
          imgSrc: DisabilityAccessIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Disability Access',
            'ar': 'تسجيل الدخول لذوي الاحتياجات الخاصة' 
          },
          linkUrl: '/healthcare-australia/disability'
        },
        {
          imgSrc: PrivatePublicIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Private vs. Public Health Services',
            'ar': 'الخدمات الصحية العامة والخاصة' 
          },
          linkUrl: '/healthcare-australia/private-vs-public'
				},
				{
          imgSrc: PrivatePublicIcon,
          theme: this.props.theme,
          titleText: {
            'en': 'Translating and Interpreting Services',
            'ar': ''
          },
          linkUrl: '/healthcare-australia/translating-interpreting'
        }
      ]
    }
  }
  componentDidMount() {
    this.props.changeStyle(this.props.theme);
  }
  render() {
    return (
      <GridPageContainer cards={this.state.cards}
                         lang={this.props.lang}/>
    )
  }
}

export default HealthcareAustralia
