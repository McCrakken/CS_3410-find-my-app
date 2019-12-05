import React, { Component } from "react";

import EventCardContainer from "./containers/EventCard/EventCardContainer";
import Card from './components/Card/Card';
import EventCard from "./components/Card/EventCard/EventCard";
import Nav from './components/Navbar/Navbar'
import Content from './hoc/PageContent'
import SidePanel from './hoc/Layout/Side-Panel';

 
class DegreeChanges extends Component {
  render() {
    return (
      <div>
        <div className='main-content col-sm-8 col-md-9'>
        <h2>Degree Updates</h2>
    <div className={'side-panel col-sm-4 col-md-3'}>
       <button>Change Deree</button>
        <button>Set Up Meeting With Councilor</button>
    </div>

     <div className="PageContent">
    </div>
        <div>
        <div>
        <Card title="Required Classes">
            <EventCardContainer title="Class Name"/>
        </Card>
        </div>
        </div>
      </div>
      </div>
    );
  }
}
 
export default DegreeChanges;