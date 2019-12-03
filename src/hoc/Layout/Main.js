import React from 'react';
import Eventcard from "../../components/Card/EventCard/EventCard";
import NoteCard from "../../components/Card/noteCard/NoteCard";

const main = (props) => {
  return (
    <div className='main-content col-sm-8 col-md-9'>
        {/*<h3>Main Content</h3> */}
      <div>
        {props.children}

      </div>
        <Eventcard title={'My Title'} content={'some text'}/>
        <Eventcard title={'My Title'} content={'some text'}/>

    </div>
  )
};

export default main;