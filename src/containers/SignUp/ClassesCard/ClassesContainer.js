import React, {Component, Fragment} from 'react';

import PanelCard from "../../../components/Card/PanelCard/PanelCard";
import Notecard from "../../../components/Card/noteCard/NoteCard";
import Modal from "../../../components/Modal/Modal";

class ClassesContainer extends Component {
    state = {
        SubSection: [
            { heading: 'Available Courses',
                Notes: [
                    { title: 'CS 4380', text: 'Advanced High Performance Computer Architecture - Professor Allison - 3 Credits - M W: 10:00 AM - 11:15 AM\n'},
                    { title: 'CS 4470', text: 'Artificial Intelligence - Professor Jensen - 3 Credits - M W: 1:00 PM - 2:15 PM\n'},
                ]},
            { heading: 'Selected Courses',
                Notes: [
                    { title: 'ECE 3710', text: 'Engineering Analysis - Professor Knadler - 3 Credits - M W: 11:00 AM - 12:15 PM\n'},
                    { title: 'CS 2450', text: 'Software Engineering - Professor Ling - 3 Credits - T Th: 10:00 AM - 11:15 AM\n'},
                ]
            }],
        Notes: [
            { title: 'Courses can be found and added by clicking the button below', text: ''},
        ],
    };

    render() {
        const modalBody = (
            <Fragment>
                <div className="form-group">
                    <label htmlFor="title">Note Title</label>
                    <input type="text" className="form-control" id="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Note Content</label>
                    <textarea className="form-control" id="text" />
                </div>
            </Fragment>
        );

        const modalFooter = (
            <Fragment>
                <button type="button" data-dismiss={'modal'} className="btn btn-light">Cancel</button>
                <button type="submit" data-dismiss={'modal'} className="btn btn-primary">Submit</button>
            </Fragment>
        );

        const panelButton = 'New Section';
        const sectionBtn = 'Add Note';
        const addItemBtn = <ion-icon style={{display: 'block', color: '#434c50'}} name="add"></ion-icon>;

        return(
            <Fragment>
                <PanelCard header={'Course Sign-Up'} headerBtn={addItemBtn} headerBtnText={panelButton}>
                    {this.state.SubSection.map((Section) => {
                        return (
                            <PanelCard header={Section.heading} headerBtn={sectionBtn}>
                                {Section.Notes.map((Card) => {
                                    return <Notecard title={Card.title} text={Card.text}/>
                                })}
                            </PanelCard>
                        )
                    })}
                    {this.state.Notes.map((Note) => {
                        return <Notecard title={Note.title} text={Note.text}/>
                    })}
                    <button className={'btn btn-light btn-add'} data-toggle={'modal'} data-target={'#addNoteModal'}>
                        {sectionBtn}
                    </button>
                </PanelCard>
                <Modal title={'Add Class'} id={'addNoteModal'} body={modalBody} footer={modalFooter}/>
            </Fragment>

        )
    }
}

export default ClassesContainer;