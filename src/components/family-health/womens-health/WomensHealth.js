import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css'
import './WomensHealth.css'

var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;

  const contraceptions = [
    {name: 'PAP Test', info: 'Pap tests – you should have a Pap test every two years. This is an important screening test to pick up signs of irregularities that could lead to cervical cancer if not treated. Cervical cancer is one of the most preventable cancers.Your first Pap test should be within two years of the first time you have sex, once over the age of 20. You should continue to have them every two years until you are 70. Even if you have had the human papillomavirus (HPV) vaccine, you should continue to have regular Pap tests. Note: A renewed National Cervical Screening Program will begin on 1 May 2017. Under this new program, a five-yearly HPV test will replace the current Pap test for cervical screening. Until May 2017, women should continue to have their two-yearly Pap test.'},
    {name: 'STI Screening', info: 'STI screening – if you are under 30 years of age and sexually active, have a urine test for chlamydia each year, as chlamydia can affect your fertility and often has no symptoms. If you have sex with one or more new partners without a condom, it is recommended that you talk to your doctor about checking for other sexually transmissible infections'},
    {name: 'Pregnancy Checkup', info: 'pregnancy check-up – you should have a general check-up before planning a pregnancy to discuss any health risks during pregnancy. Once you are pregnant, regular antenatal checks help monitor your baby’s development, pick up abnormalities and assess your health. Tests include ultrasound scans, urine tests and blood tests.'},
    {name: 'Breast Health Checks', info: 'Women of any age should visit the doctor within a week or so if they notice any breast changes. Women aged between 50 and 74 years who have no personal or family history of breast cancer should have a screening mammogram (breast x-ray) every two years. If you have a personal or family history of breast cancer, your doctor can help you to decide how often you need to be screened.'},
  ]
  function getTabs() {
    return contraceptions.map(item => ({
      tabClassName: 'tab', // Optional 
      panelClassName: 'panel', // Optional 
      title: item.name,
      getContent: () => item.info,
    }));
  }

class WomensHealth extends Component {
  componentDidMount() {
    window.analytics.page();
  }
  render() {
    return (
      <div>
        <h1>Women's health</h1>
        <p>Women should have a general check-up every year./n/n Part of the check-up will involve talking to your doctor about your medical history, your family’s history of disease and your lifestyle choices, such as diet, exercise habits and whether or not you smoke or drink alcohol.\n\n Health checks specific to women include: </p>
        <Tabs items={getTabs()}/>
        <br/>
      </div>
    )
  }
}
export default WomensHealth
