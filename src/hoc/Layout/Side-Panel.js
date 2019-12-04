import React from 'react';

import Accordion from "../../components/Accordion/Accordion";
import AccordionItem from "../../components/Accordion/AccordionItem/AccordionItem";
import NoteCard from "../../components/Card/noteCard/NoteCard"
const SidePanel = (props) => {
  return (
    <div className={'side-panel col-sm-4 col-md-3'}>
      <Accordion>
        <AccordionItem title={'First Accordion'} isOpen={true} isDisabled={true}>
          This is the first example accordion element that is going to be used in our application.
        </AccordionItem>
        <AccordionItem title={'Second Accordion'}>
          Here is the second example accordion component we're
        </AccordionItem>
        <AccordionItem title={'Third Accordion'}>
          This is the third card component, and any content that you write in this section is going to be passed as
          props.children down to the actual component itself.
        </AccordionItem>
      </Accordion>
    <NoteCard title={'My Title'} content={'some text'}/>

    </div>
  )
};

export default SidePanel;