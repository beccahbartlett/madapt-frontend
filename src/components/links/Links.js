import React, { Component } from 'react';

  const Link = props => {
    return <a href={props.url}>{props.title}</a>
  }

  const Links = props => {
    return (
      <div>
        {props.links && props.links.map(link => {
          return <div><Link title={link.title} url={link.url}/><br/></div>
        })}
      </div>
    )
}

export default Links


