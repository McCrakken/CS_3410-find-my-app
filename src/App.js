import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/Navbar/Navbar'
import Events from "./containers/Events/Events";
import DegreeChanges from "./containers/DegreeChanges/DegreeChanges";
import DegreePath from "./containers/DegreePath/DegreePath";
import MajorQuiz from "./containers/MajorQuiz/majorQuiz";
import SignUp from "./containers/SignUp/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Schedule from "./containers/Schedule/Schedule";

function App() {
  return (
    <div className="">
      <Nav/>
      <Switch>
        <Route path="/DegreeChanges" component={DegreeChanges}/>
        <Route path="/DegreePath" component={DegreePath}/>
        <Route path="/Events" component={Events}/>
        <Route path="/MajorQuiz" component={MajorQuiz}/>
        <Route path="/Schedule" component={Schedule}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/" component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
