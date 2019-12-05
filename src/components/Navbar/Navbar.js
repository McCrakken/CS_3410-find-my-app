import React from 'react';

const nav = (props) => {
  const toggleDropdown = (dropDownID) => {
    document.getElementById(dropDownID).classList.toggle("show");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Find-My-Major</a>
      <button className="navbar-toggler" type="button"
              onClick={() => toggleDropdown("navbarSupportedContent")}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/DegreePath">Degree Path</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/DegreeChanges">Degree Path</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/Events">Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/MajorQuiz">Degree Path</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Schedule">Schedule</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/SignUp">Degree Path</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#"
               onClick={() => {toggleDropdown('resourceDropdown')}}
               id="navbarDropdown" role="button">
              Resources
            </a>
            <div className="dropdown-menu" id='resourceDropdown' aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Wolverine Track</a>
              <a className="dropdown-item" href="#">Academic Counseling</a>
              <a className="dropdown-item" href="#">Tutoring Labs</a>
              <a className="dropdown-item" href="#">Campus Map</a>
              <a className="dropdown-item" href="#">Clubs</a>
            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
};

export default nav;