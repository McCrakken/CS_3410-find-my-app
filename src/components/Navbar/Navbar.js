import React from 'react';
import Logo from '../../static/Logo.gif';

import { NavLink } from "react-router-dom";

const nav = (props) => {
  const toggleDropdown = (dropDownID) => {
    document.getElementById(dropDownID).classList.toggle("show");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className={'navbar-brand'} exact to={'/'}><img src={Logo} style={{width:100, marginTop: -7}} alt={'Find My Major'}/></NavLink>
      <button className="navbar-toggler" type="button"
              onClick={() => toggleDropdown("navbarSupportedContent")}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className={'nav-link'} exact to={"/DegreePath"}>Degree Path</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={'nav-link'} exact to={"/DegreeChanges"}>Degree Changes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={'nav-link'} exact to={"/Events"}>Events</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={'nav-link'} exact to={"/MajorQuiz"}>Major Quiz</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={'nav-link'} exact to={"/Schedule"}>Schedule</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={'nav-link'} exact to={"/SignUp"}>Sign-Up</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#"
               onClick={() => {toggleDropdown('resourceDropdown')}}
               id="navbarDropdown" role="button">
              Resources
            </a>
            <div className="dropdown-menu" id='resourceDropdown' aria-labelledby="navbarDropdown">
              <button className="dropdown-item">Wolverine Track</button>
              <button className="dropdown-item">Academic Counseling</button>
              <button className="dropdown-item">Tutoring Labs</button>
              <button className="dropdown-item">Campus Map</button>
              <button className="dropdown-item">Clubs</button>
            </div>
          </li>
        </ul>
        {/*<form className="form-inline my-2 my-lg-0">*/}
        {/*  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
        {/*  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
        {/*</form>*/}
      </div>
    </nav>
  )
};

export default nav;