import React from 'react';

import Accordion from "../../../components/Accordion/Accordion";
import AccordionItem from "../../../components/Accordion/AccordionItem/AccordionItem";
import NoteCard from "../../../components/Card/noteCard/NoteCard"


const DegreeSidePanel = (props) => {
  return (
    <div >
      <Accordion>
        <AccordionItem title={'CS 3320'} className="type" >
        Numerical Software
        </AccordionItem>
        <AccordionItem title={'MATH 1220'}>
        Calculus II
        </AccordionItem>
        <div className="divider"></div>
        <AccordionItem title={'Class Name'}>
        Some Class
        </AccordionItem>
        <AccordionItem title={'Alternate Class Name'}>
        Replaces Some class
        </AccordionItem>
      </Accordion>

    </div>
  )
};

export default DegreeSidePanel;