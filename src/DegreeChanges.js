import React, { Component } from "react";
import './App.css';
import Logo from './Logo.gif';
import Icon from './changeIcon.png';


import EventCardContainer from "./containers/EventCard/EventCardContainer";
import Card from './components/Card/Card';
import EventCard from "./components/Card/EventCard/EventCard";
import Nav from './components/Navbar/Navbar'
import Content from './hoc/PageContent'
import SidePanel from './hoc/Layout/Side-Panel';

import MyBarChart from './MyBarChart';
import data from './data.json';


class DegreeChanges extends Component {
  render() {
    return (
      <div>
        <div class="flex-container">
          <div class="size1">
            <div>
              <button class="btnSize">Change Degree</button>
            </div>
            <div class="divider"></div>
            <div>
            <button class="btnSize">Set Up Meeting With Councilor</button>
            </div>
            <div class="divider"></div>
            <div class="size1">
              Potential Degrees
              <div class="degreeName">
              <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
              <MyBarChart data={data} />
  
              </div>
              <div class="flip-card-back">
                <h1>Degree Name</h1> 
                <p>Architect  Engineer</p> 
                <p>Degree Details</p>
              </div>
            </div>
          </div>
              </div>
            </div>
          </div>
          <div class="size2">
          <div id="myDIV" class="header">
            <h2 >Degree Updates</h2>
          </div>

          <ul id="myUL">
            <li>
            <img src={Icon} style={{width:70, height: 70, marginTop: 10, marginRight: 10, padding: 3 }}></img>
              <h3>Class Name</h3>
              <p> Hit the gym</p>
             </li>
            <li class="checked">
            <img src={Icon} style={{width:70, height: 70, marginTop: 10, marginRight: 10, padding: 3 }}></img>
              <h3>Class Name</h3>
              <p> Pay bills</p>
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
        <div className='main-content col-sm-8 col-md-9'>

     <div className="PageContent">
    </div>
      </div>
      </div>
     
      
    );
  }
}

 
export default DegreeChanges;
