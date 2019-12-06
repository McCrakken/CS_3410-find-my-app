import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';

import DegreeCardContainer from "./DegreeCard/DegreeCardContainer";
import DegreeCardContainer2 from "./DegreeCard/DegreeCardContainer2";
import DegreeSidePanel from "./DegreeCard/DegreeSidePanel";



class DegreePath extends Component {
  render() {
    return(
      <div className="degree-path">
        <div className="size2" >
          <div>
            <button className="btnSize">Create Plan</button>
          </div>
          <div className="divider"></div>
          <div>
            <button className="btnSize">Explore Plan</button>
          </div>
          <div className="divider"></div>
          <h2>Alternate Paths</h2>
          <DegreeSidePanel/>

          <h3>Tags</h3>
          <h3>Requried <Badge variant="danger">R</Badge></h3>
          <h3>Fall Only <Badge variant="warning">F</Badge></h3>
          <h3>Elective <Badge variant="success">E</Badge></h3>
        </div>

        <div className="size2">
          <h2>Fall - 2019 <Badge variant="danger">R</Badge> <Badge variant="warning">F</Badge> <Badge variant="success">E</Badge></h2>
          <DegreeCardContainer />
          <h4>CS 4400 - <Badge variant="danger">R</Badge> <Badge variant="warning">F</Badge></h4>
          <h4>CS 3410 - <Badge variant="danger">R</Badge></h4>
        </div>

        <div className="size2">
          <h2>Spring - 2020 <Badge variant="danger">R</Badge> <Badge variant="success">E</Badge></h2>
          <DegreeCardContainer2 />
          <h4>CS 4450 - <Badge variant="danger">R</Badge></h4>
          <h4>CS 481R - <Badge variant="success">E</Badge></h4>
        </div>
      </div>
    )
  }
}

export default DegreePath;