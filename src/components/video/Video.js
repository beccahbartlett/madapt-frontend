import React from 'react';
import Iframe from 'react-iframe'
import './Video.css';

const Video = props => {
  return (
    <div>
    {props.url && <div className='intrinsic-container'><Iframe
                    url={props.url}
                    allowFullScreen /></div>}
    </div>
  )
}

export default Video