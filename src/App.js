import React from 'react';
import logo from './logo.svg';

import EventCardContainer from "./containers/EventCard/EventCardContainer";
import Card from './components/Card/Card';
import EventCard from "./components/Card/EventCard/EventCard";
import Nav from './components/Navbar/Navbar'
import Content from './hoc/PageContent'

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


import DegreeChanges from "./DegreeChanges";
import DegreePath from "./DegreePath";
import Reminders from "./Reminders";
import ClassSchedule from "./ClassSchedule";
import MajorQuiz from "./MajorQuiz";
import SignUp from "./SignUp";


function App() {
  return (
    <HashRouter>
    <div className="">
      <Nav/>
      <Route exact path="/degreeChanges" component={DegreeChanges}/>
      <Route exact path="/degreePath" component={DegreePath}/>
      <Route exact path="/reminders" component={Reminders}/>
      <Route exact path="/classSchedule" component={ClassSchedule}/>
      <Route exact path="/majorQuiz" component={MajorQuiz}/>
      <Route exact path="/signUp" component={SignUp}/>
    </div>
    </HashRouter>
  );
}

export default App;
