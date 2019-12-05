import React, { Component } from "react";

import EventCardContainer from "./containers/EventCard/EventCardContainer";
import Card from './components/Card/Card';
import EventCard from "./components/Card/EventCard/EventCard";
import Nav from './components/Navbar/Navbar'
import Content from './hoc/PageContent'
 
class MajorQuiz extends Component {
    render() {
        return (
          <div>
            <h2>Major Quiz Page</h2>
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.</p>
     
            <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
          </div>
        );
      }
    }
 
export default MajorQuiz;