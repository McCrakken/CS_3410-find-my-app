import React, { Component } from "react";

import EventCardContainer from "./containers/EventCard/EventCardContainer";
import Card from './components/Card/Card';
import EventCard from "./components/Card/EventCard/EventCard";
import Nav from './components/Navbar/Navbar'
import Content from './hoc/PageContent'
 
class Reminders extends Component {
  render() {
    return (
      <div>
        <div className='main-content col-sm-8 col-md-9'>
        <h2>Reminders</h2>
        <div>
        <Content>
          <EventCardContainer/>
        </Content>
        </div>
      </div>
      </div>
    );
  }
}
 
export default Reminders;