import React from 'react';

import Accordion from "../../components/Accordion/Accordion";
import AccordionItem from "../../components/Accordion/AccordionItem/AccordionItem";
import NoteCard from "../../components/Card/noteCard/NoteCard";

const MajorLeftPanel = (props) => {
    return (
        <div className={'side-panel col-sm-4 col-md-3'}>
            <NoteCard title={'Major Discovery'} content={""}/>

            <Accordion>
                <AccordionItem title={'Assessments'}>
                    <p>Short assessment (5 - 10 minutes)</p>
                    <p>Medium assessment (20 minutes)</p>
                    <p>Long assessment (30 minutes)</p>
                </AccordionItem>

              <AccordionItem title={'Past Assessments'}>
                <p>Date: ---------<span>   </span><span>Type:----------</span></p>
                <p>Date: ---------<span>   </span><span>Type:----------</span></p>
             </AccordionItem>
            </Accordion>

        </div>
    )
};

export default MajorLeftPanel;

