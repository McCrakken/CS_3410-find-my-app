import React from 'react';
import Logo from './Logo.gif';

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

const nav = (props) => {
  return (
    <HashRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#"><img src={Logo} style={{width:100, marginTop: -7}}/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/Reminders"><NavLink exact to="/reminders">Reminders</NavLink></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/DegreeChanges"><NavLink exact to="/degreeChanges">Degree Changes</NavLink></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/DegreePath"><NavLink exact to="/degreePath">Degree Path/Plan</NavLink></a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/SignUp"><NavLink exact to="/signUp">Course Sign-Up</NavLink></a>
          </li>
          <li className="nav-item ">
           <a className="nav-link" href="/ClassSchedule"><NavLink exact to="/classSchedule">Class Schedule </NavLink></a>
          </li>
          <li className="nav-item ">
           <a className="nav-link" href="/MajorQuiz"><NavLink exact to="/majorQuiz">Major Quiz </NavLink></a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    </HashRouter>
  )
};

export default nav;