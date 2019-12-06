import React, { Component } from "react";

import Icon from '../../static/changeIcon.png';
import MyBarChart from './BarCharts/MyBarChart';

class DegreeChanges extends Component {
  render() {
    const data = [
      { "y": 100, "x": "Art" },
      { "y": 112, "x": "Bio." },
      { "y": 230, "x": "Math" },
    ];
    
    return (
      <div className={'degree-changes'}>
        <div className="flex-container">
        <div className="size1">
            <div>
              <button className="btnSize">Change Degree</button>
            </div>
            <div className="divider"></div>
            <div>
              <button className="btnSize">Set Up Meeting With Councilor</button>
            </div>
            <div className="divider"></div>
            <div className="size1">
              Potential Degrees
              <div >
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <MyBarChart data={data} />

                    </div>
                    <div className="flip-card-back">
                      <h1>Degree Name: </h1>
                      <p>Software Engieering</p>
                      <p>Degree Details: development for computers in information technology.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="size2">
            <div id="myDIV" className="header">
              <h2 >Degree Updates</h2>
            </div>

            <ul id="myUL">
              <li>
                <img src={Icon} style={{width:70, height: 70, marginTop: 10, marginRight: 10, padding: 3 }}></img>
                <h3>Class Name</h3>
                <p> Hit the gym</p>
              </li>
              <li className="checked">
                <img src={Icon} style={{width:70, height: 70, marginTop: 10, marginRight: 10, padding: 3 }}></img>
                <h3>Calculus 2</h3>
                <p> No longer requried</p>
              </li>
              <li>
                <img src={Icon} style={{width:70, height: 70, marginTop: 10, marginRight: 10, padding: 3 }}></img>
                <h3>Class Name</h3>
                <p> Meet George</p>
              </li>
              <li>
                <img src={Icon} style={{width:70, height: 70, marginTop: 10, marginRight: 10, padding: 3 }}></img>
                <h3>Class Name</h3>
                <p> Read a book</p>
              </li>
              <li>
                <img src={Icon} style={{width:70, height: 70, marginTop: 10, marginRight: 10, padding: 3 }}></img>
                <h3>Class Name</h3>
                <p>  Organize office</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


export default DegreeChanges;