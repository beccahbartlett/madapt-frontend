import React, { Component } from 'react';
import Iframe from 'react-iframe'
import './Video.css';

  const Video = props => {
    return (
      <div>
      {props.url && <Iframe     
                            url={props.url}
                            width="560px"
                            height="315px"
                            position="relative"
                            allowFullScreen />}
    </div>
    )
}

export default Video


