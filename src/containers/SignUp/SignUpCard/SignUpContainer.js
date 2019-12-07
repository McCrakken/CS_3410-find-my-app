import React, {Component, Fragment} from 'react';

import PanelCard from "../../../components/Card/PanelCard/PanelCard";
import Notecard from "../../../components/Card/noteCard/NoteCard";
import Modal from "../../../components/Modal/Modal";

class SignUpContainer extends Component {
    state = {
        SubSection: [
            { heading: 'Planned Courses',
                Notes: [
                    { title: 'CS 3380', text: 'Advanced Javascript Programming - Professor Wagstaff - 3 Credits - T TH: 4:00 PM - 5:15 PM\n'},
                    { title: 'CS 3410', text: 'Human Factors in Software Development - Dr. Anderson - 3 Credits - T TH: 2:30 PM -3:45 PM\n'},
                ]},
            { heading: 'Plan Alternatives',
                Notes: [
                    { title: 'CS 3520', text: 'Database Theory - Professor Jolly - 3 Credits - T TH: 4:00 PM - 5:15 PM\n'},
                    { title: 'CS 3370', text: 'Advanced C++ Programming - Professor Allison - 3 Credits - M W: 4:00 PM - 5:15 PM\n'},
                ]
            }],
        Notes: [
            { title: 'Happy Registering!', text: 'Tip: If you need help choosing classes, you have your adviser help you out!'},
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
                <PanelCard header={'Notes'} headerBtn={addItemBtn} headerBtnText={panelButton}>
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
                <Modal title={'Add Note'} id={'addNoteModal'} body={modalBody} footer={modalFooter}/>
            </Fragment>


        )
    }
}

export default SignUpContainer;

// {/*<PanelCard header={Section.heading} headerBtn={sectionBtn}>*/}
// {/*    {Section.SubSection.map((Card) => {*/}
// {/*        {Section.Notes.map((Card) => {*/}
// {/*            return <Notecard title={Card.title} text={Card.text}/>*/}
// {/*        })}*/}
// {/*        {Section.Notes.map((Card) => {*/}
// {/*            return <Notecard title={Card.title} text={Card.text}/>*/}
// {/*        })}*/}
// {/*    })}*/}
// {/*    {Section.Notes.map((Card) => {*/}
// {/*        return <Notecard title={Card.title} text={Card.text}/>*/}
// {/*    })}*/}
// {/*</PanelCard>*/}