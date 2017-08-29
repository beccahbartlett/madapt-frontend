import React, { Component } from 'react';
require('./Image.css')

const Image = props => {
  const srcDesktop = props.img.desktop
  const srcMobile = props.img.mobile
  return (
    <div className="image-container">
      <img alt="" className="image-desktop" src={srcDesktop} />
      <img alt="" className="image-mobile" src={srcMobile} />
    </div>
  )
}

export default Image;