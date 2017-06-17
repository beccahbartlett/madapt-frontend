import React, { Component } from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap'
import './NavSearch.css'

class NavSearch extends Component {
  render() {
    return (
      <div className="nav-search">
        <div className="nav-search-bar">
          <FormGroup>
            <InputGroup>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
        </div>
        <div className="nav-search-buttons">
          <Button>EN</Button>
          <Button>Melbourne CBD</Button>
        </div>
      </div>
    )
  }
}

export default NavSearch