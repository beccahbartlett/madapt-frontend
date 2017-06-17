import React, { Component } from 'react';
import { Grid, Row, Col } from 'flexbox-react';
import './SubCategory.css'

var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;


class SubCategory extends Component {
  render() {
    return (
      <div>
      SubCategory
      <h1>Contraception</h1>
      <p>Diagrams will accompany written information to make it clearer. These diagrams can be photographs, illustration or medical diagrams.</p>
      <div>Find a clinic</div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Zx8zbTMTncs" frameborder="0" allowfullscreen></iframe>

      <Accordion>
          <Panel header="Collapsible Group Item #1" eventKey="1">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </Panel>
          <Panel header="Collapsible Group Item #2" eventKey="2">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
          </Panel>
          <Panel header="Collapsible Group Item #3" eventKey="3">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. 
          </Panel>
        </Accordion>
      </div>
    )
  }
}
export default SubCategory
