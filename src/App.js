import React from 'react';
import logo from './logo.svg';

import EventCardContainer from "./containers/EventCard/EventCardContainer";
import Card from './components/Card/Card';
import EventCard from "./components/Card/EventCard/EventCard";
import Nav from './components/Navbar/Navbar'
import Content from './hoc/PageContent'

function App() {
  return (
    <div className="">
      <Nav/>
      <Content>
          <EventCardContainer/>
      </Content>
    </div>
  );
}

export default App;
