import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/Navbar/Navbar'
import Events from "./containers/Events/Events";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="">
      <Nav/>
      <Switch>
        <Route path="/Events" component={Events}/>
        <Route path="/" component={Dashboard}/>
      </Switch>
    </div>
  );
}

export default App;
