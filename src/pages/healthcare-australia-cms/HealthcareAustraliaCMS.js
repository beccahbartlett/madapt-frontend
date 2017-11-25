import React, { Component } from 'react';
import axios from 'axios';

class HealthcareAustraliaCMS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {

      axios(
        {
          url: 'http://shifra.cholenasmart.com/api/healthcare',
          method: 'get',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': "GET",
            'Access-Control-Allow-Headers': "Content-Type, Authorization, Accept, Origin"
        }
       }
      ).then(res => {
        console.log(res)
              //  this.setState({ data: res.data });
        })
    }

    render() {
      return (
        <p>hello</p>
      )
    }

  }
  
  export default HealthcareAustraliaCMS
  